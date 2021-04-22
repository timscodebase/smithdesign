<svelte:head>
	<title>SmithDesign</title>
</svelte:head>

<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const left = document.querySelector('.from-left')
		const right = document.querySelector('.from-right')
		console.log(left)
		console.log(right)
		setTimeout(() => {
			left.classList.remove('out')
			right.classList.remove('out')
		}, 420)
	})
</script>

<span class="fly-in from-left out"><h1>World Class</h1></span>
<span class="fly-in from-right out"><h1>Web Design</h1></span>

<style>
	.fly-in {
		position: absolute;
		text-transform: uppercase;
	}
	.fly-in h1 {
		font-size: 10rem;
	}

	.from-left {
		top: 20%;
		left: 0px;
		transition: all 1.2s ease;
	}
	.from-left.out{
		left: -730px;
	}

	.from-right {
		top: 40%;
		right: 0px;
		transition: all 1.2s ease; 
	}
	.from-right.out {
		right: -630px;
	}
</style>
