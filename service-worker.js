const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  
  'index.html',
  'sketch.js',
  'manifest.json',
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});


self.addEventListener('install', function(event) {
  console.log('Service Worker installiert.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker aktiviert.');
});

self.addEventListener('fetch', function(event) {
  console.log('Fetch-Anfrage für:', event.request.url);
});








