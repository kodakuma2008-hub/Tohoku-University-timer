const SW_VERSION = 'v10';
var CACHE_NAME = 'Tohoku-University-timer-caches';
var urlsToCache = [
	'/Tohoku-University-timer/',
];

// インストール処理
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(function(cache) {
				return cache.addAll(urlsToCache);
			})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches
			.match(event.request)
			.then(function(response) {
				return response ? response : fetch(event.request);
			})
	);
});
