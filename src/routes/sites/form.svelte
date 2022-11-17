<script type="ts">
	import { goto } from '$app/navigation';
	import { sites } from '../../lib/store';
	import type { Site, Sites } from '../../types';
	import { v4 as uuidv4 } from 'uuid';
	export let site: Site = { uuid: uuidv4(), name: '', url: '' };

	let sitesValue: Sites;
	sites.subscribe((value) => (sitesValue = value));

	const handleSubmit = () => {
		sites.set([...sitesValue.filter((s) => s.uuid !== site.uuid), site]);
		goto('/sites');
	};
	const deleteSite = (uuid: string) => {
		sites.set([...sitesValue.filter((s) => s.uuid !== uuid)]);
		goto('/sites');
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="uuid">UUID</label>
	<input disabled id="uuid" bind:value={site.uuid} />
	<label for="name"> Name </label>
	<input id="name" autocomplete="off" bind:value={site.name} />
	<label for="url"> URL </label>
	<textarea id="url" autocomplete="off" bind:value={site.url} />
	<button type="submit">Submit</button>
</form>

{#if site.name !== ''}
	<button on:click={(e) => deleteSite(site.uuid)}>X</button>
{/if}
