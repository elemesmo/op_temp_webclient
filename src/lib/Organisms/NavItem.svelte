<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '$lib';

	export let menu: NavItem;
	export let extended: boolean;
</script>

<li class:extended class:active={$page.url.pathname === menu.path}>
	<a class="item_link" href={menu.path} sveltekit:prefetch>
		<div class="icon">
			<Icon icon={menu.icon} size="32px" type={menu.icon ? 'L' : 'F'} />
		</div>
		<div class="text">
			{menu.title}
		</div>
	</a>
</li>

<style lang="sass">
	@use "../../styles/reusables" as *
	
	li
		display: inline-block

	.item_link
		position: relative
		display: block
		margin: 10px
		padding-top: 5px
		font-size: 0.9rem
		font-weight: 300
		color: $color-neutral-300
		fill: $color-neutral-200
		text-decoration: none
		user-select: none
		border-bottom: 1px solid transparent
		transition: border $timing-menu ease, color $timing-menu ease
		pointer-events: all
      
		.text
			opacity: 1
			padding: 8px 12px
			transform-origin: center bottom -8px
			transform: rotate3d(-20, 0, 0, 0deg)
			transition: opacity $timing-menu ease, transform $timing-menu ease
			pointer-events: none
			user-select: none

		.icon
			position: absolute
			display: flex
			top: 50%
			margin-top: -25%
			width: 100%
			justify-content: center
			align-items: center
			align-content: center
			opacity: 0
			transition: opacity $timing-menu ease, transform $timing-menu ease
			transform-origin: center bottom -8px
			transform: rotate3d(-20, 0, 0, 90deg)
			pointer-events: none

		&::after
			content: ''
			position: absolute
			border-radius: 100%
			height: 4px
			width: 4px
			background-color: $color-neutral-200
			opacity: 0
			bottom: -13px
			left: 50%
			transform: translate(-50%, 0)
			transition: opacity $timing-menu ease

	.extended .item_link
		pointer-events: none
	
	.item_link:hover,
	li.active .item_link
		border-bottom: 1px solid $color-neutral-200
		color: $color-neutral-200

		.text
			opacity: 0
			transform: rotate3d(-20, 0, 0, 90deg)

		.icon
			opacity: 1
			transform: rotate3d(-20, 0, 0, 0deg)
	
	.item_link:hover
		background-color: transparentize($color-neutral-700, 0.3)

	li.active .item_link
		pointer-events: none

		&::after
			opacity: 1

	@media (max-width: $screen-tablet-w)
		.item_link:hover
			background-color: transparent

		.item_link
			.text
				padding: 8px 5px

</style>
