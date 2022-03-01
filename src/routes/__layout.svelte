<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch, page }) => {
		const response = await fetch('/api/nav.json');
		if (response.ok) {
			const result = await response.json();
			return result.error
				? { props: { error: result.error, key: page.path } }
				: { props: { nav: result.nav, key: page.path }, stuff: { nav: result.nav } };
		}
		const { message } = await response.json();
		return { error: new Error(message) };
	};
</script>

<script lang="ts">
	import { Footer, Header, PageTransition, HomeNav, LoadingScreen } from '$lib';
	import { isLoadingHP, isLoadingFP } from '$lib/store';
	import '$styles/app.sass';
	export let nav: NavMenu;
	export let key;
	let factor = 0.4;
	$: motion = { x: 0, y: 0, support: false };
	$: isLoading = $isLoadingHP || $isLoadingFP;

	const handleMotion = (e) => {
		let support = e.accelerationIncludingGravity && e.accelerationIncludingGravity.x !== null;
		if (support) {
			let x = e.accelerationIncludingGravity.x.toFixed(0) * factor * 1.5;
			let y = e.accelerationIncludingGravity.y.toFixed(0) * factor;
			motion = { x: x * -1, y: y <= 0 ? 0 : y, support };
		}
	};
</script>

<div class="layout" class:isLoading>
	<Header {nav} {motion} />

	<div class="home-nav-wrapper">
		<HomeNav {nav} {motion} />
	</div>

	<main>
		<PageTransition refresh={key}>
			<slot {nav} />
		</PageTransition>
	</main>

	<Footer {motion} />
</div>

<LoadingScreen />

<svelte:window on:devicemotion={handleMotion} />

<style lang="sass">
	@use "../styles/reusables" as *

	.layout
		opacity: 1
		transition: opacity $timing-page ease

		&.isLoading
			opacity: 0

	main
		position: relative
		max-width: $size-main-max-width
		margin: 0 auto
		overflow-y: unset
		overflow-x: clip

	.home-nav-wrapper
		pointer-events: none
		position: absolute
		width: 100%
</style>
