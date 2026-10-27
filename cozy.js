"use strict";

// EnglishEasy — уютная история + личный английский.
// День: (разминка) → сцена → блокнот → задачи на бумаге → скажи о себе.

const KEY = "englisheasy.cozy.v1";
const CLAUDE_URL = "https://claude.ai/new";
const SRS_STEPS = [1, 3, 7, 14, 30]; // через сколько дней слово вернётся в разминку

// ---------- Даты ----------
const pad = (n) => String(n).padStart(2, "0");
const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseDay = (k) => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (k, n) => { const d = parseDay(k); d.setDate(d.getDate() + n); return dayKey(d); };
const today = () => dayKey();
const fmtDate = (k) => parseDay(k).toLocaleDateString("ru-RU", { day: "numeric", month: "long" });

// ---------- Состояние ----------
const defaults = () => ({ name: "", subs: true, voice: true, slow: false, days: {}, prog: {}, flags: {}, srs: {}, recallDone: {}, early: {}, active: [] });
let S = (() => { try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { return defaults(); } })();
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* приватный режим */ } };

const C = typeof COURSE !== "undefined" ? COURSE : { title: "", days: [], characters: [], locations: [] };
const DAYS = C.days.slice().sort((a, b) => a.day - b.day);
const CHARS = Object.fromEntries((C.characters || []).map((c) => [c.id, c]));
const LOCS = Object.fromEntries((C.locations || []).map((l) => [l.id, l]));
const getDay = (n) => DAYS.find((d) => d.day === n);
const rec = (n) => (S.days[n] = S.days[n] || { story: false, notebook: false, tasks: { marks: {}, done: false, shown: false }, speak: {}, done: null });

// ---------- Утилиты ----------
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const nm = (s) => String(s ?? "").replace(/\{name\}/g, S.name || "you");
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const norm = (s) => String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
function lev(a, b) {
  if (!a.length) return b.length; if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) { const cur = [i]; for (let j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
  return prev[b.length];
}
const close = (a, b) => { a = norm(a); b = norm(b); return !a || !b ? 0 : 1 - lev(a, b) / Math.max(a.length, b.length); };
let toastT;
function toast(m) { const el = $("#toast"); el.textContent = m; el.classList.remove("hidden"); clearTimeout(toastT); toastT = setTimeout(() => el.classList.add("hidden"), 2400); }
function copyText(t) { if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(t).catch(() => fb(t)); fb(t); return Promise.resolve(); function fb(x) { const ta = document.createElement("textarea"); ta.value = x; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (e) { /* ignore */ } ta.remove(); } }
const pl = (n, a, b, c) => { const x = n % 10, y = n % 100; return x === 1 && y !== 11 ? a : x >= 2 && x <= 4 && (y < 12 || y > 14) ? b : c; };
const words = (n) => `${n} ${pl(n, "слово", "слова", "слов")}`;
const dayWord = (n) => { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? "день" : a >= 2 && a <= 4 && (b < 12 || b > 14) ? "дня" : "дней"; };
const artImg = (id, cap) => `<div class="art">${id ? `<img src="art/${esc(id)}.svg" alt="" onerror="this.style.display='none'">` : ""}${cap ? `<span class="cap">${esc(cap)}</span>` : ""}</div>`;
function streak() { const set = new Set(S.active); let k = today(); if (!set.has(k)) k = addDays(k, -1); let n = 0; while (set.has(k)) { n++; k = addDays(k, -1); } return n; }
const markActive = () => { if (!S.active.includes(today())) S.active.push(today()); };

// ---------- Голоса ----------
const HAS_TTS = "speechSynthesis" in window;
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let VOICES = { f: [], m: [], any: null };
function loadVoices() {
  if (!HAS_TTS) return;
  const en = speechSynthesis.getVoices().filter((v) => /^en[-_]/i.test(v.lang));
  const F = /samantha|karen|moira|tessa|fiona|victoria|ava|allison|susan|zoe|serena|kate|nicky|female|aria|jenny|sonia|libby/i;
  const M = /daniel|alex|fred|aaron|arthur|oliver|rishi|tom|gordon|male|guy|ryan|thomas|evan/i;
  VOICES = { f: en.filter((v) => F.test(v.name)), m: en.filter((v) => M.test(v.name) && !F.test(v.name)), any: en.find((v) => /en-US/i.test(v.lang)) || en[0] || null };
}
if (HAS_TTS) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function say(who, text, force) {
  if (!HAS_TTS || (!S.voice && !force) || !text) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(nm(text).replace(/[—/]/g, ", ").replace(/_{2,}/g, "…"));
  u.lang = "en-US";
  const c = CHARS[who], slow = S.slow ? 0.82 : 1;
  if (c && c.voice) {
    const list = c.voice.gender === "male" ? VOICES.m : VOICES.f;
    const idx = Math.max(0, (C.characters || []).findIndex((x) => x.id === who));
    const v = list.length ? list[idx % list.length] : VOICES.any; if (v) u.voice = v;
    u.pitch = Math.max(0.6, Math.min(1.5, c.voice.pitch || 1)); u.rate = Math.max(0.6, Math.min(1.1, (c.voice.rate || 0.95) * slow));
  } else { const v = VOICES.f[0] || VOICES.any; if (v) u.voice = v; u.rate = 0.9 * slow; }
  speechSynthesis.speak(u);
}

// Запись голоса
function makeRecorder(onStop) {
  let rec = null, chunks = [], stream = null, t0 = 0;
  return {
    get active() { return !!rec && rec.state === "recording"; },
    async start() {
      if (!navigator.mediaDevices || !window.MediaRecorder) { toast("Запись недоступна — просто скажи вслух"); return false; }
      try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { toast("Разреши доступ к микрофону"); return false; }
      chunks = []; rec = new MediaRecorder(stream);
      rec.ondataavailable = (e) => e.data && e.data.size && chunks.push(e.data);
      rec.onstop = () => { stream.getTracks().forEach((t) => t.stop()); onStop(URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || "audio/mp4" })), (Date.now() - t0) / 1000); };
      if (HAS_TTS) speechSynthesis.cancel();
      rec.start(); t0 = Date.now(); return true;
    },
    stop() { if (rec && rec.state === "recording") rec.stop(); },
  };
}

