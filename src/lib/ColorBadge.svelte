<script>
  import themeSwitcher from '$lib/themeSwitcher'

  export let primaryColor
  export let secondaryColor
  export let h1Color

  function handleClick() {
    themeSwitcher(primaryColor, secondaryColor, h1Color)
  }
</script>

<div class="badge">
  <div class="color-square">
    <div class="primary-color" style="--primary: {primaryColor}"></div>
    <div class="secondary-color" style="--secondary: {secondaryColor}"></div>
    <div class="h1-color" style="--h1: {h1Color}"></div>
  </div>
  <button on:click={handleClick}>Set Theme</button>
</div>

<style>
  .badge {
    padding: 2rem;
    border: 2px solid var(--primary-color, #be0000);
  }

  .color-square {
    width: 200px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
  }
  .primary-color,
  .secondary-color {
    width: 50%;
    height: 50%;
  }
  .h1-color {
    width: 100%;
    height: 50%;
  }

  .primary-color {
    background-color: var(--primary);
  }
  .secondary-color {
    background-color: var(--secondary);
  }
  .h1-color {
    background-color: var(--h1);
  }

  button {
    background: var(--primary-color, #be0000);
    color: #f5e6db;
    padding: 1rem 2rem;
    margin: 1rem auto;
  }
</style>