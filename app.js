"use strict";

// ---------- Константы ----------
const STORE_KEY = "englisheasy.v1";
const CLAUDE_URL = "https://claude.ai/new";
const APP_URL = "https://elnaradr02-pixel.github.io/englisheasy/";
const NEW_WORDS_PER_DAY = 10;
const DAY_GOAL = 5; // сколько заданий из 7 нужно, чтобы день засчитался
const INTERVALS = [0, 1, 3, 7, 14, 30, 60, 120]; // дни для коробок карточек
const DICT_LEN = 10; // фраз в диктанте
const B2_WORDS = 1300; // сколько слов колоды нужно ввести в изучение для B2

// Каждое задание засчитывается только с доказательством, галочки руками нет
const MISSIONS = [
  { id: "words", title: "Карточки", xp: 20, min: 20, desc: "Повторения + новые слова. Часть карточек — напечатать по-английски." },
  { id: "grammar", title: "Грамматика", xp: 25, min: 15, desc: "Новый урок или повторение — 12 заданий с автопроверкой." },
  { id: "listen", title: "Диктант на слух", xp: 15, min: 7, desc: "Послушай 10 фраз и напечатай, что услышала." },
  { id: "read", title: "Чтение", xp: 20, min: 12, desc: "Короткий текст твоего уровня + 5 вопросов на понимание." },
  { id: "series", title: "Серия на английском", xp: 30, min: 30, desc: "С английскими субтитрами. Засчитывается, когда запишешь 3 фразы и пересказ." },
  { id: "talk", title: "Разговор с Claude", xp: 30, min: 20, desc: "15+ минут на английском. Засчитывается, когда вставишь итог от Claude." },
  { id: "report", title: "Отчёт за день", xp: 5, min: 2, desc: "Отправь отчёт строгому коучу." },
];
const MISSION_IDS = MISSIONS.map((m) => m.id);
const ALL_DONE_BONUS = 20;

// Блок, который Claude добавляет в конце разговора, — приложение его читает
const EE_FORMAT = (head) => `At the very end, add this block EXACTLY in this format (plain text, no markdown, no code block), so my learning app can read it:
#EE
${head}
WORDS:
<english word or phrase> — <перевод на русский>
(5 useful words/phrases from our conversation, one per line)
MISTAKES:
<my exact wrong sentence> => <the correct sentence> | <очень короткое объяснение по-русски>
(up to 5 real mistakes I made, one per line; write "none" if there were no mistakes)
#END`;

// ---------- Даты ----------
const pad = (n) => String(n).padStart(2, "0");
const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseDay = (k) => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (k, n) => { const d = parseDay(k); d.setDate(d.getDate() + n); return dayKey(d); };
const diffDays = (a, b) => Math.round((parseDay(b) - parseDay(a)) / 86400000);
const today = () => dayKey();
const fmtDate = (k) => parseDay(k).toLocaleDateString("ru-RU", { day: "numeric", month: "long" });

// ---------- Состояние ----------
function defaultState() {
  return {
    profile: null, // {name, level, pace, goalText, goalDate, startDate}
    xp: 0,
    days: {}, // { 'YYYY-MM-DD': { m: {words:true,...}, reviews, newCards, bonus } }
    cards: {}, // { id: { box, due } } — слова и ошибки
    custom: [], // свои слова [{ id, en, ru, ex }]
    mistakes: [], // [{ id, wrong, right, why, day }]
    newLog: { day: "", count: 0 },
    series: {}, // { id: episodes }
    seriesLog: [], // [{ day, id, phrases, summary }]
    current: null,
    bosses: {}, // { id: { won: day, tries: n, score } }
    freezes: 0,
    frozen: [],
    lastCheck: null,
    lastFreezeAward: null,
    bestStreak: 0,
    tests: [], // [{ day, level }]
    lessons: {}, // { n: { best, passed, hw, draft } }
    reads: {}, // { id: { score, day } }
    scores: [], // [{ day, type, score }] — оценки речи от Claude
    listen: { sessions: 0, acc: 0 }, // средняя точность диктанта
    shadowDays: [],
    lastBackup: null,
    remindTime: "19:00",
    imported: [], // отпечатки уже загруженных итогов Claude — повторно не засчитываются
    seriesDraft: null, // черновик записи серии
  };
}

let S = load();
function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) { /* пусто или недоступно */ }
  return defaultState();
}
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { toast("Не удалось сохранить прогресс"); }
}

function dayRec(k = today()) {
  if (!S.days[k]) S.days[k] = { m: {}, reviews: 0, newCards: 0, bonus: false };
  return S.days[k];
}
const doneCount = (k) => (S.days[k] ? MISSION_IDS.filter((id) => S.days[k].m[id]).length : 0);
const dayCounted = (k) => doneCount(k) >= DAY_GOAL || S.frozen.includes(k);

// ---------- Серия дней и заморозки ----------
function streak() {
  let k = today();
  if (!dayCounted(k)) k = addDays(k, -1);
  let n = 0;
  while (dayCounted(k)) { n++; k = addDays(k, -1); }
  return n;
}

function applyFreezes() {
  const y = addDays(today(), -1);
  if (!S.lastCheck) { S.lastCheck = y; return; }
  let k = addDays(S.lastCheck, 1);
  let saved = false;
  while (diffDays(k, y) >= 0) {
    if (!dayCounted(k) && dayCounted(addDays(k, -1))) {
      // заморозки тратим, только если они закрывают весь пропуск целиком
      const gap = [];
      let j = k;
      while (diffDays(j, y) >= 0 && !dayCounted(j)) { gap.push(j); j = addDays(j, 1); }
      if (gap.length <= S.freezes) { S.freezes -= gap.length; S.frozen.push(...gap); saved = true; }
      k = j; continue;
    }
    k = addDays(k, 1);
  }
  if (saved) toast("🧊 Заморозка спасла твою серию!");
  S.lastCheck = y;
}

function afterMissionChange(k = today()) {
  const rec = dayRec(k);
  const all = MISSIONS.every((m) => rec.m[m.id]);
  if (all && !rec.bonus) { rec.bonus = true; S.xp += ALL_DONE_BONUS; toast(`Все задания! +${ALL_DONE_BONUS} XP бонус`); buzz(); }
  const st = streak();
  if (st > S.bestStreak) S.bestStreak = st;
  if (dayCounted(k) && st > 0 && st % 7 === 0 && S.lastFreezeAward !== k && S.freezes < 2) {
    S.freezes++; S.lastFreezeAward = k;
    toast("🧊 7 дней подряд! Ты получила заморозку серии");
  }
  save();
}

// day — день, когда начато занятие (если закончила после полуночи, засчитываем вчерашнему дню)
function completeMission(id, day) {
  const k = day && diffDays(day, today()) === 1 ? day : today();
  const rec = dayRec(k);
  if (rec.m[id]) return;
  const m = MISSIONS.find((x) => x.id === id);
  const before = dayCounted(k);
  rec.m[id] = true;
  S.xp += m.xp;
  toast(`${m.title}: +${m.xp} XP`);
  if (!before && dayCounted(k)) setTimeout(() => toast("🔥 День засчитан! Серия продолжается"), 1000);
  afterMissionChange(k);
}

// ---------- Уровни ----------
const xpForLevel = (l) => 50 * l * (l - 1);
function levelInfo(xp = S.xp) {
  let l = 1;
  while (xp >= xpForLevel(l + 1)) l++;
  const from = xpForLevel(l), to = xpForLevel(l + 1);
  let rank = RANKS[0];
  for (const r of RANKS) if (l >= r[0]) rank = r;
  return { level: l, pct: Math.round(((xp - from) / (to - from)) * 100), toNext: to - xp, rank: rank[1], rankIcon: rank[2] };
}

// ---------- Утилиты ----------
const plural = (n, one, few, many) => { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 12 || b > 14) ? few : many; };
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const dayIndex = () => Math.floor(parseDay(today()) / 86400000);
const uid = (p) => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const wordCount = (s) => (String(s).match(/[A-Za-z][A-Za-z'’-]*/g) || []).length;
// Детерминированное перемешивание (одни и те же фразы весь день)
function seeded(arr, seed) {
  const a = arr.slice(); let x = seed % 2147483647 || 1;
  for (let i = a.length - 1; i > 0; i--) { x = (x * 48271) % 2147483647; const j = x % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// Сравнение ответов: регистр, апострофы, сокращения (don't = do not) не важны
function normAns(s) {
  return " " + String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[.!?,;:"«»()]+/g, " ")
    .replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "cannot").replace(/\bcan not\b/g, "cannot")
    .replace(/\bshan't\b/g, "shall not").replace(/n't\b/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are")
    .replace(/'ll\b/g, " will").replace(/'ve\b/g, " have").replace(/\s+/g, " ").trim() + " ";
}
const ansMatch = (given, answers) => answers.some((a) => normAns(a) === normAns(given));
function lev(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}
function closeness(a, b) {
  a = normAns(a).trim(); b = normAns(b).trim();
  if (a === b) return 1;
  if (!a || !b) return 0;
  return 1 - lev(a, b) / Math.max(a.length, b.length);
}
// Варианты правильного ответа для карточки: «bored / boring» → оба, скобки убираем
function variants(en) {
  const base = en.replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
  return [base, ...base.split(/\s*\/\s*/)].filter(Boolean);
}
const typeable = (en) => !/[+…]|\.\.\./.test(en) && en.length <= 34;
function verdict(given, targets, ok = 0.86) {
  const best = Math.max(...targets.map((t) => closeness(given, t)));
  return best === 1 ? "exact" : best >= ok ? "almost" : "wrong";
}

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg; el.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add("hidden"), 2400);
}
function buzz() { try { if (navigator.vibrate) navigator.vibrate(30); } catch (e) { /* ignore */ } }

// ---------- Озвучка и распознавание речи ----------
const HAS_TTS = "speechSynthesis" in window;
function speak(text, rate = 0.9) {
  if (!HAS_TTS) return toast("Озвучка недоступна на этом устройстве");
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text).replace(/[—/]/g, ","));
  u.lang = "en-US"; u.rate = rate;
  const vs = speechSynthesis.getVoices();
  const v = vs.find((x) => x.lang === "en-US" && /Samantha|Google US|Ava|Allison|Nicky/i.test(x.name)) || vs.find((x) => x.lang.startsWith("en"));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
// Произнеси фразу: распознаём и сравниваем с эталоном
function pronounce(target, out) {
  if (!SR) return;
  if (HAS_TTS) speechSynthesis.cancel(); // освобождаем звук на iPhone
  const r = new SR();
  r.lang = "en-US"; r.interimResults = false; r.maxAlternatives = 3;
  let done = false;
  if (out) out.textContent = "Слушаю... скажи фразу";
  r.onend = () => { if (!done && out) out.textContent = "Ничего не услышала — нажми 🎤 и скажи фразу погромче"; };
  r.onresult = (e) => {
    done = true;
    const alts = Array.from(e.results[0]).map((x) => x.transcript);
    const best = alts.map((t) => ({ t, c: closeness(t, target) })).sort((a, b) => b.c - a.c)[0];
    const pct = Math.round(best.c * 100);
    if (out) out.innerHTML = `${pct >= 90 ? "Отлично!" : pct >= 70 ? "Почти!" : "Ещё раз"} <span class="muted">· ${pct}% · «${esc(best.t)}»</span>`;
  };
  r.onerror = (e) => {
    done = true;
    if (!out) return;
    const err = e && e.error;
    out.textContent = err === "not-allowed" || err === "service-not-allowed"
      ? "Нет доступа к микрофону или распознаванию речи. На iPhone: Настройки → Siri → включи «Слушать», или открой сайт в Safari."
      : err === "no-speech" ? "Ничего не услышала — попробуй ещё раз" : "Распознавание сейчас недоступно";
  };
  try { r.start(); } catch (e) { if (out) out.textContent = "Микрофон недоступен"; }
}

// Запись голоса для shadowing
function makeRecorder(onStop) {
  let rec = null, chunks = [], t0 = 0, stream = null;
  return {
    get active() { return !!rec && rec.state === "recording"; },
    async start() {
      if (!navigator.mediaDevices || !window.MediaRecorder) { toast("Запись недоступна на этом устройстве"); return false; }
      try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { toast("Разреши доступ к микрофону"); return false; }
      chunks = []; rec = new MediaRecorder(stream);
      rec.ondataavailable = (e) => e.data && e.data.size && chunks.push(e.data);
      rec.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks, { type: rec.mimeType || "audio/mp4" });
        onStop(URL.createObjectURL(blob), (Date.now() - t0) / 1000);
      };
      rec.start(); t0 = Date.now();
      return true;
    },
    stop() { if (rec && rec.state === "recording") rec.stop(); },
  };
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  fallbackCopy(text);
  return Promise.resolve();
}
function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); } catch (e) { /* ignore */ }
  ta.remove();
}
function downloadFile(name, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url; a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { a.remove(); URL.revokeObjectURL(url); }, 10000);
}
const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
// На iPhone (особенно с экрана «Домой») скачивание не работает — сохраняем через «Поделиться» → «Сохранить в Файлы».
// Возвращает true — сохранено, false — отменено, null — неизвестно (обычное скачивание)
function saveFile(name, content, type) {
  if (IS_IOS && navigator.canShare && typeof File !== "undefined") {
    try {
      const file = new File([content], name, { type });
      if (navigator.canShare({ files: [file] })) {
        return navigator.share({ files: [file] }).then(() => true, (e) => (e && e.name === "AbortError" ? false : (downloadFile(name, content, type), null)));
      }
    } catch (e) { /* share недоступен */ }
  }
  downloadFile(name, content, type);
  return Promise.resolve(IS_IOS ? null : true);
}

// ---------- Модальное окно ----------
function openModal(html, onMount) {
  $("#modal-card").innerHTML = html;
  $("#modal").classList.remove("hidden");
  $("#modal-card").scrollTop = 0;
  if (onMount) onMount($("#modal-card"));
}
function closeModal() { $("#modal").classList.add("hidden"); $("#modal-card").innerHTML = ""; if (recorder) recorder.stop(); }
$("#modal").addEventListener("click", (e) => { if (e.target.id === "modal" && S.profile) closeModal(); });
const openClaude = (text) => { copyText(text); window.open(CLAUDE_URL, "_blank"); toast("Скопировано — вставь в Claude"); };

// ---------- Колода ----------
const OLD_THEME_LEVEL = { verbs: "A2", series: "A2", feelings: "A2", travel: "A2", work: "B1", linkers: "B1" };
const cardId = (en) => "w:" + en.toLowerCase().trim();
const LEVELS = ["A2", "B1", "B2"];

// Базовые слова + большой словарь, A2 → B1 → B2, темы внутри уровня чередуются
const DECK = (() => {
  const seen = new Set(), out = [];
  const push = (c) => { const id = cardId(c.en); if (seen.has(id)) return; seen.add(id); out.push({ ...c, id }); };
  WORDS.forEach((w) => push({ en: w[0], ru: w[1], ex: w[2], theme: w[3], level: OLD_THEME_LEVEL[w[3]] || "A2", emoji: "" }));
  (typeof EXTRA_WORDS !== "undefined" ? EXTRA_WORDS : []).forEach(push);
  const ordered = [];
  LEVELS.forEach((lv) => {
    const themes = {};
    out.filter((c) => c.level === lv).forEach((c) => (themes[c.theme] = themes[c.theme] || []).push(c));
    const lists = Object.values(themes);
    for (let r = 0; lists.some((l) => r < l.length); r++) lists.forEach((l) => l[r] && ordered.push(l[r]));
  });
  return ordered;
})();

const mistakeCards = () => S.mistakes.map((m) => ({ id: m.id, kind: "fix", wrong: m.wrong, right: m.right, why: m.why, en: m.right, ru: m.wrong }));
const wordCards = () => DECK.concat(S.custom.map((c) => ({ ...c, theme: "mine", level: "", emoji: "✍️" })));
const pace = () => (S.profile && S.profile.pace) || NEW_WORDS_PER_DAY;
// Умная нагрузка: много повторений — меньше новых слов
function smartPace(due) {
  const p = pace();
  if (due > 150) return 0;
  if (due > 100) return Math.round(p * 0.25);
  if (due > 70) return Math.round(p * 0.5);
  return p;
}

