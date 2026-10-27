"use strict";

// EnglishEasy — интерактивный сериал на английском. Главная героиня — ты.

const KEY = "englisheasy.story.v1";
const CLAUDE_URL = "https://claude.ai/new";
const FREE_START = 2; // в первый день открыты две серии («двойная премьера»)

// ---------- Даты ----------
const pad = (n) => String(n).padStart(2, "0");
const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseDay = (k) => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (k, n) => { const d = parseDay(k); d.setDate(d.getDate() + n); return dayKey(d); };
const today = () => dayKey();

// ---------- Состояние ----------
const defaults = () => ({ name: "", subs: true, voice: true, slow: false, started: null, eps: {}, prog: {}, flags: {}, words: {}, days: [], says: [] });
let S = (() => { try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { return defaults(); } })();
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* приватный режим */ } };

const SHOW = typeof STORY !== "undefined" ? STORY : { title: "", episodes: [], characters: [] };
const EPS = SHOW.episodes.slice().sort((a, b) => a.n - b.n);
const CHARS = Object.fromEntries((SHOW.characters || []).map((c) => [c.id, c]));

// ---------- Утилиты ----------
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const nm = (s) => String(s ?? "").replace(/\{name\}/g, S.name || "you");
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const norm = (s) => String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
function lev(a, b) {
  if (!a.length) return b.length; if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[b.length];
}
const close = (a, b) => { a = norm(a); b = norm(b); return !a || !b ? 0 : 1 - lev(a, b) / Math.max(a.length, b.length); };
let toastT;
function toast(m) { const el = $("#toast"); el.textContent = m; el.classList.remove("hidden"); clearTimeout(toastT); toastT = setTimeout(() => el.classList.add("hidden"), 2400); }
function copyText(t) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(t).catch(() => fallbackCopy(t));
  fallbackCopy(t); return Promise.resolve();
}
function fallbackCopy(t) { const ta = document.createElement("textarea"); ta.value = t; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (e) { /* ignore */ } ta.remove(); }

