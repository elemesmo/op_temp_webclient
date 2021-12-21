<script lang="ts">
	import { Footer, Header } from "$lib";
	import '$styles/app.sass';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="sass">
	@use "../styles/reusables" as *

	main
		max-width: $size-main-max-width
		margin: 0 auto
</style>
