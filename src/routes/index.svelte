<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ stuff }) => ({ props: { nav: stuff.nav } });
</script>

<script lang="ts">
	import { HomeNav } from '$lib';
	export let nav: NavMenu;
</script>

<HomeNav {nav} />
