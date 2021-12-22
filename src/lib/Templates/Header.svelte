<script lang="ts">
	import { page } from '$app/stores';
	import { Nav } from '$lib';
	export let nav: NavMenu;
	$: extended = $page.path === '/';
</script>

<header class:extended>
	<Nav {extended} {nav} />
</header>

<div class="header-spacer" class:extended />

<style lang="sass">
	@use "../../styles/reusables" as *
  
	header
		width: 100%
		background-color: $color-primary-800
		position: fixed
		top: 0
		left: 0

	header,
	.header-spacer
		height: $size-header-height-desktop
		transition: height $timing-element ease

		&.extended
			height: $size-header-height-desktop-extended

	@media (max-width: $screen-tablet-w)
		header,
		.header-spacer
			height: $size-header-height-tablet

			&.extended
				height: $size-header-height-tablet-extended

	@media (max-width: $screen-mobile-w)
		header,
		.header-spacer
			height: $size-header-height-mobile
			
			&.extended
				height: $size-header-height-tablet-extended

</style>
