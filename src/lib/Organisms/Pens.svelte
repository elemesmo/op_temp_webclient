<script lang="ts">
	import { quadInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { Visibility } from '$lib';
	export let pens: PensList = [];
	let scrollY;
</script>

<div class="pens-list">
	{#each pens as pen, index}
		<Visibility steps={100} let:percent let:ioSupport>
			<div class="pen-item">
				<a title={`Visit pen: ${pen.title}`} href={pen.url} target="_blank">
					{#if (percent > 50 && scrollY > 30) || !ioSupport}
						<div
							class="item-wrapper"
							in:fly={{ duration: 300, y: 45, delay: index * 80, easing: quadInOut }}
							out:fly={{ duration: 300, y: 45, delay: index * 80, easing: quadInOut }}
						>
							<div class="image" style={`background-image: url(${pen.thumb})`} />
							<h2>{pen.title}</h2>
						</div>
					{/if}
				</a>
			</div>
		</Visibility>
	{/each}
</div>

<svelte:window bind:scrollY />

<style lang="sass">
	@use "../../styles/reusables" as *

	.pens-list
		display: grid
		grid-gap: 15px
		grid-template-columns: repeat(3, 1fr)
		padding: 0 40px
		max-width: 1024px
		margin: 0 auto
		margin-top: 25px
		margin-bottom: 50px

	.pen-item
		height: 240px
	
	.pen-item a
		text-decoration: none
		color: $color-neutral-100

	.pen-item .item-wrapper
		height: 240px
		background-color: $color-primary-800
		border-radius: 10px
		cursor: pointer
		overflow: hidden
		transition: background-color $timing-element ease

		.image
			width: calc(100% - 8px)
			height: 180px
			background-position: left top
			background-repeat: repeat
			border-radius: 8px 8px 0 0
			margin: 4px 0 0 4px
			background-size: auto
			opacity: 0.8
			transition: height $timing-element ease, opacity $timing-element ease

		h2
			margin: 20px 0 0 15px
			font-weight: 300
			font-size: $font-header-400
			user-select: none

		&:hover
			background-color: $color-primary-500
			color: $color-primary-100

			.image
				opacity: 1
				height: 160px

	@media (max-width: $screen-tablet-w)
		.pen-item
			padding: 0
			margin-bottom: 0

		.pens-list
			grid-gap: 25px
			padding: 0 20px
			grid-template-columns: repeat(2, 1fr)

	@media (max-width: $screen-mobile-w)
		.pen-item
			margin-bottom: 0

		.pens-list
			grid-gap: 25px
			grid-template-columns: 1fr

</style>
