<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/social.json');
		if (response.ok) {
			const result = await response.json();
			return result.error
				? { props: { error: result.error } }
				: { props: { social: result.social } };
		}
		const { message } = await response.json();
		return { error: new Error(message) };
	};
</script>

<script lang="ts">
	import { Bio, PageTitle, Divisor } from '$lib';
	export let social: SocialMenu;
</script>

<PageTitle icon="About">about</PageTitle>

<Bio {social} />

<Divisor />

<PageTitle icon="Codepen">Pens</PageTitle>
