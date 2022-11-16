<script type="ts">
	import { goto } from '$app/navigation';
	import { sites } from '../../lib/store';
	import type { Site, Sites } from '../../types';
	export let site: Site = { name: '', url: '' };

	let sitesValue: Sites;
	sites.subscribe((value) => (sitesValue = value));

	const handleSubmit = () => {
		sites.set([...sitesValue.filter((s) => s.name !== site.name), site]);
		site = { name: '', url: '' };
		goto('/sites');
	};
	const deleteSite = (name: string) => {
		sites.set([...sitesValue.filter((s) => s.name !== name)]);
		goto('/sites');
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="name"> Name </label>
	<input
		id="name"
		disabled={sitesValue.find((v) => v.name === site.name) ? true : false}
		autocomplete="off"
		bind:value={site.name}
	/>
	<label for="url"> URL </label>
	<textarea id="url" autocomplete="off" bind:value={site.url} />
	<button type="submit">Submit</button>
</form>

{#if site.name !== ''}
	<button on:click={(e) => deleteSite(site.name)}>X</button>
{/if}
