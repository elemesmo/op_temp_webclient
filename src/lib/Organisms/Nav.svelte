<script lang="ts">
	import { page } from '$app/stores';
	import { Logo, NavItem } from '$lib';
	
	const navMenuMock: NavMenu = {
		left: [
			{ path: '/', title: 'home', icon: '' },
			{ path: '/about', title: 'about', icon: 'About' }
		],
		right: [
			{ path: '/drops', title: 'drops', icon: 'Drops' },
			{ path: '/status', title: 'status', icon: 'Status' }
		]
	};
</script>

<nav class:extended={$page.path === '/'}>
	<ul class="menu_container_left">
		{#each navMenuMock.left as menu, i}
			<NavItem {menu} />
		{/each}
	</ul>

	<div class="logo">
		<Logo fill="#f0f0f0" />
	</div>

	<ul class="menu_container_right">
		{#each navMenuMock.right as menu, i}
			<NavItem {menu} />
		{/each}
	</ul>
</nav>

<style lang="sass">
	@use "../../styles/reusables" as *

	nav 
		display: flex
		max-width: 350px
		margin: 0 auto
		margin-top: 10px
		transition: width $timing-element ease
		align-content: center
		justify-content: center
		align-items: center
		pointer-events: none
	
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

	@media (max-width: $screen-tablet-w)
		nav.extended
			width: 100%

	@media (max-width: $screen-mobile-w)
		nav
			margin-top: 20px
			
		.logo
			transform: translate(0px, -30px) scale(.5)
			position: absolute

		.extended .logo
			transform: translate(0px, 5px) scale(1)

</style>
