<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<ul class="footer d-flex flex-wrap">
						<nav-links :link="links.footer.link" classItem="footer__item">
							<img
								:src="require(`@/assets/logo/${links.footer.icon}`)"
								:alt="links.footer.icon"
							/>
						</nav-links>
						<nav-links
							v-for="link in links.other"
							:key="link.id"
							:link="link.link"
							:title="link.text"
							classItem="footer__item"
						/>
					</ul>
				</div>
			</div>
			<img
				class="beanslogo"
				src="@/assets/logo/Beans_logo_dark.svg"
				alt="Beans logo"
			/>
		</div>
	</footer>
</template>
<script>
import NavLinks from '@/components/NavLinks.vue';
export default {
	components: { NavLinks },
	computed: {
		links() {
			return this.$store.getters['getFooterLinks'];
		},
	},
};
</script>
