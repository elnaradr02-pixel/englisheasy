"use strict";

// ---------- Константы ----------
const STORE_KEY = "englisheasy.v1";
const CLAUDE_URL = "https://claude.ai/new";
const NEW_WORDS_PER_DAY = 10;
const DAY_GOAL = 4; // сколько заданий из 6 нужно, чтобы день засчитался
const INTERVALS = [0, 1, 3, 7, 14, 30, 60, 120]; // дни для коробок карточек

const MISSIONS = [
  { id: "words", icon: "🃏", title: "Карточки со словами", xp: 20, desc: "Повтори слова на сегодня + новые по твоему темпу." },
  { id: "grammar", icon: "📝", title: "Грамматика", xp: 25, desc: "Новый урок или повторение: 12 заданий с автопроверкой." },
  { id: "series", icon: "🍿", title: "Серия на английском", xp: 30, desc: "С английскими субтитрами. Выпиши до 5 новых слов." },
  { id: "shadow", icon: "🦜", title: "Shadowing", xp: 15, desc: "Выбери 1 минуту из серии и повтори фразы вслух за героями 5 раз." },
  { id: "talk", icon: "💬", title: "Разговор с Claude", xp: 30, desc: "15+ минут только на английском. Можно голосом." },
  { id: "report", icon: "📋", title: "Отчёт за день", xp: 5, desc: "Отправь отчёт Claude — строгий контроль." },
];
const ALL_DONE_BONUS = 20;

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
    profile: null, // {name, level, goalText, goalDate, startDate}
    xp: 0,
    days: {}, // { 'YYYY-MM-DD': { m: {words:true,...}, reviews: 0, bonus: false } }
    cards: {}, // { id: { box, due } }
    custom: [], // [{ id, en, ru, ex }]
    newLog: { day: "", count: 0 },
    series: {}, // { id: episodes }
    current: null,
    bosses: {}, // { id: { won: day, tries: n } }
    freezes: 0,
    frozen: [], // дни, закрытые заморозкой
    lastCheck: null,
    lastFreezeAward: null,
    bestStreak: 0,
    tests: [], // [{ day, level }]
    lessons: {}, // { n: { best: 0..100, passed: day, hw: day, draft: "" } }
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
  if (!S.days[k]) S.days[k] = { m: {}, reviews: 0, bonus: false };
  return S.days[k];
}
const doneCount = (k) => (S.days[k] ? Object.values(S.days[k].m).filter(Boolean).length : 0);
const dayCounted = (k) => doneCount(k) >= DAY_GOAL || S.frozen.includes(k);

// ---------- Серия дней и заморозки ----------
function streak() {
  let k = today();
  if (!dayCounted(k)) k = addDays(k, -1);
  let n = 0;
  while (dayCounted(k)) { n++; k = addDays(k, -1); }
  return n;
}

// Закрываем пропущенные дни заморозками (вызывается при открытии)
function applyFreezes() {
  const t = today();
  const y = addDays(t, -1);
  if (!S.lastCheck) { S.lastCheck = y; return; }
  let k = addDays(S.lastCheck, 1);
  while (diffDays(k, y) >= 0) {
    if (!dayCounted(k)) {
      const hadStreak = dayCounted(addDays(k, -1));
      if (hadStreak && S.freezes > 0) {
        S.freezes--;
        S.frozen.push(k);
        toast("🧊 Заморозка спасла твою серию!");
      }
    }
    k = addDays(k, 1);
  }
  S.lastCheck = y;
}

function afterMissionChange() {
  const k = today();
  const rec = dayRec(k);
  const all = MISSIONS.every((m) => rec.m[m.id]);
  if (all && !rec.bonus) { rec.bonus = true; S.xp += ALL_DONE_BONUS; toast(`🏆 Все задания! +${ALL_DONE_BONUS} XP бонус`); confetti(); }
  if (!all && rec.bonus) { rec.bonus = false; S.xp -= ALL_DONE_BONUS; }
  const st = streak();
  if (st > S.bestStreak) S.bestStreak = st;
  if (dayCounted(k) && st > 0 && st % 7 === 0 && S.lastFreezeAward !== k && S.freezes < 2) {
    S.freezes++; S.lastFreezeAward = k;
    toast("🧊 7 дней подряд! Ты получила заморозку серии");
  }
  save();
}

function setMission(id, value) {
  const rec = dayRec();
  const m = MISSIONS.find((x) => x.id === id);
  if (!!rec.m[id] === value) return;
  const before = dayCounted(today());
  rec.m[id] = value;
  S.xp += value ? m.xp : -m.xp;
  if (value) toast(`+${m.xp} XP`);
  if (!before && dayCounted(today()) && value) setTimeout(() => toast("🔥 День засчитан! Серия продолжается"), 900);
  afterMissionChange();
}

// ---------- Уровни ----------
const xpForLevel = (l) => 50 * l * (l - 1); // 1→0, 2→100, 3→300, 4→600...
function levelInfo(xp = S.xp) {
  let l = 1;
  while (xp >= xpForLevel(l + 1)) l++;
  const from = xpForLevel(l), to = xpForLevel(l + 1);
  let rank = RANKS[0];
  for (const r of RANKS) if (l >= r[0]) rank = r;
  return { level: l, pct: Math.round(((xp - from) / (to - from)) * 100), toNext: to - xp, rank: rank[1], rankIcon: rank[2] };
}

// ---------- Карточки ----------
const LEVEL_ORDER = { A2: 0, B1: 1, B2: 2 };
const OLD_THEME_LEVEL = { verbs: "A2", series: "A2", feelings: "A2", travel: "A2", work: "B1", linkers: "B1" };
const cardId = (en) => "w:" + en.toLowerCase().trim();

// Общая колода: базовые слова + большой словарь, отсортированные A2 → B1 → B2.
// Внутри уровня темы чередуются, чтобы каждый день был разнообразным.
const DECK = (() => {
  const seen = new Set();
  const out = [];
  const push = (c) => { const id = cardId(c.en); if (seen.has(id)) return; seen.add(id); out.push({ ...c, id }); };
  WORDS.forEach((w) => push({ en: w[0], ru: w[1], ex: w[2], theme: w[3], level: OLD_THEME_LEVEL[w[3]] || "A2", emoji: "" }));
  (typeof EXTRA_WORDS !== "undefined" ? EXTRA_WORDS : []).forEach(push);
  const byLevel = {};
  out.forEach((c, i) => { (byLevel[c.level] = byLevel[c.level] || []).push({ c, i }); });
  const ordered = [];
  ["A2", "B1", "B2"].forEach((lv) => {
    const themes = {};
    (byLevel[lv] || []).forEach(({ c }) => (themes[c.theme] = themes[c.theme] || []).push(c));
    const lists = Object.values(themes);
    for (let r = 0; lists.some((l) => r < l.length); r++) lists.forEach((l) => l[r] && ordered.push(l[r]));
  });
  return ordered;
})();

const allCards = () => DECK.concat(S.custom.map((c) => ({ ...c, theme: "mine", level: "", emoji: "✍️" })));
const pace = () => (S.profile && S.profile.pace) || NEW_WORDS_PER_DAY;

function buildQueue() {
  const t = today();
  const cards = allCards();
  const due = cards.filter((c) => S.cards[c.id] && S.cards[c.id].due <= t);
  if (S.newLog.day !== t) S.newLog = { day: t, count: 0 };
  const freshLeft = Math.max(0, pace() - S.newLog.count);
  // Свои слова — в приоритете среди новых, дальше колода по порядку уровней
  const unseen = cards.filter((c) => !S.cards[c.id]).sort((a, b) => (b.theme === "mine") - (a.theme === "mine"));
  const fresh = unseen.slice(0, freshLeft).map((c) => ({ ...c, isNew: true }));
  return shuffle(due).concat(fresh);
}

