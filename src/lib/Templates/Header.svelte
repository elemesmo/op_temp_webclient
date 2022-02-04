<script lang="ts">
	import { page } from '$app/stores';
	import { Nav, Greetings, ParticlesBlock } from '$lib';
	export let nav: NavMenu;
	export let motion: MotionStatus;
	$: extended = $page.path === '/';
	$: motionStyle = motion.support ? `transform: translate(${motion.x}%, ${motion.y + 5}%)` : '';
</script>

<div class:extended class="header-background" style={motionStyle}>
	<div class="bg-wrapper">
		<ParticlesBlock />
	</div>
</div>

<header class:extended>
	<Nav {extended} {nav} />
	<Greetings {extended} />
</header>

<div class="header-spacer" class:extended />

<style lang="sass">
	@use "../../styles/reusables" as *

	.header-background
		position: fixed
		bottom: 0
		height: 100vh
		width: 100%
		pointer-events: none
		transition: transform .2s ease

		&.extended 
			.bg-wrapper
				top: calc(-35vh + $size-header-height-desktop-extended)

		.bg-wrapper
			width: 120%
			height: 35vh
			position: fixed
			z-index: -10
			background-color: $color-primary-800
			top: calc(-35vh + $size-header-height-desktop)
			left: -10%
			right: 0
			transform-origin: center bottom -8px
			transform: rotate(1.6deg)
			padding-bottom: 15px
			transition: top $timing-element ease, transform $timing-element ease, height $timing-element ease
			box-shadow: 0px 10px 10px -2px rgba(0,0,0,0.5)

	header
		width: 100%
		background-color: transparent
		position: fixed
		top: 0
		left: 0
		pointer-events: none

	header,
	.header-spacer
		height: $size-header-height-desktop
		transition: height $timing-element ease

		&.extended
			height: $size-header-height-desktop-extended

	@media (max-width: $screen-tablet-w)
		.header-background
			&.extended 
				.bg-wrapper
					top: calc(-35vh + $size-header-height-tablet-extended)

			.bg-wrapper
					top: calc(-35vh + $size-header-height-tablet)

		header,
		.header-spacer
			height: $size-header-height-tablet

			&.extended
				height: $size-header-height-tablet-extended

	@media (max-width: $screen-mobile-w)
		.header-background
			&.extended 
				.bg-wrapper
					top: calc(-35vh + $size-header-height-mobile-extended)

			.bg-wrapper
					top: calc(-35vh + $size-header-height-mobile)

		header,
		.header-spacer
			height: $size-header-height-mobile
			
			&.extended
				height: $size-header-height-mobile-extended

	@media (max-height: $screen-mobile-w)
		header,
		.header-spacer
			height: $size-header-height-mobile-portrait

</style>
