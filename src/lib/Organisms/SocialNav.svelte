<script lang="ts">
	import { Icon } from '$lib';

	export let social: SocialMenu;
	const menuIconSize = '50px';
</script>

<ul class="social-menu">
	{#each social as menu}
		<li>
			<a href={menu.path} title={menu.title}>
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
		color: #a0a0a0
		fill: #a0a0a0
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
				box-shadow: 0 0 0 2px #a0a0a0
				transition: box-shadow 0.3s ease

			a:hover
				color: #f0f0f0
				fill: #f0f0f0
				box-shadow: 0 0 0 4px #f0f0f0
</style>