// ---------- Доступ к дням ----------
function dayStatus(n) {
  const r = S.days[n];
  if (r && r.done) return "done";
  if (n === DAYS[0]?.day) return "open";
  const prev = S.days[n - 1];
  if (prev && prev.done) return prev.done < today() || S.early[n] ? "open" : "tomorrow";
  if (r && (r.story || r.notebook)) return "open";
  return "locked";
}
const currentDay = () => DAYS.find((d) => dayStatus(d.day) !== "done");
const STEPS = [["story", "Сцена"], ["notebook", "Блокнот"], ["tasks", "Задачи"], ["speak", "Скажи о себе"]];
const stepDone = (n, s) => { const r = S.days[n]; if (!r) return false; return s === "tasks" ? r.tasks.done : s === "speak" ? Object.keys(r.speak || {}).length >= (getDay(n).speak || []).length : !!r[s]; };
const nextStep = (n) => (STEPS.find(([s]) => !stepDone(n, s)) || [null])[0];

// ---------- Разминка: вспомни слова без блокнота ----------
const dueWords = () => Object.entries(S.srs).filter(([, w]) => w.due <= today()).sort((a, b) => a[1].due.localeCompare(b[1].due)).slice(0, 6).map(([en, w]) => ({ en, ...w }));
const needRecall = () => !S.recallDone[today()] && dueWords().length > 0;
function addWordsToSRS(d) {
  (d.notebook.words || []).forEach((w) => { if (!S.srs[w.en]) S.srs[w.en] = { ru: w.ru, emoji: w.emoji, day: d.day, box: 0, due: addDays(today(), 1) }; });
}

// ---------- Навигация ----------
let V = { screen: "home" }; // { screen: 'home' | 'step' | 'done', n, step }
function go(v) { if (HAS_TTS) speechSynthesis.cancel(); V = v; window.scrollTo(0, 0); render(); }
function openDay(n) {
  if (needRecall()) return startRecall(n);
  const s = nextStep(n);
  if (!s) return go({ screen: "done", n });
  if (s === "story") return startStory(n);
  go({ screen: "step", n, step: s });
}
function completeStep(n, s) {
  const r = rec(n);
  if (s === "story") r.story = true;
  if (s === "notebook") { if (!r.notebook) addWordsToSRS(getDay(n)); r.notebook = true; }
  if (!nextStep(n)) { if (!r.done) { r.done = today(); markActive(); } save(); return go({ screen: "done", n }); }
  save();
  const ns = nextStep(n);
  if (ns === "story") return startStory(n);
  go({ screen: "step", n, step: ns });
}
const topbar = (n, step) => !n ? `<div class="topbar"><button class="icon-btn" data-act="home" aria-label="Домой">✕</button><div class="grow"></div><span class="small muted">Разминка</span></div>` : `<div class="topbar">
    <button class="icon-btn" data-act="home" aria-label="Домой">✕</button>
    <div class="stepper">${STEPS.map(([s]) => `<i class="${stepDone(n, s) ? "ok" : s === step ? "on" : ""}"></i>`).join("")}</div>
    <span class="small muted" style="white-space:nowrap">День ${n}</span>
  </div>`;

// ---------- Разминка ----------
let RC = null; // { n, list, i, shown, ok }
function startRecall(n) { RC = { n, list: shuffle(dueWords()), i: 0, shown: false, ok: 0 }; go({ screen: "recall", n }); }
function viewRecall() {
  if (RC.i >= RC.list.length) {
    return `${topbar(RC.n, "story")}<div class="card center" style="padding:26px">
      <h2>Разминка готова</h2><p class="muted">Вспомнила ${RC.ok} из ${RC.list.length}. Забытые слова вернутся завтра — так они точно останутся в голове.</p>
      <button class="btn primary block" data-act="recall-end">Дальше — сцена</button></div>`;
  }
  const w = RC.list[RC.i];
  return `${topbar(RC.n, "story")}
    <p class="label" style="margin-top:4px">Разминка · ${RC.i + 1} из ${RC.list.length}</p>
    <p class="muted small">Вспомни слово по-английски <b>без блокнота</b>. Скажи вслух, потом проверь.</p>
    <div class="card recall">
      <div class="big">${esc(w.emoji || "✨")}</div>
      <div class="ru-big">${esc(w.ru)}</div>
      ${RC.shown ? `<div class="en-big">${esc(w.en)}</div>` : ""}
    </div>
    ${RC.shown ? `<div class="row"><button class="btn grow" data-act="recall-no">Не вспомнила</button><button class="btn primary grow" data-act="recall-ok">Вспомнила</button></div>`
      : `<button class="btn primary block" data-act="recall-show">Показать</button>`}`;
}

