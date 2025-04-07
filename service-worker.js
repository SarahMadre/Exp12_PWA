self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('minishop-cache').then(cache => {
        return cache.addAll([
          '/',
          'index.html',
          'cart.html',
          'style.css',
          'script.js',
          'manifest.json',
          'images/notebook.jpg',
          'images/bottles.jpg',
          'images/pens.jpg',
          'images/bento.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(res => res || fetch(event.request))
    );
  });
  