<script lang="ts">
	import { isLoadingHP, isLoadingFP } from '$lib/store';
	$: isLoading = $isLoadingHP || $isLoadingFP;
</script>

<div class="loading-box" class:isLoading>
	<img alt="loading..." src="/loading.gif" />
</div>

<style lang="sass">
	@use "../../styles/reusables" as *

	.loading-box
		position: fixed
		display: grid
		place-items: center
		top: 0
		left: 0
		width: 100%
		height: 100%
		background-color: $color-primary-800
		opacity: 0
		pointer-events: none
		transition: opacity $timing-element ease
		
		img
			width: 70px
		
		&.isLoading
			opacity: 1
			pointer-events: all
</style>