// ---------- Сцена (плеер) ----------
let P = null;
const subsOn = () => S.subs;
const visible = (b) => !b || ((!b.if || P.flags[b.if]) && (!b.ifnot || !P.flags[b.ifnot]));
function startStory(n) {
  const d = getDay(n);
  const saved = S.prog[n];
  P = saved ? { n, items: d.beats, i: saved.i, ins: saved.ins || [], flags: { ...S.flags, ...(saved.flags || {}) }, art: saved.art || d.cover, view: null }
    : { n, items: d.beats, i: 0, ins: [], flags: { ...S.flags }, art: d.cover, view: null };
  skipHidden();
  V = { screen: "story", n }; window.scrollTo(0, 0); render(); speakCur();
}
const cur = () => (P.ins.length ? P.ins[0] : P.items[P.i]);
function skipHidden() {
  for (;;) {
    if (P.ins.length) { if (visible(P.ins[0])) break; P.ins.shift(); continue; }
    if (P.i >= P.items.length) break;
    const b = P.items[P.i];
    if (b.t === "line" && !visible(b)) { P.i++; continue; }
    break;
  }
  const b = cur();
  if (b && b.t === "scene" && b.art) P.art = b.art;
}
const persist = () => { S.prog[P.n] = { i: P.i, ins: P.ins, flags: P.flags, art: P.art }; save(); };
function step(lines) {
  if (P.ins.length) P.ins.shift(); else P.i++;
  if (lines && lines.length) P.ins = lines.map((l) => ({ t: "line", ...l })).concat(P.ins);
  P.view = null; P.pop = null; skipHidden();
  if (!P.ins.length && P.i >= P.items.length) return finishStory();
  persist(); render(); speakCur();
}
function speakCur() { const b = cur(); if (!b) return; if (b.t === "line") say(b.who, b.en); if (b.t === "choice" || b.t === "check") say(b.who || "narrator", b.q_en); }
function finishStory() {
  Object.assign(S.flags, P.flags); delete S.prog[P.n];
  const n = P.n; P = null; save();
  completeStep(n, "story");
}
function kwHtml(text, words) {
  const raw = nm(text), ranges = [];
  (words || []).forEach((w, wi) => {
    const pat = w.en.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
    const m = new RegExp(`(^|[^A-Za-z])(${pat}(?:s|es|ed|d|ing)?)(?![A-Za-z])`, "i").exec(raw);
    if (m) { const s = m.index + m[1].length; ranges.push([s, s + m[2].length, wi]); }
  });
  ranges.sort((a, b) => a[0] - b[0]);
  let html = "", at = 0;
  for (const [s, e, wi] of ranges) { if (s < at) continue; html += esc(raw.slice(at, s)) + `<button class="kw" data-kw="${wi}">${esc(raw.slice(s, e))}</button>`; at = e; }
  return html + esc(raw.slice(at));
}
const whoName = (id) => (id && id !== "narrator" && CHARS[id] ? CHARS[id].name : "");
const dayWords = () => (getDay(P.n).notebook.words || []);
function viewStory() {
  const b = cur(); const words = dayWords();
  const loc = LOCS[P.art];
  const head = `${topbar(P.n, "story")}${artImg(P.art, loc ? loc.name_en : "")}`;
  const ru = (t) => (subsOn() && t ? `<div class="ru">${esc(nm(t))}</div>` : "");
  let stage = "", ctrl = "";
  if (b.t === "scene") {
    stage = `<div class="stage" data-act="next"><div class="who" style="color:var(--sea)">${esc(b.emoji || "")} ${esc(nm(b.place_en))}</div>${ru(b.place_ru)}</div>`;
    ctrl = `<div class="pctrl"><button class="btn primary block" data-act="next">Дальше</button></div>`;
  } else if (b.t === "line") {
    const narr = !whoName(b.who);
    const showRu = subsOn() || (P.view && P.view.ru);
    stage = `<div class="stage" data-act="next">${narr ? "" : `<div class="who">${esc(whoName(b.who))}</div>`}
      <div class="en ${narr ? "narr" : ""}">${kwHtml(b.en, words)}</div>${showRu ? `<div class="ru">${esc(nm(b.ru))}</div>` : ""}</div>`;
    ctrl = `<div class="pctrl"><button class="icon-btn" data-act="replay">🔊</button>${subsOn() ? "" : `<button class="btn sm ghost" data-act="ru">Перевод</button>`}<button class="btn primary grow" data-act="next">Дальше</button></div>`;
  } else if (b.t === "choice") {
    stage = `<div class="stage" style="cursor:default">${whoName(b.who) ? `<div class="who">${esc(whoName(b.who))}</div>` : ""}
      <div class="en">${kwHtml(b.q_en, words)}</div>${ru(b.q_ru)}
      <div class="opts">${b.options.map((o, i) => `<button class="opt" data-choice="${i}">${esc(nm(o.en))}${subsOn() ? `<small>${esc(nm(o.ru))}</small>` : ""}</button>`).join("")}</div></div>`;
  } else if (b.t === "check") {
    if (!P.view) P.view = { order: shuffle(b.options.map((_, i) => i)), wrong: [], ok: false };
    const v = P.view;
    stage = `<div class="stage" style="cursor:default">${whoName(b.who) ? `<div class="who">${esc(whoName(b.who))}</div>` : ""}
      <div class="en">${kwHtml(b.q_en, words)}</div>${ru(b.q_ru)}
      <div class="opts">${v.order.map((i) => { const o = b.options[i]; const cls = v.ok && o.correct ? "good" : v.wrong.includes(i) ? "bad" : "";
        return `<button class="opt ${cls}" data-check="${i}" ${v.ok || v.wrong.includes(i) ? "disabled" : ""}>${esc(nm(o.en))}${subsOn() ? `<small>${esc(nm(o.ru))}</small>` : ""}</button>`; }).join("")}</div>
      ${v.wrong.length && !v.ok ? `<div class="react">${(b.wrong || []).map((l) => `${whoName(l.who) ? `<b>${esc(whoName(l.who))}:</b> ` : ""}${esc(nm(l.en))}${subsOn() ? `<div class="muted small">${esc(nm(l.ru))}</div>` : ""}`).join("<br>") || "Подумай ещё раз"}</div>` : ""}</div>`;
    if (v.ok) ctrl = `<div class="pctrl"><button class="btn primary block" data-act="next">Дальше</button></div>`;
  } else if (b.t === "say") {
    if (!P.view) P.view = { text: "", done: false, ok: false, hint: false };
    const v = P.view;
    stage = `<div class="stage" style="cursor:default"><div class="who">Твой ответ · ${esc(whoName(b.to) || "герою")}</div>
      <div class="task-ru">${esc(nm(b.task_ru))}</div>
      ${v.hint && b.hint_ru ? `<p class="muted" style="margin-top:8px">Подсказка: ${esc(nm(b.hint_ru))}</p>` : ""}
      <textarea class="say-in" id="say-in" rows="2" placeholder="По-английски. Можно надиктовать: 🎤 на клавиатуре" ${v.done ? "disabled" : ""}>${esc(v.text)}</textarea>
      ${v.done ? `<div class="result ${v.ok ? "good" : ""}">${v.ok ? "Отлично, тебя поняли!" : "Почти! Вот как можно сказать:"}<div style="margin-top:6px;font-family:var(--serif);font-size:18px"><b>${esc(nm(b.example_en))}</b></div>${b.example_ru ? `<div class="small muted">${esc(nm(b.example_ru))}</div>` : ""}</div>` : ""}</div>`;
    ctrl = v.done ? `<div class="pctrl"><button class="btn primary block" data-act="next">Дальше</button></div>`
      : `<div class="pctrl" style="justify-content:center">${b.hint_ru && !v.hint ? `<button class="btn sm ghost" data-act="hint">Подсказка</button>` : ""}<button class="btn sm ghost" data-act="dunno">Не знаю</button></div>
         <div class="pctrl"><button class="btn primary block" data-act="answer">Ответить</button></div>`;
  }
  const pop = P.pop ? `<div class="pop row"><div class="grow"><b>${esc(P.pop.emoji || "")} ${esc(P.pop.en)}</b><div class="muted">${esc(P.pop.ru)}</div></div><button class="icon-btn" data-act="popsay">🔊</button><button class="icon-btn" data-act="popclose">✕</button></div>` : "";
  return `<div class="player">${head}${stage}${ctrl}</div>${pop}`;
}
function sayOk(text, b) { const t = " " + norm(text) + " "; return (b.accept || []).some((a) => { const k = norm(a); return k && t.includes(k); }) || close(text, nm(b.example_en)) >= 0.7; }

