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

<div class="hero-wrapper">
	<span class="fly-in from-left out"><h1>World Class</h1></span>
	<span class="fly-in from-right out"><h1>Web Design</h1></span>
</div>

<style>
	.hero-wrapper {
		position: relative;
		margin: 0 auto;
		height: 70vh;
		width: 800px;
	}

	.hero-wrapper:hover > .fly-in {
		transform: skewY(0);
	}

	.fly-in {
		position: absolute;
		text-transform: uppercase;
		transform: skewY(10deg);
	}
	.fly-in h1 {
		font-size: 10rem;
	}

	.from-left {
		top: 100px;
		right: 90px;
		transition: all 1.2s ease;
	}
	.from-left.out{
		right: -700px;
		opacity: 0;
		transform: skewY(0deg);
	}

	.from-right {
		top: 260px;
		left: 150px;
		transition: all 1.2s ease; 
	}
	.from-right.out {
		left: -650px;
		opacity: 0;
		transform: skewY(0deg);
	}
</style>
