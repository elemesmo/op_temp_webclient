<script>
	import { Icon } from '$lib';
</script>

<div class="comming-soon">
	<p>
		<span><Icon icon="Drops" size="40px" type="L" top="0.40em" />Coming Soon</span>
		Soon drops will be available
	</p>
</div>

<style lang="sass">
  @use "../styles/reusables" as *

  .comming-soon
    width: 100%
    height: calc(70vh - $size-header-height-desktop - $size-footer-height-desktop)
    display: grid
    align-items: center
    position: absolute
    top: 0
    left: 0
    pointer-events: none

    p
      fill: $color-neutral-200
      color: $color-neutral-200
      padding: 16px 20px 30px
      margin: 20px auto
      background-color: $color-primary-800
      font-weight: 300
      display: block
      text-align: center
      min-width: 250px

      span
        display: block
        margin: -10px 0 25px
        font-weight: 300
        font-size: 1.5rem
</style>