// ---------- Блокнот ----------
function pageHtml(d, opts = {}) {
  const nb = d.notebook;
  return `<div class="page">
    <p class="hand muted small" style="margin:0 0 4px">${opts.date ? esc(opts.date) + " · " : ""}День ${d.day}</p>
    <h3 style="font-size:26px">${esc(d.title)}</h3>
    <h3>Words</h3>
    ${nb.words.map((w, i) => `<div class="nb-word"><div class="emo">${esc(w.emoji)}</div><div class="grow">
        <div><span class="en-w">${esc(w.en)}</span> <span class="ru-w">— ${esc(w.ru)}</span>${opts.noSpeak ? "" : ` <button class="icon-btn" style="width:30px;height:30px;font-size:14px" data-sayw="${esc(w.en)}">🔊</button>`}</div>
        <div class="nb-ex"><i>${esc(nm(w.story_ex))}</i></div>
        <div class="nb-ex">✍️ ${esc(nm(w.my_ex))} <span class="muted">— ${esc(nm(w.my_ex_ru))}</span></div>
      </div></div>`).join("")}
    <h3 style="margin-top:12px">Phrases for life</h3>
    ${nb.phrases.map((p) => `<div class="nb-word"><div class="emo">💬</div><div class="grow"><div><span class="en-w">${esc(nm(p.en))}</span>${opts.noSpeak ? "" : ` <button class="icon-btn" style="width:30px;height:30px;font-size:14px" data-sayw="${esc(nm(p.en))}">🔊</button>`}</div><div class="nb-ex">${esc(nm(p.ru))} <span class="muted">· ${esc(p.when_ru)}</span></div></div></div>`).join("")}
    <h3 style="margin-top:12px">Rule · ${esc(nb.rule.title_ru)}</h3>
    <div class="formula">${nb.rule.rows.map((r) => `<div class="fr">${r.map((x) => `<span class="fb">${esc(x)}</span>`).join("")}</div>`).join("")}</div>
    ${nb.rule.examples.map((e) => `<div class="nb-ex"><span class="hand" style="font-size:18px">${esc(nm(e.en))}</span> <span class="muted">— ${esc(nm(e.ru))}</span></div>`).join("")}
    <p class="nb-ex" style="margin-top:8px">💡 ${esc(nb.rule.tip_ru)}</p>
    <div class="mistake">${esc(nb.rule.mistake)}</div>
  </div>`;
}
function viewNotebook(n) {
  const d = getDay(n);
  return `${topbar(n, "notebook")}
    <h2>Перепиши в свой блокнот</h2>
    <p class="muted small">Пиши от руки — так слова запоминаются в разы лучше. Сначала английское слово, потом перевод и <b>свой пример</b>. Можно рисовать маленькие картинки вместо эмодзи 🙂</p>
    ${pageHtml(d, { date: fmtDate(today()) })}
    <details class="card"><summary style="cursor:pointer;font-weight:600">Как оформить страницу</summary>
      <ul class="small" style="padding-left:18px;margin:10px 0 0">
        <li>Сверху — дата и номер дня.</li><li>Слова — в столбик, перевод закрой ладонью и проверяй себя.</li>
        <li>Фразы — подчеркни ключевое слово.</li><li>Правило — нарисуй рамками, как на схеме, разными цветами.</li>
        <li>Сфотографируй страницу: через месяц будет приятно листать.</li></ul></details>
    <button class="btn primary block" data-act="nb-done" style="margin-top:6px">Я переписала ✓</button>`;
}

