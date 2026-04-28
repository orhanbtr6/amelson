const cacheName = 'amel-v14-6';
const assets = [
  './',
  './index.html',
  './amel_icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
self.addEventListener('fetch', function(event) {
  // Bu boş olsa bile fetch olayını dinlemesi Chrome'u ikna eder.
  event.respondWith(fetch(event.request));
});
