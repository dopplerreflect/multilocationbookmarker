<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Home</a>
		</li>
		<li aria-current={$page.url.pathname.match(/\/locations/) ? 'page' : undefined}>
			<a href="/locations">Locations</a>
		</li>
		<li aria-current={$page.url.pathname.match(/\/sites/) ? 'page' : undefined}>
			<a href="/sites">Sites</a>
		</li>
	</ul>
</nav>

<style>
	a {
		text-decoration: none;
		color: blue;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		display: inline-block;
		list-style-type: none;
	}
	li[aria-current='page'] {
		font-weight: bold;
		border-bottom: 1px solid black;
	}
</style>
