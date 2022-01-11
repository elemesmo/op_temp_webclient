<script lang="ts">
	import { page } from '$app/stores';
	import { ParticlesBlock } from '$lib';
	$: extended = $page.path === '/';
</script>

<footer class:extended />

<div class:extended class="footer-background">
	<div class="bg-wrapper">
		<ParticlesBlock />
	</div>
</div>

<style lang="sass">
	@use "../../styles/reusables" as *

	.footer-background
		position: fixed
		bottom: 0
		height: 100vh
		width: 100%
		overflow: hidden
		pointer-events: none

		&.extended 
			.bg-wrapper
				bottom: calc(-45vh + $size-footer-height-desktop-extended)

		.bg-wrapper
			position: absolute
			background-color: #14131b
			bottom: calc(-45vh + $size-footer-height-desktop)
			left: -10%
			width: 120%
			height: 45vh
			transform-origin: center bottom -8px
			transform: rotate(2deg)
			transition: transform 0.5s ease
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
