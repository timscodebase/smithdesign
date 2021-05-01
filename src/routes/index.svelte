<svelte:head>
	<title>SmithDesign</title>
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import themeSwitcher from '$lib/themeSwitcher'
	import gsap from 'gsap';
	import { preloadFonts } from '$lib/utils';

	onMount(() => {
		const DOM = {
			header: document.querySelector('.header'),
			content: document.querySelector('.content'),
			enterCtrl: document.querySelector('.enter'),
			enterBackground: document.querySelector('.enter__bg'),
		};
		

		class Intro {
			constructor(el) {
				this.DOM = { el };
				this.DOM.circleText = [
					...this?.DOM?.el?.querySelectorAll('text.circles__text'),
				];
				this.circleTextTotal = this.DOM.circleText.length;
				
				this.setup()
			}
		
			setup() {
				gsap.set(this.DOM.circleText, { transformOrigin: '50% 50%' });
				gsap.set([
					this.DOM.circleText,
					DOM.content.children,
					DOM.header.children], {
					opacity: 0,
				});
				// don't allow to hover
				gsap.set(DOM.enterCtrl, { pointerEvents: 'none' });
		
				this.initEvents();
			}
		
			initEvents() {
				this.enterMouseEnterEv = () => {
					gsap.killTweensOf([DOM.enterBackground, this.DOM.circleText]);
		
					gsap.to(DOM.enterBackground, {
						duration: 1.3,
						ease: 'expo',
						scale: 0.5,
					});
					gsap.to(this.DOM.circleText, {
						duration: 0.5,
						ease: 'expo',
						rotation: '+=120',
						scale: 0.4,
						opacity: 0.2,
						stagger: {
							amount: -0.15,
						},
					});
				};
				this.enterMouseLeaveEv = () => {
					// gsap.killTweensOf([DOM.enterBackground,this.DOM.circleText]);
		
					gsap.to(DOM.enterBackground, {
						duration: 2,
						ease: 'elastic.out(1, 0.4)',
						scale: 1,
					});
					gsap.to(this.DOM.circleText, {
						duration: 2,
						ease: 'elastic.out(1, 0.4)',
						scale: 1,
						rotation: '-=120',
						opacity: 1,
						stagger: {
							amount: 0.15,
						},
					});
				};
		
				DOM.enterCtrl.addEventListener('mouseenter', this.enterMouseEnterEv);
				DOM.enterCtrl.addEventListener('mouseleave', this.enterMouseLeaveEv);
		
				this.enterClickEv = () => this.enter();
				DOM.enterCtrl.addEventListener('click', this.enterClickEv);
			}
		
			start() {
				this.startTL = gsap
					.timeline()
					.addLabel('start', 0)
					// rotation for all texts
					.to(
						this.DOM.circleText,
						{
							duration: 3,
							ease: 'expo.inOut',
							rotation: 90,
							stagger: {
								amount: 0.4,
							},
						},
						'start'
					)
					// scale in the texts & enter button and fade them in
					.to(
						[this.DOM.circleText, DOM.enterCtrl],
						{
							duration: 3,
							ease: 'expo.inOut',
							startAt: { opacity: 0, scale: 0.8 },
							scale: 1,
							opacity: 1,
							stagger: {
								amount: 0.4,
							},
						},
						'start'
					)
					// at start+1 allow the hover over the enter ctrl
					.add(() => {
						gsap.set(DOM.enterCtrl, { pointerEvents: 'auto' });
					}, 'start+=2');
			}
		
			enter() {
				this.startTL.kill();
		
				DOM.enterCtrl.removeEventListener('mouseenter', this.enterMouseEnterEv);
				DOM.enterCtrl.removeEventListener('mouseleave', this.enterMouseLeaveEv);
				gsap.set(DOM.enterCtrl, { pointerEvents: 'none' });
		
				gsap.set(DOM.content, { opacity: 1, height: 'auto' });
		
				gsap
					.timeline()
					.addLabel('start', 0)
					.to(
						DOM.enterCtrl,
						{
							duration: 0.6,
							ease: 'back.in',
							scale: 0.2,
							opacity: 0,
						},
						'start'
					)
					.to(
						this.DOM.circleText,
						{
							duration: 0.8,
							ease: 'back.in',
							scale: 1.6,
							opacity: 0,
							rotation: '-=20',
							stagger: {
								amount: 0.3,
							},
						},
						'start'
					)
					.to(
						[DOM.content.children, DOM.header.children],
						{
							duration: 0.8,
							ease: 'back.out',
							startAt: { opacity: 0, scale: 0.8 },
							scale: 1,
							opacity: 1,
							stagger: {
								amount: 0.2,
							},
						},
						'start+=1'
					);
					
				sessionStorage.setItem('intro_shown', true);
				themeSwitcher("#be0000", "#f5e6db", "#222")
				// if (primaryColor === null || secondaryColor === null || h1Color === null) {
				// 	alert("YA");
				// 	themeSwitcher("#be0000", "#f5e6db", "#222")
				// } else {
				// 	alert("else", primaryColor, secondaryColor, h1Color)
				// 	themeSwitcher(primaryColor, secondaryColor, h1Color)
				// }
			}

		}

		const intro_shown = sessionStorage.getItem('intro_shown');

		if (intro_shown) {	
			const content = document.querySelector('.content')
			const enter = document.querySelector('.enter')
			const enterBg = document.querySelector('.enter__bg')
			const circle = document.querySelector('.circles')

			enter.style.opacity = 0
			enterBg.style.opacity = 0
			circle.style.opacity = 0
			content.style.opacity = 1
		} else {
			const intro = new Intro(document.querySelector('.circles'))

			Promise.all([preloadFonts('kxo3pgz')]).then(() => {
				document.body.classList.remove('loading');
				intro.start();
			});
		}
	})
