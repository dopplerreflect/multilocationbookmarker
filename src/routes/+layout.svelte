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
	:root {
		--link-color: hsl(220, 100%, 80%);
	}
	body {
		font-family: Arial, Helvetica, sans-serif;
		background-color: hsl(220, 50%, 20%);
		color: hsl(220, 50%, 80%);
	}
	a {
		color: var(--link-color);
	}
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
