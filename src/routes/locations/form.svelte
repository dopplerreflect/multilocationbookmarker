<script lang="ts">
	import { goto } from '$app/navigation';
	import { locations } from '../../lib/store';
	import type { Location, Locations } from '../../types';
	export let location: Location = { uuid: crypto.randomUUID(), name: '', coordinates: '' };

	let locationsValue: Locations;
	locations.subscribe((value) => (locationsValue = value));

	const handleSubmit = (event: any) => {
		locations.set([...locationsValue.filter((l) => l.uuid !== location.uuid), location]);
		goto('/locations');
	};

	const deleteLocation = (uuid: string) => {
		locations.set([...locationsValue.filter((l) => l.uuid !== uuid)]);
		goto('/locations');
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="uuid">UUID</label>
	<input disabled bind:value={location.uuid} />
	<label for="name">Location</label>
	<input id="name" autocomplete="off" bind:value={location.name} />
	<label for="coordinates">Coordinates</label>
	<input id="coordinates" autocomplete="off" bind:value={location.coordinates} />
	<label for="address">Address</label>
	<input id="address" autocomplete="off" bind:value={location.address} />
	<button type="submit">Submit</button>
</form>

{#if location.name !== ''}
	<button on:click={(e) => deleteLocation(location.uuid)}>X</button>
{/if}
