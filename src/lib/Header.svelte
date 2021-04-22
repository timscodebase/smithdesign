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
    <a class={currentPage.path === "/" ? "current" : ""} href="/">Home</a>
    <a class={currentPage.path === "/contact" ? "current" : ""} href="/contact">Contact</a>
    <a class={currentPage.path === "/about" ? "current" : ""} href="/about">About</a>
    <a class={currentPage.path === "/uses" ? "current" : ""} href="/uses">Uses</a>
    <a class={currentPage.path === "/settings" ? "current" : ""} href="/settings">Settings</a>
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-between;
    border-bottom: 2px solid var(--primary-color);
  }

  header nav {
    display: flex;
    margin-left: auto;
    background: var(--secondary-color);
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
    color: var(--primary-color);
  }
  header nav a:hover{
    border-bottom: 2px solid var(--primary-color)
  }
  .current {
    border-top: 5px solid var(--primary-color)
  }

  @media(max-width: 750px) {
    header {
      justify-content: center;
      background: var(--primary-color);
    }

    header nav {
      margin-left: initial;
    }

    header nav a:hover {
      box-shadow: none;
      transform: scale(1);
    }
  }
</style>