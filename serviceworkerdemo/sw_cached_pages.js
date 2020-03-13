const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'about.html',
    '/css/style.css',
    '/js/main.js'
];

self.addEventListener('install', (event) => {
    console.log('service worker: service worker installed')

    event.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('service worker: caching files ')
                cache.addAll(cacheAssets);
            })
            .then(()=> {
                self.skipWaiting()
            })
    );


})

self.addEventListener('activate', (event) => {
    console.log('service worker: service worker activated')

    //remove unwanted caches
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                   cacheNames.map(cache =>{
                     if (cache != cacheName) {
                         console.log('service worker: clearing old cache')
                         return caches.delete()
                     }  
                   })
                )
            })
    )

})



self.addEventListener('fetch', (event) => {
    console.log('service worker: fetch event called')
    event.respondWith(
        fetch(event.request)
        .catch(() => {
            caches.match(event.request)
        })
    )

})
