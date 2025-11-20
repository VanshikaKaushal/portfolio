const CACHE_NAME = "portfolio-cache-v1";

const urlsToCache = [
  "/portfolio/",
  "/portfolio/index.html",
  "/portfolio/styles.css",
  "/portfolio/script.js",
  "/portfolio/manifest.json",
  "/portfolio/icons/icon_192.png",
  "/portfolio/icons/icon_512.png",
  "/portfolio/picture.jpg"
];

// Install — cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Fetch — cache first fallback to network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});


// Activate — cleanup old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

