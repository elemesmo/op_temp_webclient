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
  .http-error
    width: 100%
    height: 100vh
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
    background-color: darken(red, .3)
    display: block
    text-align: center
    min-width: 250px

    span
      display: block
      margin-bottom: 15px
      font-weight: 600
      font-size: 1.5rem
</style>
