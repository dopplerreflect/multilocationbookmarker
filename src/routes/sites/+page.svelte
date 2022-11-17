<script type="ts">
	import { sites } from '$lib/store';
	import type { Sites } from '../../types';

	let sitesValue: Sites;
	sites.subscribe((value) => (sitesValue = value));
</script>

<a href="/sites/new">New Site</a>

<ul>
	{#each sitesValue as site}
		<li>
			<a href="/sites/{site.uuid}">
				{site.name}
			</a>
		</li>
	{/each}
</ul>
