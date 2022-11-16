<script type="ts">
	import { sites } from '../../lib/store';
	import type { Site, Sites } from '../../types';

	let site: Site = { name: '', url: '' };

	let sitesValue: Sites;
	sites.subscribe((value) => (sitesValue = value));
</script>

<a href="/sites/new">New Site</a>

<ul>
	{#each sitesValue as site}
		<li>
			<a href="/sites/{site.name}">
				{site.name}
			</a>
		</li>
	{/each}
</ul>

<style>
	.mono {
		font-family: 'Courier New', Courier, monospace;
	}
</style>
