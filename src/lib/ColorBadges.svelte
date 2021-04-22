<script>
  import colorThemes from '$lib/colorThemes'
  import ColorBadge from '$lib/ColorBadge.svelte'
</script>

<div class="badges">
  {#each colorThemes as { primaryColor, secondaryColor, h1Color }}
    <ColorBadge primaryColor={primaryColor} secondaryColor={secondaryColor} h1Color={h1Color}/>
  {/each}
</div>

<style>
  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0 auto;
  }
</style>
