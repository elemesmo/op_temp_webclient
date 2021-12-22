<script>
	import { fade } from 'svelte/transition';
	export let refresh = '';
	export let duration = 300;
</script>

{#key refresh}
	<div class="page" in:fade={{ duration, delay: duration }} out:fade={{ duration }}>
		<slot />
		<div class="footer-spacer" class:extended={refresh === '/'} />
	</div>
{/key}

<style lang="sass">
	@use "../../styles/reusables" as *

	div.page
		position: absolute
		width: 100%
		top: 0
		left: 0
		z-index: -1

	.footer-spacer
		height: $size-footer-height-desktop
		transition: height $timing-element ease

		&.extended
			height: $size-footer-height-desktop-extended

	@media (max-width: $screen-tablet-w)
		.footer-spacer
			height: $size-footer-height-tablet

			&.extended
				height: $size-footer-height-tablet-extended

	@media (max-width: $screen-mobile-w)
		.footer-spacer
			height: $size-footer-height-mobile
			
			&.extended
				height: $size-footer-height-tablet-extended

	@media (max-height: $screen-mobile-w)
		.footer-spacer
			display: none
</style>
