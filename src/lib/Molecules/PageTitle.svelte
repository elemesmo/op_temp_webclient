<script lang="ts">
	import { Icon } from '$lib';
	export let icon = '';
	export let type = "L";
</script>

<h2>
	<div>
		<Icon {icon} size="55px" {type} />
		<span><slot /></span>
	</div>
</h2>

<style lang="sass">
  @use "../../styles/reusables" as *

  h2
    color: $color-neutral-200
    fill: $color-neutral-200
    font-weight: 300
    text-align: center
    margin-top: 30px
    margin-bottom: 45px

  div
    display: flex
    align-content: center
    justify-content: center
    align-items: center

    span
      margin-left: 5px
</style>
