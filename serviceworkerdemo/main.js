if ('serviceWorker' in navigator) {
    console.log('YES serviceWorker is available')

    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('sw_cached_site.js')
            .then(reg => console.log('serviceWorker: Service worker registered'))
            .catch(err => console.log(`serviceWorker: error ${err}`))
    })
}
