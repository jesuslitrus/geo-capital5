const CACHE_NAME = 'geo-capital-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/logos/logo-192.png',
  '/logos/logo-512.png'
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