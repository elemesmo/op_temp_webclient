<script>
	import { Nav } from '$lib';
</script>

<header />
<div class="header-spacer" />

<Nav />

<style lang="sass">
	@use "../../styles/reusables" as *
  
	header
		width: 100%
		height: $size-header-height-desktop
		background-color: $color-primary-400
		position: fixed
		top: 0
		left: 0

	.header-spacer
		height: $size-header-height-desktop
</style>