function buildQueue() {
  const t = today();
  if (S.newLog.day !== t) S.newLog = { day: t, count: 0 };
  const words = wordCards(), fixes = mistakeCards();
  const due = words.concat(fixes).filter((c) => S.cards[c.id] && S.cards[c.id].due <= t);
  const newFix = fixes.filter((c) => !S.cards[c.id]).slice(0, 10).map((c) => ({ ...c, isNew: true }));
  const limit = smartPace(due.length);
  const freshLeft = Math.max(0, limit - S.newLog.count);
  const unseen = words.filter((c) => !S.cards[c.id]).sort((a, b) => (b.theme === "mine") - (a.theme === "mine"));
  const fresh = unseen.slice(0, freshLeft).map((c) => ({ ...c, isNew: true }));
  return { queue: shuffle(due.concat(newFix)).concat(fresh), due: due.length, limit, reduced: limit < pace() };
}

function grade(card, g) {
  const t = today();
  const st = S.cards[card.id] || { box: 0, due: t };
  if (card.isNew && !S.cards[card.id] && card.kind !== "fix") { S.newLog.count++; dayRec().newCards = (dayRec().newCards || 0) + 1; }
  if (g === "again") { st.box = 0; st.due = t; }
  else if (g === "hard") { st.box = Math.max(1, st.box); st.due = addDays(t, 1); }
  else { st.box = Math.min(INTERVALS.length - 1, st.box + 1); st.due = addDays(t, INTERVALS[st.box]); }
  S.cards[card.id] = st;
  dayRec().reviews++;
  save();
}

const learnedCount = () => DECK.concat(S.custom).filter((c) => { const s = S.cards[c.id || cardId(c.en)]; return s && s.box >= 3; }).length;
const introducedCount = () => DECK.filter((c) => S.cards[c.id]).length;
const learnedByLevel = () => { const r = { A2: 0, B1: 0, B2: 0 }; DECK.forEach((c) => { const s = S.cards[c.id]; if (s && s.box >= 3 && r[c.level] !== undefined) r[c.level]++; }); return r; };
const deckByLevel = () => { const r = { A2: 0, B1: 0, B2: 0 }; DECK.forEach((c) => { if (r[c.level] !== undefined) r[c.level]++; }); return r; };

function addCustom(en, ru, ex) {
  en = String(en || "").trim(); ru = String(ru || "").trim();
  if (!en || !ru || en.length > 80) return false;
  if (wordCards().some((c) => c.en.toLowerCase() === en.toLowerCase())) return false;
  S.custom.push({ id: uid("c"), en, ru, ex: String(ex || "").trim() });
  return true;
}
function addMistake(wrong, right, why) {
  wrong = String(wrong || "").trim(); right = String(right || "").trim();
  if (!wrong || !right || normAns(wrong) === normAns(right)) return false;
  if (S.mistakes.some((m) => normAns(m.wrong) === normAns(wrong))) return false;
  S.mistakes.push({ id: uid("m:"), wrong, right, why: String(why || "").trim(), day: today() });
  return true;
}
// Строки «english — русский»
function parsePairs(text) {
  return String(text).split("\n").map((l) => l.replace(/^\s*(\d+[.)]\s+|[-•*]\s+)/, "").trim()).filter(Boolean)
    .map((l) => l.split(/\s+[—–-]\s+|\s*[—–]\s*/)).filter((p) => p.length >= 2 && p[0].trim() && p[1].trim())
    .map((p) => ({ en: p[0].trim(), ru: p.slice(1).join(" — ").trim() }));
}

// ---------- Итог от Claude (#EE ... #END) ----------
const EE_TYPES = ["talk", "boss", "hw", "test", "read"];
function parseEEBlock(body) {
  const out = { type: "", score: null, level: "", verdict: "", boss: "", lesson: null, words: [], mistakes: [] };
  let section = null;
  for (const raw of body.split("\n")) {
    // убираем markdown: заголовки, маркеры списков, жирный шрифт
    const line = raw.trim().replace(/^(#{1,6}\s*|[-•*+]\s+|\d+[.)]\s+)+/, "").replace(/[*`]/g, "").trim();
    if (!line) continue;
    if (/<[^>]*>/.test(line)) continue; // шаблон из задания, а не ответ Claude
    const kv = line.match(/^(TYPE|SCORE|LEVEL|VERDICT|BOSS|LESSON)\s*:\s*(.*)$/i);
    if (kv) {
      const key = kv[1].toUpperCase(), val = kv[2].trim();
      if (key === "TYPE") { const v = val.toLowerCase().split(/\s/)[0]; out.type = EE_TYPES.includes(v) ? v : ""; }
      if (key === "SCORE") { const n = parseFloat(val.replace(",", ".")); if (!isNaN(n)) out.score = Math.max(0, Math.min(10, n)); }
      if (key === "LEVEL") out.level = (val.match(/[ABC][12]/i) || [""])[0].toUpperCase();
      if (key === "VERDICT") out.verdict = /\b(try|again|not|undefeated|lose|lost|fail)\b|n't/i.test(val) ? "lose" : /\bdefeated\b/i.test(val) ? "win" : "lose";
      if (key === "BOSS") out.boss = val.toLowerCase().split(/\s/)[0];
      if (key === "LESSON") out.lesson = parseInt(val, 10) || null;
      section = null; continue;
    }
    if (/^WORDS\b[^:]*:?\s*$/i.test(line)) { section = "w"; continue; }
    if (/^MISTAKES\b[^:]*:?\s*$/i.test(line)) { section = "m"; continue; }
    if (/^\(.*\)$/.test(line) || /^none\.?$/i.test(line)) continue;
    if (section === "w") parsePairs(line).forEach((p) => out.words.push(p));
    if (section === "m") {
      const parts = line.replace(/[❌✅]/g, "").split(/\s*(?:=>|→|->)\s*/);
      if (parts.length >= 2) {
        const [right, ...why] = parts.slice(1).join(" ").split(/\s*\|\s*/);
        out.mistakes.push({ wrong: parts[0].trim(), right: right.trim(), why: why.join(" ").trim() });
      }
    }
  }
  out.fp = body.replace(/\s+/g, " ").trim().toLowerCase();
  const real = out.score !== null || out.level || out.verdict || out.words.length || out.mistakes.length;
  return real ? out : null;
}
// Берём последний настоящий блок (шаблоны из заданий пропускаем)
function parseEE(raw) {
  const t = String(raw).replace(/\r/g, "").replace(/```[a-z]*\n?/gi, "");
  const starts = [];
  for (let i = t.indexOf("#EE"); i >= 0; i = t.indexOf("#EE", i + 1)) starts.push(i);
  for (let k = starts.length - 1; k >= 0; k--) {
    let body = t.slice(starts[k] + 3);
    const nx = body.indexOf("#EE"); if (nx >= 0) body = body.slice(0, nx);
    const j = body.indexOf("#END"); if (j >= 0) body = body.slice(0, j);
    const d = parseEEBlock(body);
    if (d) return d;
  }
  return null;
}

function applyEE(d, ctx = {}) {
  const lines = [];
  const type = ctx.type || d.type || "talk";
  const key = [type, ctx.boss || d.boss || "", ctx.lesson || d.lesson || "", d.fp].join("|");
  if (S.imported.includes(key)) return ["Этот итог уже загружен — повторно не засчитывается"];
  S.imported.push(key);
  if (S.imported.length > 300) S.imported.shift();

  let w = 0, m = 0;
  d.words.forEach((p) => addCustom(p.en, p.ru) && w++);
  d.mistakes.forEach((x) => addMistake(x.wrong, x.right, x.why) && m++);
  if (w) lines.push(`➕ ${w} ${plural(w, "слово", "слова", "слов")} в карточки`);
  if (m) lines.push(`✏️ ${m} ${plural(m, "ошибка", "ошибки", "ошибок")} в колоду «Ошибки»`);
  if (d.score !== null && type !== "test") { S.scores.push({ day: today(), type, score: d.score }); lines.push(`📈 Оценка: ${d.score}/10`); }

  if (type === "talk" || type === "read") {
    const id = type;
    if (!dayRec().m[id]) { completeMission(id); lines.push(id === "talk" ? "✅ Разговор засчитан" : "✅ Чтение засчитано"); }
    else lines.push(`${id === "talk" ? "Разговор" : "Чтение"} сегодня уже засчитано — слова и ошибки добавлены`);
  }
  if (type === "boss") {
    const i = BOSSES.findIndex((b) => b.id === (ctx.boss || d.boss));
    if (i < 0) lines.push("⚠️ Не поняла, какой это босс");
    else if (!d.verdict) lines.push("⚠️ Нет вердикта (VERDICT: DEFEATED или TRY AGAIN)");
    else {
      const b = BOSSES[i], r = S.bosses[b.id] || { tries: 0 };
      r.tries = (r.tries || 0) + 1; r.score = d.score;
      const win = d.verdict === "win" && (d.score === null || d.score >= 7);
      if (win && bossState(i) !== "locked") {
        if (!r.won) { r.won = today(); S.xp += 150; lines.push(`🏆 ${b.title} — побеждён! +150 XP`); buzz(); }
        else lines.push(`🏆 ${b.title} — снова победа!`);
      } else {
        const first = r.lastTry !== today();
        if (first) S.xp += 20;
        lines.push(`💪 ${b.title}: пока не побеждён${first ? ". +20 XP за попытку" : ""}`);
      }
      r.lastTry = today();
      S.bosses[b.id] = r;
    }
  }
  if (type === "hw") {
    const n = ctx.lesson || d.lesson;
    const l = COURSE.find((x) => x.n === n);
    if (!l) lines.push("⚠️ Не поняла, к какому уроку ДЗ");
    else {
      const r = lessonRec(n);
      if (!r.hw) { r.hw = today(); S.xp += 30; lines.push(`✍️ ДЗ к уроку ${n} сдано! +30 XP`); }
      else lines.push(`✍️ ДЗ к уроку ${n} уже было сдано`);
    }
  }
  if (type === "test") {
    if (!d.level) lines.push("⚠️ Не нашла уровень (LEVEL: B1)");
    else saveTest(d.level, lines);
  }
  save();
  return lines;
}

function saveTest(level, lines) {
  const first = !S.tests.some((t) => t.day === today());
  S.tests.push({ day: today(), level });
  S.profile.level = level;
  if (first) S.xp += 50;
  if (lines) lines.push(`🧪 Уровень ${level} сохранён${first ? " · +50 XP" : ""}`);
  save();
}

// Окно «Вставить итог от Claude»
function importModal(ctx = {}, title = "Вставить итог от Claude") {
  openModal(`<h2 style="margin-top:0">${esc(title)}</h2>
    <p class="small muted">В конце разговора Claude пишет блок, который начинается с <b>#EE</b>. Скопируй ответ Claude целиком (или только этот блок) и вставь сюда.</p>
    <textarea id="ee-in" placeholder="#EE&#10;TYPE: talk&#10;SCORE: 7&#10;WORDS:&#10;..."></textarea>
    <div class="stack" style="margin-top:10px">
      <button class="btn primary block" id="ee-ok">Загрузить</button>
      <button class="btn block" id="ee-ask">Claude не дал блок? Скопировать просьбу</button>
      <button class="btn ghost block" id="ee-cl">Закрыть</button>
    </div>
    <div id="ee-res"></div>`, (el) => {
    $("#ee-cl", el).onclick = closeModal;
    $("#ee-ask", el).onclick = () => { copyText(`Please give me the summary block for my app now.\n${EE_FORMAT(eeHead(ctx))}`); toast("Скопировано — отправь Claude"); };
    $("#ee-ok", el).onclick = () => {
      const d = parseEE($("#ee-in", el).value);
      if (!d) return ($("#ee-res", el).innerHTML = `<div class="banner bad" style="margin-top:12px">Не нашла блок <b>#EE</b>. Нажми «Скопировать просьбу» и отправь её Claude.</div>`);
      const lines = applyEE(d, ctx);
      $("#ee-res", el).innerHTML = `<div class="banner good" style="margin-top:12px">${lines.map(esc).join("<br>") || "Готово"}</div>`;
      $("#ee-ok", el).disabled = true;
      render();
    };
  });
}
const eeHead = (ctx) => ctx.type === "boss" ? `TYPE: boss\nBOSS: ${ctx.boss}\nVERDICT: <DEFEATED or TRY AGAIN>\nSCORE: <0-10>`
  : ctx.type === "hw" ? `TYPE: hw\nLESSON: ${ctx.lesson}\nSCORE: <0-10>`
  : ctx.type === "test" ? `TYPE: test\nLEVEL: <A1/A2/B1/B2/C1>`
  : ctx.type === "read" ? `TYPE: read\nSCORE: <0-10>` : `TYPE: talk\nSCORE: <0-10>`;

// ---------- Тексты для Claude ----------
const lvl = () => (S.profile && S.profile.level) || "A2";
const nm = () => (S.profile && S.profile.name) || "";

function talkPrompt(topic = TOPICS[dayIndex() % TOPICS.length], extra = "") {
  return `Hi Claude! Please be my English speaking partner and tutor.
About me: my name is ${nm()}, I'm a Russian speaker, my English level is about ${lvl()}. My goal is B2: understand easily and speak freely (travel, work, series).
${extra}
Today's topic: "${topic}"

Rules:
1) Speak ONLY English with me. Use words and sentences for my level, a bit above it.
2) Ask me ONE question at a time and wait for my answer. Be curious and fun, like a friend.
3) After each of my answers, add a short block "✏️ Исправления" in Russian: my mistakes → the correct sentence. If no mistakes, praise me.
4) Sometimes teach me 1 useful phrase that natives really use.
5) If I write in Russian, help me say it in English and ask me to repeat it.
6) After ~12 exchanges (about 15 minutes), finish with a short summary in Russian: my top 3 mistakes and what to practice.

${EE_FORMAT("TYPE: talk\nSCORE: <0-10, honest score for my speaking today>")}

Let's start!`;
}

function bossPrompt(b) {
  return `Hi Claude! Let's play an English role-play game. This is a "BOSS FIGHT" in my English learning game.
About me: Russian speaker, English level about ${lvl()}. Boss level: ${b.level}.

Your role: ${b.role}.
Situation: ${b.scenario}

My goals to win (don't tell me if I've completed them until the end):
${b.goals.map((g, i) => `${i + 1}. ${g}`).join("\n")}

Rules:
- Stay in character and speak ONLY English. Adapt your language to ${b.level} level.
- One line at a time, wait for my reply. Make it realistic and a bit challenging.
- If I get stuck, give me a small hint in brackets.
- Do NOT correct me during the role-play.
- When the scene ends (or after ~15 exchanges), step out of character and give in Russian: my main mistakes with correct versions, which goals I completed, and advice.
- Be honest: DEFEATED only if I completed ALL goals and my score is 7 or higher.

${EE_FORMAT(`TYPE: boss\nBOSS: ${b.id}\nVERDICT: <DEFEATED or TRY AGAIN>\nSCORE: <0-10>`)}

Start the scene now!`;
}

function testPrompt() {
  return `Hi Claude! Please run a 10–15 minute English level test for me (I'm a Russian speaker, I think my level is about ${lvl()}).
- Ask questions one by one, starting easy and getting harder (A1 → C1).
- Mix: questions about me, describing situations, giving opinions, 2–3 grammar/vocabulary questions.
- Don't correct me during the test.
- At the end, give in Russian: my strengths, my weaknesses, what to focus on next month. Be honest and strict.

${EE_FORMAT("TYPE: test\nLEVEL: <A1/A2/B1/B2/C1>\nSCORE: <0-10>")}`;
}

