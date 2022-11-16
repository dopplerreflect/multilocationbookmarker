import type { Site, Sites } from 'src/types';
import { sites } from '../../../lib/store';

/** @type {import('./$types').PageLoad} */

let sitesValue: Sites;
sites.subscribe((value) => (sitesValue = value));

export function load({ params }: any) {
	const site: Site = sitesValue.find((s) => s.name === params.name) || { name: '', url: '' };
	return site;
}
