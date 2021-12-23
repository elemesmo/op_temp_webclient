<script lang="ts">
	import { page } from '$app/stores';
	$: extended = $page.path === '/';
</script>

<footer class:extended />

<style lang="sass">
	@use "../../styles/reusables" as *

	footer
		width: 100%
		background-color: $color-primary-800
		position: fixed
		bottom: 0
		left: 0

	footer
		height: $size-footer-height-desktop
		transition: height $timing-element ease

		&.extended
			height: $size-footer-height-desktop-extended

	@media (max-width: $screen-tablet-w)
		footer
			height: $size-footer-height-tablet

			&.extended
				height: $size-footer-height-tablet-extended

	@media (max-width: $screen-mobile-w)
		footer
			height: $size-footer-height-mobile
			
			&.extended
				height: $size-footer-height-mobile-extended

	@media (max-height: $screen-mobile-w)
		footer
			display: none
</style>
