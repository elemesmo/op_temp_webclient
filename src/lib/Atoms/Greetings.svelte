<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import { Greet } from '$lib';

	export let extended;
	$: greet = '';
	const threshold = 3;

	const updateGreetings = () => {
		let i = 0;
		while (true) {
			let newGreeting = Greet();
			if (newGreeting === greet) newGreeting = Greet();
			else {
				greet = newGreeting;
				break;
			}
			if (i >= threshold) break;
			i++;
		}
	};

	afterUpdate(() => {
		if ($page.url.pathname === '/') updateGreetings();
	});
</script>

<div class="greet" class:extended>{@html greet}</div>

<style lang="sass">
	@use "../../styles/reusables" as *

	.greet
		position: absolute
		width: 100%
		text-align: center
		font-weight: 300
		font-size: clamp($font-header-400, 2.5vh, $font-header-100)
		pointer-events: none
		opacity: 0
		user-select: none
		transition: margin $timing-element ease, font-size $timing-element ease
		line-height: 150%
		bottom: 50%
		transform: translate(0, 100%)
	
		&.extended
			opacity: 1
			transition: opacity 0.5s ease
</style>
