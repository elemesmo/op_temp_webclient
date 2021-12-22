<script lang="ts">
	import { is_function } from 'svelte/internal';
	import { Icons } from '$lib';

	export let defaultIconText = 'Logo_F';
	export let icon = 'Logo';
	export let type = 'F';
	export let size = 50;
	export let unit = 'px';
	export let marginAuto = false;

	const aspectSize = 60;
	const defaultIcon = Icons[defaultIconText];
	const iconStyle = `fill: inherit`;

	$: sizeUnit = size + unit;
	$: iconText = `${icon}_${type}`;
	$: iconInfo = defaultIcon();
	$: if (is_function(Icons[iconText])) iconInfo = Icons[iconText]();
</script>

<svg
	class:automargin={marginAuto}
	class={`Icon ${iconInfo.icon}`}
	width={sizeUnit}
	height={sizeUnit}
	style={iconStyle}
	viewBox={'0 0 ' + aspectSize + ' ' + aspectSize}
	preserveAspectRatio="xMidYMid meet"
>
	{@html iconInfo.svgGroup}
</svg>

<style lang="sass">
	@use "../../styles/reusables" as *
  
	.Icon
    display: inline-block
    transition: fill $timing-element ease, width $timing-element ease, height $timing-element ease

    &.automargin
      margin-left: auto
      margin-right: auto
</style>