function hwPrompt(l, text) {
  return `Hi Claude! Please check my English homework. Be a strict but kind teacher.
About me: Russian speaker, level about ${lvl()}.
Grammar lesson ${l.n}: "${l.title}" (${l.level}).
Task: ${l.homework}

My text:
"""
${text || "(I will write my text in the next message)"}
"""

Please, in Russian:
1) Show every mistake: ❌ my version → ✅ correct version + a very short reason. Pay special attention to the grammar of this lesson.
2) Rewrite my whole text correctly (in English).
3) Give me 3 extra short exercises on my weak spots and check my answers when I reply.

${EE_FORMAT(`TYPE: hw\nLESSON: ${l.n}\nSCORE: <0-10>`)}`;
}

function retellPrompt(series, summary) {
  return `Hi Claude! I just watched an episode of "${series}" in English (my level is about ${lvl()}). Here is my short retelling:
"""
${summary}
"""
Please, in Russian: correct my mistakes (❌ → ✅ + short reason), show a better version of my retelling in natural English, then ask me 3 questions in English about the episode and chat with me.

${EE_FORMAT("TYPE: talk\nSCORE: <0-10>")}`;
}

function reportText() {
  const k = today();
  const rec = dayRec(k);
  const lines = MISSIONS.filter((m) => m.id !== "report").map((m) => `${rec.m[m.id] ? "✅" : "❌"} ${m.title}`);
  const cur = SERIES.find((s) => s.id === S.current);
  const sl = S.seriesLog.filter((x) => x.day === k).pop();
  const sc = S.scores.filter((x) => x.day === k);
  const goal = S.profile.goalText ? `\nMy goal: ${S.profile.goalText}${S.profile.goalDate ? " (" + S.profile.goalDate + ")" : ""}` : "";
  return `📋 Daily English report — ${fmtDate(k)}
Day ${diffDays(S.profile.startDate, k) + 1} of my challenge, week ${weekNo()} of 24. Streak: ${streak()} 🔥  Level ${levelInfo().level}, ${S.xp} XP
${lines.join("\n")}
Cards reviewed today: ${rec.reviews}, new words: ${rec.newCards || 0}. Words learned in total: ${learnedCount()}. Open mistakes: ${S.mistakes.length}.
Grammar lessons passed: ${passedLessons().length}/${COURSE.length}. Dictation accuracy: ${S.listen.sessions ? Math.round(S.listen.acc) + "%" : "—"}.
Series: ${cur ? cur.title + " (" + (S.series[cur.id] || 0) + " episodes)" : "not chosen"}${sl ? `\nMy retelling today: "${sl.summary}"` : ""}${sc.length ? `\nSpeaking scores today: ${sc.map((x) => x.score).join(", ")}/10` : ""}${goal}

Claude, you are my strict English coach. In Russian: praise me for what I did, scold me (kindly but firmly) for anything I skipped, ${sl ? "correct the mistakes in my retelling, " : ""}and give me ONE small English challenge for tomorrow. Then ask me 2 quick questions in English about my day.`;
}

function promptModal(title, text, opts = {}) {
  openModal(`
    <h2 style="margin-top:0">${esc(title)}</h2>
    <p class="muted small">${opts.steps || "1) Нажми кнопку — задание скопируется и откроется Claude.<br>2) Вставь текст в чат и отправь. На iPhone можно говорить голосом в приложении Claude."}</p>
    <div class="prompt-box">${esc(text)}</div>
    <div class="stack">
      <button class="btn primary block" id="go">Скопировать и открыть Claude</button>
      ${opts.importCtx ? `<button class="btn block" id="imp">📥 Вставить итог от Claude</button>` : ""}
      <button class="btn ghost block" id="cl">Закрыть</button>
    </div>`, (el) => {
    $("#go", el).onclick = () => { openClaude(text); if (opts.after) opts.after(); };
    $("#cl", el).onclick = closeModal;
    const imp = $("#imp", el);
    if (imp) imp.onclick = () => importModal(opts.importCtx);
  });
}

// ---------- План на 24 недели ----------
const PLAN = typeof WEEKS !== "undefined" ? WEEKS : [];
const weekNo = () => Math.min(Math.max(1, Math.floor(diffDays(S.profile.startDate, today()) / 7) + 1), PLAN.length || 24);
const currentWeek = () => PLAN[weekNo() - 1];
// Уровень, до которого идёт материал (диктант, чтение): по плану и по тесту
const weekLevel = () => (weekNo() <= 8 ? "A2" : weekNo() <= 16 ? "B1" : "B2");
const targetLevel = () => { const l = lvl(), a = /^C/.test(l) ? LEVELS.length - 1 : Math.max(0, LEVELS.indexOf(l)), b = LEVELS.indexOf(weekLevel()); return LEVELS[Math.max(a, b)]; };

// ---------- Экраны ----------
let tab = "today";
let wordsSeg = "cards";
let lessonsSeg = "grammar";
let listenSeg = "dict";
let session = null; // карточки
let recorder = null;

function render() {
  document.querySelectorAll(".tabbar button").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  const v = $("#view");
  const views = { today: viewToday, words: viewWords, lessons: viewLessonsTab, listen: viewListen, bosses: viewBosses, progress: viewProgress };
  v.innerHTML = (views[tab] || viewToday)();
  bind(v);
}
function go(t) { tab = t; window.scrollTo(0, 0); render(); }
document.querySelectorAll(".tabbar button").forEach((b) => (b.onclick = () => go(b.dataset.tab)));
const segHtml = (cur, items, attr) => `<div class="seg">${items.map(([id, t]) => `<button ${attr}="${id}" class="${cur === id ? "active" : ""}">${t}</button>`).join("")}</div>`;

// --- Сегодня ---
function missionAction(id) {
  if (id === "words") { wordsSeg = "cards"; go("words"); }
  if (id === "grammar") { lessonsSeg = "grammar"; const nl = nextLesson(); nl && !passedLessons().length ? startLesson(nl.n) : go("lessons"); }
  if (id === "listen") { listenSeg = "dict"; go("listen"); }
  if (id === "read") { lessonsSeg = "reading"; const r = recommendedText(); RV = r ? { id: r.id, answers: {}, checked: false, gl: null, day: today() } : null; go("lessons"); }
  if (id === "series") openSeriesProof();
  if (id === "talk") openTalk();
  if (id === "report") promptModal("Отчёт для строгого коуча", reportText(), { after: () => { completeMission("report"); render(); } });
}

function viewToday() {
  const k = today();
  const rec = dayRec(k);
  const L = levelInfo();
  const st = streak();
  const done = doneCount(k);
  const y = addDays(k, -1);
  let banner = "";
  if (S.profile.startDate <= y && !dayCounted(y) && !dayCounted(k)) banner = `<div class="banner bad">Вчера день не засчитан. Сегодня минимум ${DAY_GOAL} из ${MISSIONS.length} — без отговорок.</div>`;
  else if (dayCounted(k)) banner = `<div class="banner good">День засчитан. ${done < MISSIONS.length ? `Добей все ${MISSIONS.length} — бонус +${ALL_DONE_BONUS} XP.` : "Идеальный день!"}</div>`;
  const needBackup = diffDays(S.profile.startDate, k) >= 3 && (!S.lastBackup || diffDays(S.lastBackup, k) >= 7);
  const backup = needBackup ? `<div class="banner info row between" style="gap:10px"><span>Неделя без резервной копии. Сохрани прогресс в файл.</span><button class="btn sm" data-act="backup-file">Сохранить</button></div>` : "";
  const goal = S.profile.goalDate && diffDays(k, S.profile.goalDate) >= 0 ? `<div class="banner info">🎯 ${esc(S.profile.goalText || "Цель")}: осталось ${diffDays(k, S.profile.goalDate)} дн.</div>` : "";
  const wk = currentWeek();
  const weekHtml = wk ? `<div class="card week-now" data-act="plan" style="cursor:pointer">
      <div class="row between"><span class="pill accent">Неделя ${weekNo()} из ${PLAN.length}</span><span class="small muted">весь план ›</span></div>
      <h3 style="margin-top:8px">${esc(wk.title)}</h3>
      <p class="small">${esc(wk.goal)}</p>
      <p class="small muted" style="margin:0">🗣️ ${esc(wk.speaking)}</p></div>` : "";
  const phc = DECK[(dayIndex() * 7) % DECK.length];
  const q = buildQueue();
  const nl = nextLesson();
  const cur = SERIES.find((s) => s.id === S.current);
  const nextRead = recommendedText();
  const left = MISSIONS.filter((m) => !rec.m[m.id]).reduce((a, m) => a + m.min, 0);

  const sub = {
    words: rec.m.words ? `Повторено: ${rec.reviews}` : `В очереди: ${q.queue.length}${q.reduced ? ` · новых меньше (${q.limit}) — много повторений` : ""}`,
    grammar: nl ? `Следующий: урок ${nl.n}. ${esc(nl.title)}` : "Курс пройден — повторение",
    listen: HAS_TTS ? (S.listen.sessions ? `Средняя точность: ${Math.round(S.listen.acc)}%` : "10 фраз под твой уровень") : "Озвучка недоступна на этом устройстве",
    read: nextRead ? `${nextRead.emoji} ${esc(nextRead.title)} · ${nextRead.level}` : "Библиотека прочитана — текст от Claude",
    series: cur ? `${cur.emoji} ${esc(cur.title)} · серий: ${S.series[cur.id] || 0}` : "Сначала выбери сериал во вкладке «Слух»",
    talk: `Тема: ${esc(TOPICS[dayIndex() % TOPICS.length])}`,
    report: "Вечером, когда всё сделано",
  };
  const btn = { words: "Карточки", grammar: nl ? "Урок" : "Повторение", listen: "Диктант", read: "Читать", series: "Записать серию", talk: "Начать разговор", report: "Отчёт" };
  const missionHtml = MISSIONS.map((m) => {
    const isDone = !!rec.m[m.id];
    return `<div class="card mission ${isDone ? "done" : ""}">
      <span class="check" aria-hidden="true">${isDone ? "✓" : ""}</span>
      <div class="grow">
        <div class="row between"><h3>${m.title}</h3><span class="xp-tag">${isDone ? "готово" : `~${m.min} мин · +${m.xp}`}</span></div>
        <p class="small muted" style="margin:0">${sub[m.id]}</p>
        ${isDone && m.id !== "words" && m.id !== "grammar" && m.id !== "listen" && m.id !== "read" ? "" : `<div class="btns"><button class="btn sm ${isDone ? "" : "primary"}" data-mission="${m.id}">${isDone ? "Ещё" : btn[m.id]}</button></div>`}
      </div></div>`;
  }).join("");
  const nextBoss = BOSSES.find((b) => !S.bosses[b.id] || !S.bosses[b.id].won);

  return `
    <div class="row between" style="margin-bottom:12px">
      <div><p class="muted small" style="margin:0">${fmtDate(k)}</p><h1>Hi, ${esc(nm())}</h1></div>
      <button class="btn sm" data-act="import">📥 Итог Claude</button>
    </div>
    <div class="hero">
      <div class="grid3" style="margin-bottom:14px">
        <div class="stat"><b>${st}</b><span>дней подряд</span></div>
        <div class="stat"><b>${L.level}</b><span>уровень</span></div>
        <div class="stat"><b>${done}/${MISSIONS.length}</b><span>заданий</span></div>
      </div>
      <div class="row between small" style="margin-bottom:6px"><span>${S.xp} XP</span><span class="muted">ещё ${L.toNext} до ур. ${L.level + 1}</span></div>
      <div class="bar"><i style="width:${L.pct}%"></i></div>
      ${S.freezes ? `<p class="small muted" style="margin:10px 0 0">🧊 Заморозок серии: ${S.freezes}</p>` : ""}
    </div>
    ${banner}${backup}${goal}${weekHtml}
    <div class="card flat">
      <div class="row between"><span class="pill accent">Фраза дня</span><button class="speak" style="margin:0" data-speak="${esc(phc.en)}">🔊</button></div>
      <h3 style="margin-top:8px;font-size:20px">${phc.emoji ? esc(phc.emoji) + " " : ""}${esc(phc.en)}</h3>
      <p>${esc(phc.ru)}</p><p class="small muted" style="margin:0"><i>${esc(phc.ex)}</i></p>
    </div>
    <h2>Задания на сегодня</h2>
    <p class="small muted">Минимум ${DAY_GOAL} из ${MISSIONS.length}. ${left ? `Осталось примерно ${left} мин.` : "Всё сделано!"}</p>
    ${missionHtml}
    ${nextBoss ? `<div class="card row" data-act="go-bosses" style="cursor:pointer">
      <div class="emoji">${nextBoss.emoji}</div>
      <div class="grow"><span class="pill red">Босс недели</span><h3 style="margin-top:6px">${esc(nextBoss.title)}</h3><p class="small muted" style="margin:0">+150 XP · раз в неделю</p></div>
      <span>›</span></div>` : ""}`;
}

// --- Разговор ---
function openTalk() {
  const topic = TOPICS[dayIndex() % TOPICS.length];
  const text = talkPrompt(topic);
  openModal(`<h2 style="margin-top:0">Разговор с Claude</h2>
    <p class="small"><b>Тема:</b> ${esc(topic)}</p>
    <div class="card flat small">
      <b>1.</b> Нажми «Начать» — задание скопируется, откроется Claude. Вставь и говори (на iPhone лучше голосом).<br>
      <b>2.</b> Через ~15 минут Claude напишет блок <b>#EE</b> с итогом.<br>
      <b>3.</b> Скопируй его и нажми «Вставить итог» — разговор засчитается, слова уйдут в карточки, ошибки — в «Ошибки».
    </div>
    <div class="stack">
      <button class="btn primary block" id="go">Начать разговор</button>
      <button class="btn block" id="imp">📥 Вставить итог от Claude</button>
      <button class="btn ghost block" id="other">Другая тема</button>
      <button class="btn ghost block" id="cl">Закрыть</button>
    </div>`, (el) => {
    $("#go", el).onclick = () => openClaude(text);
    $("#imp", el).onclick = () => importModal({ type: "talk" });
    $("#other", el).onclick = () => { const t = TOPICS[Math.floor(Math.random() * TOPICS.length)]; openClaude(talkPrompt(t)); };
    $("#cl", el).onclick = closeModal;
  });
}