const learnedByLevel = () => {
  const r = { A2: 0, B1: 0, B2: 0 };
  DECK.forEach((c) => { const s = S.cards[c.id]; if (s && s.box >= 3 && r[c.level] !== undefined) r[c.level]++; });
  return r;
};
const deckByLevel = () => {
  const r = { A2: 0, B1: 0, B2: 0 };
  DECK.forEach((c) => { if (r[c.level] !== undefined) r[c.level]++; });
  return r;
};

// ---------- План на 24 недели ----------
const PLAN = typeof WEEKS !== "undefined" ? WEEKS : [];
const weekNo = () => Math.min(Math.max(1, Math.floor(diffDays(S.profile.startDate, today()) / 7) + 1), PLAN.length || 1);
const currentWeek = () => PLAN[weekNo() - 1];

function grade(card, g) {
  const t = today();
  const st = S.cards[card.id] || { box: 0, due: t };
  if (card.isNew && !S.cards[card.id]) S.newLog.count++;
  if (g === "again") { st.box = 0; st.due = t; }
  else if (g === "hard") { st.box = Math.max(1, st.box); st.due = addDays(t, 1); }
  else { st.box = Math.min(INTERVALS.length - 1, st.box + 1); st.due = addDays(t, INTERVALS[st.box]); }
  S.cards[card.id] = st;
  dayRec().reviews++;
  save();
}

const learnedCount = () => Object.values(S.cards).filter((c) => c.box >= 3).length;

// ---------- Утилиты ----------
const plural = (n, one, few, many) => { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 12 || b > 14) ? few : many; };
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const dayIndex = () => Math.floor(parseDay(today()) / 86400000);

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg; el.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add("hidden"), 2200);
}

// Тихий отклик на достижение: лёгкая вибрация, где она поддерживается (без визуального шума)
function confetti() {
  try { if (navigator.vibrate) navigator.vibrate(30); } catch (e) { /* ignore */ }
}

function speak(text) {
  if (!("speechSynthesis" in window)) return toast("Озвучка недоступна");
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/[—/]/g, ","));
  u.lang = "en-US"; u.rate = 0.9;
  const v = speechSynthesis.getVoices().find((x) => x.lang === "en-US" && /Samantha|Google US|Ava|Allison/i.test(x.name))
    || speechSynthesis.getVoices().find((x) => x.lang.startsWith("en"));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
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

// ---------- Модальное окно ----------
function openModal(html, onMount) {
  $("#modal-card").innerHTML = html;
  $("#modal").classList.remove("hidden");
  if (onMount) onMount($("#modal-card"));
}
function closeModal() { $("#modal").classList.add("hidden"); $("#modal-card").innerHTML = ""; }
$("#modal").addEventListener("click", (e) => { if (e.target.id === "modal" && S.profile) closeModal(); });

// Показываем задание для Claude: копируем и открываем Claude
function promptModal(title, text, after) {
  openModal(`
    <h2 style="margin-top:0">${esc(title)}</h2>
    <p class="muted small">1) Нажми кнопку — задание скопируется и откроется Claude.<br>2) Вставь текст в чат и отправь.<br>3) Совет: на iPhone включи голосовой режим в приложении Claude.</p>
    <div class="prompt-box">${esc(text)}</div>
    <div class="stack">
      <button class="btn primary block" id="go">📋 Скопировать и открыть Claude</button>
      <button class="btn block" id="cp">Только скопировать</button>
      <button class="btn ghost block" id="cl">Закрыть</button>
    </div>`, (el) => {
    $("#go", el).onclick = () => { copyText(text); window.open(CLAUDE_URL, "_blank"); toast("Скопировано! Вставь в Claude"); if (after) after(); };
    $("#cp", el).onclick = () => { copyText(text).then(() => toast("Скопировано!")); if (after) after(); };
    $("#cl", el).onclick = closeModal;
  });
}

// ---------- Тексты для Claude ----------
const lvl = () => (S.profile && S.profile.level) || "A2";
const nm = () => (S.profile && S.profile.name) || "";

function talkPrompt() {
  const topic = TOPICS[dayIndex() % TOPICS.length];
  return `Hi Claude! Please be my English speaking partner and tutor.
About me: my name is ${nm()}, I'm a Russian speaker, my English level is about ${lvl()}. My goal is B2: understand easily and speak freely (travel, work, series).

Today's topic: "${topic}"

Rules:
1) Speak ONLY English with me. Use simple words and short sentences for my level.
2) Ask me ONE question at a time and wait for my answer. Be curious and fun, like a friend.
3) After each of my answers, add a short block "✏️ Исправления" in Russian: show my mistakes and the correct sentence. If there are no mistakes, praise me.
4) Sometimes teach me 1 useful phrase that natives really use.
5) If I write in Russian, help me say it in English and ask me to repeat it.
6) After ~12 exchanges, give me a summary: my top 3 mistakes, 5 new words/phrases in the format "english — русский" (one per line, so I can add them to my flashcards), and a score out of 10.

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
- When the scene ends (or after ~15 exchanges), step out of character and give: 1) "✏️ Исправления" in Russian — my main mistakes with correct versions; 2) which goals I completed; 3) a score out of 10; 4) the verdict: "🏆 BOSS DEFEATED" if I completed all goals with a score of 7+, otherwise "💀 TRY AGAIN" with advice.

Start the scene now!`;
}

function testPrompt() {
  return `Hi Claude! Please run a 10–15 minute English level test for me (I'm a Russian speaker, I think my level is about ${lvl()}).
- Ask questions one by one, starting easy and getting harder (A1 → C1).
- Mix: questions about me, describing situations, giving opinions, 2–3 grammar/vocabulary questions.
- Don't correct me during the test.
- At the end, give in Russian: my strengths, my weaknesses, what to focus on next month, and the final result in the format "LEVEL: B1" (A1/A2/B1/B2/C1). Be honest and strict.`;
}

function reportText() {
  const k = today();
  const rec = dayRec(k);
  const lines = MISSIONS.filter((m) => m.id !== "report").map((m) => `${rec.m[m.id] ? "✅" : "❌"} ${m.title}`);
  const cur = SERIES.find((s) => s.id === S.current);
  const goal = S.profile && S.profile.goalText ? `\nMy goal: ${S.profile.goalText}${S.profile.goalDate ? " (" + S.profile.goalDate + ")" : ""}` : "";
  return `📋 Daily English report — ${fmtDate(k)}
Day ${diffDays(S.profile.startDate, k) + 1} of my challenge. Streak: ${streak()} 🔥  Level ${levelInfo().level}, ${S.xp} XP
${lines.join("\n")}
Cards reviewed today: ${rec.reviews}. Words learned in total: ${learnedCount()}.
Series: ${cur ? cur.title + " (" + (S.series[cur.id] || 0) + " episodes)" : "not chosen"}${goal}

Claude, you are my strict English coach. In Russian: praise me for what I did, scold me (kindly but firmly) for anything I skipped, and give me ONE small English challenge for tomorrow. Then ask me 2 quick questions in English about my day.`;
}

// ---------- Экраны ----------
let tab = "today";
let wordsSeg = "cards";
let session = null; // { queue, idx, shown, done }

function render() {
  document.querySelectorAll(".tabbar button").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  const v = $("#view");
  if (tab === "today") v.innerHTML = viewToday();
  if (tab === "words") v.innerHTML = viewWords();
  if (tab === "lessons") v.innerHTML = viewLessons();
  if (tab === "series") v.innerHTML = viewSeries();
  if (tab === "bosses") v.innerHTML = viewBosses();
  if (tab === "progress") v.innerHTML = viewProgress();
  bind(v);
}

