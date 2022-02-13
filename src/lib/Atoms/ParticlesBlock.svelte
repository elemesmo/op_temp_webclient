<script lang="ts">
  import Particles from 'svelte-particles';
  import particlesConfig from "$lib/particlesConfig";
  let name: string = Math.random().toString(36).substring(2, 10);
  export let handleLoaded;
</script>

<div class="particle-block">
  <Particles
			id={`${name}_particles`}
			options={particlesConfig()}
      on:particlesLoaded={handleLoaded}
		/>
</div>

<style lang="sass">
  .particle-block
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: -100
</style>