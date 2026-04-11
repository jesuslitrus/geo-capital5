const CACHE_NAME = 'geo-capital-v3'; // Subimos versión para forzar actualización

const urlsToCache = [
  '/geo-capital5/',             // La raíz de tu app en GitHub
  '/geo-capital5/index.html',
  '/geo-capital5/manifest.json', // ¡Añadido!
  '/geo-capital5/logos/logo-192.png',
  '/geo-capital5/logos/logo-512.png'
];

// instalar
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cacheando archivos...');
        return cache.addAll(urlsToCache);
      })
  );
});

// activar
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// fetch (Network-first para evitar que se quede "congelado" con errores 404)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});