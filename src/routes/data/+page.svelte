<script type="ts">
	import { locations, sites } from '../../lib/store';

	let sitesValue: string;
	sites.subscribe((value) => (sitesValue = JSON.stringify(value)));

	let locationsValue: string;
	locations.subscribe((value) => (locationsValue = JSON.stringify(value)));

	$: data = `{"sites":${sitesValue},"locations":${locationsValue}}`;

	const handleSubmit = (event: any) => {
		let { sites: _sites, locations: _locations } = JSON.parse(data);
		console.log(_sites, _locations);
		sites.set(_sites);
		locations.set(_locations);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div>
		<textarea bind:value={data} />
	</div>
	<button type="submit">Save</button>
</form>

<style>
	textarea {
		width: 100%;
		height: calc(100vh / 3);
	}
</style>
