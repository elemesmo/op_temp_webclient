<script lang="ts">
	import { Icon } from '$lib';
	export let icon = '';
	export let type = 'L';
</script>

<h2 class="title">
	<div class="wrapper">
		<Icon {icon} size="55px" {type} />
		<span><slot /></span>
	</div>
</h2>

<style lang="sass">
  @use "../../styles/reusables" as *

  .title
    color: $color-neutral-200
    fill: $color-neutral-200
    font-weight: 300
    text-align: center
    margin-top: 40px
    margin-bottom: 45px
    user-select: none
    
    .wrapper
      display: flex
      align-content: center
      justify-content: center
      align-items: center

      span
        margin-left: 5px
</style>