// Серия дней: день засчитан, если досмотрена серия (новая или пересмотр)
function streak() {
  const set = new Set(S.days);
  let k = today();
  if (!set.has(k)) k = addDays(k, -1);
  let n = 0;
  while (set.has(k)) { n++; k = addDays(k, -1); }
  return n;
}

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
const charIndex = (id) => Math.max(0, (SHOW.characters || []).findIndex((c) => c.id === id));
function say(who, text, force) {
  if (!HAS_TTS || (!S.voice && !force)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(nm(text).replace(/[—/]/g, ", "));
  u.lang = "en-US";
  const c = CHARS[who];
  const slow = S.slow ? 0.82 : 1;
  if (c && c.voice) {
    const list = c.voice.gender === "male" ? VOICES.m : VOICES.f;
    const v = list.length ? list[charIndex(who) % list.length] : VOICES.any;
    if (v) u.voice = v;
    u.pitch = Math.max(0.6, Math.min(1.5, c.voice.pitch || 1));
    u.rate = Math.max(0.6, Math.min(1.1, (c.voice.rate || 0.95) * slow));
  } else {
    const v = VOICES.f[0] || VOICES.any;
    if (v) u.voice = v;
    u.pitch = 1; u.rate = 0.9 * slow;
  }
  speechSynthesis.speak(u);
}

// ---------- Доступ к сериям ----------
function epStatus(n) {
  const r = S.eps[n];
  if (r && r.done) return "done";
  if (S.prog[n]) return "open";
  if (n <= FREE_START) return "open";
  const prev = S.eps[n - 1];
  if (prev && prev.done) return prev.done < today() ? "open" : "tomorrow";
  return "locked";
}
const nextEp = () => EPS.find((e) => epStatus(e.n) !== "done");

// ---------- Плеер ----------
let P = null; // { n, items, i, ins, flags, view, noSubs }
const subsOn = () => S.subs && !(P && P.noSubs);
const visible = (b) => !b || ((!b.if || P.flags[b.if]) && (!b.ifnot || !P.flags[b.ifnot]));

function timeline(ep) {
  const items = [];
  if (ep.n > 1 && ep.recap && ep.recap.length) {
    items.push({ t: "recap" });
    ep.recap.forEach((l) => items.push({ t: "line", ...l }));
    if (ep.recap_check && ep.recap_check.t === "check") items.push(ep.recap_check);
  }
  ep.beats.forEach((b) => items.push(b));
  return items;
}
function start(n, opts = {}) {
  const ep = EPS.find((e) => e.n === n);
  const items = timeline(ep);
  const saved = S.prog[n];
  P = saved && !opts.fresh
    ? { n, items, i: saved.i, ins: saved.ins || [], flags: { ...S.flags, ...(saved.flags || {}) }, view: null, noSubs: !!saved.noSubs }
    : { n, items, i: 0, ins: [], flags: { ...S.flags }, view: null, noSubs: !!opts.noSubs };
  if (!S.started) S.started = today();
  skipHidden();
  render();
  speakCurrent();
}
const cur = () => (P.ins.length ? P.ins[0] : P.items[P.i]);
function skipHidden() {
  for (;;) {
    if (P.ins.length) { if (visible(P.ins[0])) return; P.ins.shift(); continue; }
    if (P.i >= P.items.length) return;
    const b = P.items[P.i];
    if (b.t === "line" && !visible(b)) { P.i++; continue; }
    return;
  }
}
function persist() { S.prog[P.n] = { i: P.i, ins: P.ins, flags: P.flags, noSubs: P.noSubs }; save(); }
function advance() {
  if (P.ins.length) P.ins.shift(); else P.i++;
  P.view = null;
  skipHidden();
  if (!P.ins.length && P.i >= P.items.length) return finish();
  persist(); render(); speakCurrent();
}
function speakCurrent() {
  const b = cur(); if (!b) return;
  if (b.t === "line") say(b.who, b.en);
  if (b.t === "choice" || b.t === "check") say(b.who || "narrator", b.q_en);
}

// Ключевые слова серии подчёркнуты — нажми и увидишь перевод
function kwHtml(text, words) {
  const raw = nm(text);
  const ranges = [];
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
const epWords = () => { const ep = EPS.find((e) => e.n === P.n); const prev = EPS.find((e) => e.n === P.n - 1); return (ep.words || []).concat(P.i < (ep.recap || []).length + 2 && prev ? prev.words || [] : []); };
const whoName = (id) => (id && id !== "narrator" && CHARS[id] ? CHARS[id].name : "");

function viewPlayer() {
  const b = cur();
  const total = P.items.length;
  const pct = Math.round((Math.min(P.i, total) / total) * 100);
  const ep = EPS.find((e) => e.n === P.n);
  const top = `<div class="ptop">
      <button class="icon-btn" data-act="close" aria-label="Закрыть">✕</button>
      <div class="pbar"><i style="width:${pct}%"></i></div>
      <button class="btn sm ghost" data-act="subs">${subsOn() ? "RU вкл" : "RU выкл"}</button>
    </div>`;
  const words = epWords();
  let stage = "", ctrl = "";

  if (b.t === "recap") {
    stage = `<div class="stage scene" data-act="next"><div class="muted small">Серия ${ep.n}</div><div class="place" style="margin-top:8px">Previously on…</div>${subsOn() ? `<div class="ru">Ранее в сериале</div>` : ""}</div>`;
    ctrl = nextBtn();
  } else if (b.t === "scene") {
    stage = `<div class="stage scene" data-act="next"><div class="emo">${esc(b.emoji || "🎬")}</div><div class="place">${esc(nm(b.place_en))}</div>${subsOn() && b.place_ru ? `<div class="ru">${esc(nm(b.place_ru))}</div>` : ""}</div>`;
    ctrl = nextBtn();
  } else if (b.t === "line") {
    const narr = !whoName(b.who);
    const showRu = subsOn() || (P.view && P.view.ru);
    stage = `<div class="stage" data-act="next">
        ${narr ? "" : `<div class="who">${esc(whoName(b.who))}</div>`}
        <div class="en ${narr ? "narr" : ""}">${kwHtml(b.en, words)}</div>
        ${showRu ? `<div class="ru">${esc(nm(b.ru))}</div>` : ""}
      </div>`;
    ctrl = `<div class="pctrl"><button class="icon-btn" data-act="replay" aria-label="Повторить">🔊</button>
      ${subsOn() ? "" : `<button class="btn sm ghost" data-act="ru">Перевод</button>`}
      <button class="btn primary grow" data-act="next">Дальше</button></div>`;
  } else if (b.t === "choice") {
    stage = `<div class="stage" style="cursor:default">
      ${whoName(b.who) ? `<div class="who">${esc(whoName(b.who))}</div>` : ""}
      <div class="en">${kwHtml(b.q_en, words)}</div>${subsOn() && b.q_ru ? `<div class="ru">${esc(nm(b.q_ru))}</div>` : ""}
      <div class="opts">${b.options.map((o, i) => `<button class="opt" data-choice="${i}">${esc(nm(o.en))}${subsOn() ? `<small>${esc(nm(o.ru))}</small>` : ""}</button>`).join("")}</div>
      <p class="tap-hint">Выбери — от этого зависит история</p></div>`;
    ctrl = `<div class="pctrl"><button class="icon-btn" data-act="replay">🔊</button></div>`;
  } else if (b.t === "check") {
    if (!P.view) P.view = { order: shuffle(b.options.map((_, i) => i)), wrong: [], ok: false };
    const v = P.view;
    stage = `<div class="stage" style="cursor:default">
      ${whoName(b.who) ? `<div class="who">${esc(whoName(b.who))}</div>` : ""}
      <div class="en">${kwHtml(b.q_en, words)}</div>${subsOn() && b.q_ru ? `<div class="ru">${esc(nm(b.q_ru))}</div>` : ""}
      <div class="opts">${v.order.map((i) => { const o = b.options[i]; const cls = v.ok && o.correct ? "good" : v.wrong.includes(i) ? "bad" : "";
        return `<button class="opt ${cls}" data-check="${i}" ${v.ok || v.wrong.includes(i) ? "disabled" : ""}>${esc(nm(o.en))}${subsOn() ? `<small>${esc(nm(o.ru))}</small>` : ""}</button>`; }).join("")}</div>
      ${v.wrong.length && !v.ok ? `<div class="react">${(b.wrong || []).map((l) => `${whoName(l.who) ? `<b>${esc(whoName(l.who))}:</b> ` : ""}${esc(nm(l.en))}${subsOn() ? `<div class="muted small">${esc(nm(l.ru))}</div>` : ""}`).join("<br>") || "Подумай ещё раз 🙂"}</div>` : ""}
      </div>`;
    ctrl = v.ok ? nextBtn() : `<div class="pctrl"><button class="icon-btn" data-act="replay">🔊</button></div>`;
  } else if (b.t === "say") {
    if (!P.view) P.view = { text: "", done: false, ok: false, hint: false };
    const v = P.view;
    const to = whoName(b.to) || "герою";
    stage = `<div class="stage" style="cursor:default">
      <div class="who">Твой ответ · ${esc(to)}</div>
      <div class="task">${esc(nm(b.task_ru))}</div>
      ${v.hint && b.hint_ru ? `<p class="muted" style="margin-top:8px">Подсказка: ${esc(nm(b.hint_ru))}</p>` : ""}
      <textarea class="say-in" id="say-in" rows="2" placeholder="По-английски. Можно надиктовать: 🎤 на клавиатуре" ${v.done ? "disabled" : ""} autocapitalize="sentences">${esc(v.text)}</textarea>
      ${v.done ? `<div class="result ${v.ok ? "good" : "info"}">${v.ok ? "Отлично, тебя поняли!" : "Почти! Вот как можно сказать:"}
          <div style="margin-top:6px"><b>${esc(nm(b.example_en))}</b></div>${b.example_ru ? `<div class="small">${esc(nm(b.example_ru))}</div>` : ""}</div>` : ""}
      </div>`;
    ctrl = v.done ? nextBtn() : `<div class="pctrl" style="justify-content:center">
        ${b.hint_ru && !v.hint ? `<button class="btn sm ghost" data-act="hint">Подсказка</button>` : ""}
        ${SR ? `<button class="btn sm ghost" data-act="mic">🎤 Сказать</button>` : ""}
        <button class="btn sm ghost" data-act="dunno">Не знаю</button></div>
      <div class="pctrl"><button class="btn primary block" data-act="answer">Ответить</button></div>`;
  }
  return `<div class="player">${top}${stage}${ctrl}</div>${P.pop ? popHtml() : ""}`;
}
const nextBtn = () => `<div class="pctrl"><button class="btn primary block" data-act="next">Дальше</button></div>`;
function popHtml() {
  const w = P.pop;
  return `<div class="pop row"><div class="grow"><b>${esc(w.en)}</b><div class="muted">${esc(w.ru)}</div></div>
    <button class="icon-btn" data-act="popsay">🔊</button><button class="icon-btn" data-act="popclose">✕</button></div>`;
}

function sayOk(text, b) {
  const t = " " + norm(text) + " ";
  if ((b.accept || []).some((a) => { const k = norm(a); return k && t.includes(k); })) return true;
  return close(text, nm(b.example_en)) >= 0.7;
}

function finish() {
  const ep = EPS.find((e) => e.n === P.n);
  const r = S.eps[P.n] || { plays: 0 };
  const first = !r.done;
  r.done = r.done || today(); r.plays = (r.plays || 0) + 1;
  S.eps[P.n] = r;
  Object.assign(S.flags, P.flags);
  delete S.prog[P.n];
  (ep.words || []).forEach((w) => { if (!S.words[w.en]) S.words[w.en] = { ru: w.ru, ep: ep.n, day: today() }; });
  if (!S.days.includes(today())) S.days.push(today());
  save();
  P = { n: ep.n, end: true, first };
  render();
}

function viewEnd() {
  const ep = EPS.find((e) => e.n === P.n);
  const nx = EPS.find((e) => e.n === P.n + 1);
  const st = nx ? epStatus(nx.n) : null;
  const myLines = S.says.filter((x) => x.ep === ep.n).slice(-6);
  return `<div class="end">
    <p class="muted small">Серия ${ep.n} · ${esc(ep.title)}</p>
    <h1>To be continued…</h1>
    ${ep.teaser_ru ? `<p class="muted">В следующей серии: ${esc(nm(ep.teaser_ru).replace(/^\s*в следующей серии\s*[:—-]?\s*/i, ""))}</p>` : ""}
    ${streak() > 1 ? `<p class="small">🔥 ${streak()} ${dayWord(streak())} подряд</p>` : ""}
  </div>
  <div class="label">Слова этой серии</div>
  <div class="card">${(ep.words || []).map((w) => `<div class="word"><div class="grow"><b>${esc(w.en)}</b><div class="muted small">${esc(w.ru)}</div></div><button class="icon-btn" data-sayw="${esc(w.en)}">🔊</button></div>`).join("")}</div>
  <div style="margin-top:16px">
    ${nx && st === "open" ? `<button class="btn primary block" data-play="${nx.n}">▶ Серия ${nx.n}</button>` : nx ? `<div class="card center"><b>Серия ${nx.n} выйдет завтра</b><p class="muted small" style="margin:4px 0 0">Как настоящий сериал — одна новая серия в день</p></div>` : `<div class="card center"><b>Это финал сезона!</b><p class="muted small" style="margin:4px 0 0">Второй сезон уже в работе</p></div>`}
  </div>
  <div class="label">По желанию</div>
  <div class="card">
    <p style="margin:0 0 4px"><b>Поговорить с героем голосом</b></p>
    <p class="muted small">Откроется Claude — включи там голосовой режим. ${esc(whoName(rolePartner(ep)) || "Герой")} продолжит сцену, а ещё Claude мягко поправит фразы, которые ты сказала в серии.</p>
    <button class="btn block" data-act="roleplay">Открыть Claude</button>
    ${myLines.length ? `<p class="muted small" style="margin:10px 0 0">Твои фразы из серии: ${myLines.map((x) => `«${esc(x.text)}»`).join(", ")}</p>` : ""}
  </div>
  <button class="btn ghost block" data-act="home" style="margin-top:8px">На главную</button>`;
}
const dayWord = (n) => { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? "день" : a >= 2 && a <= 4 && (b < 12 || b > 14) ? "дня" : "дней"; };
function rolePartner(ep) { const counts = {}; ep.beats.forEach((b) => { if (b.t === "line" && CHARS[b.who]) counts[b.who] = (counts[b.who] || 0) + 1; }); return Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0]; }
function rolePrompt(ep) {
  const c = CHARS[rolePartner(ep)];
  const mine = S.says.filter((x) => x.ep === ep.n).map((x) => `- "${x.text}" (I wanted to say: ${x.task})`).join("\n");
  return `Hi Claude! I'm learning English (Russian speaker, level about A2) through an interactive story where I am the main character, ${S.name || "the heroine"}.
${mine ? `First, here are sentences I said in English during the episode. Gently correct them in Russian (short: ❌ → ✅), and praise what was good:\n${mine}\n\n` : ""}Then let's do a voice role-play. You are ${c ? `${c.name} (${c.look}). Speech style: ${c.speech}` : "a character from the story"}.
Scene (we have just finished episode ${ep.n} of the series "${SHOW.title}"): ${ep.claude_scene}
Rules: stay in character, speak simple English (A2), short lines, one question at a time, wait for my answer. Never reveal or hint at secrets or future plot — you only know what happened so far. If I say something wrong, answer naturally but repeat my idea correctly (recasting), without lecturing. If I'm stuck or write in Russian, help me say it in English. Keep it fun and a bit mysterious. About 10 minutes. Start the scene now!`;
}

// ---------- Главная ----------
function viewHome() {
  const nx = nextEp();
  const allDone = !nx;
  const st = nx ? epStatus(nx.n) : null;
  const inProg = nx && S.prog[nx.n];
  const lastDone = EPS.filter((e) => S.eps[e.n] && S.eps[e.n].done).pop();
  const poster = allDone
    ? `<div class="poster"><div class="kicker">Сезон 1 пройден 🎉</div><h2>Второй сезон уже в работе</h2><p class="logline">А пока — пересмотри любимые серии без перевода. Это лучшая тренировка слуха.</p></div>`
    : `<div class="poster">
        <div class="kicker">Серия ${nx.n} из ${EPS.length}</div>
        <h2>${esc(nx.title)}</h2>
        <p class="logline">${esc(nm(nx.logline_ru || ""))}</p>
        ${st === "open" ? `<button class="btn primary block" data-play="${nx.n}">${inProg ? "▶ Продолжить" : "▶ Смотреть"}</button>`
          : `<button class="btn block" disabled>Новая серия выйдет завтра</button>
             ${lastDone ? `<button class="btn ghost block" data-replay="${lastDone.n}" style="margin-top:8px">Пересмотреть серию ${lastDone.n} без перевода</button>` : ""}`}
      </div>`;
  const list = EPS.map((e) => {
    const s = epStatus(e.n);
    const cls = s === "done" ? "done open" : s === "open" ? "open" : "locked";
    const sub = s === "done" ? "Просмотрено · нажми, чтобы пересмотреть" : s === "open" ? (S.prog[e.n] ? "Начато" : "Доступна") : s === "tomorrow" ? "Выйдет завтра" : "Скоро";
    return `<div class="ep ${cls}" ${s === "done" || s === "open" ? `data-ep="${e.n}"` : ""}>
      <div class="num">${s === "done" ? "✓" : e.n}</div>
      <div class="grow"><div><b>${esc(e.title)}</b></div><div class="muted small">${sub}</div></div></div>`;
  }).join("");
  const st2 = streak();
  const nWords = Object.keys(S.words).length;
  return `<p class="muted small" style="margin:0 0 4px">${S.name ? `Привет, ${esc(S.name)}` : "EnglishEasy"}${st2 ? ` · 🔥 ${st2} ${dayWord(st2)} подряд` : ""}</p>
    <h1>${esc(SHOW.title)}</h1>
    ${Object.keys(S.eps).length ? "" : `<p class="muted" style="margin-bottom:18px">${esc(nm(SHOW.premise_ru || ""))}</p>`}
    ${poster}
    <div class="label">Сезон 1</div>
    <div class="card" style="padding:4px 18px">${list}</div>
    <div class="foot">
      <button class="btn sm" data-act="words">Словарик${nWords ? ` · ${nWords}` : ""}</button>
      <button class="btn sm" data-act="settings">Настройки</button>
      <button class="btn sm" data-act="help">Как это работает</button>
    </div>`;
}

// ---------- Окна ----------
function sheet(html, mount) { $("#sheet-card").innerHTML = html; $("#sheet").classList.remove("hidden"); $("#sheet-card").scrollTop = 0; if (mount) mount($("#sheet-card")); }
function closeSheet() { $("#sheet").classList.add("hidden"); $("#sheet-card").innerHTML = ""; }
$("#sheet").addEventListener("click", (e) => { if (e.target.id === "sheet" && S.name) closeSheet(); });

const HELP = `<ul style="padding-left:18px;margin:8px 0 0">
  <li style="margin-bottom:6px"><b>Нажимай на экран</b> или «Дальше» — история идёт вперёд. Каждую фразу озвучивает свой голос.</li>
  <li style="margin-bottom:6px">Под английским — <b>русские субтитры</b>. Когда станет легко, выключи их кнопкой «RU».</li>
  <li style="margin-bottom:6px"><b>Подчёркнутое слово</b> — нажми, увидишь перевод. Эти слова потом встретятся снова.</li>
  <li style="margin-bottom:6px">Иногда герои <b>ждут твой ответ</b> по-английски. Пиши как получается или надиктуй через 🎤 на клавиатуре — ошибки не страшны.</li>
  <li>Одна новая серия в день. Закрыла посередине — продолжишь с того же места.</li>
</ul>`;
function onboarding() {
  sheet(`<h2>Привет!</h2>
    <p class="muted">Это сериал на английском, где главная героиня — ты. Никаких уроков и карточек: просто смотри, выбирай и отвечай героям.</p>
    ${HELP}
    <p style="margin:16px 0 6px"><b>Как тебя зовут?</b> <span class="muted small">Герои будут обращаться к тебе по имени</span></p>
    <input type="text" id="ob-name" placeholder="Имя (можно латиницей)" autocomplete="given-name">
    <button class="btn primary block" id="ob-go" style="margin-top:14px">Смотреть первую серию</button>`, (el) => {
    $("#ob-go", el).onclick = () => {
      const v = $("#ob-name", el).value.trim();
      if (!v) return toast("Напиши имя");
      S.name = v; save(); closeSheet();
      if (EPS.length) start(EPS[0].n); else render();
    };
  });
}
function settings() {
  const seg = (key, a, b) => `<div class="seg"><button data-set="${key}" data-val="1" class="${S[key] ? "on" : ""}">${a}</button><button data-set="${key}" data-val="0" class="${!S[key] ? "on" : ""}">${b}</button></div>`;
  sheet(`<h2>Настройки</h2>
    <p class="muted small" style="margin:12px 0 6px">Имя</p>
    <input type="text" id="st-name" value="${esc(S.name)}">
    <div style="margin-top:10px">
      <div class="switch"><span>Русские субтитры</span>${seg("subs", "Вкл", "Выкл")}</div>
      <div class="switch"><span>Озвучка</span>${seg("voice", "Вкл", "Выкл")}</div>
      <div class="switch"><span>Скорость речи</span>${seg("slow", "Медленно", "Обычно")}</div>
    </div>
    <button class="btn primary block" id="st-save" style="margin-top:14px">Готово</button>
    <p class="muted small" style="margin-top:18px">Хочешь упражнения, карточки и грамматику? Они остались в <a href="classic/" style="color:var(--accent)">старой версии</a>.</p>
    <button class="btn ghost block" id="st-reset" style="color:var(--bad);margin-top:6px">Начать сериал заново</button>`, (el) => {
    el.querySelectorAll("[data-set]").forEach((b) => (b.onclick = () => { S[b.dataset.set] = b.dataset.val === "1"; save(); settings(); }));
    $("#st-save", el).onclick = () => { const v = $("#st-name", el).value.trim(); if (v) S.name = v; save(); closeSheet(); render(); };
    $("#st-reset", el).onclick = () => { if (confirm("Стереть прогресс сериала и начать с первой серии?")) { const n = S.name; S = defaults(); S.name = n; save(); closeSheet(); P = null; render(); } };
  });
}
function wordsSheet() {
  const list = Object.entries(S.words).sort((a, b) => b[1].ep - a[1].ep);
  sheet(`<h2>Словарик</h2>
    <p class="muted small">Слова из серий, которые ты посмотрела. Учить их не нужно — они сами будут встречаться в следующих сериях.</p>
    <div class="card" style="padding:4px 18px">${list.length ? list.map(([en, w]) => `<div class="word"><div class="grow"><b>${esc(en)}</b><div class="muted small">${esc(w.ru)} · серия ${w.ep}</div></div><button class="icon-btn" data-sayw="${esc(en)}">🔊</button></div>`).join("") : `<p class="muted" style="padding:12px 0;margin:0">Пока пусто — посмотри первую серию.</p>`}</div>
    <button class="btn block" id="w-cl" style="margin-top:8px">Закрыть</button>`, (el) => {
    $("#w-cl", el).onclick = closeSheet;
    el.querySelectorAll("[data-sayw]").forEach((b) => (b.onclick = () => say("narrator", b.dataset.sayw, true)));
  });
}

// ---------- Рендер и события ----------
function render() {
  const app = $("#app");
  app.innerHTML = !P ? viewHome() : P.end ? viewEnd() : viewPlayer();
  bind(app);
  if (P && !P.end) {
    const ta = $("#say-in");
    if (ta && !P.view.done) { ta.oninput = () => (P.view.text = ta.value); ta.focus({ preventScroll: true }); }
  }
}
function bind(root) {
  root.querySelectorAll("[data-act]").forEach((el) => (el.onclick = (e) => { e.stopPropagation(); const f = ACT[el.dataset.act]; if (f) f(); }));
  root.querySelectorAll("[data-play]").forEach((el) => (el.onclick = () => start(Number(el.dataset.play))));
  root.querySelectorAll("[data-replay]").forEach((el) => (el.onclick = () => start(Number(el.dataset.replay), { fresh: true, noSubs: true })));
  root.querySelectorAll("[data-ep]").forEach((el) => (el.onclick = () => {
    const n = Number(el.dataset.ep);
    if (epStatus(n) === "done") {
      sheet(`<h2>Серия ${n}</h2><p class="muted">Пересмотр — отличная тренировка: уже знаешь сюжет и слышишь больше.</p>
        <button class="btn primary block" id="r1">Без перевода</button><button class="btn block" id="r2" style="margin-top:8px">С переводом</button><button class="btn ghost block" id="r3" style="margin-top:8px">Отмена</button>`, (el2) => {
        $("#r1", el2).onclick = () => { closeSheet(); start(n, { fresh: true, noSubs: true }); };
        $("#r2", el2).onclick = () => { closeSheet(); start(n, { fresh: true }); };
        $("#r3", el2).onclick = closeSheet;
      });
    } else start(n);
  }));
  root.querySelectorAll("[data-kw]").forEach((el) => (el.onclick = (e) => {
    e.stopPropagation();
    const w = epWords()[Number(el.dataset.kw)];
    if (!w) return;
    P.pop = w; say("narrator", w.en, true);
    if (!S.words[w.en]) { S.words[w.en] = { ru: w.ru, ep: P.n, day: today() }; save(); }
    render();
  }));
  root.querySelectorAll("[data-choice]").forEach((el) => (el.onclick = () => {
    const b = cur(); const o = b.options[Number(el.dataset.choice)];
    P.pop = null;
    if (o.flag) P.flags[o.flag] = true;
    if (P.ins.length) P.ins.shift(); else P.i++;
    P.ins = (o.reply || []).map((l) => ({ t: "line", ...l })).concat(P.ins);
    P.view = null; skipHidden();
    if (!P.ins.length && P.i >= P.items.length) return finish();
    persist(); render(); speakCurrent();
  }));
  root.querySelectorAll("[data-check]").forEach((el) => (el.onclick = () => {
    const b = cur(); const i = Number(el.dataset.check); const o = b.options[i];
    if (o.correct) {
      P.view.ok = true;
      render();
    } else {
      P.view.wrong.push(i);
      render();
      const w = (b.wrong || [])[0]; if (w) say(w.who, w.en);
    }
  }));
  root.querySelectorAll("[data-sayw]").forEach((el) => (el.onclick = (e) => { e.stopPropagation(); say("narrator", el.dataset.sayw, true); }));
}

const ACT = {
  next: () => {
    P.pop = null;
    const b = cur();
    if (b && b.t === "check") { // после верного ответа — реакция героя
      if (P.ins.length) P.ins.shift(); else P.i++;
      P.ins = (b.right || []).map((l) => ({ t: "line", ...l })).concat(P.ins);
      P.view = null; skipHidden();
      if (!P.ins.length && P.i >= P.items.length) return finish();
      persist(); render(); speakCurrent(); return;
    }
    if (b && b.t === "say") {
      if (P.ins.length) P.ins.shift(); else P.i++;
      P.ins = (b.after || []).map((l) => ({ t: "line", ...l })).concat(P.ins);
      P.view = null; skipHidden();
      if (!P.ins.length && P.i >= P.items.length) return finish();
      persist(); render(); speakCurrent(); return;
    }
    advance();
  },
  replay: () => { const b = cur(); if (b.t === "line") say(b.who, b.en, true); else if (b.q_en) say(b.who || "narrator", b.q_en, true); },
  ru: () => { P.view = { ...(P.view || {}), ru: true }; render(); },
  subs: () => { if (P.noSubs) P.noSubs = false; else S.subs = !S.subs; save(); render(); },
  close: () => { if (HAS_TTS) speechSynthesis.cancel(); if (P && !P.end) persist(); P = null; window.scrollTo(0, 0); render(); },
  home: () => { P = null; window.scrollTo(0, 0); render(); },
  hint: () => { P.view.hint = true; render(); },
  answer: () => {
    const b = cur(); const ta = $("#say-in"); const text = (ta ? ta.value : P.view.text).trim();
    if (!text) return toast("Напиши или надиктуй ответ — можно с ошибками");
    P.view.text = text; P.view.done = true; P.view.ok = sayOk(text, b);
    S.says.push({ ep: P.n, task: b.task_ru, text: text.slice(0, 200), ok: P.view.ok, day: today() });
    if (S.says.length > 300) S.says.shift();
    save(); render(); say(b.to, b.example_en);
  },
  dunno: () => { const b = cur(); P.view.done = true; P.view.ok = false; render(); say(b.to, b.example_en); },
  mic: () => {
    const r = new SR(); r.lang = "en-US"; r.interimResults = false;
    toast("Говори...");
    r.onresult = (e) => { const t = e.results[0][0].transcript; const ta = $("#say-in"); if (ta) { ta.value = t; P.view.text = t; } };
    r.onerror = () => toast("Не получилось — нажми 🎤 на клавиатуре и надиктуй");
    try { if (HAS_TTS) speechSynthesis.cancel(); r.start(); } catch (e) { toast("Микрофон недоступен"); }
  },
  popsay: () => say("narrator", P.pop.en, true),
  popclose: () => { P.pop = null; render(); },
  roleplay: () => { const ep = EPS.find((e) => e.n === P.n); copyText(rolePrompt(ep)); window.open(CLAUDE_URL, "_blank"); toast("Скопировано — вставь в Claude и включи голос"); },
  words: wordsSheet,
  settings,
  help: () => sheet(`<h2>Как это работает</h2>${HELP}<button class="btn block" id="h-cl" style="margin-top:14px">Понятно</button>`, (el) => ($("#h-cl", el).onclick = closeSheet)),
};

// ---------- Старт ----------
render();
if (!S.name) onboarding();
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && !P) render(); });
if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js").catch(() => {});
