// Озвучка курса через ElevenLabs: один раз генерируем mp3 локально, на сайт попадают только файлы.
// Ключ берётся из ~/.elevenlabs.env (ELEVENLABS_API_KEY=...) или переменной окружения — в репозиторий он не попадает.
//
//   node tools/voice.mjs voices            — список голосов в аккаунте
//   node tools/voice.mjs plan              — сколько символов уйдёт и остаток кредитов
//   node tools/voice.mjs run [--limit N]   — сгенерировать недостающие файлы
//
// Настройки голосов — tools/voices.json: { "name": "Elnara", "model": "...", "voices": { "narrator": "<id>", "pepper": "<id>", ... } }

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const AUDIO = path.join(ROOT, "audio");
const CFG_FILE = path.join(ROOT, "tools", "voices.json");
const API = "https://api.elevenlabs.io/v1";

function apiKey() {
  if (process.env.ELEVENLABS_API_KEY) return process.env.ELEVENLABS_API_KEY.trim();
  const f = path.join(os.homedir(), ".elevenlabs.env");
  if (fs.existsSync(f)) {
    const m = fs.readFileSync(f, "utf8").match(/ELEVENLABS_API_KEY\s*=\s*(\S+)/);
    if (m) return m[1].trim();
  }
  console.error("Нет ключа: создай ~/.elevenlabs.env с ELEVENLABS_API_KEY=..."); process.exit(1);
}
const headers = () => ({ "xi-api-key": apiKey(), "Content-Type": "application/json" });

// Тот же хеш, что в приложении (cozy.js → audioKey)
export function fnv(s) { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); } return (h >>> 0).toString(16).padStart(8, "0"); }
const cleanText = (t) => String(t).replace(/[—]/g, ", ").replace(/_{2,}/g, "…").replace(/\s+/g, " ").trim();
const audioKey = (voiceId, text) => `${fnv(voiceId + "|" + text)}${text.length.toString(36)}`;

function loadCourse() {
  const ctx = {}; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "course-data.js"), "utf8") + ";this.C=COURSE;", ctx);
  return ctx.C;
}

// Всё, что приложение произносит: реплики, вопросы, реакции, примеры, слова и фразы блокнота
function collect(C, cfg) {
  const items = new Map();
  const voiceOf = (who) => cfg.voices[who] || cfg.voices.narrator;
  const add = (who, raw) => {
    if (!raw) return;
    const text = cleanText(String(raw).replace(/\{name\}/g, cfg.name));
    if (!text) return;
    const v = voiceOf(who);
    items.set(audioKey(v, text), { who, voice: v, text });
  };
  const line = (l) => l && add(l.who || "narrator", l.en);
  for (const d of C.days) {
    for (const b of d.beats) {
      if (b.t === "line") line(b);
      if (b.q_en) add(b.who || "narrator", b.q_en);
      (b.options || []).forEach((o) => (o.reply || []).forEach(line));
      (b.wrong || []).forEach(line); (b.right || []).forEach(line); (b.after || []).forEach(line);
      if (b.t === "say") add(b.to || "narrator", b.example_en);
    }
    const nb = d.notebook;
    nb.words.forEach((w) => { add("narrator", w.en); add("narrator", w.story_ex); add("narrator", w.my_ex); });
    nb.phrases.forEach((p) => add("narrator", p.en));
    nb.rule.examples.forEach((e) => add("narrator", e.en));
    d.speak.forEach((s) => add("narrator", s.sample_en));
  }
  return items;
}

async function get(url) { const r = await fetch(url, { headers: headers() }); if (!r.ok) throw new Error(`${r.status} ${await r.text()}`); return r.json(); }

async function tts(it, cfg) {
  const settings = (cfg.settings && cfg.settings[it.who]) || cfg.settings?.default || { stability: 0.5, similarity_boost: 0.75, style: 0.25, use_speaker_boost: true };
  for (let attempt = 1; attempt <= 5; attempt++) {
    const r = await fetch(`${API}/text-to-speech/${it.voice}?output_format=mp3_44100_64`, {
      method: "POST", headers: headers(),
      body: JSON.stringify({ text: it.text, model_id: cfg.model || "eleven_multilingual_v2", voice_settings: settings }),
    });
    if (r.ok) return Buffer.from(await r.arrayBuffer());
    if (r.status === 429 || r.status >= 500) { await new Promise((res) => setTimeout(res, 1500 * attempt)); continue; }
    throw new Error(`${r.status} ${await r.text()}`);
  }
  throw new Error("слишком много повторов");
}

