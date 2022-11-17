/// <reference lib="webworker" />
declare var self: ServiceWorkerGlobalScope;

import { build, version } from '$service-worker';

const installEvent = (event: ExtendableEvent): void => {
	console.log('installing service worker');
	event.waitUntil(
		caches.open(`cache${version}`).then((cache) => {
			// Open a cache and cache our files
			cache.addAll(build);
			return true;
		})
	);
};

const fetchEvent = (event: FetchEvent): void => {
	event.respondWith(
		caches.match(event.request).then((cacheResponse) => {
			if (cacheResponse) {
				console.info(`fetching from cache: ${event.request.url}`);
				return cacheResponse;
			}
			console.info(`trying to fetch from server: ${event.request.url}`);
			return fetch(event.request)
				.then(async (fetchResponse): Promise<Response | undefined> => {
					if (event.request.url.indexOf('http') !== -1) {
						const cache = await caches.open(`cache${version}`);
						try {
							// filter what to add to the cache
							if (fetchResponse.status !== 206) {
								cache.put(event.request.url, fetchResponse.clone());
							}
						} catch (error) {
							console.error(error);
						}
						return fetchResponse;
					}
					// eslint-disable-next-line consistent-return
					return undefined;
				})
				.catch((error) => {
					console.error(`"${error}: ${event.request.url}`);
					return error;
				});
		})
	);
};

self.addEventListener('install', installEvent);
self.addEventListener('fetch', fetchEvent);
