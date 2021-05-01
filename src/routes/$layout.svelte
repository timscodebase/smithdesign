<script>
	import Header from '$lib/Header.svelte'
	import themeSwitcher from '$lib/themeSwitcher'
	import '../app.css';
	import '../intro.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let thisPage = $page;

	onMount(() => {
		let primaryColor, secondaryColor, h1Color

		// Get LocalStorage
		primaryColor = localStorage.getItem("primary-color")
		secondaryColor = localStorage.getItem("secondary-color")
		h1Color = localStorage.getItem("h1-color")
		

		//! ==================================
		
		themeSwitcher("#be0000", "#fff", "#222")
	})
</script>

{#if thisPage.path !== '/'}
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
