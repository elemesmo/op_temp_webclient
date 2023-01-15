<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';
	export const load: ErrorLoad = async ({ error, status, url }) => {
		return {
			props: {
				code: status,
				message: error.message
			}
		};
	}
</script>

<script>
	import { Icon } from '$lib';

	export let code;
	export let message;
</script>

<div class="http-error">
	<p>
    <span>{code}</span>
    {message}
	</p>
</div>

<style lang="sass">
  @use "../styles/reusables" as *

  .http-error
    width: 100%
    height: calc(70vh - $size-header-height-desktop - $size-footer-height-desktop)
    display: grid
    align-items: center
    position: absolute
    top: 0
    left: 0
    pointer-events: none

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