// --- Серия: доказательство просмотра + shadowing ---
function openSeriesProof() {
  const cur = SERIES.find((s) => s.id === S.current);
  if (!cur) { toast("Сначала выбери сериал"); listenSeg = "series"; return go("listen"); }
  let shadowSec = 0;
  const dr = S.seriesDraft && S.seriesDraft.id === cur.id ? S.seriesDraft : { id: cur.id, phr: "", sum: "" };
  openModal(`<h2 style="margin-top:0">${cur.emoji} ${esc(cur.title)}</h2>
    <p class="small muted">Серия засчитывается, когда ты запишешь минимум 3 фразы и короткий пересказ. Так слова остаются в голове, а не в сериале.</p>
    <label>3+ фразы из серии: english — русский</label>
    <textarea id="sp-phr" placeholder="I'm on it — уже занимаюсь&#10;What's going on? — что происходит?&#10;No way! — да ладно!">${esc(dr.phr)}</textarea>
    <label>Что произошло? 2–3 предложения по-английски</label>
    <textarea id="sp-sum" placeholder="In this episode, ...">${esc(dr.sum)}</textarea>
    <p class="small muted" id="sp-cnt" style="margin:4px 0 0">0 фраз · 0 слов</p>
    <div class="card flat" style="margin-top:12px">
      <h3>🎙 Shadowing — бонус +10 XP</h3>
      <p class="small muted">Включи минуту, где много говорят. Повторяй за героями вслух и запиши себя (от 15 секунд).</p>
      <div class="btns"><button class="btn" id="sp-rec">● Записать</button></div>
      <audio id="sp-audio" controls style="width:100%;margin-top:10px;display:none"></audio>
      <p class="small muted" id="sp-rs" style="margin:6px 0 0"></p>
    </div>
    <div class="stack" style="margin-top:12px">
      <button class="btn primary block" id="sp-save">Сохранить серию</button>
      <button class="btn block" id="sp-claude">Проверить пересказ у Claude</button>
      <button class="btn ghost block" id="sp-cl">Закрыть</button>
    </div>`, (el) => {
    const upd = () => {
      const phr = $("#sp-phr", el).value, sum = $("#sp-sum", el).value;
      S.seriesDraft = { id: cur.id, phr, sum }; save();
      $("#sp-cnt", el).textContent = `${parsePairs(phr).length} фраз (нужно 3) · ${wordCount(sum)} слов (нужно 10)`;
    };
    $("#sp-phr", el).oninput = upd; $("#sp-sum", el).oninput = upd; upd();
    recorder = makeRecorder((url, sec) => {
      shadowSec = sec;
      const a = $("#sp-audio", el); if (!a) return;
      a.src = url; a.style.display = "block";
      $("#sp-rs", el).textContent = sec >= 15 ? `Записано ${Math.round(sec)} сек — бонус засчитается при сохранении` : `Записано ${Math.round(sec)} сек — нужно от 15`;
      $("#sp-rec", el).textContent = "● Перезаписать";
    });
    $("#sp-rec", el).onclick = async () => {
      if (recorder.active) { recorder.stop(); return; }
      if (await recorder.start()) { $("#sp-rec", el).textContent = "■ Остановить"; $("#sp-rs", el).textContent = "Идёт запись..."; }
    };
    $("#sp-claude", el).onclick = () => {
      const sum = $("#sp-sum", el).value.trim();
      if (wordCount(sum) < 10) return toast("Сначала напиши пересказ (10+ слов)");
      openClaude(retellPrompt(cur.title, sum));
    };
    $("#sp-cl", el).onclick = closeModal;
    $("#sp-save", el).onclick = () => {
      const pairs = parsePairs($("#sp-phr", el).value);
      const sum = $("#sp-sum", el).value.trim();
      if (pairs.length < 3) return toast("Нужно минимум 3 фразы в формате «english — русский»");
      if (wordCount(sum) < 10) return toast("Пересказ — минимум 10 английских слов");
      let added = 0; pairs.forEach((p) => addCustom(p.en, p.ru) && added++);
      S.series[cur.id] = (S.series[cur.id] || 0) + 1;
      S.seriesLog.push({ day: today(), id: cur.id, phrases: pairs.length, summary: sum.slice(0, 600) });
      S.seriesDraft = null;
      if (shadowSec >= 15 && !S.shadowDays.includes(today())) { S.shadowDays.push(today()); S.xp += 10; }
      save(); closeModal();
      if (!dayRec().m.series) completeMission("series"); else toast(`Серия сохранена · +${added} в карточки`);
      render();
    };
  });
}

// --- Слова ---
function viewWords() {
  const lb = learnedByLevel(), db = deckByLevel();
  const lvlBars = LEVELS.map((l) => `<div class="grow"><div class="row between small"><b>${l}</b><span class="muted">${lb[l]}/${db[l]}</span></div>
    <div class="bar" style="margin-top:6px"><i style="width:${db[l] ? Math.round((lb[l] / db[l]) * 100) : 0}%"></i></div></div>`).join("");
  const body = wordsSeg === "mistakes" ? viewMistakes() : wordsSeg === "mine" ? viewMine() : viewCards();
  return `<h1>Слова</h1><p class="muted">${learnedCount()} выучено · ${introducedCount()} из ${DECK.length} в изучении · ${pace()} новых в день</p>
    <div class="card row" style="gap:14px">${lvlBars}</div>
    ${segHtml(wordsSeg, [["cards", "Карточки"], ["mistakes", `Ошибки${S.mistakes.length ? " " + S.mistakes.length : ""}`], ["mine", "Мои слова"]], "data-seg")}
    ${body}`;
}

function cardMode(c) {
  if (c.kind === "fix") return "fix";
  const st = S.cards[c.id];
  if (st && st.box >= 2 && Math.random() < 0.5) return typeable(c.en) ? "type" : "recall";
  return "recognize";
}

function viewCards() {
  if (!session) {
    const q = buildQueue();
    if (!q.queue.length) {
      return `<div class="card center flash"><div style="font-size:32px;margin-bottom:8px">✓</div><h3>На сегодня всё</h3>
        <p class="muted">Новые слова появятся завтра. Хочешь больше — добавь свои слова из сериала.</p>
        <button class="btn primary" data-seg="mine">Добавить свои слова</button></div>`;
    }
    const newN = q.queue.filter((c) => c.isNew && c.kind !== "fix").length;
    const fixN = q.queue.filter((c) => c.kind === "fix").length;
    const mins = Math.max(1, Math.round((q.queue.length * 9) / 60));
    return `<div class="card center flash">
      <h3>${q.queue.length} ${plural(q.queue.length, "карточка", "карточки", "карточек")} · ~${mins} мин</h3>
      <p class="muted">${q.due} повторить · ${newN} новых${fixN ? ` · ${fixN} ошибок исправить` : ""}</p>
      ${q.reduced ? `<p class="small muted">Сегодня новых меньше: накопилось много повторений. Так нагрузка не растёт.</p>` : ""}
      <button class="btn primary" data-act="start-cards" style="margin-top:10px">Поехали</button>
    </div>
    <p class="small muted center">Помнишь слово — оно вернётся через 1, 3, 7, 14, 30 дней. Знакомые слова иногда нужно напечатать по-английски — так они переходят в активный запас.</p>`;
  }
  if (session.idx >= session.queue.length) {
    return `<div class="card center flash"><div style="font-size:32px;margin-bottom:8px">✓</div><h3>Сессия завершена</h3>
      <p class="muted">Повторено: ${session.count}</p>
      <button class="btn primary" data-act="end-cards">Готово</button></div>`;
  }
  const c = session.queue[session.idx];
  const mode = c.mode;
  const top = `<div class="row between small muted" style="margin-bottom:8px"><span>${session.idx + 1} / ${session.queue.length}</span>
      <span>${c.level ? `<span class="pill">${c.level}</span>` : ""} ${c.isNew && mode !== "fix" ? '<span class="pill accent">новое</span>' : ""}
      ${mode === "type" || mode === "recall" ? '<span class="pill">по-английски</span>' : ""}${mode === "fix" ? '<span class="pill red">ошибка</span>' : ""}</span></div>
    <div class="bar" style="margin-bottom:12px"><i style="width:${Math.round((session.idx / session.queue.length) * 100)}%"></i></div>`;
  const grades = `<div class="btns"><button class="btn bad" data-grade="again">Забыла</button><button class="btn warn" data-grade="hard">Трудно</button><button class="btn good" data-grade="good">Помню</button></div>`;
  const mic = SR ? `<button class="speak" data-pron="${esc(c.en)}" title="Произнеси">🎤</button>` : "";
  const ex = c.ex ? `<div class="ex">${esc(c.ex)}</div>` : "";

  if (mode === "fix") {
    return `${top}<div class="card flash">
        <p class="small muted" style="margin:0 0 10px">Найди и исправь ошибку</p>
        <div class="front" style="font-size:21px">${esc(c.wrong)}</div>
        ${session.checked ? `<div class="back">${esc(c.right)}</div>${c.why ? `<div class="ex">${esc(c.why)}</div>` : ""}
          <div class="row" style="justify-content:center;gap:8px"><button class="speak" data-speak="${esc(c.right)}">🔊</button>${mic}</div>
          <p class="small" id="pron-out" style="margin:6px 0 0"></p>` : ""}
      </div>
      ${session.checked ? typedResult() : typedInput("Напиши правильное предложение")}`;
  }
  if (mode === "type") {
    return `${top}<div class="card flash">
        ${c.emoji ? `<div class="flash-emoji">${esc(c.emoji)}</div>` : ""}
        <div class="front" style="font-size:23px">${esc(c.ru)}</div>
        ${session.checked ? `<div class="back">${esc(c.en)}</div>${ex}
          <div class="row" style="justify-content:center;gap:8px"><button class="speak" data-speak="${esc(c.en)}">🔊</button>${mic}</div>
          <p class="small" id="pron-out" style="margin:6px 0 0"></p>` : ""}
      </div>
      ${session.checked ? typedResult() : typedInput("Напиши по-английски")}`;
  }
  const reverse = mode === "recall";
  return `${top}<div class="card flash">
      ${c.emoji ? `<div class="flash-emoji">${esc(c.emoji)}</div>` : ""}
      <div class="front">${esc(reverse ? c.ru : c.en)}</div>
      ${THEMES[c.theme] && !reverse ? `<div class="small muted" style="margin-top:6px">${THEMES[c.theme]}</div>` : ""}
      ${session.shown ? `<div class="back">${esc(reverse ? c.en : c.ru)}</div>${ex}` : ""}
      ${(!reverse || session.shown) ? `<div class="row" style="justify-content:center;gap:8px"><button class="speak" data-speak="${esc(c.en)}">🔊</button>${session.shown ? mic : ""}</div>` : ""}
      <p class="small" id="pron-out" style="margin:6px 0 0"></p>
    </div>
    ${session.shown ? grades : `<button class="btn primary block" data-act="show">Показать ответ</button>
      <p class="small muted center" style="margin-top:10px">${reverse ? "Скажи вслух по-английски, потом открой" : "Вспомни перевод, потом открой"}</p>`}`;
}
function typedInput(ph) {
  return `<input type="text" id="c-in" placeholder="${ph}" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(session.typed || "")}">
    <div class="btns" style="margin-top:10px"><button class="btn" data-act="c-skip">Не знаю</button><button class="btn primary" data-act="c-check">Проверить</button></div>`;
}
function typedResult() {
  const v = session.verdict;
  const msg = v === "exact" ? "Верно!" : v === "almost" ? `Почти! Ты написала: «${esc(session.typed)}»` : session.typed ? `Неверно. Ты написала: «${esc(session.typed)}»` : "Запомни правильный вариант";
  const btns = v === "exact" ? `<button class="btn good block" data-grade="good">Дальше</button>`
    : v === "almost" ? `<div class="btns"><button class="btn bad" data-grade="again">Забыла</button><button class="btn warn" data-grade="hard">Засчитать с опечаткой</button></div>`
    : `<button class="btn bad block" data-grade="again">Дальше</button>`;
  return `<div class="banner ${v === "exact" ? "good" : v === "almost" ? "info" : "bad"}">${msg}</div>${btns}`;
}

function viewMistakes() {
  const list = S.mistakes.slice().reverse();
  return `<p class="small muted">Сюда попадают твои ошибки из разговоров, боссов и ДЗ (из блока #EE от Claude). Они повторяются в карточках: нужно написать правильный вариант. Лучший способ перестать ошибаться в одном и том же.</p>
    ${list.length ? `<div class="card">${list.map((m) => `<div class="list-item"><div class="grow">
        <div class="small" style="color:var(--bad)"><s>${esc(m.wrong)}</s></div>
        <div><b>${esc(m.right)}</b></div>${m.why ? `<div class="small muted">${esc(m.why)}</div>` : ""}</div>
        <button class="btn sm ghost" data-delm="${esc(m.id)}">✕</button></div>`).join("")}</div>`
      : `<div class="card center"><p class="muted" style="margin:0">Пока ошибок нет. Поговори с Claude и вставь итог — ошибки появятся здесь.</p></div>`}
    <details class="card"><summary>Добавить ошибку вручную</summary>
      <label>Как я сказала</label><input type="text" id="m-wrong" placeholder="I am agree">
      <label>Как правильно</label><input type="text" id="m-right" placeholder="I agree">
      <label>Почему (необязательно)</label><input type="text" id="m-why" placeholder="agree — глагол, am не нужен">
      <button class="btn primary block" data-act="add-mistake" style="margin-top:12px">Добавить</button>
    </details>`;
}

function viewMine() {
  const mine = S.custom.slice().reverse();
  return `<div class="card">
      <h3>Добавить слово</h3>
      <label>По-английски</label><input type="text" id="w-en" placeholder="plot twist" autocapitalize="off">
      <label>Перевод</label><input type="text" id="w-ru" placeholder="неожиданный поворот">
      <label>Пример (необязательно)</label><input type="text" id="w-ex" placeholder="What a plot twist!">
      <button class="btn primary block" data-act="add-word" style="margin-top:12px">Добавить</button>
    </div>
    <details class="card"><summary>Добавить списком</summary>
      <p class="small muted" style="margin-top:8px">Строки в формате <b>english — русский</b>, по одной на строку.</p>
      <textarea id="w-bulk" placeholder="I'm on it — уже занимаюсь&#10;figure out — разобраться"></textarea>
      <button class="btn primary block" data-act="add-bulk" style="margin-top:10px">Добавить все</button>
    </details>
    <h2>Мои слова (${mine.length})</h2>
    ${mine.length ? `<div class="card">${mine.map((w) => `<div class="list-item">
        <div class="grow"><b>${esc(w.en)}</b><div class="small muted">${esc(w.ru)}</div></div>
        <button class="btn sm ghost" data-speak="${esc(w.en)}">🔊</button>
        <button class="btn sm ghost" data-del="${esc(w.id)}">✕</button></div>`).join("")}</div>`
      : `<p class="muted">Пока пусто. Слова из сериалов и разговоров с Claude попадают сюда автоматически.</p>`}`;
}

// --- Слух: диктант, shadowing, сериалы ---
const DICT_POOL = (() => {
  const seen = new Set(), out = [];
  const add = (text, level, card) => {
    const t = String(text || "").trim();
    if (!t || /[—…]|\.\.\.|^\W/.test(t)) return;
    const n = wordCount(t);
    if (n < 3 || n > 13) return;
    const k = normAns(t);
    if (seen.has(k)) return;
    seen.add(k); out.push({ text: t, level: level || "A2", card });
  };
  DECK.forEach((c) => add(c.ex, c.level, c));
  (typeof LESSONS !== "undefined" ? LESSONS : []).forEach((l) => l.examples.forEach((x) => add(x.en, l.level, null)));
  return out;
})();
let DV = null; // состояние диктанта

