<script lang="ts">
	import { SocialNav, Resume } from '$lib';
	export let social: SocialMenu;
</script>

<div class="info-container">
	<img class="profile-pic" src="face.jfif" alt="Rafael's face" />
	<SocialNav {social} />
	<Resume />
</div>

<style lang="sass">
	@use "../../styles/reusables" as *

	.info-container
		display: grid
		grid-template-columns: 1fr 1fr
		grid-template-areas: "image resume" "social resume"
		grid-gap: 20px
		max-width: 768px
		margin: 0 auto
		margin-top: 30px
		padding: 0 20px

	.profile-pic
		grid-area: image
		width: 90%
		max-height: 60px
		object-fit: cover	
		margin: 10px auto
		border-radius: 100px

	
	@media (max-width: $screen-tablet-w)
		.info-container
			grid-template-columns: 1fr
			grid-template-areas: "image" "resume" "social"
			max-width: 340px

		.profile-pic
			width: 100%
			height: 135px
			max-height: 135px
			margin: 0 auto
			margin-bottom: 15px
	
	@media (max-width: $screen-mobile-w)
		.profile-pic
			height: 100px
</style>
