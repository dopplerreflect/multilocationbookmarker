<script lang="ts">
	import { locations } from '../../lib/store';
	import type { Locations } from '../../types';

	let locationsValue: Locations;
	locations.subscribe((value) => (locationsValue = value));
</script>

<a href="/locations/new">New Location</a>

<ul>
	{#each locationsValue as location}
		<li>
			<a href="/locations/{location.uuid}">{location.name}</a>
		</li>
	{/each}
</ul>

<style>
	* {
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