function startDictation() {
  const allowed = LEVELS.slice(0, LEVELS.indexOf(targetLevel()) + 1);
  const pool = DICT_POOL.filter((p) => allowed.includes(p.level));
  const known = shuffle(pool.filter((p) => p.card && S.cards[p.card.id]));
  const rest = shuffle(pool.filter((p) => !(p.card && S.cards[p.card.id])));
  const items = known.slice(0, 6).concat(rest).slice(0, DICT_LEN);
  DV = { items: shuffle(items), idx: 0, typed: "", checked: false, accs: [], day: today() };
  render();
  speak(DV.items[0].text);
}
// Сравнение по словам: какие слова услышаны верно (LCS)
function wordDiff(target, given) {
  const tw = normAns(target).trim().split(" "), gw = normAns(given).trim().split(" ").filter(Boolean);
  const raw = target.split(/\s+/);
  const dp = Array.from({ length: tw.length + 1 }, () => new Array(gw.length + 1).fill(0));
  for (let i = tw.length - 1; i >= 0; i--) for (let j = gw.length - 1; j >= 0; j--)
    dp[i][j] = tw[i] === gw[j] || lev(tw[i], gw[j]) <= (tw[i].length > 5 ? 1 : 0) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const ok = new Array(tw.length).fill(false);
  let i = 0, j = 0;
  while (i < tw.length && j < gw.length) {
    if ((tw[i] === gw[j] || lev(tw[i], gw[j]) <= (tw[i].length > 5 ? 1 : 0)) && dp[i][j] === dp[i + 1][j + 1] + 1) { ok[i] = true; i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
  }
  const acc = tw.length ? ok.filter(Boolean).length / tw.length : 0;
  // подсветка по исходным словам (кол-во токенов может отличаться из-за сокращений — тогда без подсветки)
  const html = raw.length === tw.length ? raw.map((w, k) => `<span class="${ok[k] ? "w-ok" : "w-bad"}">${esc(w)}</span>`).join(" ") : esc(target);
  return { acc, html };
}

function viewListen() {
  const seg = segHtml(listenSeg, [["dict", "Диктант"], ["shadow", "Shadowing"], ["series", "Сериалы"]], "data-lseg");
  const body = listenSeg === "shadow" ? viewShadow() : listenSeg === "series" ? viewSeries() : viewDictation();
  return `<h1>Слух</h1><p class="muted">Понимание на слух — главное для B2. Диктант, повторение за носителем и сериалы.</p>${seg}${body}`;
}

function viewDictation() {
  if (!HAS_TTS) return `<div class="card"><p>На этом устройстве нет озвучки. Открой приложение в Safari на iPhone или Mac.</p></div>`;
  if (!DV) {
    return `<div class="card center flash">
      <h3>Диктант · ${DICT_LEN} фраз · ~7 мин</h3>
      <p class="muted">Слушаешь фразу (можно повторять и замедлять) и печатаешь, что услышала. Фразы — из твоих карточек и уроков, уровень до ${targetLevel()}.</p>
      ${S.listen.sessions ? `<p class="small muted">Пройдено диктантов: ${S.listen.sessions} · средняя точность ${Math.round(S.listen.acc)}%</p>` : ""}
      <button class="btn primary" data-act="dict-start" style="margin-top:8px">Начать</button></div>
      <p class="small muted center">Совет: включи звук и не подглядывай в текст — так тренируется именно слух.</p>`;
  }
  if (DV.idx >= DV.items.length) {
    const avg = Math.round((DV.accs.reduce((a, b) => a + b, 0) / DV.accs.length) * 100);
    return `<div class="card center flash"><h3>Диктант завершён</h3>
      <h2 style="margin:6px 0">${avg}%</h2>
      <p class="muted">${avg >= 85 ? "Отличный слух!" : avg >= 60 ? "Хорошо. Ошибки — в мелких словах? Это нормально, они приходят с практикой." : "Слух только разгоняется. Делай диктант каждый день — через 2 недели будет заметно легче."}</p>
      <div class="btns"><button class="btn" data-act="dict-start">Ещё диктант</button><button class="btn primary" data-act="dict-end">Готово</button></div></div>`;
  }
  const it = DV.items[DV.idx];
  let res = "";
  if (DV.checked) {
    const d = wordDiff(it.text, DV.typed);
    res = `<div class="card"><p class="small muted" style="margin:0 0 6px">Правильно · ${Math.round(d.acc * 100)}%</p>
      <p style="font-size:18px;margin:0">${d.html}</p>
      ${it.card ? `<p class="small muted" style="margin:8px 0 0">${it.card.emoji || ""} ${esc(it.card.en)} — ${esc(it.card.ru)}</p>` : ""}</div>
      <button class="btn primary block" data-act="dict-next">${DV.idx + 1 < DV.items.length ? "Дальше" : "Результат"}</button>`;
  }
  return `<div class="row between small muted" style="margin-bottom:8px"><span>Диктант</span><span>${DV.idx + 1} / ${DV.items.length}</span></div>
    <div class="bar" style="margin-bottom:12px"><i style="width:${Math.round((DV.idx / DV.items.length) * 100)}%"></i></div>
    <div class="card center">
      <div class="btns" style="justify-content:center"><button class="btn" data-act="dict-play">▶ Слушать</button><button class="btn" data-act="dict-slow">Медленно</button></div>
    </div>
    ${DV.checked ? res : `<input type="text" id="d-in" placeholder="Напиши, что услышала" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(DV.typed)}">
      <button class="btn primary block" data-act="dict-check" style="margin-top:10px">Проверить</button>`}`;
}

const newSH = () => ({ day: today(), recs: {}, rec: null, active: null });
let SH = newSH();
// записи shadowing живут один день
function curSH() { if (SH.day !== today() && !(SH.rec && SH.rec.active)) SH = newSH(); return SH; }
function shadowPhrases() {
  const allowed = LEVELS.slice(0, LEVELS.indexOf(targetLevel()) + 1);
  return seeded(DICT_POOL.filter((p) => allowed.includes(p.level)), dayIndex()).slice(0, 5);
}
function viewShadow() {
  curSH();
  const list = shadowPhrases();
  const done = Object.keys(SH.recs).length;
  const bonus = S.shadowDays.includes(today());
  return `<p class="small muted">Слушай эталон, повторяй с той же интонацией и записывай себя. Сравни с оригиналом. ${SR ? "Кнопка 🎤 проверит произношение." : ""} 3 записи — бонус +10 XP.</p>
    ${list.map((p, i) => `<div class="card">
      <p style="font-size:17px;font-weight:550;margin:0 0 10px">${esc(p.text)}</p>
      <div class="btns" style="justify-content:flex-start">
        <button class="btn sm" data-shplay="${i}">▶ Эталон</button>
        <button class="btn sm" data-shslow="${i}">Медленно</button>
        <button class="btn sm ${SH.active === i ? "bad" : ""}" data-shrec="${i}">${SH.active === i ? "■ Стоп" : "● Запись"}</button>
        ${SR ? `<button class="btn sm" data-shpron="${i}">🎤</button>` : ""}
      </div>
      ${SH.recs[i] ? `<audio controls src="${SH.recs[i]}" style="width:100%;margin-top:10px"></audio>` : ""}
      <p class="small" id="shp-${i}" style="margin:6px 0 0"></p>
    </div>`).join("")}
    <p class="small muted center">${bonus ? "Бонус за сегодня получен" : `Записано: ${done} из 3 для бонуса`}</p>`;
}

function viewSeries() {
  const cur = SERIES.find((s) => s.id === S.current);
  const totalEp = Object.values(S.series).reduce((a, b) => a + b, 0);
  const groups = [1, 2, 3, 4].map((l) => `<h2>${LEVEL_NAMES[l]}</h2>` + SERIES.filter((s) => s.level === l).map((s) => `
    <div class="card row">
      <div class="emoji">${s.emoji}</div>
      <div class="grow">
        <h3 style="margin:0">${esc(s.title)}</h3>
        <p class="small muted" style="margin:0 0 4px">${esc(s.ru)} · ${esc(s.type)} · ${esc(s.where)}</p>
        <p class="small" style="margin:0">${esc(s.why)}</p>
        ${S.series[s.id] ? `<p class="small muted" style="margin:4px 0 0">Просмотрено: ${S.series[s.id]}</p>` : ""}
      </div>
      ${S.current === s.id ? `<span class="pill good">смотрю</span>` : `<button class="btn sm" data-pick="${s.id}">Смотреть</button>`}
    </div>`).join("")).join("");
  return `<p class="muted small">Всего просмотрено: ${totalEp}</p>
    ${cur ? `<div class="hero"><div class="row"><div class="emoji">${cur.emoji}</div><div class="grow">
      <p class="small muted" style="margin:0">Сейчас смотрю · серий: ${S.series[cur.id] || 0}</p><h3 style="margin:0">${esc(cur.title)}</h3></div></div>
      <button class="btn primary block" data-mission="series" style="margin-top:12px">Посмотрела серию — записать</button></div>` : ""}
    <details class="card" ${cur ? "" : "open"}><summary>Как смотреть, чтобы реально учить</summary><ul>
      <li><b>Начни с мультиков</b> — там говорят чётче. Потом переходи выше.</li>
      <li><b>Субтитры только английские.</b> Если совсем тяжело — сначала сцена с русскими, затем та же с английскими.</li>
      <li><b>Не ставь на паузу на каждом слове.</b> Общий смысл понятен — уже отлично. Выписывай 3–5 фраз за серию.</li>
      <li><b>Shadowing:</b> минута, где много говорят, — повторяй за героем и запиши себя.</li>
      <li><b>На Mac:</b> расширение <b>Language Reactor</b> для Chrome показывает двойные субтитры на Netflix.</li>
      <li><b>Пересматривай любимое.</b> Второй просмотр знакомой серии — лучшая тренировка слуха.</li>
    </ul></details>
    ${groups}`;
}

// --- Уроки: грамматика, чтение, шпаргалки ---
function viewLessonsTab() {
  if (lessonsSeg === "grammar" && LV) return lessonScreen();
  if (lessonsSeg === "reading" && RV) return readerScreen();
  const seg = segHtml(lessonsSeg, [["grammar", "Грамматика"], ["reading", "Чтение"], ["sheets", "Шпаргалки"]], "data-lsn");
  const body = lessonsSeg === "reading" ? viewReading() : lessonsSeg === "sheets" ? viewSheets() : viewLessons();
  return `<h1>Уроки</h1>${seg}${body}`;
}
function viewSheets() {
  return `<p class="muted small">Коротко и без воды. Открывай, когда Claude поправляет одну и ту же ошибку.</p>` +
    GRAMMAR.map((g) => `<details class="card"><summary>${esc(g.title)}</summary><ul>${g.body.map((b) => `<li>${b}</li>`).join("")}</ul></details>`).join("");
}

// --- Грамматика ---
const COURSE = typeof LESSONS !== "undefined" ? LESSONS.slice().sort((a, b) => a.n - b.n) : [];
const EXTRA_EX = typeof LESSON_EXTRA !== "undefined" ? LESSON_EXTRA : {};
const PASS = 70;
const lessonRec = (n) => (S.lessons[n] = S.lessons[n] || { best: 0, passed: null, hw: null, draft: "" });
const isPassed = (n) => !!(S.lessons[n] && S.lessons[n].best >= PASS);
const isOpen = (n) => n === COURSE[0]?.n || isPassed(n - 1) || isPassed(n);
const passedLessons = () => COURSE.filter((l) => isPassed(l.n));
const nextLesson = () => COURSE.find((l) => !isPassed(l.n));
const lessonPool = (l) => l.exercises.concat(EXTRA_EX[l.n] || []);
const orderWords = (ex) => ex.answer[0].replace(/[.?!]+$/, "").split(/\s+/);
let LV = null;

function startLesson(n, stage = "learn") {
  const l = COURSE.find((x) => x.n === n);
  LV = { mode: "lesson", n, stage, items: l.exercises.map((e) => ({ ...e, from: n })), idx: 0, ok: 0, wrong: [], day: today() };
  lessonsSeg = "grammar"; prepItem(); tab = "lessons"; window.scrollTo(0, 0); render();
}
// Доп. практика по одному уроку — свежие задания из расширенного набора
function startExtra(n) {
  const l = COURSE.find((x) => x.n === n);
  const extra = EXTRA_EX[n] || [];
  const items = shuffle(extra.length >= 8 ? extra : lessonPool(l)).slice(0, 12).map((e) => ({ ...e, from: n }));
  LV = { mode: "extra", n, stage: "practice", items, idx: 0, ok: 0, wrong: [], day: today() };
  lessonsSeg = "grammar"; prepItem(); tab = "lessons"; window.scrollTo(0, 0); render();
}
function startReview() {
  const done = passedLessons();
  if (!done.length) return toast("Сначала пройди первый урок");
  const pool = [];
  done.forEach((l, i) => {
    const w = i >= done.length - 3 ? 2 : 1; // последние уроки — чаще
    lessonPool(l).forEach((e) => { for (let k = 0; k < w; k++) pool.push({ ...e, from: l.n }); });
  });
  const seen = new Set(), items = [];
  for (const e of shuffle(pool)) { const key = e.from + e.q; if (!seen.has(key)) { seen.add(key); items.push(e); } if (items.length >= 12) break; }
  LV = { mode: "review", stage: "practice", items, idx: 0, ok: 0, wrong: [], day: today() };
  lessonsSeg = "grammar"; prepItem(); tab = "lessons"; window.scrollTo(0, 0); render();
}
function prepItem() {
  const e = LV.items[LV.idx];
  LV.checked = false; LV.correct = false; LV.picked = null; LV.typed = "";
  if (e && e.type === "order") { LV.pool = shuffle(orderWords(e).map((_, i) => i)); LV.line = []; }
  if (e && e.type === "choice") LV.opts = shuffle(e.options);
}
function checkItem(given) {
  const e = LV.items[LV.idx];
  LV.checked = true;
  LV.correct = ansMatch(given, e.answer);
  if (LV.correct) LV.ok++; else LV.wrong.push({ ...e, given });
  render();
}
function nextItem() {
  LV.idx++;
  if (LV.idx >= LV.items.length) return finishPractice();
  prepItem(); render();
}
function finishPractice() {
  LV.stage = "result";
  LV.pct = Math.round((LV.ok / LV.items.length) * 100);
  if (LV.mode === "lesson") {
    const r = lessonRec(LV.n);
    const firstPass = r.best < PASS && LV.pct >= PASS;
    r.best = Math.max(r.best, LV.pct);
    if (firstPass) { r.passed = today(); S.xp += 40; setTimeout(() => { buzz(); toast("Урок пройден! +40 XP"); }, 300); }
  }
  completeMission("grammar", LV.day);
  save(); window.scrollTo(0, 0); render();
}

function viewLessons() {
  if (!COURSE.length) return `<p class="muted">Уроки загружаются...</p>`;
  const passed = passedLessons().length;
  const nl = nextLesson();
  const groups = LEVELS.map((lv) => {
    const ls = COURSE.filter((l) => l.level === lv);
    if (!ls.length) return "";
    return `<h2>${lv}</h2>` + ls.map((l) => {
      const r = S.lessons[l.n];
      const open = isOpen(l.n), ok = isPassed(l.n);
      return `<div class="card boss ${ok ? "won" : open ? "open" : "locked"}" ${open ? `data-lesson="${l.n}" style="cursor:pointer"` : ""}>
        <div class="node">${open ? l.emoji : "🔒"}</div>
        <div class="grow"><p class="small muted" style="margin:0">Урок ${l.n} · ${l.level}</p><h3 style="margin:0">${esc(l.title)}</h3>
        <p class="small muted" style="margin:0">${ok ? `✓ ${r.best}%` : r && r.best ? `Лучший результат: ${r.best}% (нужно ${PASS}%)` : open ? "Готов к изучению" : "Пройди предыдущий урок"}${r && r.hw ? " · ДЗ сдано" : ok ? " · ДЗ ждёт" : ""}</p></div>
        ${open ? "<span>›</span>" : ""}</div>`;
    }).join("");
  }).join("");
  const extraTotal = Object.values(EXTRA_EX).reduce((a, x) => a + x.length, 0);
  return `<p class="muted">Короткое правило → 12 заданий → письменное ДЗ. Следующий урок открывается при ${PASS}%+.</p>
    <div class="card"><div class="row between small" style="margin-bottom:6px"><span>Пройдено ${passed} из ${COURSE.length}</span><span class="muted">${nl ? nl.level : "B2 ✓"}</span></div>
      <div class="bar"><i style="width:${Math.round((passed / COURSE.length) * 100)}%"></i></div>
      <div class="btns" style="margin-top:12px">${nl ? `<button class="btn primary" data-lesson="${nl.n}">Урок ${nl.n}</button>` : ""}
      <button class="btn" data-act="review" ${passed ? "" : "disabled"}>Повторение</button></div>
      <p class="small muted" style="margin:8px 0 0">${passed ? `Повторение берёт свежие задания из ${COURSE.reduce((a, l) => a + l.exercises.length, 0) + extraTotal} по пройденным темам.` : "Повторение откроется после первого урока."}</p>
    </div>
    <p class="small muted">Темп: 1–2 урока в неделю, повторение в остальные дни. Уже знаешь тему? Сразу реши задания на ${PASS}%+.</p>
    ${groups}`;
}

