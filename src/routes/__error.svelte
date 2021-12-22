<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				code: status,
				message: error.message
			}
		};
	}
</script>

<script>
	import { page } from '$app/stores';
	import { Icon } from '$lib';

	export let code;
	export let message;
	$: isDrops = $page.path === '/drops';
</script>

<div class="http-error" class:comming-soon={isDrops}>
	<p>
		{#if isDrops}
			<span><Icon icon="Drops" size="40px" type="L" top="0.40em" />Coming Soon</span>
			Soon drops will be available
		{:else}
			<span>{code}</span>
			{message}
		{/if}
	</p>
</div>

<style lang="sass">
  @use "../styles/reusables" as *

  .http-error
    width: 100%
    height: 100vh
    display: grid
    align-items: center
    position: absolute
    top: 0
    left: 0
    pointer-events: none

    &.comming-soon p
      background-color: $color-primary-800
      color: $color-neutral-200
      fill: $color-neutral-200
      font-weight: 300
      padding-bottom: 30px

      span
        margin: -10px 0 25px
        font-weight: 300

  p
    color: white
    padding: 16px 20px 20px
    margin: 20px auto
    background-color: darken(red, .5)
    display: block
    text-align: center
    min-width: 250px

    span
      display: block
      margin-bottom: 15px
      font-weight: 600
      font-size: 1.5rem
</style>
