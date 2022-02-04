<script lang="ts">
	import { quadInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { Icon, Visibility } from '$lib';
	export let pens: PensList = [];
	let scrollY;
</script>

<div class="pens-list">
	{#each pens as pen, index}
		<Visibility steps={100} let:percent let:ioSupport>
			<div class="pen-item">
				{#if (percent > 50 && scrollY > 30) || !ioSupport}
					<div
						class="item-wrapper"
						in:fly={{ duration: 300, y: 45, delay: index * 80, easing: quadInOut }}
						out:fly={{ duration: 300, y: 45, delay: index * 80, easing: quadInOut }}
					>
						<div
							class="image"
							name={`${pen.title} pen preview`}
							style={`background-image: url(${pen.thumb})`}
						/>
						<h2>{pen.title}</h2>
						<div class="status">
							<div class="likes item">
								<Icon icon="Heart" type="F" size="25px" />
								<div class="text">{pen.likes}</div>
							</div>
							<div class="comments item">
								<Icon icon="Comments" type="F" size="25px" />
								<div class="text">{pen.comments}</div>
							</div>
							<div class="views item">
								<Icon icon="Views" type="F" size="25px" />
								<div class="text">{pen.views}</div>
							</div>
						</div>
					</div>
				{/if}
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

	.pen-item .item-wrapper
		height: 240px
		background-color: $color-neutral-700
		border-radius: 10px
		cursor: pointer
		overflow: hidden
		transition: background-color $timing-element ease

		.image
			width: calc(100% - 8px)
			height: 130px
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

		.status
			display: flex
			position: relative
			margin: 20px 0 0 12px

			.item
				color: $color-neutral-800
				fill: $color-neutral-800
				background-color: $color-neutral-300
				display: flex
				margin-right: 20px
				padding: 0 4px
				position: relative
				justify-content: center
				align-items: center
				align-content: center
				border-radius: 6px

				.text
					padding: 0px 14px 3px 6px
					display: block
					position: relative
					text-align: center
					user-select: none

		&:hover
			background-color: $color-primary-500

			.image
				opacity: 1
				height: 183px

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
