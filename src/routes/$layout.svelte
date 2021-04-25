<script>
	import themeSwitcher from '$lib/themeSwitcher'
	import Header from '$lib/Header.svelte'
	import '../app.css';
	import '../intro.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { preloadFonts } from '$lib/utils';

	let currentPage = $page;

	onMount(() => {
		let primaryColor, secondaryColor, h1Color

		// Get LocalStorage
		primaryColor = localStorage.getItem("primary-color");
		secondaryColor = localStorage.getItem("secondary-color");
		h1Color = localStorage.getItem("h1-color");

		// Set body root variables
		if (primaryColor === null || secondaryColor === null || h1Color === null) {
			console.log("YA");
			themeSwitcher("#f00", "#fff", "#222")
		} else {
			console.log("else");
			console.log(primaryColor)
			console.log(secondaryColor)
			console.log(h1Color)
			themeSwitcher(primaryColor, secondaryColor, h1Color)
		}

		//! ==================================
		
		const DOM = {
			header: document.querySelector('.header'),
			frame: document.querySelector('.frame'),
			content: document.querySelector('.content'),
			enterCtrl: document.querySelector('.enter'),
			enterBackground: document.querySelector('.enter__bg'),
		};

		console.log(DOM);
		

		class Intro {
			constructor(el) {
				this.DOM = { el };
				this.DOM.circleText = [
					...this?.DOM?.el?.querySelectorAll('text.circles__text'),
				];
				this.circleTextTotal = this.DOM.circleText.length;
		
				this.setup();
			}
		
			setup() {
				gsap.set(this.DOM.circleText, { transformOrigin: '50% 50%' });
				gsap.set([
					this.DOM.circleText,
					DOM.content.children,
					DOM.frame.children,
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
		
				gsap.set([DOM.frame, DOM.content], { opacity: 1, height: 'auto' });
		
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
						[DOM.content.children, DOM.frame.children, DOM.header.children],
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
			}
		}

		const intro = new Intro(document.querySelector('.circles'));

		Promise.all([preloadFonts('kxo3pgz')]).then(() => {
				document.body.classList.remove('loading');
				intro.start();
		});
	})
</script>

{#if currentPage.path !== '/'}
	<Header />
	<div class="content-wrapper">
		<main>
			<slot />
		</main>
		<aside>
			stuff
		</aside>
	</div>
{:else}
	<div class="header">
		<Header/>
	</div>
	<div class="content-wrapper">
		<main>
			<svg class="circles" width="100%" height="100%" viewBox="0 0 1400 1400">
				<def>
					<path id="circle-1" d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5" />
					<path id="circle-2" d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5" />
					<path id="circle-3" d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5" />
					<path id="circle-4" d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5" />
				</def>
				<text class="circles__text circles__text--1">
					<textPath class="circles__text-path" xlink:href="#circle-1" aria-label="" textLength="2830">Worldclass Web Development&nbsp;</textPath>
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
			<div class="frame">
				<div>
				</div>
			</div>
			<div class="content">
					<slot />
			</div>
			<button class="enter">
				<div class="enter__bg"></div>
				<span class="enter__text">Enter</span>
			</button>
		</main>
	</div>
{/if}


<style>
	.content-wrapper {
		display: flex;
		flex-wrap: wrap;
		height: 100%;
	}

	.frame,
	.content {
		height: 0;
		opacity: 0;
	}

	main,
	.content,
	aside {
		padding: 1rem;
		font-size: 1.5rem;
	}

	main,
	.content {
		flex: 1 1 600px;
	}

	aside {
		flex: 1 1 300px;
		color: var(--secondary-color, #fff);
		background: var(--primary-color, #f00)
	}
</style>