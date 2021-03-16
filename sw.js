const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  'index.html',
  './', //index.html alias
  'css/style.css',
  'js/main.js',
  'images/hello-icon-128.png',
  'images/hello-icon-144.png',
  'images/hello-icon-152.png',
  'images/hello-icon-192.png',
  'images/hello-icon-256.png',
  'images/hello-icon-512.png',
  'images/hello-icon-196maskable.png',
  'sw.js'
  ];

// install handler precaches our resources as directed
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(PRECACHE).then(function(cache) {
      return cache.addAll(PRECACHE_URLS);
    })
    );
});

// activate handler
self.addEventListener('activate', event => {
  console.log('Service work up...');
});

// the fetch handler
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
    });
});
