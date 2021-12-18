<script lang="ts">
  export let message = "No message";
</script>

<h1>{message}</h1>
<h2>{message}</h2>
<h3>{message}</h3>
<h4>{message}</h4>
<h5>{message}</h5>

<style lang="sass">
  @use "../styles/reusables" as *

  h1
    color: $color-primary-200
  h2
    color: $color-primary-300 
  h3
    color: $color-primary-400 
  h4
    color: $color-primary-500 
  h5
    color: $color-primary-600 
    
</style>