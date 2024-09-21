const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/TheColorGame/index.html',
    '/TheColorGame/sketch.js',
    '/TheColorGame/manifest.json',
    '/TheColorGame/style.css' // Füge diese Zeile hinzu, wenn du die CSS-Datei auch cachen möchtest
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