function lessonScreen() {
  const l = LV.n ? COURSE.find((x) => x.n === LV.n) : null;
  const back = `<button class="btn sm ghost" data-act="l-close" style="margin-bottom:12px">‹ Все уроки</button>`;

  if (LV.stage === "learn") {
    const r = S.lessons[l.n];
    return `${back}
      <div class="hero"><div class="row"><div style="font-size:30px">${l.emoji}</div><div class="grow">
        <p class="small muted" style="margin:0">Урок ${l.n} · ${l.level}</p><h2 style="margin:0">${esc(l.title)}</h2></div></div>
        <p style="margin:12px 0 0">${esc(l.hook)}</p></div>
      <h2>Правило</h2>
      <div class="card"><ul style="padding-left:18px;margin:0">${l.rules.map((x) => `<li style="margin-bottom:8px">${x}</li>`).join("")}</ul></div>
      <h2>Примеры</h2>
      <div class="card">${l.examples.map((x) => `<div class="list-item"><div class="grow"><b>${esc(x.en)}</b><div class="small muted">${esc(x.ru)}</div></div>
        <button class="btn sm ghost" data-speak="${esc(x.en)}">🔊</button></div>`).join("")}</div>
      <div class="banner bad">Типичная ошибка<br><span style="font-weight:500">${esc(l.trap)}</span></div>
      <button class="btn primary block" data-act="l-practice">К заданиям (${l.exercises.length})</button>
      ${isPassed(l.n) && (EXTRA_EX[l.n] || []).length ? `<button class="btn block" data-extra="${l.n}" style="margin-top:8px">Доп. практика — свежие задания</button>` : ""}
      ${r && r.best ? `<p class="small muted center" style="margin-top:8px">Лучший результат: ${r.best}%</p>` : ""}
      ${isPassed(l.n) ? hwBlock(l) : ""}`;
  }

  if (LV.stage === "practice") {
    const e = LV.items[LV.idx];
    const total = LV.items.length;
    const title = LV.mode === "lesson" ? `Урок ${l.n}: ${esc(l.title)}` : LV.mode === "extra" ? `Доп. практика · урок ${l.n}` : "Повторение";
    let body = "";
    if (e.type === "choice") {
      body = `<p class="ex-q">${gapHtml(e.q, `<span class="gap">${LV.checked ? esc(e.answer[0]) : "___"}</span>`)}</p>
        <div class="stack">${LV.opts.map((o) => {
          const cls = !LV.checked ? "" : ansMatch(o, e.answer) ? "good" : o === LV.picked ? "bad" : "";
          return `<button class="btn block ${cls}" data-opt="${esc(o)}" ${LV.checked ? "disabled" : ""} style="${LV.checked ? "opacity:1" : ""}">${esc(o)}</button>`;
        }).join("")}</div>`;
    }
    if (e.type === "input") {
      body = `<p class="ex-q">${gapHtml(e.q, `<input type="text" id="l-in" class="gap-in" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(LV.typed)}" ${LV.checked ? "disabled" : ""}>`)}</p>
        ${!LV.checked ? `<button class="btn primary block" data-act="l-check-in">Проверить</button>` : ""}`;
    }
    if (e.type === "order") {
      const w = orderWords(e);
      body = `<p class="small muted" style="margin:0">Собери предложение:</p><p class="ex-q">${esc(e.q)}</p>
        <div class="order-line">${LV.line.map((i, pos) => `<button class="tile" data-untile="${pos}" ${LV.checked ? "disabled" : ""}>${esc(w[i])}</button>`).join("") || '<span class="small muted">нажимай на слова ниже</span>'}</div>
        <div class="order-pool">${LV.pool.map((i, pos) => `<button class="tile" data-tile="${pos}" ${LV.checked ? "disabled" : ""}>${esc(w[i])}</button>`).join("")}</div>
        ${!LV.checked ? `<button class="btn primary block" data-act="l-check-order" ${LV.pool.length ? "disabled" : ""}>Проверить</button>` : ""}`;
    }
    const fb = LV.checked ? `<div class="banner ${LV.correct ? "good" : "bad"}" style="margin-top:12px">${LV.correct ? "Верно!" : `Правильно: <b>${esc(e.answer[0])}</b>`}
        <br><span style="font-weight:500">${esc(e.explain)}</span></div>
        <button class="btn primary block" data-act="l-next">${LV.idx + 1 < total ? "Дальше" : "Результат"}</button>` : "";
    return `${back}<div class="row between small muted" style="margin-bottom:8px"><span>${title}</span><span style="white-space:nowrap">${LV.idx + 1} / ${total}</span></div>
      <div class="bar" style="margin-bottom:12px"><i style="width:${Math.round((LV.idx / total) * 100)}%"></i></div>
      <div class="card">${body}</div>${fb}`;
  }

  const passed = LV.pct >= PASS;
  const mistakes = LV.wrong.length ? `<h2>Разбор ошибок</h2>` + LV.wrong.map((w) => `<div class="card">
      <p class="small muted" style="margin:0">${esc(w.q)}</p>
      <p style="margin:6px 0 0">Твой ответ: <s>${esc(w.given || "—")}</s></p>
      <p style="margin:0">Правильно: <b>${esc(w.answer[0])}</b></p>
      <p class="small muted" style="margin:4px 0 0">${esc(w.explain)}</p></div>`).join("") : "";
  const nl = nextLesson();
  return `${back}<div class="card center" style="padding:24px">
      <h2 style="margin:6px 0">${LV.ok} из ${LV.items.length} · ${LV.pct}%</h2>
      <p class="muted">${LV.mode !== "lesson" ? "Практика засчитана!" : passed ? "Урок пройден! Следующий урок открыт." : `Нужно ${PASS}%, чтобы пройти. Перечитай правило и попробуй ещё раз.`}</p>
      <div class="btns">${LV.mode === "lesson" ? `<button class="btn" data-act="l-learn">Правило</button><button class="btn" data-act="l-practice">Ещё раз</button>`
        : LV.mode === "extra" ? `<button class="btn" data-extra="${LV.n}">Ещё практика</button>` : `<button class="btn" data-act="review">Ещё повторение</button>`}
      ${LV.mode === "lesson" && passed && nl ? `<button class="btn primary" data-lesson="${nl.n}">Урок ${nl.n}</button>` : ""}</div>
    </div>
    ${l && LV.mode === "lesson" && passed ? hwBlock(l) : ""}
    ${mistakes}`;
}

function gapHtml(q, gap) {
  const parts = String(q).split("___");
  return parts.length > 1 ? esc(parts[0]) + gap + parts.slice(1).map(esc).join("___") : esc(q) + " " + gap;
}

function hwBlock(l) {
  const r = lessonRec(l.n);
  return `<h2>Домашнее задание</h2>
    <div class="card">
      <p>${esc(l.homework)}</p>
      <label>Напиши здесь (сохраняется автоматически)</label>
      <textarea id="hw-text" data-hw="${l.n}" placeholder="Write your text in English...">${esc(r.draft || "")}</textarea>
      <div class="stack" style="margin-top:10px">
        <button class="btn primary block" data-hw-send="${l.n}">Отправить Claude на проверку</button>
        ${r.hw ? `<span class="pill good" style="align-self:center">✓ Сдано ${fmtDate(r.hw)}</span>` : `<button class="btn block" data-hw-imp="${l.n}">📥 Вставить итог проверки (+30 XP)</button>`}
      </div>
      <p class="small muted" style="margin:8px 0 0">Claude исправит ошибки, перепишет текст и даст доп. задания. Его итог (#EE) засчитает ДЗ, а ошибки уйдут в карточки.</p>
    </div>`;
}

// --- Чтение ---
const TEXTS_ALL = typeof TEXTS !== "undefined" ? TEXTS : [];
let RV = null; // { id, answers, checked, gl }
function recommendedText() {
  const allowed = LEVELS.slice(0, LEVELS.indexOf(targetLevel()) + 1);
  const unread = TEXTS_ALL.filter((t) => !S.reads[t.id]);
  const lvlTexts = unread.filter((t) => t.level === targetLevel());
  return lvlTexts[0] || unread.filter((t) => allowed.includes(t.level)).pop() || unread[0] || null;
}
function viewReading() {
  const rec = recommendedText();
  const read = Object.keys(S.reads).length;
  const groups = LEVELS.map((lv) => {
    const ts = TEXTS_ALL.filter((t) => t.level === lv);
    if (!ts.length) return "";
    return `<h2>${lv} · ${ts.length}</h2>` + ts.map((t) => {
      const r = S.reads[t.id];
      return `<div class="card row" data-text="${esc(t.id)}" style="cursor:pointer">
        <div class="emoji">${t.emoji}</div>
        <div class="grow"><h3 style="margin:0">${esc(t.title)}</h3><p class="small muted" style="margin:0">${esc(t.ru)} · ${wordCount(t.text)} слов${r ? ` · ✓ ${r.score}/5` : ""}</p></div>
        <span>›</span></div>`;
    }).join("");
  }).join("");
  return `<p class="muted">Короткие тексты от A2 до B2. Нажми на подчёркнутое слово — увидишь перевод и сможешь добавить его в карточки. Можно слушать текст целиком.</p>
    ${rec ? `<div class="card week-now" data-text="${esc(rec.id)}" style="cursor:pointer"><span class="pill accent">Рекомендую сейчас</span>
      <h3 style="margin-top:8px">${rec.emoji} ${esc(rec.title)}</h3><p class="small muted" style="margin:0">${rec.level} · ${esc(rec.ru)}</p></div>` : ""}
    <div class="card"><div class="row between small"><span>Прочитано ${read} из ${TEXTS_ALL.length}</span></div>
      <div class="bar" style="margin-top:6px"><i style="width:${TEXTS_ALL.length ? Math.round((read / TEXTS_ALL.length) * 100) : 0}%"></i></div>
      <button class="btn block" data-act="read-claude" style="margin-top:12px">Новый текст от Claude на любую тему</button></div>
    ${groups || `<p class="muted">Тексты загружаются...</p>`}`;
}
// Текст с подсвеченными словами из глоссария
function glossHtml(t) {
  const raw = t.text;
  const lower = raw.toLowerCase();
  const ranges = [];
  t.glossary.forEach((g, gi) => {
    const needle = g.en.toLowerCase();
    let from = 0, pos;
    while ((pos = lower.indexOf(needle, from)) >= 0) {
      const before = pos === 0 ? " " : lower[pos - 1], after = lower[pos + needle.length] || " ";
      if (!/[a-z]/.test(before) && !/[a-z]/.test(after)) { ranges.push([pos, pos + needle.length, gi]); break; }
      from = pos + 1;
    }
  });
  ranges.sort((a, b) => a[0] - b[0]);
  let html = "", cur = 0;
  for (const [s, e, gi] of ranges) {
    if (s < cur) continue;
    html += esc(raw.slice(cur, s)) + `<button class="gl" data-gl="${gi}">${esc(raw.slice(s, e))}</button>`;
    cur = e;
  }
  html += esc(raw.slice(cur));
  return html.split(/\n\s*\n/).map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
}
function readerScreen() {
  const t = TEXTS_ALL.find((x) => x.id === RV.id);
  const back = `<button class="btn sm ghost" data-act="r-close" style="margin-bottom:12px">‹ Все тексты</button>`;
  const g = RV.gl !== null && RV.gl !== undefined ? t.glossary[RV.gl] : null;
  const score = RV.checked ? t.questions.filter((q, i) => RV.answers[i] === q.answer).length : 0;
  const qs = t.questions.map((q, i) => `<div class="card">
      <p style="font-weight:550;margin:0 0 10px">${i + 1}. ${esc(q.q)}</p>
      <div class="stack">${q.options.map((o) => {
        const picked = RV.answers[i] === o;
        const cls = RV.checked ? (o === q.answer ? "good" : picked ? "bad" : "") : picked ? "primary" : "";
        return `<button class="btn block ${cls}" data-rq="${i}" data-ro="${esc(o)}" ${RV.checked ? "disabled" : ""} style="text-align:left;justify-content:flex-start;${RV.checked ? "opacity:1" : ""}">${esc(o)}</button>`;
      }).join("")}</div>
      ${RV.checked ? `<p class="small muted" style="margin:8px 0 0">${esc(q.explain)}</p>` : ""}
    </div>`).join("");
  return `${back}
    <div class="row between"><span class="pill">${t.level} · ${wordCount(t.text)} слов</span>
      <div class="btns" style="flex:0;flex-wrap:nowrap"><button class="btn sm" data-act="r-listen">▶ Слушать</button><button class="btn sm" data-act="r-stop">■</button></div></div>
    <h1 style="margin-top:12px">${t.emoji} ${esc(t.title)}</h1>
    <p class="muted">${esc(t.ru)}</p>
    <div class="card reader">${glossHtml(t)}</div>
    ${g ? `<div class="gl-pop card"><div class="row between"><div class="grow"><b>${esc(g.en)}</b><div class="muted">${esc(g.ru)}</div></div>
      <button class="btn sm ghost" data-speak="${esc(g.en)}">🔊</button><button class="btn sm" data-act="r-add">+ в карточки</button><button class="btn sm ghost" data-act="r-glx">✕</button></div></div>` : ""}
    <h2>Вопросы на понимание</h2>
    ${qs}
    ${RV.checked ? `<div class="banner ${score >= 3 ? "good" : "bad"}">${score} из ${t.questions.length}. ${score >= 3 ? "Чтение засчитано!" : "Перечитай текст и попробуй ещё раз — нужно 3 из 5."}</div>
      ${score < 3 ? `<button class="btn block" data-act="r-retry">Ещё раз</button>` : ""}
      <h2>Обсудить с Claude</h2>
      <div class="card"><p style="margin:0 0 10px">${esc(t.discuss)}</p>
        <button class="btn block" data-act="r-discuss">Обсудить (засчитается как разговор)</button></div>`
      : `<button class="btn primary block" data-act="r-check">Проверить ответы</button>`}`;
}
function readClaudePrompt() {
  return `Hi Claude! Write me a short, interesting reading text in English at ${targetLevel()} level (${targetLevel() === "A2" ? "150" : targetLevel() === "B1" ? "250" : "350"} words) about something I'd enjoy (Marvel, Netflix series, travel, psychology, work — surprise me). Then give 5 comprehension questions (a/b/c), wait for my answers and check them. After that, give me 8 useful words from the text.

${EE_FORMAT("TYPE: read\nSCORE: <0-10 for my answers>")}`;
}

// --- Боссы ---
function bossState(i) {
  const b = BOSSES[i];
  if (S.bosses[b.id] && S.bosses[b.id].won) return "won";
  if (i === 0 || (S.bosses[BOSSES[i - 1].id] && S.bosses[BOSSES[i - 1].id].won)) return "open";
  return "locked";
}
function viewBosses() {
  const won = BOSSES.filter((b) => S.bosses[b.id] && S.bosses[b.id].won).length;
  return `<h1>Боссы</h1><p class="muted">Ролевые разговоры с Claude. Claude сам решает, победила ли ты, — по честным целям. Рекомендуем 1 босса в неделю.</p>
    <div class="card"><div class="row between small" style="margin-bottom:6px"><span>Побеждено ${won} из ${BOSSES.length}</span><span class="muted">${BOSSES[Math.min(won, BOSSES.length - 1)].level}</span></div>
    <div class="bar"><i style="width:${Math.round((won / BOSSES.length) * 100)}%"></i></div></div>
    ${BOSSES.map((b, i) => {
      const st = bossState(i);
      const r = S.bosses[b.id] || {};
      return `<div class="card boss ${st}" ${st !== "locked" ? `data-boss="${i}" style="cursor:pointer"` : ""}>
        <div class="node">${st === "locked" ? "🔒" : b.emoji}</div>
        <div class="grow"><p class="small muted" style="margin:0">Глава ${i + 1} · ${b.level}</p><h3 style="margin:0">${esc(b.title)}</h3>
        <p class="small muted" style="margin:0">${st === "won" ? `Побеждён${r.score != null ? ` · ${r.score}/10` : ""}` : st === "open" ? (r.tries ? `Попыток: ${r.tries}${r.score != null ? ` · последняя ${r.score}/10` : ""}` : "Готов к бою") : "Победи предыдущего"}</p></div>
        ${st !== "locked" ? "<span>›</span>" : ""}</div>`;
    }).join("")}`;
}
function openBoss(i) {
  const b = BOSSES[i];
  openModal(`
    <div class="row"><div class="emoji">${b.emoji}</div><div><p class="small muted" style="margin:0">Глава ${i + 1} · ${b.level}</p><h2 style="margin:0">${esc(b.title)}</h2></div></div>
    <p style="margin-top:12px">${esc(b.ru)}</p>
    <h3>Цели для победы</h3><ul>${b.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ul>
    <h3>Полезные фразы</h3>
    <div class="card flat">${b.phrases.map((p) => `<div class="row between" style="padding:4px 0"><span>${esc(p)}</span><button class="btn sm ghost" data-speak="${esc(p)}">🔊</button></div>`).join("")}</div>
    <p class="small muted">В конце Claude выдаст блок #EE с вердиктом. Вставь его — победа засчитается, только если Claude так решил.</p>
    <div class="stack">
      <button class="btn primary block" id="fight">Начать бой</button>
      <button class="btn block" id="imp">📥 Вставить итог боя</button>
      <button class="btn ghost block" id="cl">Закрыть</button>
    </div>`, (el) => {
    bind(el);
    $("#fight", el).onclick = () => openClaude(bossPrompt(b));
    $("#imp", el).onclick = () => importModal({ type: "boss", boss: b.id }, `Итог боя: ${b.title}`);
    $("#cl", el).onclick = closeModal;
  });
}

// --- План ---
const lessonsForWeek = (wk) => COURSE.filter((l) => Math.ceil((l.n * 22) / 32) === wk);
function weekCard(w, now) {
  if (!w) return "";
  const series = (w.series || []).map((id) => SERIES.find((s) => s.id === id)).filter(Boolean);
  const boss = BOSSES.find((b) => b.id === w.boss);
  const ls = lessonsForWeek(w.week);
  return `<div class="card ${now ? "week-now" : ""}" ${now ? 'id="week-now"' : ""}>
    <div class="row between"><span class="pill ${now ? "accent" : ""}">Неделя ${w.week}${now ? " · сейчас" : ""}</span>${boss ? `<span class="pill red">${boss.emoji} босс</span>` : ""}</div>
    <h3 style="margin-top:8px">${esc(w.title)}</h3>
    <p class="small">${esc(w.goal)}</p>
    ${ls.length ? `<p class="small" style="margin:0">📝 Уроки ${ls.map((l) => `${l.n}${isPassed(l.n) ? " ✓" : ""}`).join(", ")}: ${ls.map((l) => esc(l.title)).join(" · ")}</p>` : w.week > 22 ? `<p class="small" style="margin:0">📝 Повторение всех уроков</p>` : ""}
    ${series.length ? `<p class="small" style="margin:0">🍿 ${series.map((s) => s.emoji + " " + esc(s.title)).join(", ")}</p>` : ""}
    ${boss ? `<p class="small" style="margin:0">⚔️ ${esc(boss.title)}</p>` : ""}
    <p class="small" style="margin:0">🗣️ ${esc(w.speaking)}</p>
    <p class="small muted" style="margin:4px 0 0">🏁 ${esc(w.milestone)}</p>
  </div>`;
}
function openPlan() {
  const n = weekNo();
  openModal(`<h2 style="margin-top:0">План на ${PLAN.length} ${plural(PLAN.length, "неделю", "недели", "недель")}</h2>
    <p class="small muted">A2 → B1 примерно к 10–12 неделе, B2 к концу. Каждую неделю: уроки, сериал, босс и контрольная точка.</p>
    ${PLAN.map((w) => weekCard(w, w.week === n)).join("")}
    <button class="btn ghost block" id="cl">Закрыть</button>`, (el) => {
    $("#cl", el).onclick = closeModal;
    const cur = $("#week-now", el);
    if (cur) cur.scrollIntoView({ block: "center" });
  });
}

// --- Прогресс ---
function forecast() {
  const k = today();
  const days = diffDays(S.profile.startDate, k) + 1;
  if (days < 5) return null;
  const win = Math.min(days, 14);
  let nw = 0;
  for (let i = 0; i < win; i++) { const r = S.days[addDays(k, -i)]; if (r) nw += r.newCards || 0; }
  const wRate = nw / win;
  const since = addDays(k, -win + 1);
  const lRate = passedLessons().filter((l) => S.lessons[l.n].passed && S.lessons[l.n].passed >= since).length / win;
  const wordsLeft = Math.max(0, B2_WORDS - introducedCount());
  const lessonsLeft = COURSE.length - passedLessons().length;
  const dW = wordsLeft === 0 ? 0 : wRate > 0 ? wordsLeft / wRate : Infinity;
  const dL = lessonsLeft === 0 ? 0 : lRate > 0 ? lessonsLeft / lRate : Infinity;
  const d = Math.max(dW, dL);
  return { date: isFinite(d) ? addDays(k, Math.ceil(d)) : null, wRate, lRate, dW, dL, plan: addDays(S.profile.startDate, 7 * 24) };
}
function scoreChart() {
  const sc = S.scores.slice(-20);
  if (!sc.length) return `<p class="small muted" style="margin:0">Появится после первого разговора с итогом #EE.</p>`;
  const avg = (sc.reduce((a, s) => a + (Number(s.score) || 0), 0) / sc.length).toFixed(1);
  return `<div class="chart">${sc.map((s) => `<div class="col" title="${esc(fmtDate(s.day) + " · " + s.type + " · " + s.score + "/10")}"><i style="height:${Math.max(0, Math.min(10, Number(s.score) || 0)) * 10}%"></i></div>`).join("")}</div>
    <p class="small muted" style="margin:8px 0 0">Последние ${sc.length} · среднее ${avg}/10</p>`;
}
function viewProgress() {
  const L = levelInfo();
  const k = today();
  const totalDays = Object.keys(S.days).filter((d) => dayCounted(d)).length;
  const totalEp = Object.values(S.series).reduce((a, b) => a + b, 0);
  const bossesWon = BOSSES.filter((b) => S.bosses[b.id] && S.bosses[b.id].won).length;
  const talks = Object.values(S.days).filter((d) => d.m.talk).length;
  const end = parseDay(k);
  const endMon = new Date(end); endMon.setDate(end.getDate() - ((end.getDay() + 6) % 7));
  const start = new Date(endMon); start.setDate(endMon.getDate() - 7 * 11);
  let cells = "";
  for (let i = 0; i < 84; i++) {
    const d = new Date(start); d.setDate(start.getDate() + i);
    const dk = dayKey(d);
    if (dk > k) { cells += `<i style="opacity:.25"></i>`; continue; }
    const n = doneCount(dk);
    const cls = S.frozen.includes(dk) ? "fz" : n >= MISSIONS.length ? "l3" : n >= DAY_GOAL ? "l2" : n > 0 ? "l1" : "";
    cells += `<i class="${cls} ${dk === k ? "today" : ""}" title="${dk}: ${n}/${MISSIONS.length}"></i>`;
  }
  const lastTest = S.tests[S.tests.length - 1];
  const nextTestIn = lastTest ? 30 - diffDays(lastTest.day, k) : 0;
  const f = forecast();
  const fc = !f ? `<p class="small muted" style="margin:0">Прогноз появится через несколько дней занятий.</p>`
    : `<p style="margin:0 0 6px">${f.date ? `При текущем темпе материал B2 будет пройден примерно <b>${fmtDate(f.date)}</b>` : "Пока темп слишком низкий для прогноза"}</p>
      <p class="small muted" style="margin:0">По плану — ${fmtDate(f.plan)}. Сейчас: ${f.wRate.toFixed(1)} новых слов в день, ${(f.lRate * 7).toFixed(1)} урока в неделю. Нужно: ${B2_WORDS} слов в изучении и ${COURSE.length} уроков. Реальный уровень покажет тест.</p>`;

  return `<h1>Прогресс</h1>
    <div class="hero">
      <div class="row"><div style="font-size:30px">${L.rankIcon}</div><div class="grow"><p class="small muted" style="margin:0">Уровень ${L.level}</p><h2 style="margin:0">${L.rank}</h2></div></div>
      <div class="row between small" style="margin:12px 0 6px"><span>${S.xp} XP</span><span class="muted">до следующего: ${L.toNext}</span></div>
      <div class="bar"><i style="width:${L.pct}%"></i></div>
    </div>
    <h2>Прогноз до B2</h2>
    <div class="card">${fc}</div>
    <div class="grid2">
      <div class="stat"><b>${streak()}</b><span>серия (рекорд ${S.bestStreak})</span></div>
      <div class="stat"><b>${totalDays}</b><span>дней засчитано</span></div>
      <div class="stat"><b>${learnedCount()}</b><span>слов выучено</span></div>
      <div class="stat"><b>${passedLessons().length}/${COURSE.length}</b><span>уроков</span></div>
      <div class="stat"><b>${S.listen.sessions ? Math.round(S.listen.acc) + "%" : "—"}</b><span>точность диктанта</span></div>
      <div class="stat"><b>${Object.keys(S.reads).length}</b><span>текстов прочитано</span></div>
      <div class="stat"><b>${totalEp}</b><span>серий просмотрено</span></div>
      <div class="stat"><b>${talks}</b><span>разговоров</span></div>
      <div class="stat"><b>${bossesWon}/${BOSSES.length}</b><span>боссов</span></div>
      <div class="stat"><b>${S.mistakes.length}</b><span>ошибок в работе</span></div>
    </div>
    <h2>Оценки речи от Claude</h2>
    <div class="card">${scoreChart()}</div>
    <h2>Последние 12 недель</h2>
    <div class="card"><div class="heat">${cells}</div>
      <p class="small muted" style="margin:10px 0 0">Ярче — больше заданий. Голубой — заморозка.</p></div>
    ${PLAN.length ? `<h2>План</h2>${weekCard(currentWeek(), true).replace('id="week-now"', "")}
    <button class="btn block" data-act="plan" style="margin-bottom:12px">Открыть весь план на ${PLAN.length} ${plural(PLAN.length, "неделю", "недели", "недель")}</button>` : ""}
    <h2>Тест уровня</h2>
    <div class="card">
      <p>Текущий уровень: <b>${esc(lvl())}</b>${lastTest ? ` <span class="muted small">(тест ${fmtDate(lastTest.day)})</span>` : ""}</p>
      <p class="small muted">Раз в месяц Claude проверяет уровень. ${lastTest ? (nextTestIn > 0 ? `Следующий тест через ${nextTestIn} дн.` : "Пора пройти тест!") : "Пройди первый тест, чтобы знать стартовую точку."}</p>
      <div class="btns"><button class="btn primary" data-act="test">Пройти тест</button><button class="btn" data-act="test-imp">📥 Итог теста</button></div>
      ${S.tests.length ? `<p class="small muted" style="margin-top:10px">История: ${S.tests.map((t) => `${t.level} (${fmtDate(t.day)})`).join(" → ")}</p>` : ""}
    </div>
    <h2>Напоминание</h2>
    <div class="card">
      <p class="small muted">Добавь ежедневное событие в Календарь iPhone — он будет напоминать о занятии каждый день.</p>
      <div class="row"><select id="rem-time" style="flex:1">${REMIND_TIMES.map((t) => `<option ${t === S.remindTime ? "selected" : ""}>${t}</option>`).join("")}</select><button class="btn primary" data-act="remind">Добавить в Календарь</button></div>
    </div>
    <h2>Настройки</h2>
    <div class="card">
      <label>Имя</label><input type="text" id="p-name" value="${esc(nm())}">
      <label>Уровень</label><select id="p-level">${["A1", "A2", "B1", "B2", "C1", "C2"].map((l) => `<option ${l === lvl() ? "selected" : ""}>${l}</option>`).join("")}</select>
      <label>Темп — новых слов в день</label><select id="p-pace">${paceOptions(pace())}</select>
      <label>Моя цель (например, поездка)</label><input type="text" id="p-goal" value="${esc(S.profile.goalText || "")}" placeholder="Поездка в Лондон">
      <label>Дата цели</label><input type="date" id="p-date" value="${esc(S.profile.goalDate || "")}">
      <button class="btn primary block" data-act="save-profile" style="margin-top:12px">Сохранить</button>
    </div>
    <div class="card">
      <h3>Резервная копия</h3>
      <p class="small muted">Прогресс хранится на этом устройстве. Сохраняй файл раз в неделю (на iPhone — в «Файлы»). Через файл или код можно перенести прогресс на другое устройство.${S.lastBackup ? ` Последняя копия: ${fmtDate(S.lastBackup)}.` : ""}</p>
      <div class="btns"><button class="btn" data-act="backup-file">Сохранить файл</button><button class="btn" data-act="restore-file">Загрузить файл</button></div>
      <div class="btns" style="margin-top:8px"><button class="btn ghost" data-act="export">Скопировать код</button><button class="btn ghost" data-act="import-code">Вставить код</button></div>
      <input type="file" id="restore-input" accept=".json,application/json" style="display:none">
    </div>
    <div class="card">
      <h3>Установить как приложение</h3>
      <p class="small"><b>iPhone:</b> Safari → «Поделиться» → «На экран „Домой“».</p>
      <p class="small" style="margin:0"><b>Mac:</b> Safari → «Файл» → «Добавить в Dock».</p>
    </div>
    <button class="btn ghost block" data-act="reset" style="color:var(--bad)">Сбросить весь прогресс</button>
    <p class="small muted center" style="margin-top:16px">EnglishEasy</p>`;
}

// Время напоминаний: файлы ics/remind-HHMM.ics лежат на сайте
const REMIND_TIMES = (() => { const out = []; for (let h = 6; h <= 23; h++) for (const m of ["00", "30"]) out.push(`${pad(h)}:${m}`); return out; })();
function reminderICS(time) {
  const [h, m] = (time || "19:00").split(":");
  const d = today().replace(/-/g, "");
  const stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//EnglishEasy//RU", "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
    `UID:englisheasy-daily-${d}${h}${m}@englisheasy`, `DTSTAMP:${stamp}`, `DTSTART:${d}T${h}${m}00`, "DURATION:PT1H30M", "RRULE:FREQ=DAILY",
    "SUMMARY:English — EnglishEasy", `DESCRIPTION:Карточки\\, урок\\, диктант\\, чтение\\, серия\\, разговор\\, отчёт. ${APP_URL}`, `URL:${APP_URL}`,
    "BEGIN:VALARM", "TRIGGER:PT0M", "ACTION:DISPLAY", "DESCRIPTION:Время английского!", "END:VALARM",
    "END:VEVENT", "END:VCALENDAR"].join("\r\n");
}

// ---------- Обработчики ----------
function bind(root) {
  root.querySelectorAll("[data-speak]").forEach((b) => (b.onclick = (e) => { e.stopPropagation(); speak(b.dataset.speak); }));
  root.querySelectorAll("[data-pron]").forEach((b) => (b.onclick = (e) => { e.stopPropagation(); pronounce(b.dataset.pron, $("#pron-out")); }));
  root.querySelectorAll("[data-mission]").forEach((b) => (b.onclick = (e) => { e.stopPropagation(); missionAction(b.dataset.mission); }));
  root.querySelectorAll("[data-seg]").forEach((b) => (b.onclick = () => { wordsSeg = b.dataset.seg; tab = "words"; render(); }));
  root.querySelectorAll("[data-lseg]").forEach((b) => (b.onclick = () => { listenSeg = b.dataset.lseg; render(); }));
  root.querySelectorAll("[data-lsn]").forEach((b) => (b.onclick = () => { lessonsSeg = b.dataset.lsn; render(); }));
  root.querySelectorAll("[data-grade]").forEach((b) => (b.onclick = () => gradeCurrent(b.dataset.grade)));
  root.querySelectorAll("[data-pick]").forEach((b) => (b.onclick = () => { S.current = b.dataset.pick; save(); toast("Отличный выбор!"); render(); }));
  root.querySelectorAll("[data-boss]").forEach((b) => (b.onclick = () => openBoss(Number(b.dataset.boss))));
  root.querySelectorAll("[data-del]").forEach((b) => (b.onclick = () => {
    if (!confirm("Удалить слово?")) return;
    S.custom = S.custom.filter((w) => w.id !== b.dataset.del); delete S.cards[b.dataset.del]; save(); render();
  }));
  root.querySelectorAll("[data-delm]").forEach((b) => (b.onclick = () => {
    if (!confirm("Убрать эту ошибку из колоды?")) return;
    S.mistakes = S.mistakes.filter((m) => m.id !== b.dataset.delm); delete S.cards[b.dataset.delm]; save(); render();
  }));
  root.querySelectorAll("[data-text]").forEach((b) => (b.onclick = () => { RV = { id: b.dataset.text, answers: {}, checked: false, gl: null, day: today() }; window.scrollTo(0, 0); render(); }));
  root.querySelectorAll("[data-gl]").forEach((b) => (b.onclick = () => { RV.gl = Number(b.dataset.gl); const t = TEXTS_ALL.find((x) => x.id === RV.id); speak(t.glossary[RV.gl].en); render(); }));
  root.querySelectorAll("[data-rq]").forEach((b) => (b.onclick = () => { RV.answers[Number(b.dataset.rq)] = b.dataset.ro; const y = window.scrollY; render(); window.scrollTo(0, y); }));
  root.querySelectorAll("[data-extra]").forEach((b) => (b.onclick = () => startExtra(Number(b.dataset.extra))));
  root.querySelectorAll("[data-shplay]").forEach((b) => (b.onclick = () => speak(shadowPhrases()[Number(b.dataset.shplay)].text)));
  root.querySelectorAll("[data-shslow]").forEach((b) => (b.onclick = () => speak(shadowPhrases()[Number(b.dataset.shslow)].text, 0.65)));
  root.querySelectorAll("[data-shpron]").forEach((b) => (b.onclick = () => { const i = Number(b.dataset.shpron); pronounce(shadowPhrases()[i].text, $(`#shp-${i}`)); }));
  root.querySelectorAll("[data-shrec]").forEach((b) => (b.onclick = async () => {
    const i = Number(b.dataset.shrec);
    if (SH.rec && SH.rec.active) { SH.rec.stop(); return; }
    curSH();
    SH.rec = makeRecorder((url) => {
      if (SH.day !== today()) SH = newSH();
      SH.recs[i] = url; SH.active = null;
      if (Object.keys(SH.recs).length >= 3 && !S.shadowDays.includes(today())) { S.shadowDays.push(today()); S.xp += 10; save(); toast("Shadowing: +10 XP"); }
      render();
    });
    if (await SH.rec.start()) { SH.active = i; render(); }
  }));
  bindLessons(root);
  const ci = $("#c-in", root);
  if (ci) { ci.oninput = () => (session.typed = ci.value); ci.onkeydown = (ev) => { if (ev.key === "Enter") actions["c-check"](); }; ci.focus({ preventScroll: true }); }
  const di = $("#d-in", root);
  if (di) { di.oninput = () => (DV.typed = di.value); di.onkeydown = (ev) => { if (ev.key === "Enter") actions["dict-check"](); }; di.focus({ preventScroll: true }); }
  const ri = $("#restore-input", root);
  if (ri) ri.onchange = () => {
    const f = ri.files[0]; if (!f) return;
    const fr = new FileReader();
    fr.onload = () => restoreData(String(fr.result));
    fr.readAsText(f);
  };
  root.querySelectorAll("[data-act]").forEach((b) => (b.onclick = (ev) => { ev.stopPropagation(); if (actions[b.dataset.act]) actions[b.dataset.act](); }));
}

function bindLessons(root) {
  root.querySelectorAll("[data-lesson]").forEach((b) => (b.onclick = (ev) => { ev.stopPropagation(); startLesson(Number(b.dataset.lesson)); }));
  root.querySelectorAll("[data-opt]").forEach((b) => (b.onclick = () => { if (LV.checked) return; LV.picked = b.dataset.opt; checkItem(b.dataset.opt); }));
  root.querySelectorAll("[data-tile]").forEach((b) => (b.onclick = () => { const [i] = LV.pool.splice(Number(b.dataset.tile), 1); LV.line.push(i); render(); }));
  root.querySelectorAll("[data-untile]").forEach((b) => (b.onclick = () => { const [i] = LV.line.splice(Number(b.dataset.untile), 1); LV.pool.push(i); render(); }));
  const inp = $("#l-in", root);
  if (inp && !LV.checked) {
    inp.oninput = () => (LV.typed = inp.value);
    inp.onkeydown = (ev) => { if (ev.key === "Enter") actions["l-check-in"](); };
    inp.focus({ preventScroll: true });
  }
  const hw = $("#hw-text", root);
  if (hw) hw.oninput = () => { lessonRec(Number(hw.dataset.hw)).draft = hw.value; save(); };
  root.querySelectorAll("[data-hw-send]").forEach((b) => (b.onclick = () => {
    const l = COURSE.find((x) => x.n === Number(b.dataset.hwSend));
    openClaude(hwPrompt(l, (hw && hw.value.trim()) || ""));
  }));
  root.querySelectorAll("[data-hw-imp]").forEach((b) => (b.onclick = () => importModal({ type: "hw", lesson: Number(b.dataset.hwImp) }, `Итог проверки ДЗ · урок ${b.dataset.hwImp}`)));
}

function gradeCurrent(g) {
  const c = session.queue[session.idx];
  grade(c, g);
  session.count++;
  if (g === "again") session.queue.push({ ...c, isNew: false, mode: c.kind === "fix" ? "fix" : "recognize" });
  session.idx++; session.shown = false; session.checked = false; session.typed = ""; session.verdict = null;
  if (session.idx >= session.queue.length) completeMission("words", session.day);
  render();
}

function restoreData(text) {
  try {
    let data;
    try { data = JSON.parse(text); } catch (e) { data = JSON.parse(decodeURIComponent(escape(atob(text.trim())))); }
    if (!data || !data.profile) throw new Error();
    if (!confirm("Заменить текущий прогресс на этом устройстве данными из копии?")) return;
    S = Object.assign(defaultState(), data); save(); closeModal(); toast("Прогресс загружен!"); render();
  } catch (e) { toast("Файл или код не подходит"); }
}

const actions = {
  "go-bosses": () => go("bosses"),
  import: () => importModal({}),
  plan: openPlan,
  review: startReview,
  test: () => promptModal("Тест уровня", testPrompt(), { importCtx: { type: "test" } }),
  "test-imp": () => importModal({ type: "test" }, "Итог теста уровня"),
  // карточки
  "start-cards": () => {
    const q = buildQueue().queue.map((c) => ({ ...c, mode: cardMode(c) }));
    session = { queue: q, idx: 0, shown: false, count: 0, typed: "", checked: false, verdict: null, day: today() };
    render();
  },
  show: () => { session.shown = true; render(); const c = session.queue[session.idx]; if (c) speak(c.en); },
  "c-check": () => {
    const c = session.queue[session.idx];
    const el = $("#c-in"); const v = el ? el.value.trim() : "";
    if (!v) return toast("Напиши ответ или нажми «Не знаю»");
    session.typed = v; session.checked = true;
    session.verdict = c.kind === "fix" ? verdict(v, [c.right], 0.8) : verdict(v, variants(c.en));
    render(); speak(c.kind === "fix" ? c.right : c.en);
  },
  "c-skip": () => { const c = session.queue[session.idx]; session.typed = ""; session.checked = true; session.verdict = "wrong"; render(); speak(c.kind === "fix" ? c.right : c.en); },
  "end-cards": () => { session = null; render(); },
  "add-word": () => {
    const ok = addCustom($("#w-en").value, $("#w-ru").value, $("#w-ex").value);
    if (!ok) return toast("Заполни слово и перевод (или такое уже есть)");
    save(); toast("Добавлено! Появится в карточках"); render();
  },
  "add-bulk": () => {
    let n = 0; parsePairs($("#w-bulk").value).forEach((p) => addCustom(p.en, p.ru) && n++);
    save(); toast(n ? `Добавлено слов: ${n}` : "Не нашла строк в формате «english — русский»"); render();
  },
  "add-mistake": () => {
    if (!addMistake($("#m-wrong").value, $("#m-right").value, $("#m-why").value)) return toast("Заполни оба поля (или такая ошибка уже есть)");
    save(); toast("Ошибка добавлена в карточки"); render();
  },
  // диктант
  "dict-start": startDictation,
  "dict-play": () => speak(DV.items[DV.idx].text),
  "dict-slow": () => speak(DV.items[DV.idx].text, 0.65),
  "dict-check": () => {
    const el = $("#d-in"); const v = el ? el.value.trim() : "";
    if (!v) return toast("Напиши, что услышала (хотя бы часть)");
    DV.typed = v; DV.checked = true;
    DV.accs.push(wordDiff(DV.items[DV.idx].text, v).acc);
    render();
  },
  "dict-next": () => {
    DV.idx++; DV.typed = ""; DV.checked = false;
    if (DV.idx >= DV.items.length) {
      const avg = (DV.accs.reduce((a, b) => a + b, 0) / DV.accs.length) * 100;
      S.listen.acc = (S.listen.acc * S.listen.sessions + avg) / (S.listen.sessions + 1);
      S.listen.sessions++;
      completeMission("listen", DV.day); save(); render();
    } else { render(); speak(DV.items[DV.idx].text); }
  },
  "dict-end": () => { DV = null; render(); },
  // чтение
  "r-close": () => { if (HAS_TTS) speechSynthesis.cancel(); RV = null; window.scrollTo(0, 0); render(); },
  "r-listen": () => { const t = TEXTS_ALL.find((x) => x.id === RV.id); speak(t.text, 0.92); },
  "r-stop": () => HAS_TTS && speechSynthesis.cancel(),
  "r-glx": () => { RV.gl = null; render(); },
  "r-add": () => {
    const t = TEXTS_ALL.find((x) => x.id === RV.id); const g = t.glossary[RV.gl];
    const sent = ((t.text.match(/[^.!?]+[.!?]+/g) || []).find((s) => s.toLowerCase().includes(g.en.toLowerCase())) || "").trim();
    toast(addCustom(g.en, g.ru, sent) ? "Добавлено в карточки" : "Уже есть в карточках"); save(); RV.gl = null; render();
  },
  "r-check": () => {
    const t = TEXTS_ALL.find((x) => x.id === RV.id);
    if (Object.keys(RV.answers).length < t.questions.length) return toast("Ответь на все вопросы");
    RV.checked = true;
    const score = t.questions.filter((q, i) => RV.answers[i] === q.answer).length;
    if (score >= 3) { S.reads[t.id] = { score: Math.max(score, (S.reads[t.id] || {}).score || 0), day: today() }; completeMission("read", RV.day); }
    save(); render();
  },
  "r-retry": () => { RV.answers = {}; RV.checked = false; RV.day = today(); window.scrollTo(0, 0); render(); },
  "r-discuss": () => {
    const t = TEXTS_ALL.find((x) => x.id === RV.id);
    promptModal("Обсудить текст", talkPrompt(t.discuss, `I just read a text called "${t.title}". Short version of it:\n"""\n${t.text.slice(0, 900)}\n"""\nLet's discuss it.`), { importCtx: { type: "talk" } });
  },
  "read-claude": () => promptModal("Текст от Claude", readClaudePrompt(), { importCtx: { type: "read" } }),
  // уроки
  "l-close": () => { LV = null; window.scrollTo(0, 0); render(); },
  "l-learn": () => startLesson(LV.n, "learn"),
  "l-practice": () => startLesson(LV.n, "practice"),
  "l-check-in": () => { const el = $("#l-in"); const v = el ? el.value.trim() : ""; if (!v) return toast("Впиши ответ"); LV.typed = v; checkItem(v); },
  "l-check-order": () => { const e = LV.items[LV.idx]; const w = orderWords(e); checkItem(LV.line.map((i) => w[i]).join(" ")); },
  "l-next": nextItem,
  // прогресс и настройки
  remind: () => {
    const t = $("#rem-time").value || "19:00";
    S.remindTime = t; save();
    // iPhone сам предложит добавить событие, если открыть .ics по ссылке
    window.open(new URL(`ics/remind-${t.replace(":", "")}.ics`, location.href).href, "_blank");
    toast("Нажми «Добавить» в окне Календаря");
  },
  "save-profile": () => {
    S.profile.name = $("#p-name").value.trim() || S.profile.name;
    S.profile.level = $("#p-level").value;
    S.profile.goalText = $("#p-goal").value.trim();
    S.profile.goalDate = $("#p-date").value;
    S.profile.pace = Number($("#p-pace").value);
    save(); toast("Сохранено"); render();
  },
  "backup-file": () => {
    saveFile(`englisheasy-backup-${today()}.json`, JSON.stringify(S), "application/json").then((ok) => {
      if (ok) { S.lastBackup = today(); save(); toast("Резервная копия сохранена"); render(); }
      else if (ok === null) toast("Если файл не сохранился — используй «Скопировать код»");
    });
  },
  "restore-file": () => $("#restore-input").click(),
  export: () => {
    copyText(btoa(unescape(encodeURIComponent(JSON.stringify(S))))).then(() => toast("Код скопирован — вставь на другом устройстве"));
    S.lastBackup = today(); save();
  },
  "import-code": () => {
    openModal(`<h2 style="margin-top:0">Вставить код</h2>
      <p class="small muted">Текущий прогресс на этом устройстве будет заменён.</p>
      <textarea id="imp"></textarea>
      <div class="btns" style="margin-top:10px"><button class="btn primary" id="ok">Загрузить</button><button class="btn" id="cl">Отмена</button></div>`, (el) => {
      $("#cl", el).onclick = closeModal;
      $("#ok", el).onclick = () => restoreData($("#imp", el).value);
    });
  },
  reset: () => {
    if (!confirm("Точно удалить весь прогресс? Это нельзя отменить.")) return;
    S = defaultState(); save(); session = null; LV = null; RV = null; DV = null; onboarding();
  },
};

function paceOptions(cur) {
  return [[10, "10 — спокойно (~1 год до B2)"], [20, "20 — интенсив (~6 мес. до B2)"], [30, "30 — турбо (для сильной памяти)"]]
    .map(([v, t]) => `<option value="${v}" ${v === cur ? "selected" : ""}>${t}</option>`).join("");
}

// ---------- Первый запуск ----------
function onboarding() {
  openModal(`
    <h2 class="center" style="margin-top:6px">Welcome to EnglishEasy</h2>
    <p class="center muted">Программа до уровня B2: слова, грамматика, слух, чтение, сериалы и разговоры с Claude. 1,5–2 часа в день.</p>
    <label>Как тебя зовут?</label><input type="text" id="o-name" placeholder="Имя">
    <label>Твой уровень сейчас</label>
    <select id="o-level"><option>A1</option><option selected>A2</option><option>B1</option><option>B2</option></select>
    <label>Темп — новых слов в день</label>
    <select id="o-pace">${paceOptions(20)}</select>
    <label>Цель (необязательно)</label><input type="text" id="o-goal" placeholder="Например: поездка в Лондон">
    <label>Дата цели (необязательно)</label><input type="date" id="o-date">
    <div class="card flat small" style="margin-top:14px">
      <b>Как это работает</b>
      <ul style="padding-left:18px;margin:6px 0 0">
        <li>Каждый день ${MISSIONS.length} заданий, минимум ${DAY_GOAL} — и день засчитан.</li>
        <li>Галочек нет: каждое задание засчитывается результатом.</li>
        <li>Разговоры, боссы и ДЗ проверяет Claude — его итог ты вставляешь в приложение.</li>
        <li>Твои ошибки превращаются в карточки, пока не перестанешь их делать.</li>
        <li>7 дней подряд дают заморозку серии.</li>
      </ul>
    </div>
    <button class="btn primary block" id="o-go" style="margin-top:14px">Начать</button>`, (el) => {
    $("#o-go", el).onclick = () => {
      const name = $("#o-name", el).value.trim();
      if (!name) return toast("Напиши своё имя");
      S.profile = { name, level: $("#o-level", el).value, pace: Number($("#o-pace", el).value), goalText: $("#o-goal", el).value.trim(), goalDate: $("#o-date", el).value, startDate: today() };
      S.lastCheck = addDays(today(), -1);
      save(); closeModal(); tab = "today"; render();
    };
  });
}

// ---------- Старт ----------
if (S.profile) { applyFreezes(); save(); render(); } else { $("#view").innerHTML = ""; onboarding(); }

let lastSeenDay = today();
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && S.profile && today() !== lastSeenDay) {
    lastSeenDay = today(); session = null; DV = null; applyFreezes(); save(); render();
  }
});
if (HAS_TTS) speechSynthesis.getVoices();
if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js").catch(() => {});
