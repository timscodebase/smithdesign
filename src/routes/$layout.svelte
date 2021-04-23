<script>
	import Header from '$lib/Header.svelte'
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import {getCLS, getFID, getLCP} from 'web-vitals';

	function sendToAnalytics(metric) {
		const body = JSON.stringify(metric);
		// Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
		(navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
				fetch('/analytics', {body, method: 'POST', keepalive: true});
	}

	getCLS(sendToAnalytics);
	getFID(sendToAnalytics);
	getLCP(sendToAnalytics);

	let currentPage = $page;

	onMount(() => {
		let primaryColor, secondaryColor, h1Color
		
		// Get LocalStorage
		primaryColor = localStorage.getItem("primary-color");
		secondaryColor = localStorage.getItem("secondary-color");
		h1Color = localStorage.getItem("h1-color");
		console.log(localStorage.getItem("primary-color"));

		// Set body root variables
		if (primaryColor === null || secondaryColor === null || h1Color === null) {
			console.log("YA");
			document.body.style.setProperty("--primary-color", '#f00')
			document.body.style.setProperty("--secondary-color", '#fff')
			document.body.style.setProperty("--h1-color", '#222')
		} else {
			console.log("else");
			console.log(primaryColor)
			console.log(secondaryColor)
			console.log(h1Color)
			document.body.style.setProperty("--primary-color", primaryColor)
			document.body.style.setProperty("--secondary-color", secondaryColor)
			document.body.style.setProperty("--h1-color", h1Color)
		}
		
	})
</script>

<Header />
{#if currentPage.path !== '/'}
	<div class="content-wrapper">
		<main>
			<slot />
		</main>
		<aside>
			stuff
		</aside>
	</div>
{:else}
<div class="content-wrapper">
	<main>
		<slot />
	</main>
</div>
{/if}


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
		position: relative;
		flex: 1 1 600px;
	}

	aside {
		flex: 1 1 300px;
		color: var(--secondary-color);
		background: var(--primary-color)
	}
</style>