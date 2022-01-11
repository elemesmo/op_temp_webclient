<script lang="ts">
	import { Icon } from '$lib';
	export let nav: NavMenu;
	let innerHeight;
	let controlHeight;
	$: topOffset = controlHeight - innerHeight;
</script>

<div class="home-nav" style={`transform: translate(-50%, -${topOffset / 2}px)`}>
	<ul>
		{#each [...nav.left.slice(1), ...nav.right] as navItem}
			<li>
				<a href={navItem.path}>
					<span class="icon">
						<Icon type="L" icon={navItem.icon} size="100%" />
					</span>
					<span class="title">
            {navItem.title}
					</span>
          <span class="icon-fx">
            <Icon type="L" icon={navItem.icon} size="100%" />
          </span>
					<span class="title-fx">
						{navItem.title}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</div>

<div class="control-height" bind:clientHeight={controlHeight} />

<svelte:window bind:innerHeight />

<style lang="sass">
  @use "../../styles/reusables" as *

  .control-height
    position: absolute
    height: 100vh
    width: 0
    top: 0
    left: 0

  .home-nav
    position: fixed
    width: 100%
    max-width: $size-main-max-width
    height: calc(100vh - calc($size-footer-height-desktop-extended + $size-header-height-desktop-extended))
    top: $size-header-height-desktop-extended
    left: 50%
    transform: translate(-50%, 0)
    display: flex
    align-content: center
    transition: height $timing-element ease
  
  ul
    display: grid
    grid-template-columns: repeat(3, 1fr)
    width: 100%
    height: 100%
    text-align: center

    li
      display: flex
      align-content: center
      justify-content: center
      align-items: center

    a
      position: relative
      display: block
      width: 45%
      padding-top: 45%
      border-radius: 100%
      background-color: transparent
      text-decoration: none
      box-shadow: 0 0 0 3px $color-primary-300
      transition: box-shadow $timing-element ease
      
      &::after
        content: ''
        z-index: -1
        position: absolute
        width: 100%
        height: 100%
        border-radius: 100%
        box-shadow: 0 0 8px 15px $color-primary-200, inset 0 0 5px 8px $color-primary-200
        opacity: 0.07
        top: 0
        left: 0
        z-index: 1
        transition: opacity $timing-element ease

      .icon,
      .icon-fx,
      .title,
      .title-fx
        position: absolute
        color: $color-primary-300
        fill: $color-primary-300
        transition: color $timing-element ease, transform $timing-element ease, bottom $timing-element ease, opacity $timing-element ease

      .title,
      .title-fx
        bottom: 15%
        left: 50%
        transform: translate(-50%, 0)
        font-size: $font-header-300
        user-select: none
        opacity: 0
      
      .icon,
      .icon-fx
        top: 33.3%
        left: 33.3%
        transform: translate(-25%, -25%)

      .title-fx
        z-index: -1
        filter: drop-shadow(0 0 4px $color-primary-200) blur(3px)
        opacity: 0
      
      .icon-fx
        z-index: -1
        color: $color-primary-200
        fill: $color-primary-200
        filter: drop-shadow(0 0 4px $color-primary-200) blur(3px)
        opacity: 0.2

      &:hover
        color: $color-neutral-200
        fill: $color-neutral-200
        box-shadow: 0 0 0 6px $color-neutral-200

        
        .icon,
        .title
          color: $color-neutral-200
          fill: $color-neutral-200
        
        .icon,
        .icon-fx
          transform: translate(-25%, -40%)

        .title,
        .title-fx
          bottom: 20%
          opacity: 1

        &::after
          opacity: 0.2

        .icon-fx
          opacity: 0.7

        .title-fx
          opacity: 0.9


  @media (max-width: $screen-tablet-w)
    ul a
      width: 60%
      padding-top: 60%
  
      .icon,
      .icon-fx
          transform: translate(-25%, -40%)

      .title,
      .title-fx
        bottom: 20%
        opacity: 1
      

  @media (max-width: $screen-mobile-w)
    ul a
      width: 70%
      padding-top: 70%

      .title,
      .title-fx
        font-size: $font-header-400

	@media (max-height: $screen-mobile-w)
    .home-nav
      top: $size-header-height-desktop-extended + 10vh
      
    ul a
        width: 45%
        padding-top: 45%
</style>
