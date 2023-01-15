<script lang="ts">
	import { Icon, Invillia } from '$lib';
</script>

<div class="job-status">
	<h4><i>&#9679;</i> Working as <strong>Senior Front-End Developer</strong> at:</h4>
	<Invillia />
</div>

<style lang="sass">
	@use "../../styles/reusables" as *

	.job-status
		text-align: center

		h4
			font-weight: 200
			position: relative
			margin-bottom: 50px

			strong
				font-weight: bold

			i
				font-size: $font-header-500
				color: green
				animation: blink 2.3s infinite

@keyframes blink
	0%
		color: green
	35%
		color: green
	55%
		color: transparent
	60%
		color: green
</style>
