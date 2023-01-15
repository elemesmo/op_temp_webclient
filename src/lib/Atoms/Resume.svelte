<div class="resume">
	<h1>Rafael Garrido</h1>
	<h3>Senior Front-End Developer</h3>
	<div class="text">
		<p>
			<code>Designer</code>, technical in <i>CG</i>, now working in the web development sector. A
			<code>front-end specialist</code> with great knowledge in back-end.
		</p>
		<p>
			Currently working at Invillia Brazil as <i>Senior Front-end Developer</i>.
		</p>
		<p>
			As a differential, acted at the design market and has the capabilities of seeing with a macro
			perspective the conception of web-apps and integration projects.
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
			line-height: 1.7
			color: $color-neutral-300
		
		code
			color: $color-neutral-800
			background-color: $color-neutral-100
			padding: 0px 4px
			padding-bottom: 3px
			border-radius: 2px

		i
			font-style: italic
			font-weight: bold

		// a
		// 	text-decoration: none
		// 	padding: 0px 4px
		// 	padding-bottom: 3px
		// 	border-radius: 2px
		// 	color: $color-neutral-100
		// 	border-bottom: 1px solid currentColor
		// 	transition: all 0.2s ease-in-out

		// a:hover
		// 	color: $color-neutral-800
		// 	background-color: $color-neutral-100

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