</script>

<svg class="circles" width="100%" height="100%" viewBox="0 0 1400 1400">
	<def>
		<path id="circle-1" d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5" />
		<path id="circle-2" d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5" />
		<path id="circle-3" d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5" />
		<path id="circle-4" d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5" />
	</def>
	<text class="circles__text circles__text--1">
		<textPath class="circles__text-path" xlink:href="#circle-1" aria-label="" textLength="2830">&nbsp;SmithDesign&nbsp;|&nbsp;SmithDesign&nbsp;|</textPath>
	</text>
	<text class="circles__text circles__text--2">
		<textPath class="circles__text-path" xlink:href="#circle-2" aria-label="" textLength="2001">Worldclass Web Design&nbsp;</textPath>
	</text>
	<text class="circles__text circles__text--3">
		<textPath class="circles__text-path" xlink:href="#circle-3" aria-label="" textLength="1341">Worldclass Web Development&nbsp;</textPath>
	</text>
	<text class="circles__text circles__text--4">
		<textPath class="circles__text-path" xlink:href="#circle-4" aria-label="" textLength="836">&nbsp;SmithDesign&nbsp;|&nbsp;SmithDesign&nbsp;|</textPath>
	</text>
</svg>
<button class="enter">
	<div class="enter__bg"></div>
	<span class="enter__text">Enter</span>
</button>
<div class="content">
	<div class="content-wrapper">
		<div class="hero-wrapper">
			<div class="hero-text">
				<p>Why settle for a cookie-cuttier website when you can have a beautifully handcrafted website from <span>SmithDesign</span></p>
			</div>
		</div>
		<main>
			<h1>WEED</h1>
		</main>
		<aside>
			Home Stuff
		</aside>
	</div>
</div>

<style>
	.hero-wrapper {
		width: 100%;
		min-height: 75vh;
		background: url('/img/hero.png');
		background-size: cover;
		display: grid;
		place-items: center;
		position: relative;
	}

	.hero-text {
		width: 50%;
		padding: 2.5rem;
		position: absolute;
		display: grid;
		place-items: center;
		margin-right: auto;
	}

	.hero-text p {
		font-size: 4.5rem;
		background: inherit;
		color: var(--secondary-color);
		font-family: 'Fira Code', monospace;
		padding-bottom: 2rem;
	}

	.hero-text p span {
		color: var(--primary-color);
    font-size: 7rem;
    background: var(--secondary-color);
    margin-top: 6rem;
		margin-left: -3rem;
		padding: 1rem 3rem 1rem 20rem;
		border-radius: 0 50px 50px 0;
    display: inline-block;
	}
	
	.content {
		height: 0;
		opacity: 0;
	}

	@media(max-width: 750px) {
		.hero-wrapper {
			min-height: 40vh;
		}

		.hero-text {
			width: 100%;
		}
		.hero-text p {
			font-size: 2rem;
		}
	}
</style>
