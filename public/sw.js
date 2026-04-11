const CACHE_NAME = 'geo-capital-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/logo_juvenil.png'
];

// instalar
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// activar
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// fetch (cache-first)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});