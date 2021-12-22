<script lang="ts">
	import { is_function } from 'svelte/internal';
	import { Icons } from '$lib';

	export let defaultIconText = 'Logo_F';
	export let icon = 'Logo';
	export let type = 'F';
	export let size = '50px';
	export let top = '0px';
	export let marginAuto = false;

	const aspectSize = 60;
	const defaultIcon = Icons[defaultIconText];
	
	$: iconStyle = `fill: inherit; top: ${top}`;
	$: iconText = `${icon}_${type}`;
	$: iconInfo = defaultIcon();
	$: if (is_function(Icons[iconText])) iconInfo = Icons[iconText]();
</script>

<div class="Icon">
	<svg
		class:auto-margin={marginAuto}
		class={`svg ${iconInfo.icon}`}
		width={size}
		height={size}
		style={iconStyle}
		viewBox={'0 0 ' + aspectSize + ' ' + aspectSize}
		preserveAspectRatio="xMidYMid meet"
	>
		{@html iconInfo.svgGroup}
	</svg>
</div>

<style lang="sass">
	@use "../../styles/reusables" as *
  
	.Icon
		display: inline-flex
		align-self: center

		&.auto-margin
			margin-left: auto
			margin-right: auto

	.svg
		position: relative
		transition: fill $timing-element ease, width $timing-element ease, height $timing-element ease

</style>
