<script lang="ts">
	import { Logo, NavItem } from '$lib';

	export let extended: boolean;
	export let nav: NavMenu;
</script>

<nav class:extended>
	<ul class="menu_container_left">
		{#each nav.left as menu}
			<NavItem {menu} {extended} />
		{/each}
	</ul>

	<div class="logo">
		<Logo fill="#f0f0f0" />
	</div>

	<ul class="menu_container_right">
		{#each nav.right as menu}
			<NavItem {menu} {extended} />
		{/each}
	</ul>
</nav>

<style lang="sass">
	@use "../../styles/reusables" as *

	nav 
		display: flex
		max-width: 350px
		margin: 0 auto
		margin-top: 20px
		align-content: center
		justify-content: center
		align-items: center
		pointer-events: none
		transition: width $timing-element ease, margin $timing-element ease
	
	nav.extended 
		max-width: 500px
		pointer-events: none

	ul
		display: inline-block
		list-style: none
		padding: 0
		margin: 0
		white-space: nowrap
		pointer-events: none
	
	ul.menu_container_left,
	ul.menu_container_right 
		opacity: 1
		pointer-events: none
		transition: opacity $timing-element ease

	.extended ul
		opacity: 0
	
	.logo
		transition: transform $timing-element ease

	@media (max-width: $screen-tablet-w)
		nav.extended
			width: 100%

	@media (max-width: $screen-mobile-w)
		nav:not(.extended)
			margin-top: 30px

		nav:not(.extended) ul
			margin-top: 5px

		.logo
			position: absolute
			margin-top: 30px
			
		nav:not(.extended) .logo
			transform: translate(0px, -45px) scale(.5)
	
	@media (max-height: $screen-mobile-w)
		nav:not(.extended)
			margin-top: 10px

		.extended .logo
			transform: translate(0, -30px) scale(.4)

</style>
