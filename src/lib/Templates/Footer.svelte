<script lang="ts">
	import { page } from '$app/stores';
	import { scrollToTop } from 'svelte-scrollto';
	import { ParticlesBlock } from '$lib';
	export let motion: MotionStatus;

	let scrollY;
	$: showScrollTop = scrollY > 30;
	$: scrollTopImage = 'loading.png';
	$: extended = $page.path === '/';
	$: clamped = extended ? 0 : Number((clamp(scrollY, 0, 25 * 4) / 4).toFixed(2));
	$: motionStyle = `transform: translate(${motion.x}%, ${motion.y}vh);`;
	$: footerStyle = `transform: translate(0, ${!extended ? clamped - 25 : 0}vh);`;

	const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
</script>

<footer class:extended />
<div class="footer-wrapper" style={motionStyle}>
	<div class:extended class="footer-background" style={footerStyle}>
		<div class="bg-wrapper">
			<ParticlesBlock />
		</div>
	</div>
</div>

<img
	class:show={showScrollTop}
	class="scroll"
	src={scrollTopImage}
	alt="Loading"
	width="30px"
	on:click={() => scrollToTop()}
	on:focus={() => (scrollTopImage = 'loading.gif')}
	on:mouseover={() => (scrollTopImage = 'loading.gif')}
	on:blur={() => (scrollTopImage = 'loading.png')}
	on:mouseout={() => (scrollTopImage = 'loading.png')}
/>

<svelte:window bind:scrollY />

<style lang="sass">
	@use "../../styles/reusables" as *

	.scroll
		position: fixed
		z-index: 2
		right: 8px
		bottom: 8px
		cursor: pointer
		pointer-events: none
		opacity: 0
		transition: opacity $timing-element ease
		
	.scroll.show
		pointer-events: all
		opacity: 1

	.footer-wrapper,
	.footer-background
		position: fixed
		bottom: 0
		height: 100vh
		width: 100%
		pointer-events: none

	.footer-wrapper
		transition: transform .2s ease

	.footer-background
		transition: transform $timing-element ease

		&.extended 
			.bg-wrapper
				bottom: calc(-45vh + $size-footer-height-desktop-extended)

		.bg-wrapper
			position: absolute
			background-color: $color-primary-800
			bottom: calc(-45vh + $size-footer-height-desktop)
			left: -10%
			width: 120%
			height: 45vh
			transform-origin: center bottom -8px
			transform: rotate(2deg)
			box-shadow: 0px -10px 10px -2px rgba(0,0,0,0.5)
			transition: bottom $timing-element ease


	footer
		width: 100%
		background-color: transparent
		position: fixed
		bottom: 0
		left: 0

	footer
		height: $size-footer-height-desktop
		transition: height $timing-element ease

		&.extended
			height: $size-footer-height-desktop-extended

	@media (max-width: $screen-tablet-w)
		.footer-background
			&.extended 
				.bg-wrapper
					bottom: calc(-45vh + $size-footer-height-tablet-extended)

			.bg-wrapper
					bottom: calc(-45vh + $size-footer-height-tablet)

		footer
			height: $size-footer-height-tablet

			&.extended
				height: $size-footer-height-tablet-extended

	@media (max-width: $screen-mobile-w)
		.footer-background
			&.extended 
				.bg-wrapper
					bottom: calc(-45vh + $size-footer-height-mobile-extended)

			.bg-wrapper
					bottom: calc(-45vh + $size-footer-height-mobile)

		footer
			height: $size-footer-height-mobile
			
			&.extended
				height: $size-footer-height-mobile-extended

	@media (max-height: $screen-mobile-w)
		footer,
		.footer-background
			display: none
</style>
