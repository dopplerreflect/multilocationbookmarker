import type { Locations, Sites } from '../types';
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let initialLocations: Locations = browser
	? JSON.parse(localStorage.getItem('locations') || '[]')
	: [];

export const locations = writable(initialLocations);

locations.subscribe((value) => {
	browser &&
		localStorage.setItem(
			'locations',
			JSON.stringify(value.sort((a, b) => a.name.localeCompare(b.name)))
		);
});

let initialSites: Sites = browser ? JSON.parse(localStorage.getItem('sites') || '[]') : [];

export const sites = writable(initialSites);

sites.subscribe((value) => {
	browser &&
		localStorage.setItem(
			'sites',
			JSON.stringify(value.sort((a, b) => a.name.localeCompare(b.name)))
		);
});
