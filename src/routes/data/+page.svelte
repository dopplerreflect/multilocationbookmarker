<script type="ts">
	import { locations, sites } from '../../lib/store';

	let sitesValue: string;
	sites.subscribe((value) => (sitesValue = JSON.stringify(value, null, 2)));

	let locationsValue: string;
	locations.subscribe((value) => (locationsValue = JSON.stringify(value, null, 2)));
</script>

<div>
	<code>
		sites = {sitesValue}
	</code>
</div>
<div>
	<code>
		locations = {locationsValue}
	</code>
</div>

<style>
	code {
		display: block;
		white-space: pre;
	}
</style>
