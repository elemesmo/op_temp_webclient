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
	import { Footer, Header, PageTransition } from '$lib';
	import '$styles/app.sass';
	export let nav: NavMenu;
	export let key;
</script>

<Header {nav} />

<main>
	<PageTransition refresh={key}>
		<slot {nav} />
	</PageTransition>
</main>

<Footer />

<style lang="sass">
	@use "../styles/reusables" as *

	main
		position: relative
		max-width: $size-main-max-width
		margin: 0 auto
</style>
