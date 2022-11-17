import type { Site, Sites } from 'src/types';
import { sites } from '../../../lib/store';
import { v4 as uuidv4 } from 'uuid';

/** @type {import('./$types').PageLoad} */

let sitesValue: Sites;
sites.subscribe((value) => (sitesValue = value));

export function load({ params }: any) {
	const site: Site = sitesValue.find((s) => s.uuid === params.uuid) || {
		uuid: uuidv4(),
		name: '',
		url: ''
	};
	return site;
}
