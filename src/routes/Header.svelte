<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/"><button>Home</button></a>
		</li>
		<li aria-current={$page.url.pathname.match(/\/locations/) ? 'page' : undefined}>
			<a href="/locations"><button>Locations</button></a>
		</li>
		<li aria-current={$page.url.pathname.match(/\/sites/) ? 'page' : undefined}>
			<a href="/sites"><button>Sites</button></a>
		</li>
		<li aria-current={$page.url.pathname.match(/\/data/) ? 'page' : undefined}>
			<a href="/data"><button>Data</button></a>
		</li>
	</ul>
</nav>

<style>
	nav {
		border-bottom: 1px solid var(--link-color);
		margin-bottom: 1em;
	}
	a {
		text-decoration: none;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		display: inline-block;
		list-style-type: none;
	}
	li button {
		background-color: var(--link-color);
		cursor: pointer;
	}
	li button:hover {
		background-color: hsl(220, 50%, 80%);
	}
	li[aria-current='page'] button {
		background-color: hsl(220, 50%, 80%);
	}
</style>
