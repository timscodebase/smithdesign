<script>
	import Header from '$lib/Header.svelte'
	import themeSwitcher from '$lib/themeSwitcher'
	import '../app.css';
	import '../intro.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let currentPage = $page;

	onMount(() => {
		let primaryColor, secondaryColor, h1Color

		// Get LocalStorage
		primaryColor = localStorage.getItem("primary-color")
		secondaryColor = localStorage.getItem("secondary-color")
		h1Color = localStorage.getItem("h1-color")
		

		//! ==================================
		
		themeSwitcher("#be0000", "#f5e6db", "#222")
				// if (primaryColor === null || secondaryColor === null || h1Color === null) {
				// 	alert("YA");
				// 	themeSwitcher("#be0000", "#f5e6db", "#222")
				// } else {
				// 	alert("else", primaryColor, secondaryColor, h1Color)
				// 	themeSwitcher(primaryColor, secondaryColor, h1Color)
				// }
	})
</script>

{#if currentPage.path !== '/'}
	<Header />
	<div class="content-wrapper">
		<main>
			<slot />
		</main>
		<aside>
			stuff
		</aside>
	</div>
{:else}
	<div class="header">
		<Header/>
	</div>
	<slot />
{/if}
