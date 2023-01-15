<script lang="ts">
	import { Icon } from '$lib';

	export let social: SocialMenu;
	const menuIconSize = '50px';
</script>

<ul class="social-menu">
	{#each social as menu}
		<li>
			<a href={menu.path} title={menu.title} target="_blank">
				<Icon icon={menu.icon} size={menuIconSize} type="F" />
			</a>
		</li>
	{/each}
</ul>

<style lang="sass">
	@use "../../styles/reusables" as *
  
	.social-menu
		width: 100%
		padding: 0
		margin: 0 auto
		list-style: none
		color: $color-neutral-400
		fill: $color-neutral-400
		grid-area: social
		display: flex
		flex-wrap: wrap

		li
			flex-grow: 1
			width: 33%

			a
				width: 50px
				height: 50px
				border-radius: 100%
				margin: 20px auto
				display: block
				box-shadow: 0 0 0 2px $color-neutral-400
				transition: box-shadow 0.3s ease

			a:hover
				color: $color-primary-200
				fill: $color-primary-200
				box-shadow: 0 0 0 4px $color-primary-200
</style>