// ---------- Задачи на бумаге ----------
const KIND_RU = { translate: "Переведи", gap: "Вставь слово", question: "Задай вопрос", order: "Собери предложение", fix: "Исправь ошибку", choose: "Выбери форму", write: "Напиши о себе" };
function viewTasks(n) {
  const d = getDay(n), r = rec(n), t = r.tasks;
  const marked = Object.keys(t.marks).length, ok = Object.values(t.marks).filter(Boolean).length;
  return `${topbar(n, "tasks")}
    <h2>Реши в блокноте</h2>
    <p class="muted small">Запиши номер и ответ на бумаге. Когда решишь все ${d.tasks.length}, нажми «Проверить» и отметь, что получилось.</p>
    <div class="card">${d.tasks.map((x, i) => `<div class="task">
        <div class="small"><span class="n">${i + 1}.</span><b>${esc(KIND_RU[x.kind] || "")}</b> · <span class="muted">${esc(nm(x.task_ru))}</span></div>
        <div class="q">${esc(nm(x.q))}</div>
        ${t.shown ? `<div class="ans"><div style="font-family:var(--serif);font-size:17px"><b>${esc(nm(x.answer))}</b></div>
            ${x.alt && x.alt.length ? `<div class="small muted">Тоже верно: ${x.alt.map((a) => esc(nm(a))).join(" · ")}</div>` : ""}
            <div class="small" style="margin-top:4px">${esc(x.note_ru)}</div></div>
          <div class="marks"><button class="btn sm ${t.marks[i] === true ? "on-ok" : ""}" data-mark="${i}" data-v="1">✓ Верно</button><button class="btn sm ${t.marks[i] === false ? "on-no" : ""}" data-mark="${i}" data-v="0">✗ Ошибка</button></div>` : ""}
      </div>`).join("")}</div>
    ${!t.shown ? `<button class="btn primary block" data-act="tasks-show">Я решила — проверить</button>`
      : marked < d.tasks.length ? `<p class="center muted small">Отметь каждую задачу: ${marked} из ${d.tasks.length}</p>`
      : `<div class="card center"><h2>${ok} из ${d.tasks.length}</h2><p class="muted" style="margin:0">${ok >= d.tasks.length - 1 ? "Отлично! Правило в голове." : ok >= d.tasks.length / 2 ? "Хорошо. Ошибки исправь в блокноте другим цветом — это лучший способ их запомнить." : "Перечитай правило в блокноте и исправь ошибки цветной ручкой. Завтра будет легче."}</p></div>
        <button class="btn primary block" data-act="tasks-done">Дальше</button>`}`;
}

// ---------- Скажи о себе ----------
const REC = {}; // записи голоса текущего дня: { i: url }
let recorder = null, recIdx = null;
function viewSpeak(n) {
  const d = getDay(n), r = rec(n);
  const all = d.speak.every((_, i) => r.speak[i]);
  return `${topbar(n, "speak")}
    <h2>Скажи о себе вслух</h2>
    <p class="muted small">Это твоя настоящая речь: говори про себя, свою работу и планы. Сначала скажи сама, потом сравни с примером. Можно записать себя и послушать.</p>
    ${d.speak.map((s, i) => `<div class="card">
      <p style="margin:0 0 6px"><b>${i + 1}. ${esc(nm(s.prompt_ru))}</b></p>
      <p style="font-family:var(--serif);font-size:19px;margin:0 0 10px">${esc(nm(s.template_en)).replace(/_{2,}/g, '<span style="color:var(--clay)">____</span>')}</p>
      <div class="row" style="flex-wrap:wrap;gap:8px">
        <button class="btn sm ${recIdx === i ? "on-no" : ""}" data-rec="${i}">${recIdx === i ? "■ Стоп" : "● Записать себя"}</button>
        <button class="btn sm ghost" data-sample="${i}">Пример</button>
        <button class="btn sm ${r.speak[i] ? "primary" : ""}" data-spoke="${i}">${r.speak[i] ? "✓ Сказала" : "Сказала"}</button>
      </div>
      ${REC[i] ? `<audio controls src="${REC[i]}" style="width:100%;margin-top:10px"></audio>` : ""}
      <div id="sample-${i}" style="display:none" class="result"><div style="font-family:var(--serif);font-size:17px"><b>${esc(nm(s.sample_en))}</b></div><div class="small muted">${esc(nm(s.sample_ru))}</div></div>
    </div>`).join("")}
    <button class="btn primary block" data-act="speak-done" ${all ? "" : "disabled"}>Готово</button>`;
}

