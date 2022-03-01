<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		/** fetch social menu and pens list */
		const responseSocial = await fetch('/api/social.json');
		const responsePens = await fetch('/api/pens.json');
		if (responseSocial.ok && responsePens.ok) {
			const resultSocial = await responseSocial.json();
			const resultPens = await responsePens.json();
			return resultSocial.error || resultPens.error
				? { props: { error: [resultSocial.error, resultPens.error] } }
				: { props: { social: resultSocial.social, pens: resultPens.pens } };
		}
		/** Error */
		const resultSocial = await responseSocial.json();
		const resultPens = await responsePens.json();
		let message = resultSocial.message + '\r\n' + resultPens.message;
		return { error: new Error(message) };
	};
</script>

<script lang="ts">
	import { Bio, PageTitle, Divisor, Pens } from '$lib';
	export let social: SocialMenu = [];
	export let pens: PensList = [];
</script>

<PageTitle icon="About">about</PageTitle>

<Bio {social} />

<Divisor />

<PageTitle icon="Codepen">Pens</PageTitle>

<Pens {pens} />
