<script>
  import { onMount } from 'svelte';
  let even = false

  function swap() {
    even = !even
  }

  onMount(() => {
    const logo = document.querySelector('.logo')
    const el = document.querySelector('body')
    const style = window.getComputedStyle(el)
    // const primary = style.getPropertyValue('--primary-color')
    // const secondary = style.getPropertyValue('--secondary-color')

    logo.addEventListener('mouseenter', () => {
      const primary = style.getPropertyValue('--primary-color')
      const secondary = style.getPropertyValue('--secondary-color')
      console.log(`from logo ${primary}`)
      document.querySelectorAll('.up').forEach(el => {
        el.classList.toggle('notUp')
      })
      document.querySelectorAll('.down').forEach(el => {
        el.classList.toggle('notDown')
      })
      style.setProperty('--primary-color', secondary)
      style.setProperty('--secondary-color', primary)
    })

    logo.addEventListener('mouseleave', () => {
      document.querySelectorAll('.up').forEach(el => {
        el.classList.toggle('notUp')
      })
      document.querySelectorAll('.down').forEach(el => {
        el.classList.toggle('notDown')
      })
      document.body.style.setProperty('--primary-color', primary)
      document.body.style.setProperty('--secondary-color', secondary)
      swap()
    })
  })
</script>

<a href="/">
  <div class="logo">
    <span class={even ? 'big up notUp' : 'big down notDown'}>S</span>
    <span class={even ? 'down notDown' : 'up notUp'}>M</span>
    <span class={even ? 'up notUp' : 'down notDown'}>I</span>
    <span class={even ? 'down notDown' : 'up notUp'}>T</span>
    <span class={even ? 'up notUp' : 'down notDown'}>H</span>
    <span class={even ? 'big down notDown' : 'big up notUp'}>D</span>
    <span class={even ? 'up notUp' : 'down notDown'}>E</span>
    <span class={even ? 'down notDown' : 'up notUp'}>S</span>
    <span class={even ? 'up notUp' : 'down notDown'}>I</span>
    <span class={even ? 'down notDown' : 'up notUp'}>G</span>
    <span class={even ? 'up notUp' : 'down notDown'}>N</span>
  </div>
</a>

<style>
  .logo {
    width: 300px;
    padding: 1.5rem 2rem;
    background: var(--primary-color, #be0000);
    overflow: hidden;
  }

  span {
    position: relative;
    font-size: 3.5rem;
    margin: 0;
    /* top: initial; */
    /* bottom: initial; */
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-style: italic;
    color: var(--secondary-color, #f5e6db);
    /* transition: all 0.25s ease-in-out; */
  }

  span.big {
    font-size: 4rem;
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