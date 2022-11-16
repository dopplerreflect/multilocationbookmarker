import type { Location, Locations } from 'src/types';
import { locations } from '../../../lib/store';

/** @type {import('./$types').PageLoad} */

let locationsValue: Locations;
locations.subscribe((value) => (locationsValue = value));

export function load({ params }: any) {
	const location: Location = locationsValue.find((l) => l.name === params.location) || {
		name: '',
		coordinates: ''
	};
	return location;
}
