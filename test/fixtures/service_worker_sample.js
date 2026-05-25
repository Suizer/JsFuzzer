// Workbox-style service worker with precacheAndRoute + cache.addAll + caches.match.
// Exercises every SW extraction path.
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => cache.addAll([
      "/index.html",
      "/static/css/main.abc123.css",
      "/static/js/main.def456.js",
      "/manifest.json"
    ]))
  );
});

workbox.precaching.precacheAndRoute([
  {"url":"/api/manifest.json","revision":"abc"},
  {"url":"/static/img/logo.svg","revision":"def"},
  {"url":"/static/fonts/inter.woff2","revision":null}
]);

self.__WB_MANIFEST = [
  {"url":"/about","revision":"1"},
  {"url":"/contact","revision":"2"}
];

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match("/api/offline-fallback.json").then((r) => r || fetch(event.request))
  );
});