function go(t) { tab = t; window.scrollTo(0, 0); render(); }
document.querySelectorAll(".tabbar button").forEach((b) => (b.onclick = () => go(b.dataset.tab)));

// --- Сегодня ---
function viewToday() {
  const k = today();
  const rec = dayRec(k);
  const L = levelInfo();
  const st = streak();
  const done = doneCount(k);
  const y = addDays(k, -1);
  const started = S.profile.startDate <= y;
  let banner = "";
  if (started && !dayCounted(y) && !dayCounted(k)) {
    banner = `<div class="banner bad">⚠️ Вчера день не засчитан. Никаких отговорок — сегодня сделай минимум ${DAY_GOAL} задания!</div>`;
  } else if (dayCounted(k)) {
    banner = `<div class="banner good">🔥 Сегодня день засчитан! ${done < MISSIONS.length ? "Добей все " + MISSIONS.length + " заданий — получишь бонус +" + ALL_DONE_BONUS + " XP." : "Идеальный день!"}</div>`;
  }
  const goal = S.profile.goalDate ? (() => {
    const left = diffDays(k, S.profile.goalDate);
    return left >= 0 ? `<div class="banner info">🎯 ${esc(S.profile.goalText || "Цель")}: осталось ${left} дн.</div>` : "";
  })() : "";

  const phc = DECK[(dayIndex() * 7) % DECK.length];
  const ph = [phc.en, phc.ru, phc.ex];
  const wk = currentWeek();
  const weekHtml = wk ? `<div class="card week-now" data-act="plan" style="cursor:pointer">
      <div class="row between"><span class="pill accent">Неделя ${weekNo()} из ${PLAN.length}</span><span class="small muted">весь план ›</span></div>
      <h3 style="margin-top:8px">${esc(wk.title)}</h3>
      <p class="small">${esc(wk.goal)}</p>
      <p class="small muted" style="margin:0">🗣️ ${esc(wk.speaking)}</p>
    </div>` : "";
  const cur = SERIES.find((s) => s.id === S.current);
  const topic = TOPICS[dayIndex() % TOPICS.length];
  const nextBoss = BOSSES.find((b) => !S.bosses[b.id] || !S.bosses[b.id].won);

  const missionHtml = MISSIONS.map((m) => {
    const isDone = !!rec.m[m.id];
    let extra = "";
    if (m.id === "words") {
      const q = buildQueue().length;
      extra = `<p class="small muted">${isDone ? `Повторено сегодня: ${rec.reviews}` : `В очереди: ${q} карточек`}</p>
        <div class="btns"><button class="btn sm primary" data-act="go-words">Открыть карточки</button></div>`;
    }
    if (m.id === "grammar") {
      const nl = nextLesson();
      extra = nl ? `<p class="small muted">Следующий урок: ${nl.emoji} ${nl.n}. ${esc(nl.title)}</p>` : "";
      extra += `<div class="btns">${nl ? `<button class="btn sm primary" data-lesson="${nl.n}">Открыть урок</button>` : ""}${passedLessons().length ? `<button class="btn sm" data-act="review">🔁 Повторение</button>` : ""}</div>`;
    }
    if (m.id === "series") {
      extra = cur
        ? `<p class="small muted">Сейчас: ${cur.emoji} ${esc(cur.title)} · серий: ${S.series[cur.id] || 0}</p>`
        : `<p class="small muted">Сначала выбери сериал во вкладке 🍿</p>`;
      extra += `<div class="btns">${!isDone ? `<button class="btn sm good" data-act="watched">✓ Посмотрела серию</button>` : ""}<button class="btn sm" data-act="go-series">${cur ? "Сменить" : "Выбрать"}</button></div>`;
    }
    if (m.id === "talk") {
      extra = `<p class="small muted">Тема: <i>${esc(topic)}</i></p>
        <div class="btns"><button class="btn sm primary" data-act="talk">💬 Начать разговор</button></div>`;
    }
    if (m.id === "report") {
      extra = `<div class="btns"><button class="btn sm primary" data-act="report">📋 Отправить отчёт</button></div>`;
    }
    return `<div class="card mission ${isDone ? "done" : ""}">
      <button class="check" data-toggle="${m.id}" aria-label="Отметить">${isDone ? "✓" : ""}</button>
      <div class="grow">
        <div class="row between"><h3>${m.title}</h3><span class="xp-tag">+${m.xp} XP</span></div>
        <p class="small muted">${m.desc}</p>${extra}
      </div></div>`;
  }).join("");

  return `
    <div class="row between" style="margin-bottom:12px">
      <div><p class="muted small" style="margin:0">${fmtDate(k)}</p><h1>Hi, ${esc(nm())}</h1></div>
    </div>
    <div class="hero">
      <div class="grid3" style="margin-bottom:14px">
        <div class="stat"><b>${st}</b><span>дней подряд</span></div>
        <div class="stat"><b>${L.level}</b><span>уровень</span></div>
        <div class="stat"><b>${done}/${MISSIONS.length}</b><span>заданий</span></div>
      </div>
      <div class="row between small" style="margin-bottom:6px"><span>${S.xp} XP</span><span class="muted">ещё ${L.toNext} XP до ур. ${L.level + 1}</span></div>
      <div class="bar"><i style="width:${L.pct}%"></i></div>
      ${S.freezes ? `<p class="small muted" style="margin:10px 0 0">🧊 Заморозок серии: ${S.freezes}</p>` : ""}
    </div>
    ${banner}${goal}${weekHtml}
    <div class="card flat">
      <div class="row between"><span class="pill accent">Фраза дня</span><button class="speak" style="margin:0" data-speak="${esc(ph[0])}">🔊</button></div>
      <h3 style="margin-top:8px;font-size:20px">${phc.emoji ? esc(phc.emoji) + " " : ""}${esc(ph[0])}</h3>
      <p>${esc(ph[1])}</p><p class="small muted"><i>${esc(ph[2])}</i></p>
    </div>
    <h2>Задания на сегодня</h2>
    <p class="small muted">Минимум ${DAY_GOAL} из ${MISSIONS.length}, чтобы день засчитался.</p>
    ${missionHtml}
    ${nextBoss ? `<div class="card row" data-act="go-bosses" style="cursor:pointer">
      <div class="emoji">${nextBoss.emoji}</div>
      <div class="grow"><span class="pill red">Босс недели</span><h3 style="margin-top:6px">${esc(nextBoss.title)}</h3><p class="small muted" style="margin:0">+150 XP · рекомендуем раз в неделю</p></div>
      <span>›</span></div>` : ""}
  `;
}

// --- Слова ---
function viewWords() {
  const seg = `<div class="seg">
    <button data-seg="cards" class="${wordsSeg === "cards" ? "active" : ""}">Карточки</button>
    <button data-seg="mine" class="${wordsSeg === "mine" ? "active" : ""}">Мои слова</button>
    <button data-seg="grammar" class="${wordsSeg === "grammar" ? "active" : ""}">Шпаргалки</button>
  </div>`;
  let body = "";
  if (wordsSeg === "cards") body = viewCards();
  if (wordsSeg === "mine") body = viewMine();
  if (wordsSeg === "grammar") body = viewGrammar();
  const lb = learnedByLevel(), db = deckByLevel();
  const lvlBars = ["A2", "B1", "B2"].map((l) => `<div class="grow"><div class="row between small"><b>${l}</b><span class="muted">${lb[l]}/${db[l]}</span></div>
    <div class="bar" style="height:6px;margin-top:4px"><i style="width:${db[l] ? Math.round((lb[l] / db[l]) * 100) : 0}%"></i></div></div>`).join("");
  return `<h1>Слова</h1><p class="muted">${learnedCount()} выучено · ${Object.keys(S.cards).length} в изучении · ${allCards().length} всего · ${pace()} новых в день</p>
    <div class="card row" style="gap:14px">${lvlBars}</div>${seg}${body}`;
}

