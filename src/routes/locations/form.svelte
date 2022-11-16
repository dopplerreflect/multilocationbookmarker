<script lang="ts">
	import { goto } from '$app/navigation';
	import { locations } from '../../lib/store';
	import type { Location, Locations } from '../../types';
	export let location: Location = { name: '', coordinates: '' };

	let locationsValue: Locations;
	locations.subscribe((value) => (locationsValue = value));

	const handleSubmit = (event: any) => {
		locations.set([...locationsValue.filter((l) => l.name !== location.name), location]);
		location = { name: '', coordinates: '' };
		goto('/locations');
	};

	const deleteLocation = (name: string) => {
		locations.set([...locationsValue.filter((l) => l.name !== name)]);
		goto('/locations');
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="name">Location</label>
	<input
		id="name"
		disabled={locationsValue.find((l) => l.name === location.name) ? true : false}
		autocomplete="off"
		bind:value={location.name}
	/>
	<label for="coordinates">Coordinates</label>
	<input id="coordinates" autocomplete="off" bind:value={location.coordinates} />
	<label for="address">Address</label>
	<input id="address" autocomplete="off" bind:value={location.address} />
	<button type="submit">Submit</button>
</form>

{#if location.name !== ''}
	<button on:click={(e) => deleteLocation(location.name)}>X</button>
{/if}
