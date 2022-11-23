<script type="ts">
	import { goto } from '$app/navigation';
	import { sites } from '../../../lib/store';
	import type { Site, Sites } from '../../../types';
	export let site: Site = { uuid: crypto.randomUUID(), name: '', url: '' };

	let sitesValue: Sites;
	sites.subscribe((value) => (sitesValue = value));

	const handleSubmit = () => {
		sites.set([...sitesValue.filter((s) => s.uuid !== site.uuid), site]);
		goto('/sites');
	};
	let confirmed = false;
	const deleteSite = (uuid: string) => {
		if (!confirmed) {
			confirmed = true;
			return;
		}
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
	<button type="submit">Save</button>
</form>

{#if site.name !== ''}
	<button on:click={(e) => deleteSite(site.uuid)} class={confirmed ? 'red' : ''}>Remove</button>
{/if}

<style>
	button.red {
		background-color: orangered;
	}
</style>
