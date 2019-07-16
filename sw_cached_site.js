const cacheName = 'v2';


self.addEventListener('install', (event) => {
    console.log('service worker: service worker installed')

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
        .then(response => {
            //make a coopy clone of response
            const resClone = response.clone();
            caches.open(cacheName)
                .then(cache => {
                    //caches add response
                    cache.put(event.request, resClone);

                })
            return response;

        })
        .catch(() => {
            caches.match(event.request)
                .then(response => response)
        })
    )

})