// ---------- Итог дня ----------
function talkPrompt(d) {
  return `Hi Claude! Be my friendly English speaking partner for a 10-minute VOICE conversation.
About me: ${S.name || "I"}, 24, Russian speaker, English level A2. I work as a learning methodologist (instructional designer) in EdTech and I build products with AI tools. I plan to travel and to work for an international company.
Today I learned these words: ${d.notebook.words.map((w) => w.en).join(", ")}.
Phrases: ${d.notebook.phrases.map((p) => nm(p.en)).join(" | ")}.
Grammar: ${d.notebook.rule.title_ru}.
Rules: speak simple English (A2), short sentences, ONE question at a time, wait for my answer. Ask about my real life (work, AI, travel plans, series) so I must USE today's words and phrases. If I make a mistake, repeat my sentence correctly in a natural way (recast), and only every 3–4 answers give a tiny tip in Russian. If I'm stuck or speak Russian, help me say it in English. At the end, in Russian: what I did well, 3 sentences to write in my notebook (correct versions of my mistakes). Start!`;
}
function viewDone(n) {
  const d = getDay(n), r = rec(n);
  const nx = getDay(n + 1), st = nx ? dayStatus(nx.day) : null;
  const t = r.tasks, ok = Object.values(t.marks || {}).filter(Boolean).length;
  return `${artImg(d.cover, "")}
    <div class="center" style="margin-top:16px">
      <p class="muted small" style="margin:0">День ${d.day} пройден${streak() > 1 ? ` · 🔥 ${streak()} ${dayWord(streak())} подряд` : ""}</p>
      <h1>${esc(d.title)}</h1>
      <p class="muted">${words(d.notebook.words.length)} в блокноте · задачи ${ok}/${d.tasks.length}</p>
      ${d.hook_ru ? `<div class="card" style="text-align:left"><p class="small muted" style="margin:0 0 4px">Завтра в истории</p><p style="margin:0">${esc(nm(d.hook_ru))}</p></div>` : ""}
    </div>
    <div class="card">
      <p style="margin:0 0 4px"><b>Хочешь поговорить вживую?</b> <span class="muted small">по желанию, 10 минут</span></p>
      <p class="muted small">Claude поговорит с тобой голосом про твою жизнь и работу — так, чтобы ты использовала сегодняшние слова. В конце даст 3 фразы для блокнота.</p>
      <button class="btn block" data-act="talk">Открыть Claude</button>
    </div>
    ${nx ? (st === "open" ? `<button class="btn primary block" data-day="${nx.day}">День ${nx.day}</button>`
      : `<div class="card center"><b>День ${nx.day} откроется завтра</b><p class="muted small" style="margin:4px 0 8px">Завтра начнём с разминки — вспомнишь сегодняшние слова без блокнота.</p>
         <button class="btn sm ghost" data-act="early" data-n="${nx.day}">Есть силы — открыть сейчас</button></div>`)
      : `<div class="card center"><b>Это последний день сезона!</b><p class="muted small" style="margin:4px 0 0">Продолжение уже пишется.</p></div>`}
    <button class="btn ghost block" data-act="home" style="margin-top:8px">На главную</button>`;
}

// ---------- Главная ----------
function viewHome() {
  const d = currentDay();
  const st2 = streak();
  if (!d) {
    return `${artImg((DAYS[DAYS.length - 1] || {}).cover)}<h1 class="hero-title">${esc(C.title)}</h1>
      <div class="card"><h2>Сезон пройден!</h2><p class="muted" style="margin:0">Продолжение уже пишется. Пока — листай блокнот и повторяй разминку каждый день.</p></div>
      ${needRecall() ? `<button class="btn primary block" data-act="recall-only">Разминка · ${words(dueWords().length)}</button>` : ""}
      ${homeFoot()}`;
  }
  const st = dayStatus(d.day);
  const r = S.days[d.day];
  const startedDay = r && (r.story || r.notebook || S.prog[d.day]);
  const steps = [needRecall() && st === "open" ? ["recall", `Разминка: вспомни ${words(dueWords().length)}`] : null, ...STEPS].filter(Boolean);
  const nowStep = needRecall() && st === "open" ? "recall" : nextStep(d.day);
  return `<p class="muted small" style="margin:0 0 10px">${S.name ? `Привет, ${esc(S.name)}` : "EnglishEasy"}${st2 ? ` · 🔥 ${st2} ${dayWord(st2)} подряд` : ""}</p>
    ${artImg(d.cover, LOCS[d.cover] ? LOCS[d.cover].name_en : "")}
    <p class="muted small" style="margin:14px 0 0">${esc(C.title)} · День ${d.day} из ${DAYS.length}</p>
    <h1 style="margin-top:2px">${esc(d.title)}</h1>
    <p class="muted">${esc(nm(d.logline_ru))}</p>
    ${st === "open" ? `<div class="steps">${steps.map(([s, t], i) => {
        const done = s !== "recall" && stepDone(d.day, s);
        return `<div class="step ${done ? "done" : s === nowStep ? "now" : ""}"><div class="dot">${done ? "✓" : i + 1}</div><div class="grow">${t}</div></div>`; }).join("")}</div>
      <button class="btn primary block" data-day="${d.day}">${startedDay ? "Продолжить" : "Начать день · ~35 мин"}</button>`
      : `<div class="card center"><b>Новый день откроется завтра</b><p class="muted small" style="margin:4px 0 0">А пока можно полистать блокнот.</p></div>
         ${needRecall() ? `<button class="btn primary block" data-act="recall-only">Разминка · ${words(dueWords().length)}</button>` : ""}`}
    ${!Object.keys(S.days).length ? `<p class="muted small center" style="margin-top:12px">${esc(nm(C.premise_ru || ""))}</p>` : ""}
    <div class="label">Сезон 1</div>
    <div class="days">${DAYS.map((x) => { const s = dayStatus(x.day); return `<div class="daybox ${s === "done" ? "done" : s === "open" ? "open" : ""}" ${s === "done" || s === "open" ? `data-day="${x.day}"` : ""}>${s === "done" ? "✓" : x.day}</div>`; }).join("")}</div>
    ${homeFoot()}`;
}
const homeFoot = () => `<div class="foot"><button class="btn sm" data-act="book">Мой блокнот</button><button class="btn sm" data-act="settings">Настройки</button><button class="btn sm" data-act="help">Как это работает</button></div>`;

