<script lang="ts">
	import { CompanyLogo } from '$lib';
	import { onMount } from 'svelte';
	let paths = [];

	const updatePathsTotalLenght = () => {
		for (let i = 0; i < paths.length; i++)
			paths[i].style.setProperty('--total-lenght', paths[i].getTotalLength() + 'px');
	};

	onMount(() => {
		updatePathsTotalLenght();
	});
</script>

<svg viewBox="0 0 1190 673" fill="none" xmlns="http://www.w3.org/2000/svg" class="invillia-logo">
	{#each CompanyLogo as pathItem, i}
		<path
			class="path-item"
			d={pathItem.d}
			bind:this={paths[i]}
			fill-rule={pathItem['fill-rule'] ? pathItem['fill-rule'] : 'nonzero'}
			clip-rule={pathItem['clip-rule'] ? pathItem['clip-rule'] : 'nonzero'}
		/>
	{/each}
</svg>

<style lang="sass">
	@use "../../styles/reusables" as *

	.invillia-logo
		background-color: transparent
		height: 150px
		transform: scale(1, 1) translate(0, 0)
		transition: 1s ease
		fill: $color-neutral-200
		transition-delay: 1s

		path
			stroke: $color-primary-200
			stroke-width: 3px
			stroke-linejoin: round
			stroke-dasharray: var(--total-lenght)
			stroke-dashoffset: var(--total-lenght)
			transition: 2s ease    
			transition-delay: 0s

		&:hover
			transition-delay: 0s
			transform: scale(1.2, 1.2) translate(0, 10px)
			fill: transparent

			path
				transition-delay: 0s
				stroke-dashoffset: 0
				fill: transparent
				animation: funky 10s infinite ease

@keyframes funky
	0%
		stroke-dasharray: var(--total-lenght)
	20%
		stroke-dasharray: var(--total-lenght)
	40%
		stroke-dasharray: var(--total-lenght)
	60%
		stroke-dasharray: calc(var(--total-lenght) - 12%)
	80%
		stroke-dasharray: calc(var(--total-lenght) - 12%)
	100%
		stroke-dasharray: var(--total-lenght)
</style>
