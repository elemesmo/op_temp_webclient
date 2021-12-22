<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/nav.json');
		if (response.ok) {
			const result = await response.json();
			return result.error
				? { props: { error: result.error } }
				: { props: { nav: result.nav }, stuff: { nav: result.nav } };
		}
		const { message } = await response.json();
		return { error: new Error(message) };
	};
</script>

<script lang="ts">
	import { Footer, Header } from '$lib';
	import '$styles/app.sass';
	export let nav: NavMenu;
</script>

<Header {nav} />

<main>
	<slot {nav} />
</main>

<Footer />

<style lang="sass">
	@use "../styles/reusables" as *

	main
		max-width: $size-main-max-width
		margin: 0 auto
</style>
