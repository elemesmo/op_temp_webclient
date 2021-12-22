<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '$lib';

	export let extendOnHome = true;
	export let logoType = 'F';
	export let fill = '#000';
	export let tiny = false;

	$: shouldExtend = $page.path === '/' && extendOnHome;
	$: bracketSize = tiny ? 25 : shouldExtend ? 90 : 55;
	$: logoIcon = tiny ? 20 : shouldExtend ? 65 : 35;
</script>

<div class="ra-logo" class:extended={shouldExtend} style={`fill: ${fill}`}>
	<div class="logo-grid">
		<Icon icon="BracketLeft" type={logoType} size={bracketSize} />
		<div class="icon"><Icon icon="Logo" type={logoType} size={logoIcon} /></div>
		<div class="text"><Icon icon="LogoText" type={logoType} size={logoIcon} /></div>
		<Icon icon="BracketRight" type={logoType} size={bracketSize} />
	</div>
</div>

<style lang="sass">
	.ra-logo
		position: relative
		display: inline-block
		pointer-events: none
		margin: 0 auto
		font-size: 20px
		transition: font-size 0.5s ease, transform 0.5s ease

		&.extended
			transform: translate(0, 0px)
    
		.icon,
		.text
			display: flex
			align-items: center

		.text
			position: absolute
			left: 50%
			top: 50%
			transform: translate(-50%, -50%)
			opacity: 0
			animation: logo-text-fade 18s ease infinite

		.icon
			opacity: 1
			animation: logo-icon-fade 18s ease infinite
			
		.logo-grid
			display: flex
			align-items: center

	@keyframes logo-icon-fade
		0%
			opacity: 0
		8%
			opacity: 1
		50%
			opacity: 1
		58%
			opacity: 0
		100%
			opacity: 0

	@keyframes logo-text-fade
		0%
			opacity: 1
		8%
			opacity: 0
		50%
			opacity: 0
		58%
			opacity: 1
		100%
			opacity: 1
</style>
