<script type="ts">
	import { sites, locations } from '../lib/store';
	import type { Site, Sites, Location, Locations } from '../types';

	let sitesValue: Sites;
	let locationsValue: Locations;

	sites.subscribe((value) => (sitesValue = value));
	locations.subscribe((value) => (locationsValue = value));

	function locationizeSite(location: Location, site: Site) {
		// special case for ryancarlton.com
		if (location.address !== '' && site.url.match(/ryancarlton/)) {
			return `${site.url}/${location.address?.replace(/ /g, '%20')}`;
		}
		const [lat, lon] = location.coordinates.split(', ').map((v) => Number(v).toFixed(3));
		return site.url.replace(/LAT/, lat).replace(/LON/, lon);
	}
</script>

<ul>
	{#each locationsValue as location}
		<li>{location.name} ({location.coordinates})</li>
		<ul>
			{#each sitesValue as site}
				<li>
					<a rel="noreferrer" target="_blank" href={locationizeSite(location, site)}>{site.name}</a>
					({locationizeSite(location, site)})
				</li>
			{/each}
		</ul>
	{/each}
</ul>