const cmd = process.argv[2];
if (cmd === "voices") {
  const v = await get(`${API}/voices`);
  for (const x of v.voices) console.log(`${x.voice_id}  ${x.name}  [${x.category}]  ${JSON.stringify(x.labels || {})}`);
  process.exit(0);
}
const cfg = JSON.parse(fs.readFileSync(CFG_FILE, "utf8"));
const C = loadCourse();
const items = collect(C, cfg);
fs.mkdirSync(AUDIO, { recursive: true });
const missing = [...items.entries()].filter(([k]) => !fs.existsSync(path.join(AUDIO, `${k}.mp3`)));
const chars = missing.reduce((a, [, it]) => a + it.text.length, 0);

if (cmd === "plan") {
  const sub = await get(`${API}/user/subscription`);
  console.log(JSON.stringify({ items: items.size, missing: missing.length, charsToGenerate: chars, plan: sub.tier, used: sub.character_count, limit: sub.character_limit, left: sub.character_limit - sub.character_count }, null, 1));
  process.exit(0);
}
if (cmd === "sample") {
  // по 2 реплики каждого героя (без имени) — послушать голоса до полной озвучки
  const per = {};
  const pick = [...items.entries()].filter(([, it]) => !it.text.includes(cfg.name) && it.text.length > 25 && it.text.length < 120)
    .filter(([, it]) => (per[it.who] = (per[it.who] || 0) + 1) <= 2);
  for (const [k, it] of pick) {
    const f = path.join(AUDIO, `${k}.mp3`);
    if (!fs.existsSync(f)) fs.writeFileSync(f, await tts(it, cfg));
  }
  const rows = pick.map(([k, it]) => `<div class="r"><b>${it.who}</b><span>${it.text.replace(/</g, "&lt;")}</span><audio controls preload="none" src="../audio/${k}.mp3"></audio></div>`).join("\n");
  fs.writeFileSync(path.join(ROOT, "tools", "casting.html"), `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Голоса</title>
<style>body{font:16px -apple-system,sans-serif;max-width:640px;margin:20px auto;padding:0 16px;background:#f5eee1;color:#2d2a26}.r{background:#fffaf1;border:1px solid #e2d6c1;border-radius:14px;padding:12px;margin:8px 0;display:grid;gap:6px}b{text-transform:uppercase;font-size:12px;letter-spacing:.08em;color:#c26f47}audio{width:100%}</style>
<h2>Голоса героев</h2>${rows}`);
  console.log(JSON.stringify({ samples: pick.length, chars: pick.reduce((a, [, it]) => a + it.text.length, 0) }));
  process.exit(0);
}
if (cmd === "run") {
  const li = process.argv.indexOf("--limit");
  const todo = li > 0 ? missing.slice(0, Number(process.argv[li + 1])) : missing;
  let done = 0, failed = 0;
  const queue = todo.slice();
  const worker = async () => {
    while (queue.length) {
      const [k, it] = queue.shift();
      try { fs.writeFileSync(path.join(AUDIO, `${k}.mp3`), await tts(it, cfg)); done++; }
      catch (e) { failed++; console.error(`✗ ${it.who}: ${it.text.slice(0, 50)} — ${e.message.slice(0, 200)}`); if (/quota|credits|401/i.test(e.message)) queue.length = 0; }
      if ((done + failed) % 25 === 0) console.log(`… ${done + failed}/${todo.length}`);
    }
  };
  await Promise.all([1, 2, 3, 4].map(worker));
  // манифест: какие файлы есть (чтобы приложение не стучалось в несуществующие)
  const have = fs.readdirSync(AUDIO).filter((f) => f.endsWith(".mp3")).map((f) => f.slice(0, -4)).sort();
  fs.writeFileSync(path.join(AUDIO, "index.js"), `// Озвучка ElevenLabs: какие реплики есть в audio/*.mp3\nconst VOICE = ${JSON.stringify({ name: cfg.name, voices: cfg.voices, have })};\n`);
  console.log(JSON.stringify({ generated: done, failed, totalFiles: have.length }));
  process.exit(failed ? 1 : 0);
}
if (cmd === "prune") {
  // удаляем файлы, которые больше не нужны (сменили голос или текст), и обновляем манифест
  let removed = 0;
  for (const f of fs.readdirSync(AUDIO).filter((x) => x.endsWith(".mp3"))) if (!items.has(f.slice(0, -4))) { fs.unlinkSync(path.join(AUDIO, f)); removed++; }
  const have = fs.readdirSync(AUDIO).filter((f) => f.endsWith(".mp3")).map((f) => f.slice(0, -4)).sort();
  fs.writeFileSync(path.join(AUDIO, "index.js"), `// Озвучка ElevenLabs: какие реплики есть в audio/*.mp3\nconst VOICE = ${JSON.stringify({ name: cfg.name, voices: cfg.voices, have })};\n`);
  console.log(JSON.stringify({ removed, files: have.length, missing: items.size - have.length }));
  process.exit(0);
}
console.log("Команды: voices | plan | sample | run [--limit N] | prune");
