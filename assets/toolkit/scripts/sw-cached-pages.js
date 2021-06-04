Call install event
self.addEventListener('install', (e) => {
console.log('Service Worker: Installed')
})

// Call activate event
self.addEventListener('activate', (e) => {
console.log('Service Worker: Activated')
})