// ---------- Окна ----------
function sheet(html, mount) { $("#sheet-card").innerHTML = html; $("#sheet").classList.remove("hidden"); $("#sheet-card").scrollTop = 0; if (mount) mount($("#sheet-card")); bindCommon($("#sheet-card")); }
function closeSheet() { $("#sheet").classList.add("hidden"); $("#sheet-card").innerHTML = ""; }
$("#sheet").addEventListener("click", (e) => { if (e.target.id === "sheet" && S.name) closeSheet(); });
const HELP = `<ol style="padding-left:20px;margin:8px 0 0">
  <li style="margin-bottom:6px"><b>Разминка</b> — вспоминаешь слова прошлых дней без блокнота (через 1, 3, 7, 14 дней).</li>
  <li style="margin-bottom:6px"><b>Сцена</b> — 5–7 минут истории с картинками и субтитрами. Подчёркнутые слова нажимаются.</li>
  <li style="margin-bottom:6px"><b>Блокнот</b> — переписываешь от руки 8 слов, 3 фразы для жизни и правило-схему.</li>
  <li style="margin-bottom:6px"><b>Задачи</b> — решаешь 8 задач на бумаге, потом проверяешь себя.</li>
  <li><b>Скажи о себе</b> — 3 фразы вслух про свою работу, жизнь и планы.</li></ol>`;
function onboarding() {
  sheet(`<h2>Привет!</h2>
    <p class="muted">Каждый день — маленькая глава уютной истории и твой личный английский: блокнот, задачи и речь про твою жизнь. Около 35 минут.</p>
    ${HELP}
    <p class="small" style="margin:14px 0 0">📒 Понадобится бумажный блокнот и ручка (лучше 2–3 цвета).</p>
    <p style="margin:14px 0 6px"><b>Как тебя зовут?</b></p>
    <input type="text" id="ob-name" placeholder="Имя (можно латиницей)">
    <button class="btn primary block" id="ob-go" style="margin-top:14px">Начать</button>`, (el) => {
    $("#ob-go", el).onclick = () => { const v = $("#ob-name", el).value.trim(); if (!v) return toast("Напиши имя"); S.name = v; save(); closeSheet(); render(); };
  });
}
function settings() {
  const seg = (k, a, b) => `<div class="seg"><button data-set="${k}" data-val="1" class="${S[k] ? "on" : ""}">${a}</button><button data-set="${k}" data-val="0" class="${!S[k] ? "on" : ""}">${b}</button></div>`;
  sheet(`<h2>Настройки</h2>
    <p class="muted small" style="margin:12px 0 6px">Имя</p><input type="text" id="st-name" value="${esc(S.name)}">
    <div style="margin-top:8px">
      <div class="switch"><span>Русские субтитры в сцене</span>${seg("subs", "Вкл", "Выкл")}</div>
      <div class="switch"><span>Озвучка</span>${seg("voice", "Вкл", "Выкл")}</div>
      <div class="switch" style="border-bottom:0"><span>Скорость речи</span>${seg("slow", "Медленно", "Обычно")}</div>
    </div>
    <button class="btn primary block" id="st-save" style="margin-top:12px">Готово</button>
    <p class="muted small" style="margin-top:18px">Прошлые версии: <a href="s303/" style="color:var(--sea)">сериал «3:03»</a> · <a href="classic/" style="color:var(--sea)">упражнения и карточки</a></p>
    <button class="btn ghost block" id="st-reset" style="color:var(--clay)">Начать курс заново</button>`, (el) => {
    el.querySelectorAll("[data-set]").forEach((b) => (b.onclick = () => { S[b.dataset.set] = b.dataset.val === "1"; save(); settings(); }));
    $("#st-save", el).onclick = () => { const v = $("#st-name", el).value.trim(); if (v) S.name = v; save(); closeSheet(); render(); };
    $("#st-reset", el).onclick = () => { if (confirm("Стереть прогресс и начать с первого дня?")) { const n = S.name; S = defaults(); S.name = n; save(); closeSheet(); go({ screen: "home" }); } };
  });
}
function bookSheet() {
  const done = DAYS.filter((d) => S.days[d.day] && S.days[d.day].notebook);
  sheet(`<h2>Мой блокнот</h2><p class="muted small">Копия твоих страниц — если блокнота нет под рукой.</p>
    ${done.length ? done.slice().reverse().map((d) => pageHtml(d, { date: S.days[d.day].done ? fmtDate(S.days[d.day].done) : "" })).join("") : `<div class="card"><p class="muted" style="margin:0">Пока пусто — пройди первый день.</p></div>`}
    <button class="btn block" id="bk-cl">Закрыть</button>`, (el) => ($("#bk-cl", el).onclick = closeSheet));
}

