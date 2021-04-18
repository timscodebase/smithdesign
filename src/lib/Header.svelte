<script>
  import Logo from "$lib/Logo.svelte";
</script>
<header>
  <Logo />
  <nav>
    <a href="/">Home</a>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>
    <a href="/uses">Uses</a>
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
    padding-right: 1rem;
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
    transition: all 0.25s ease;
  }
  header nav a:hover {
    position: relative;
    box-shadow: var(--bs);
    transform: scale(1.2);
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