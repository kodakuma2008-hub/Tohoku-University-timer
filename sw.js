 const CACHE_NAME = "tohoku-timer-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./icon.jpeg",
  "./Tohoku.png",
 "./Tohoku2.jpeg",
 "./Tohoku3.jpeg",
 "./Tohoku4.jpeg",
  // 画像や音声など必要なファイルを全部追加
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
