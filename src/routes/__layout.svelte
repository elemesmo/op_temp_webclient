<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch, page }) => {
		const response = await fetch('/nav.json');
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
	import { Footer, Header, PageTransition, HomeNav } from '$lib';
	import '$styles/app.sass';
	export let nav: NavMenu;
	export let key;
	let factor = 0.4;
	$: motion = { x: 0, y: 0, support: false };

	const handleMotion = (e) => {
		let support = e.accelerationIncludingGravity && e.accelerationIncludingGravity.x !== null;
		if (support) {
			let x = e.accelerationIncludingGravity.x.toFixed(0) * factor * 1.5;
			let y = e.accelerationIncludingGravity.y.toFixed(0) * factor;
			motion = { x: x * -1, y: y <= 0 ? 0 : y, support };
		}
	};
</script>

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

<svelte:window on:devicemotion={handleMotion} />

<style lang="sass">
	@use "../styles/reusables" as *

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
