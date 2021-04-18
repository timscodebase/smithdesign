<script>
  import { onMount } from 'svelte';
  let even = false

  function swap() {
    even = !even
  }

  onMount(() => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('mouseenter', () => {
      document.querySelectorAll('.up').forEach(el => {
        el.classList.toggle('notUp')
      })
      document.querySelectorAll('.down').forEach(el => {
        el.classList.toggle('notDown')
      })
    })

    logo.addEventListener('mouseleave', () => {
      document.querySelectorAll('.up').forEach(el => {
        el.classList.toggle('notUp')
      })
      document.querySelectorAll('.down').forEach(el => {
        el.classList.toggle('notDown')
      })
      swap()
    })
  })
</script>

<a href="/">
  <div class="logo">
    <span class={even ? 'up notUp' : 'down notDown'}>S</span>
    <span class={even ? 'down notDown' : 'up notUp'}>M</span>
    <span class={even ? 'up notUp' : 'down notDown'}>I</span>
    <span class={even ? 'down notDown' : 'up notUp'}>T</span>
    <span class={even ? 'up notUp' : 'down notDown'}>H</span>
    <span class={even ? 'down notDown' : 'up notUp'}>D</span>
    <span class={even ? 'up notUp' : 'down notDown'}>E</span>
    <span class={even ? 'down notDown' : 'up notUp'}>S</span>
    <span class={even ? 'up notUp' : 'down notDown'}>I</span>
    <span class={even ? 'down notDown' : 'up notUp'}>G</span>
    <span class={even ? 'up notUp' : 'down notDown'}>N</span>
  </div>
</a>

<style>
  .logo {
    width: 286px;
    padding: 1.5rem 2rem;
    background: var(--primary-color);
    overflow: hidden;
  }

  span {
    position: relative;
    font-size: 4rem;
    margin: 0;
    /* top: initial; */
    /* bottom: initial; */
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-style: italic;
    color: var(--secondary-color);
    /* transition: all 0.25s ease-in-out; */
  }

  span.up {
    top: -20px;
  }

  span.down {
    bottom: -20px;
  }

  span.notUp {
    top: 0;
  }
  span.notDown {
    bottom: 0;
  }
</style>