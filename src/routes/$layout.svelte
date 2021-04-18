<script>
	import Header from '$lib/Header.svelte'
	import '../app.css';
</script>

<Header />
<div class="content-wrapper">
	<main>
		<slot />
	</main>
	<aside>
		stuff
	</aside>
</div>

<style>
	.content-wrapper {
		display: flex;
		flex-wrap: wrap;
	}

	main,
	aside {
		padding: 1rem;
		font-size: 1.5rem;
	}

	main {
		flex: 1 1 600px;
	}

	aside {
		flex: 1 1 300px;
		color: var(--secondary-color);
		background: var(--primary-color)
	}
</style>