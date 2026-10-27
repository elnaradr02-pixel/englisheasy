// Офлайн-кэш. При обновлении приложения поменяй версию.
const CACHE = "englisheasy-v9";
const FILES = ["./", "index.html", "cozy.css", "course-data.js", "cozy.js", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "art/cable-car-afternoon.svg","art/ferry-pier-morning.svg","art/harbor-noon.svg","art/lane-windy-dusk.svg","art/paper-boat-night.svg","art/shop-bright-morning.svg","art/shop-dusty-day.svg","art/shop-night-lamp.svg","art/stair-lane-afternoon.svg","art/steam-garden-morning.svg","art/weather-station-golden.svg"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Сначала сеть (обновления приходят сразу), но не дольше 3 секунд: при слабом интернете — из кэша
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  const url = new URL(e.request.url);
  if (url.pathname.endsWith(".ics")) return; // напоминания открываем как есть
  const net = fetch(e.request).then((res) => {
    if (res.ok && res.type === "basic") {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
    }
    return res;
  });
  e.waitUntil(net.then(() => {}, () => {}));
  const cached = () => caches.match(e.request, { ignoreSearch: true }).then((r) => r || (e.request.mode === "navigate" ? caches.match("index.html") : undefined));
  const timeout = new Promise((resolve) => setTimeout(resolve, 3000));
  e.respondWith(
    Promise.race([net.catch(() => null), timeout.then(() => "timeout")]).then((r) => {
      if (r && r !== "timeout") return r;
      return cached().then((c) => c || net);
    })
  );
});