// ---------- Рендер и события ----------
function render() {
  const app = $("#app");
  app.innerHTML = V.screen === "story" && P ? viewStory()
    : V.screen === "recall" && RC ? viewRecall()
    : V.screen === "step" ? (V.step === "notebook" ? viewNotebook(V.n) : V.step === "tasks" ? viewTasks(V.n) : viewSpeak(V.n))
    : V.screen === "done" ? viewDone(V.n) : viewHome();
  bindCommon(app); bindApp(app);
  const ta = $("#say-in");
  if (ta && P && P.view && !P.view.done) { ta.oninput = () => (P.view.text = ta.value); ta.focus({ preventScroll: true }); }
}
function bindCommon(root) {
  root.querySelectorAll("[data-sayw]").forEach((el) => (el.onclick = (e) => { e.stopPropagation(); say("narrator", el.dataset.sayw, true); }));
}
function bindApp(root) {
  root.querySelectorAll("[data-act]").forEach((el) => (el.onclick = (e) => { e.stopPropagation(); const f = ACT[el.dataset.act]; if (f) f(el); }));
  root.querySelectorAll("[data-day]").forEach((el) => (el.onclick = () => {
    const n = Number(el.dataset.day);
    if (dayStatus(n) === "done") return sheet(`<h2>День ${n}</h2><div class="stack"><button class="btn primary block" id="d1">Пересмотреть сцену</button><button class="btn block" id="d2" style="margin-top:8px">Задачи ещё раз</button><button class="btn block" id="d3" style="margin-top:8px">Страница блокнота</button><button class="btn ghost block" id="d4" style="margin-top:8px">Отмена</button></div>`, (el2) => {
      $("#d1", el2).onclick = () => { closeSheet(); delete S.prog[n]; startStory(n); };
      $("#d2", el2).onclick = () => { closeSheet(); rec(n).tasks = { marks: {}, done: true, shown: false }; go({ screen: "step", n, step: "tasks" }); };
      $("#d3", el2).onclick = () => { closeSheet(); go({ screen: "step", n, step: "notebook" }); };
      $("#d4", el2).onclick = closeSheet;
    });
    openDay(n);
  }));
  root.querySelectorAll("[data-kw]").forEach((el) => (el.onclick = (e) => { e.stopPropagation(); const w = dayWords()[Number(el.dataset.kw)]; if (!w) return; P.pop = w; say("narrator", w.en, true); render(); }));
  root.querySelectorAll("[data-choice]").forEach((el) => (el.onclick = () => { const b = cur(), o = b.options[Number(el.dataset.choice)]; if (o.flag) P.flags[o.flag] = true; step(o.reply); }));
  root.querySelectorAll("[data-check]").forEach((el) => (el.onclick = () => {
    const b = cur(), i = Number(el.dataset.check);
    if (b.options[i].correct) { P.view.ok = true; render(); } else { P.view.wrong.push(i); render(); const w = (b.wrong || [])[0]; if (w) say(w.who, w.en); }
  }));
  root.querySelectorAll("[data-mark]").forEach((el) => (el.onclick = () => { rec(V.n).tasks.marks[el.dataset.mark] = el.dataset.v === "1"; save(); const y = window.scrollY; render(); window.scrollTo(0, y); }));
  root.querySelectorAll("[data-sample]").forEach((el) => (el.onclick = () => { const i = el.dataset.sample; const box = $(`#sample-${i}`); box.style.display = "block"; say("narrator", getDay(V.n).speak[i].sample_en, true); }));
  root.querySelectorAll("[data-spoke]").forEach((el) => (el.onclick = () => { const r = rec(V.n); r.speak[el.dataset.spoke] = !r.speak[el.dataset.spoke]; if (!r.speak[el.dataset.spoke]) delete r.speak[el.dataset.spoke]; save(); const y = window.scrollY; render(); window.scrollTo(0, y); }));
  root.querySelectorAll("[data-rec]").forEach((el) => (el.onclick = async () => {
    const i = Number(el.dataset.rec);
    if (recorder && recorder.active) { recorder.stop(); return; }
    recorder = makeRecorder((url) => { REC[i] = url; recIdx = null; const y = window.scrollY; render(); window.scrollTo(0, y); });
    if (await recorder.start()) { recIdx = i; const y = window.scrollY; render(); window.scrollTo(0, y); }
  }));
}

const ACT = {
  home: () => { if (P) persist(); if (recorder) recorder.stop(); go({ screen: "home" }); },
  next: () => { const b = cur(); if (b && b.t === "check") return step(b.right); if (b && b.t === "say") return step(b.after); step(); },
  replay: () => { const b = cur(); if (b.t === "line") say(b.who, b.en, true); },
  ru: () => { P.view = { ...(P.view || {}), ru: true }; render(); },
  hint: () => { P.view.hint = true; render(); },
  answer: () => { const b = cur(), ta = $("#say-in"), text = (ta ? ta.value : P.view.text).trim(); if (!text) return toast("Напиши или надиктуй ответ — можно с ошибками"); P.view.text = text; P.view.done = true; P.view.ok = sayOk(text, b); render(); say(b.to, b.example_en); },
  dunno: () => { const b = cur(); P.view.done = true; P.view.ok = false; render(); say(b.to, b.example_en); },
  popsay: () => say("narrator", P.pop.en, true),
  popclose: () => { P.pop = null; render(); },
  "recall-show": () => { RC.shown = true; render(); say("narrator", RC.list[RC.i].en, true); },
  "recall-ok": () => { const w = RC.list[RC.i], s = S.srs[w.en]; s.box = Math.min(s.box + 1, SRS_STEPS.length - 1); s.due = addDays(today(), SRS_STEPS[s.box]); RC.ok++; RC.i++; RC.shown = false; save(); render(); },
  "recall-no": () => { const w = RC.list[RC.i], s = S.srs[w.en]; s.box = 0; s.due = addDays(today(), 1); RC.i++; RC.shown = false; save(); render(); },
  "recall-end": () => { S.recallDone[today()] = true; markActive(); save(); const n = RC.n; RC = null; if (n) openDay(n); else go({ screen: "home" }); },
  "recall-only": () => startRecall(null),
  "nb-done": () => completeStep(V.n, "notebook"),
  "tasks-show": () => { rec(V.n).tasks.shown = true; save(); render(); },
  "tasks-done": () => { rec(V.n).tasks.done = true; save(); completeStep(V.n, "tasks"); },
  "speak-done": () => completeStep(V.n, "speak"),
  talk: () => { copyText(talkPrompt(getDay(V.n))); window.open(CLAUDE_URL, "_blank"); toast("Скопировано — вставь в Claude и включи голос"); },
  early: (el) => { S.early[Number(el.dataset.n)] = true; save(); openDay(Number(el.dataset.n)); },
  book: bookSheet,
  settings,
  help: () => sheet(`<h2>Как это работает</h2>${HELP}<button class="btn block" id="h-cl" style="margin-top:14px">Понятно</button>`, (el) => ($("#h-cl", el).onclick = closeSheet)),
};

render();
if (!S.name) onboarding();
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && V.screen === "home") render(); });
if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js").catch(() => {});
