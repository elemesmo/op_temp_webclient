<div class="resume">
	<h1>Rafael Garrido</h1>
	<h3>Full-Stack Developer</h3>
	<div class="text">
		<p>Developer, Designer, Philosopher and coffee ☕ affictionado.</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus donec ullamcorper sed
			bibendum ipsum auctor purus adipiscing aenean.
		</p>
	</div>
</div>

<style lang="sass">
	@use "../../styles/reusables" as *

	.resume
		grid-area: resume

		h1,
		h3
			white-space: nowrap
			font-weight: 400

		h1,
		h3,
		p
			margin: 0
			padding: 0
			color: $color-neutral-200

		p
			padding-bottom: 15px
			line-height: 135%
			color: $color-neutral-300

		h1
			margin-bottom: 10px

		.text
			margin-top: 25px

	@media (max-width: $screen-tablet-w)
		.resume
			h1
				font-size: clamp(1.6rem, 8vw, 2.2rem)
			
			h3
				font-size: clamp(1rem, 3vw, 1.2rem)
			
			.text
				margin-top: 10px
</style>
