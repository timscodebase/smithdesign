<script>
  import { onDestroy } from 'svelte';
  import { page } from '$app/stores';

  let currentPage = $page;
	console.log(currentPage.path);
  
  import Logo from "$lib/Logo.svelte";
</script>
<header>
  <Logo />
  <nav>
    <a sveltekit:prefetch class={currentPage.path === "/" ? "current" : ""} href="/">Home</a>
    <a sveltekit:prefetch class={currentPage.path === "/contact" ? "current" : ""} href="/contact">Contact</a>
    <a sveltekit:prefetch class={currentPage.path === "/about" ? "current" : ""} href="/about">About</a>
    <a sveltekit:prefetch class={currentPage.path === "/uses" ? "current" : ""} href="/uses">Uses</a>
    <a sveltekit:prefetch class={currentPage.path === "/settings" ? "current" : ""} href="/settings">Settings</a>
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-between;
    border-bottom: 2px solid var(--primary-color, #be0000);
  }

  header nav {
    display: flex;
    margin-left: auto;
    justify-content: space-evenly;
    background: var(--secondary-color, #be0000);
  }

  header nav a {
    min-height: 40px;
    height: 100%;
    display: grid;
    font-size: 1.6rem;
    padding: 0 2.5rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--primary-color, #be0000);
  }
  header nav a:hover{
    border-bottom: 2px solid var(--primary-color, #be0000)
  }
  .current {
    border-top: 5px solid var(--primary-color, #be0000)
  }

  @media(max-width: 750px) {
    header {
      justify-content: center;
      background: var(--primary-color, #be0000);
    }

    header nav {
      margin-right: 0;
      flex-wrap: wrap;
      margin-left: initial;
    }

    header nav a {
      height: auto;
    }

    header nav a:hover {
      box-shadow: none;
      transform: scale(1);
    }
  }
</style>