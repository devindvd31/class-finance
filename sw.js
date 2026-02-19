const CACHE_NAME = 'class-finance-v1';
const urlsToCache = [
  '/class-finance/',
  '/class-finance/index.html',
  '/class-finance/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
