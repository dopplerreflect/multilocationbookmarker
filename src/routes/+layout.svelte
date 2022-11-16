<script>
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style global>
	label,
	input,
	textarea {
		display: block;
	}
	textarea {
		width: 30em;
		height: 8em;
	}
</style>