function viewCards() {
  if (!session) {
    const q = buildQueue();
    if (!q.length) {
      return `<div class="card center flash"><div style="font-size:32px;margin-bottom:8px">🎉</div><h3>На сегодня всё!</h3>
        <p class="muted">Новые слова появятся завтра. Хочешь больше — добавь свои слова из сериала.</p>
        <button class="btn primary" data-seg="mine">➕ Добавить свои слова</button></div>`;
    }
    const newN = q.filter((c) => c.isNew).length;
    return `<div class="card center flash">
      <div style="font-size:32px;margin-bottom:8px">🃏</div>
      <h3>${q.length} карточек на сегодня</h3>
      <p class="muted">${q.length - newN} повторить · ${newN} новых</p>
      <button class="btn primary" data-act="start-cards" style="margin-top:10px">Поехали!</button>
    </div>
    <p class="small muted center">Как это работает: слова, которые помнишь, показываются всё реже (через 1, 3, 7, 14, 30 дней...). Те, что забыла, — снова сегодня.</p>`;
  }
  if (session.idx >= session.queue.length) {
    return `<div class="card center flash"><div style="font-size:32px;margin-bottom:8px">✅</div><h3>Сессия завершена!</h3>
      <p class="muted">Повторено: ${session.count}</p>
      <button class="btn primary" data-act="end-cards">Готово</button></div>`;
  }
  const c = session.queue[session.idx];
  const st = S.cards[c.id];
  const reverse = st && st.box >= 3 && session.rev[session.idx];
  const front = reverse ? c.ru : c.en;
  const back = reverse ? c.en : c.ru;
  return `<div class="row between small muted" style="margin-bottom:8px"><span>${session.idx + 1} / ${session.queue.length}</span>
      <span>${c.level ? `<span class="pill">${c.level}</span>` : ""} ${c.isNew ? '<span class="pill accent">новое</span>' : ""} ${reverse ? '<span class="pill">скажи по-английски</span>' : ""}</span></div>
    <div class="bar" style="margin-bottom:12px"><i style="width:${Math.round((session.idx / session.queue.length) * 100)}%"></i></div>
    <div class="card flash">
      ${c.emoji ? `<div class="flash-emoji">${esc(c.emoji)}</div>` : ""}
      <div class="front">${esc(front)}</div>
      ${THEMES[c.theme] ? `<div class="small muted" style="margin-top:6px">${THEMES[c.theme]}</div>` : ""}
      ${session.shown ? `<div class="back">${esc(back)}</div>${c.ex ? `<div class="ex">${esc(c.ex)}</div>` : ""}` : ""}
      ${(!reverse || session.shown) ? `<button class="speak" data-speak="${esc(c.en)}">🔊</button>` : ""}
    </div>
    ${session.shown
      ? `<div class="btns"><button class="btn bad" data-grade="again">Забыла</button><button class="btn warn" data-grade="hard">Трудно</button><button class="btn good" data-grade="good">Помню</button></div>`
      : `<button class="btn primary block" data-act="show">Показать ответ</button>`}
    <p class="small muted center" style="margin-top:10px">Произнеси вслух, прежде чем открыть ответ</p>`;
}

function viewMine() {
  const mine = S.custom.slice().reverse();
  return `<div class="card">
      <h3>➕ Добавить слово</h3>
      <label>По-английски</label><input type="text" id="w-en" placeholder="plot twist" autocapitalize="off">
      <label>Перевод</label><input type="text" id="w-ru" placeholder="неожиданный поворот">
      <label>Пример (необязательно)</label><input type="text" id="w-ex" placeholder="What a plot twist!">
      <button class="btn primary block" data-act="add-word" style="margin-top:12px">Добавить</button>
    </div>
    <details class="card"><summary>📥 Добавить списком (из итогов Claude)</summary>
      <p class="small muted" style="margin-top:8px">Вставь строки в формате <b>english — русский</b>, по одной на строку.</p>
      <textarea id="w-bulk" placeholder="I'm on it — уже занимаюсь&#10;figure out — разобраться"></textarea>
      <button class="btn primary block" data-act="add-bulk" style="margin-top:10px">Добавить все</button>
    </details>
    <h2>Мои слова (${mine.length})</h2>
    ${mine.length ? `<div class="card">${mine.map((w) => `<div class="list-item">
        <div class="grow"><b>${esc(w.en)}</b><div class="small muted">${esc(w.ru)}</div></div>
        <button class="btn sm ghost" data-speak="${esc(w.en)}">🔊</button>
        <button class="btn sm ghost" data-del="${w.id}">✕</button></div>`).join("")}</div>`
      : `<p class="muted">Пока пусто. Добавляй слова из сериалов и разговоров с Claude — свои слова запоминаются лучше всего.</p>`}`;
}

function viewGrammar() {
  return `<p class="muted small">Коротко и без воды. Открывай, когда Claude поправляет одну и ту же ошибку.</p>` +
    GRAMMAR.map((g) => `<details class="card"><summary>${esc(g.title)}</summary><ul>${g.body.map((b) => `<li>${b}</li>`).join("")}</ul></details>`).join("");
}

// --- Уроки грамматики ---
const COURSE = typeof LESSONS !== "undefined" ? LESSONS.slice().sort((a, b) => a.n - b.n) : [];
const PASS = 70;
const lessonRec = (n) => (S.lessons[n] = S.lessons[n] || { best: 0, passed: null, hw: null, draft: "" });
const isPassed = (n) => !!(S.lessons[n] && S.lessons[n].best >= PASS);
const isOpen = (n) => n === COURSE[0]?.n || isPassed(n - 1) || isPassed(n);
const passedLessons = () => COURSE.filter((l) => isPassed(l.n));
const nextLesson = () => COURSE.find((l) => !isPassed(l.n));
let LV = null; // состояние открытого урока / повторения

// Сравнение ответов: регистр, апострофы, сокращения (don't = do not) не важны
function normAns(s) {
  return " " + String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[.!?,;:]+/g, " ")
    .replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "cannot").replace(/\bcan not\b/g, "cannot")
    .replace(/\bshan't\b/g, "shall not").replace(/n't\b/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are")
    .replace(/'ll\b/g, " will").replace(/'ve\b/g, " have").replace(/\s+/g, " ").trim() + " ";
}
const ansMatch = (given, answers) => answers.some((a) => normAns(a) === normAns(given));
const orderWords = (ex) => ex.answer[0].replace(/[.?!]+$/, "").split(/\s+/);

