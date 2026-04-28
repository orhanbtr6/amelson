const cacheName = 'amel-v22-23';
const assets = [
  './',
  './index.html',
  './logo.png' // Manifest'teki isimle BİREBİR aynı olmalı
];

// Kurulum: Dosyaları hafızaya al
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Çalıştırma: İnternet olmasa da hafızadan getir
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