function startLesson(n, stage = "learn") {
  const l = COURSE.find((x) => x.n === n);
  LV = { mode: "lesson", n, stage, items: l.exercises.map((e) => ({ ...e, from: n })), idx: 0, ok: 0, wrong: [] };
  prepItem(); tab = "lessons"; window.scrollTo(0, 0); render();
}
function startReview() {
  const pool = [];
  const done = passedLessons();
  done.forEach((l, i) => {
    const w = i >= done.length - 3 ? 2 : 1; // последние уроки — чаще
    l.exercises.forEach((e) => { for (let k = 0; k < w; k++) pool.push({ ...e, from: l.n }); });
  });
  const seen = new Set(); const items = [];
  for (const e of shuffle(pool)) { const key = e.from + e.q; if (!seen.has(key)) { seen.add(key); items.push(e); } if (items.length >= 12) break; }
  LV = { mode: "review", stage: "practice", items, idx: 0, ok: 0, wrong: [] };
  prepItem(); tab = "lessons"; window.scrollTo(0, 0); render();
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
    if (firstPass) { r.passed = today(); S.xp += 40; setTimeout(() => { confetti(); toast("🎓 Урок пройден! +40 XP"); }, 300); }
  }
  setMission("grammar", true);
  save(); window.scrollTo(0, 0); render();
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
3) Score out of 10.
4) Give me 3 extra short exercises on my weak spots and check my answers when I reply.`;
}

function viewLessons() {
  if (LV) return lessonScreen();
  if (!COURSE.length) return `<h1>Уроки</h1><p class="muted">Уроки загружаются...</p>`;
  const passed = passedLessons().length;
  const nl = nextLesson();
  const groups = ["A2", "B1", "B2"].map((lv) => {
    const ls = COURSE.filter((l) => l.level === lv);
    if (!ls.length) return "";
    return `<h2>${lv}</h2>` + ls.map((l) => {
      const r = S.lessons[l.n];
      const open = isOpen(l.n), ok = isPassed(l.n);
      return `<div class="card boss ${ok ? "won" : open ? "open" : "locked"}" ${open ? `data-lesson="${l.n}" style="cursor:pointer"` : ""}>
        <div class="node">${open ? l.emoji : "🔒"}</div>
        <div class="grow"><p class="small muted" style="margin:0">Урок ${l.n} · ${l.level}</p><h3 style="margin:0">${esc(l.title)}</h3>
        <p class="small muted" style="margin:0">${ok ? `✅ ${r.best}%` : r && r.best ? `Лучший результат: ${r.best}% (нужно ${PASS}%)` : open ? "Готов к изучению" : "Пройди предыдущий урок"}${r && r.hw ? " · ✍️ ДЗ сдано" : ok ? " · ✍️ ДЗ ждёт" : ""}</p></div>
        ${open ? "<span>›</span>" : ""}</div>`;
    }).join("");
  }).join("");
  return `<h1>Уроки</h1>
    <p class="muted">Грамматика по порядку: короткое объяснение → 12 заданий → письменное ДЗ. Следующий урок открывается при ${PASS}%+.</p>
    <div class="card"><div class="row between small" style="margin-bottom:6px"><span>Пройдено ${passed} из ${COURSE.length}</span><span class="muted">${nl ? nl.level : "B2 ✓"}</span></div>
      <div class="bar"><i style="width:${Math.round((passed / COURSE.length) * 100)}%"></i></div>
      <div class="btns" style="margin-top:12px">${nl ? `<button class="btn primary" data-lesson="${nl.n}">▶️ Урок ${nl.n}</button>` : ""}
      <button class="btn" data-act="review" ${passed ? "" : "disabled"}>🔁 Повторение</button></div>
      ${passed ? "" : `<p class="small muted" style="margin:8px 0 0">Повторение откроется после первого урока.</p>`}
    </div>
    <p class="small muted">Темп: 1–2 урока в неделю + повторение в остальные дни. Уже знаешь тему? Просто сразу реши задания на ${PASS}%+.</p>
    ${groups}`;
}

function lessonScreen() {
  const l = LV.mode === "lesson" ? COURSE.find((x) => x.n === LV.n) : null;
  const back = `<button class="btn sm ghost" data-act="l-close" style="margin-bottom:12px">‹ Все уроки</button>`;

  if (LV.stage === "learn") {
    const r = S.lessons[l.n];
    return `${back}
      <div class="hero"><div class="row"><div style="font-size:30px">${l.emoji}</div><div class="grow">
        <p class="small muted" style="margin:0">Урок ${l.n} · ${l.level}</p><h2 style="margin:0">${esc(l.title)}</h2></div></div>
        <p style="margin:12px 0 0">${esc(l.hook)}</p></div>
      <h2>📖 Правило</h2>
      <div class="card"><ul style="padding-left:18px;margin:0">${l.rules.map((x) => `<li style="margin-bottom:8px">${x}</li>`).join("")}</ul></div>
      <h2>💡 Примеры</h2>
      <div class="card">${l.examples.map((x) => `<div class="list-item"><div class="grow"><b>${esc(x.en)}</b><div class="small muted">${esc(x.ru)}</div></div>
        <button class="btn sm ghost" data-speak="${esc(x.en)}">🔊</button></div>`).join("")}</div>
      <div class="banner bad">⚠️ Типичная ошибка<br><span style="font-weight:500">${esc(l.trap)}</span></div>
      <button class="btn primary block" data-act="l-practice">✏️ К заданиям (${l.exercises.length})</button>
      ${r && r.best ? `<p class="small muted center" style="margin-top:8px">Лучший результат: ${r.best}%</p>` : ""}
      ${isPassed(l.n) ? hwBlock(l) : ""}`;
  }

  if (LV.stage === "practice") {
    const e = LV.items[LV.idx];
    const total = LV.items.length;
    const title = LV.mode === "lesson" ? `Урок ${l.n}: ${esc(l.title)}` : "🔁 Повторение";
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
    const fb = LV.checked ? `<div class="banner ${LV.correct ? "good" : "bad"}" style="margin-top:12px">${LV.correct ? "✅ Верно!" : `❌ Правильно: <b>${esc(e.answer[0])}</b>`}
        <br><span style="font-weight:500">${esc(e.explain)}</span></div>
        <button class="btn primary block" data-act="l-next">${LV.idx + 1 < total ? "Дальше →" : "Результат"}</button>` : "";
    return `${back}<div class="row between small muted" style="margin-bottom:8px"><span>${title}</span><span style="white-space:nowrap">${LV.idx + 1} / ${total}</span></div>
      <div class="bar" style="margin-bottom:12px"><i style="width:${Math.round((LV.idx / total) * 100)}%"></i></div>
      <div class="card">${body}</div>${fb}`;
  }

  // result
  const passed = LV.pct >= PASS;
  const mistakes = LV.wrong.length ? `<h2>Разбор ошибок</h2>` + LV.wrong.map((w) => `<div class="card">
      <p class="small muted" style="margin:0">${w.type === "order" ? esc(w.q) : esc(w.q)}</p>
      <p style="margin:6px 0 0">Твой ответ: <s>${esc(w.given || "—")}</s></p>
      <p style="margin:0">Правильно: <b>${esc(w.answer[0])}</b></p>
      <p class="small muted" style="margin:4px 0 0">${esc(w.explain)}</p></div>`).join("") : "";
  return `${back}<div class="card center" style="padding:24px">
      <div style="font-size:34px">${LV.pct >= 90 ? "🏆" : passed ? "🎓" : "💪"}</div>
      <h2 style="margin:6px 0">${LV.ok} из ${LV.items.length} · ${LV.pct}%</h2>
      <p class="muted">${LV.mode === "review" ? "Повторение засчитано!" : passed ? (LV.pct >= 90 ? "Идеально! Следующий урок открыт." : "Урок пройден! Следующий урок открыт.") : `Нужно ${PASS}%, чтобы пройти. Перечитай правило и попробуй ещё раз.`}</p>
      <div class="btns">${LV.mode === "lesson" ? `<button class="btn" data-act="l-learn">📖 Правило</button><button class="btn" data-act="l-practice">🔁 Ещё раз</button>` : `<button class="btn" data-act="review">🔁 Ещё повторение</button>`}
      ${LV.mode === "lesson" && passed && nextLesson() ? `<button class="btn primary" data-lesson="${nextLesson().n}">Урок ${nextLesson().n} →</button>` : ""}</div>
    </div>
    ${l && passed ? hwBlock(l) : ""}
    ${mistakes}`;
}

function gapHtml(q, gap) {
  const parts = String(q).split("___");
  return parts.length > 1 ? esc(parts[0]) + gap + parts.slice(1).map(esc).join("___") : esc(q) + " " + gap;
}

function hwBlock(l) {
  const r = lessonRec(l.n);
  return `<h2>✍️ Домашнее задание</h2>
    <div class="card">
      <p>${esc(l.homework)}</p>
      <label>Напиши здесь (сохраняется автоматически)</label>
      <textarea id="hw-text" data-hw="${l.n}" placeholder="Write your text in English...">${esc(r.draft || "")}</textarea>
      <div class="btns" style="margin-top:10px">
        <button class="btn primary" data-hw-send="${l.n}">📤 Отправить Claude на проверку</button>
        ${r.hw ? `<span class="pill good" style="align-self:center">✓ Сдано ${fmtDate(r.hw)}</span>` : `<button class="btn good" data-hw-done="${l.n}">✓ Проверено (+30 XP)</button>`}
      </div>
      <p class="small muted" style="margin:8px 0 0">Claude исправит ошибки, перепишет текст правильно и даст 3 доп. задания на твои слабые места.</p>
    </div>`;
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
    setTimeout(() => inp.focus({ preventScroll: true }), 50);
  }
  const hw = $("#hw-text", root);
  if (hw) hw.oninput = () => { lessonRec(Number(hw.dataset.hw)).draft = hw.value; save(); };
  root.querySelectorAll("[data-hw-send]").forEach((b) => (b.onclick = () => {
    const l = COURSE.find((x) => x.n === Number(b.dataset.hwSend));
    const text = (hw && hw.value.trim()) || "";
    const p = hwPrompt(l, text);
    copyText(p); window.open(CLAUDE_URL, "_blank");
    toast(text ? "ДЗ скопировано — вставь в Claude" : "Задание скопировано — напиши текст в Claude");
  }));
  root.querySelectorAll("[data-hw-done]").forEach((b) => (b.onclick = () => {
    const r = lessonRec(Number(b.dataset.hwDone));
    if (!r.hw) { r.hw = today(); S.xp += 30; save(); toast("✍️ ДЗ сдано! +30 XP"); render(); }
  }));
}

// --- Сериалы ---
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

  return `<h1>Сериалы</h1><p class="muted">Всего просмотрено: ${totalEp} серий/фильмов</p>
    ${cur ? `<div class="hero"><div class="row"><div class="emoji">${cur.emoji}</div><div class="grow">
      <p class="small muted" style="margin:0">Сейчас смотрю</p><h3 style="margin:0">${esc(cur.title)}</h3></div></div>
      <div class="row between" style="margin-top:12px"><span>Серий: <b>${S.series[cur.id] || 0}</b></span>
      <div class="btns" style="flex:0"><button class="btn sm white" data-ep="-1">−</button><button class="btn sm white" data-ep="1">＋</button></div></div></div>` : ""}
    <details class="card" ${cur ? "" : "open"}><summary>📖 Как смотреть, чтобы реально учить</summary><ul>
      <li><b>Начни с мультиков</b> (уровень «Легко») — там говорят чётче. Потом переходи выше.</li>
      <li><b>Субтитры только английские.</b> Если совсем тяжело — сначала сцена с русскими, затем та же с английскими.</li>
      <li><b>Не ставь на паузу на каждом слове.</b> Понимаешь общий смысл — уже отлично. Выписывай максимум 5 слов за серию.</li>
      <li><b>Shadowing:</b> выбери 1 минуту, где много говорят. Повтори за героем фразу за фразой 5 раз, копируя интонацию.</li>
      <li><b>На Mac:</b> расширение <b>Language Reactor</b> для Chrome показывает двойные субтитры на Netflix и сохраняет слова.</li>
      <li><b>Пересматривай любимое.</b> Второй просмотр знакомой серии — лучшая тренировка на слух.</li>
    </ul></details>
    ${groups}`;
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
  return `<h1>Боссы</h1><p class="muted">Ролевые разговоры с Claude. Побеждай — открывай следующего. Рекомендуем 1 босса в неделю.</p>
    <div class="card"><div class="row between small" style="margin-bottom:6px"><span>Побеждено ${won} из ${BOSSES.length}</span><span class="muted">${BOSSES[Math.min(won, BOSSES.length - 1)].level}</span></div>
    <div class="bar"><i style="width:${Math.round((won / BOSSES.length) * 100)}%"></i></div></div>
    ${BOSSES.map((b, i) => {
      const st = bossState(i);
      const tries = (S.bosses[b.id] && S.bosses[b.id].tries) || 0;
      return `<div class="card boss ${st}" ${st !== "locked" ? `data-boss="${i}" style="cursor:pointer"` : ""}>
        <div class="node">${st === "locked" ? "🔒" : b.emoji}</div>
        <div class="grow"><p class="small muted" style="margin:0">Глава ${i + 1} · ${b.level}</p><h3 style="margin:0">${esc(b.title)}</h3>
        <p class="small muted" style="margin:0">${st === "won" ? "🏆 Побеждён" : st === "open" ? (tries ? `Попыток: ${tries}` : "Готов к бою") : "Победи предыдущего"}</p></div>
        ${st !== "locked" ? "<span>›</span>" : ""}</div>`;
    }).join("")}`;
}

function openBoss(i) {
  const b = BOSSES[i];
  const st = bossState(i);
  openModal(`
    <div class="row"><div class="emoji">${b.emoji}</div><div><p class="small muted" style="margin:0">Глава ${i + 1} · ${b.level}</p><h2 style="margin:0">${esc(b.title)}</h2></div></div>
    <p style="margin-top:12px">${esc(b.ru)}</p>
    <h3>🎯 Цели для победы</h3><ul>${b.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ul>
    <h3>🧰 Полезные фразы</h3>
    <div class="card flat">${b.phrases.map((p) => `<div class="row between" style="padding:4px 0"><span>${esc(p)}</span><button class="btn sm ghost" data-speak="${esc(p)}">🔊</button></div>`).join("")}</div>
    <p class="small muted">Claude в конце скажет: <b>🏆 BOSS DEFEATED</b> или <b>💀 TRY AGAIN</b>. Будь честной с собой 😉</p>
    <div class="stack">
      <button class="btn primary block" id="fight">⚔️ Начать бой (открыть Claude)</button>
      ${st === "won" ? `<p class="center small muted">Уже побеждён — можно сразиться ещё раз для тренировки.</p>` : `
      <div class="btns"><button class="btn good" id="win">🏆 Победила!</button><button class="btn" id="lose">💀 Не вышло</button></div>`}
      <button class="btn ghost block" id="cl">Закрыть</button>
    </div>`, (el) => {
    bind(el);
    $("#fight", el).onclick = () => { const t = bossPrompt(b); copyText(t); window.open(CLAUDE_URL, "_blank"); toast("Задание скопировано — вставь в Claude"); };
    $("#cl", el).onclick = closeModal;
    const w = $("#win", el), l = $("#lose", el);
    if (w) w.onclick = () => {
      S.bosses[b.id] = { won: today(), tries: ((S.bosses[b.id] || {}).tries || 0) + 1 };
      S.xp += 150; save(); closeModal(); confetti(); toast("🏆 Босс побеждён! +150 XP"); render();
    };
    if (l) l.onclick = () => {
      S.bosses[b.id] = { won: null, tries: ((S.bosses[b.id] || {}).tries || 0) + 1 };
      S.xp += 20; save(); closeModal(); toast("💪 +20 XP за попытку. Попробуй снова через пару дней!"); render();
    };
  });
}

// --- План ---
// 32 урока распределены на недели 1–22, недели 23–24 — повторение
const lessonsForWeek = (wk) => (typeof COURSE !== "undefined" ? COURSE : []).filter((l) => Math.ceil((l.n * 22) / 32) === wk);
function weekCard(w, now) {
  const series = (w.series || []).map((id) => SERIES.find((s) => s.id === id)).filter(Boolean);
  const boss = BOSSES.find((b) => b.id === w.boss);
  const ls = lessonsForWeek(w.week);
  return `<div class="card ${now ? "week-now" : ""}" ${now ? 'id="week-now"' : ""}>
    <div class="row between"><span class="pill ${now ? "accent" : ""}">Неделя ${w.week}${now ? " · сейчас" : ""}</span>${boss ? `<span class="pill red">${boss.emoji} босс</span>` : ""}</div>
    <h3 style="margin-top:8px">${esc(w.title)}</h3>
    <p class="small">${esc(w.goal)}</p>
    ${ls.length ? `<p class="small" style="margin:0">📝 Уроки ${ls.map((l) => `${l.n}${isPassed(l.n) ? " ✓" : ""}`).join(", ")}: ${ls.map((l) => esc(l.title)).join(" · ")}</p>` : w.week > 22 ? `<p class="small" style="margin:0">📝 Повторение всех уроков</p>` : ""}
    ${w.grammar && w.grammar.length ? `<p class="small" style="margin:0">📐 ${w.grammar.map(esc).join(", ")}</p>` : ""}
    ${series.length ? `<p class="small" style="margin:0">🍿 ${series.map((s) => s.emoji + " " + esc(s.title)).join(", ")}</p>` : ""}
    ${boss ? `<p class="small" style="margin:0">⚔️ ${esc(boss.title)}</p>` : ""}
    <p class="small" style="margin:0">🗣️ ${esc(w.speaking)}</p>
    <p class="small muted" style="margin:4px 0 0">🏁 ${esc(w.milestone)}</p>
  </div>`;
}
function openPlan() {
  const n = weekNo();
  openModal(`<h2 style="margin-top:0">План на ${PLAN.length} ${plural(PLAN.length, "неделю", "недели", "недель")}</h2>
    <p class="small muted">A2 → B1 примерно к 10–12 неделе, B2 к концу. Каждую неделю: фокус грамматики, сериал, босс и контрольная точка.</p>
    ${PLAN.map((w) => weekCard(w, w.week === n)).join("")}
    <button class="btn ghost block" id="cl">Закрыть</button>`, (el) => {
    $("#cl", el).onclick = closeModal;
    const cur = $("#week-now", el);
    if (cur) cur.scrollIntoView({ block: "center" });
  });
}

// --- Прогресс ---
function viewProgress() {
  const L = levelInfo();
  const k = today();
  const totalDays = Object.keys(S.days).filter((d) => dayCounted(d)).length;
  const totalEp = Object.values(S.series).reduce((a, b) => a + b, 0);
  const bossesWon = BOSSES.filter((b) => S.bosses[b.id] && S.bosses[b.id].won).length;
  const talks = Object.values(S.days).filter((d) => d.m.talk).length;

  // 12 недель, колонки — недели, начиная с понедельника
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

  return `<h1>Прогресс</h1>
    <div class="hero">
      <div class="row"><div style="font-size:30px">${L.rankIcon}</div><div class="grow"><p class="small muted" style="margin:0">Уровень ${L.level}</p><h2 style="margin:0">${L.rank}</h2></div></div>
      <div class="row between small" style="margin:12px 0 6px"><span>${S.xp} XP</span><span class="muted">до следующего: ${L.toNext}</span></div>
      <div class="bar"><i style="width:${L.pct}%"></i></div>
    </div>
    <div class="grid2">
      <div class="stat"><b>${streak()}</b><span>серия (рекорд ${S.bestStreak})</span></div>
      <div class="stat"><b>${totalDays}</b><span>дней засчитано</span></div>
      <div class="stat"><b>${learnedCount()}</b><span>слов выучено</span></div>
      <div class="stat"><b>${totalEp}</b><span>серий просмотрено</span></div>
      <div class="stat"><b>${talks}</b><span>разговоров</span></div>
      <div class="stat"><b>${bossesWon}/${BOSSES.length}</b><span>боссов</span></div>
    </div>
    <h2>Последние 12 недель</h2>
    <div class="card"><div class="heat">${cells}</div>
      <p class="small muted" style="margin:10px 0 0">Светлее — меньше заданий, ярче — больше. 🧊 голубой — заморозка.</p></div>

    ${PLAN.length ? `<h2>План</h2>${weekCard(currentWeek(), true).replace('id="week-now"', "")}
    <button class="btn block" data-act="plan" style="margin-bottom:12px">Открыть весь план на ${PLAN.length} ${plural(PLAN.length, "неделю", "недели", "недель")}</button>` : ""}

    <h2>Тест уровня</h2>
    <div class="card">
      <p>Текущий уровень: <b>${esc(lvl())}</b>${lastTest ? ` <span class="muted small">(тест ${fmtDate(lastTest.day)})</span>` : ""}</p>
      <p class="small muted">Раз в месяц Claude проверяет твой уровень. ${lastTest ? (nextTestIn > 0 ? `Следующий тест через ${nextTestIn} дн.` : "Пора пройти тест!") : "Пройди первый тест, чтобы знать стартовую точку."}</p>
      <div class="btns"><button class="btn primary" data-act="test">🧪 Пройти тест</button></div>
      <label>Результат теста</label>
      <div class="row"><select id="test-level">${["A1", "A2", "B1", "B2", "C1"].map((l) => `<option ${l === lvl() ? "selected" : ""}>${l}</option>`).join("")}</select>
      <button class="btn good" data-act="save-test">Сохранить</button></div>
      ${S.tests.length ? `<p class="small muted" style="margin-top:10px">История: ${S.tests.map((t) => `${t.level} (${fmtDate(t.day)})`).join(" → ")}</p>` : ""}
    </div>

    <h2>Настройки</h2>
    <div class="card">
      <label>Имя</label><input type="text" id="p-name" value="${esc(nm())}">
      <label>Темп — новых слов в день</label><select id="p-pace">${paceOptions(pace())}</select>
      <label>Моя цель (например, поездка)</label><input type="text" id="p-goal" value="${esc(S.profile.goalText || "")}" placeholder="Поездка в Лондон">
      <label>Дата цели</label><input type="date" id="p-date" value="${esc(S.profile.goalDate || "")}">
      <button class="btn primary block" data-act="save-profile" style="margin-top:12px">Сохранить</button>
    </div>
    <div class="card">
      <h3>💾 Резервная копия</h3>
      <p class="small muted">Прогресс хранится на этом устройстве. Чтобы перенести его на iPhone или Mac, скопируй код здесь и вставь на другом устройстве.</p>
      <div class="btns"><button class="btn" data-act="export">Скопировать код</button><button class="btn" data-act="import">Вставить код</button></div>
    </div>
    <div class="card">
      <h3>📲 Установить как приложение</h3>
      <p class="small"><b>iPhone:</b> открой сайт в Safari → кнопка «Поделиться» → «На экран „Домой“».</p>
      <p class="small"><b>Mac:</b> Safari → меню «Файл» → «Добавить в Dock». Или Chrome → значок установки в адресной строке.</p>
    </div>
    <button class="btn ghost block" data-act="reset" style="color:var(--bad)">Сбросить весь прогресс</button>
    <p class="small muted center" style="margin-top:16px">EnglishEasy · сделано с Claude 💜</p>`;
}

// ---------- Обработчики ----------
function bind(root) {
  root.querySelectorAll("[data-speak]").forEach((b) => (b.onclick = (e) => { e.stopPropagation(); speak(b.dataset.speak); }));
  root.querySelectorAll("[data-toggle]").forEach((b) => (b.onclick = () => {
    const id = b.dataset.toggle;
    const cur = !!dayRec().m[id];
    if (id === "series" && !cur) return markWatched();
    setMission(id, !cur); render();
  }));
  root.querySelectorAll("[data-seg]").forEach((b) => (b.onclick = () => { wordsSeg = b.dataset.seg; if (tab !== "words") tab = "words"; render(); }));
  root.querySelectorAll("[data-grade]").forEach((b) => (b.onclick = () => gradeCurrent(b.dataset.grade)));
  root.querySelectorAll("[data-pick]").forEach((b) => (b.onclick = () => { S.current = b.dataset.pick; save(); toast("Отличный выбор! 🍿"); render(); }));
  root.querySelectorAll("[data-ep]").forEach((b) => (b.onclick = () => {
    const id = S.current; S.series[id] = Math.max(0, (S.series[id] || 0) + Number(b.dataset.ep)); save(); render();
  }));
  root.querySelectorAll("[data-boss]").forEach((b) => (b.onclick = () => openBoss(Number(b.dataset.boss))));
  root.querySelectorAll("[data-del]").forEach((b) => (b.onclick = () => {
    if (!confirm("Удалить слово?")) return;
    S.custom = S.custom.filter((w) => w.id !== b.dataset.del); delete S.cards[b.dataset.del]; save(); render();
  }));
  bindLessons(root);
  root.querySelectorAll("[data-act]").forEach((b) => (b.onclick = (ev) => { ev.stopPropagation(); if (actions[b.dataset.act]) actions[b.dataset.act](); }));
}

function markWatched() {
  if (S.current) S.series[S.current] = (S.series[S.current] || 0) + 1;
  setMission("series", true); render();
}

function gradeCurrent(g) {
  const c = session.queue[session.idx];
  grade(c, g);
  session.count++;
  if (g === "again") { session.queue.push({ ...c, isNew: false }); session.rev.push(false); }
  session.idx++; session.shown = false;
  if (session.idx >= session.queue.length) setMission("words", true);
  render();
}

function addCustom(en, ru, ex) {
  en = en.trim(); ru = ru.trim();
  if (!en || !ru) return false;
  if (allCards().some((c) => c.en.toLowerCase() === en.toLowerCase())) return false;
  S.custom.push({ id: "c" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), en, ru, ex: (ex || "").trim() });
  return true;
}

const actions = {
  "go-words": () => { wordsSeg = "cards"; go("words"); },
  "go-series": () => go("series"),
  "go-bosses": () => go("bosses"),
  watched: markWatched,
  talk: () => promptModal("💬 Разговор дня", talkPrompt(), () => {}),
  report: () => promptModal("📋 Отчёт для строгого коуча", reportText(), () => { setMission("report", true); render(); }),
  test: () => promptModal("🧪 Тест уровня", testPrompt()),
  plan: openPlan,
  review: startReview,
  "l-close": () => { LV = null; window.scrollTo(0, 0); render(); },
  "l-learn": () => startLesson(LV.n, "learn"),
  "l-practice": () => startLesson(LV.n, "practice"),
  "l-check-in": () => { const el = $("#l-in"); const v = el ? el.value.trim() : ""; if (!v) return toast("Впиши ответ"); LV.typed = v; checkItem(v); },
  "l-check-order": () => { const e = LV.items[LV.idx]; const w = orderWords(e); checkItem(LV.line.map((i) => w[i]).join(" ")); },
  "l-next": nextItem,
  "start-cards": () => {
    const q = buildQueue();
    session = { queue: q, idx: 0, shown: false, count: 0, rev: q.map(() => Math.random() < 0.5) };
    render();
  },
  show: () => { session.shown = true; render(); const c = session.queue[session.idx]; if (c) speak(c.en); },
  "end-cards": () => { session = null; render(); },
  "add-word": () => {
    const ok = addCustom($("#w-en").value, $("#w-ru").value, $("#w-ex").value);
    if (!ok) return toast("Заполни слово и перевод (или такое уже есть)");
    save(); toast("Добавлено! Появится в карточках"); render();
  },
  "add-bulk": () => {
    const lines = $("#w-bulk").value.split("\n");
    let n = 0;
    for (const line of lines) {
      const m = line.replace(/^\s*[-•*\d.)]+\s*/, "").split(/\s+[—–-]\s+|\s*[—–]\s*/);
      if (m.length >= 2 && addCustom(m[0], m.slice(1).join(" — "))) n++;
    }
    save(); toast(n ? `Добавлено слов: ${n}` : "Не нашла строк в формате «english — русский»"); render();
  },
  "save-test": () => {
    const l = $("#test-level").value;
    const first = !S.tests.some((t) => t.day === today());
    S.tests.push({ day: today(), level: l });
    S.profile.level = l;
    if (first) S.xp += 50;
    save(); toast(`Уровень ${l} сохранён${first ? " · +50 XP" : ""}`); render();
  },
  "save-profile": () => {
    S.profile.name = $("#p-name").value.trim() || S.profile.name;
    S.profile.goalText = $("#p-goal").value.trim();
    S.profile.goalDate = $("#p-date").value;
    S.profile.pace = Number($("#p-pace").value);
    save(); toast("Сохранено"); render();
  },
  export: () => {
    const code = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
    copyText(code).then(() => toast("Код скопирован — вставь на другом устройстве"));
  },
  import: () => {
    openModal(`<h2 style="margin-top:0">Вставить код</h2>
      <p class="small muted">Текущий прогресс на этом устройстве будет заменён.</p>
      <textarea id="imp"></textarea>
      <div class="btns" style="margin-top:10px"><button class="btn primary" id="ok">Загрузить</button><button class="btn" id="cl">Отмена</button></div>`, (el) => {
      $("#cl", el).onclick = closeModal;
      $("#ok", el).onclick = () => {
        try {
          const data = JSON.parse(decodeURIComponent(escape(atob($("#imp", el).value.trim()))));
          if (!data.profile) throw new Error();
          S = Object.assign(defaultState(), data); save(); closeModal(); toast("Прогресс загружен!"); render();
        } catch (e) { toast("Код не подходит"); }
      };
    });
  },
  reset: () => {
    if (!confirm("Точно удалить весь прогресс? Это нельзя отменить.")) return;
    S = defaultState(); save(); session = null; onboarding();
  },
};

function paceOptions(cur) {
  return [[10, "10 — спокойно (~1 год до B2)"], [20, "20 — интенсив (~6 мес. до B2)"], [30, "30 — турбо (для сильной памяти)"]]
    .map(([v, t]) => `<option value="${v}" ${v === cur ? "selected" : ""}>${t}</option>`).join("");
}

// ---------- Первый запуск ----------
function onboarding() {
  openModal(`
    
    <h2 class="center" style="margin-top:6px">Welcome to EnglishEasy!</h2>
    <p class="center muted">Программа до уровня B2: сериалы, разговоры с Claude, слова и грамматика. 1–2 часа в день.</p>
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
        <li>7 дней подряд дают заморозку: она спасёт серию при пропуске.</li>
        <li>Грамматика по порядку: урок → задания → письменное ДЗ.</li>
        <li>Раз в неделю — босс: ролевой разговор с Claude.</li>
        <li>Вечером — короткий отчёт строгому коучу.</li>
      </ul>
    </div>
    <button class="btn primary block" id="o-go" style="margin-top:14px">Начать челлендж</button>`, (el) => {
    $("#o-go", el).onclick = () => {
      const name = $("#o-name", el).value.trim();
      if (!name) return toast("Напиши своё имя 🙂");
      S.profile = { name, level: $("#o-level", el).value, pace: Number($("#o-pace", el).value), goalText: $("#o-goal", el).value.trim(), goalDate: $("#o-date", el).value, startDate: today() };
      S.lastCheck = addDays(today(), -1);
      save(); closeModal(); tab = "today"; render(); confetti();
    };
  });
}

// ---------- Старт ----------
if (S.profile) { applyFreezes(); save(); render(); } else { render0(); onboarding(); }
function render0() { $("#view").innerHTML = ""; }

// Пересчёт при возвращении в приложение (новый день)
let lastSeenDay = today();
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && S.profile && today() !== lastSeenDay) {
    lastSeenDay = today(); session = null; applyFreezes(); save(); render();
  }
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
