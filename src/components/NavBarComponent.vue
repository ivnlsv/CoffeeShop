<template>
	<header>
		<ul
			class="header d-flex justify-content-center justify-content-md-start flex-wrap"
		>
			<nav-links :link="links.header.link" classItem="header__item">
				<img
					:src="require(`@/assets/logo/${links.header.icon}`)"
					:alt="links.header.icon"
				/>
			</nav-links>
			<nav-links
				v-for="link in links.other"
				:key="link.id"
				:link="link.link"
				:title="link.text"
				classItem="header__item"
			/>
		</ul>
	</header>
</template>

<script>
import NavLinks from '@/components/NavLinks.vue';
export default {
	components: { NavLinks },
	computed: {
		links() {
			return this.$store.getters['getHeaderLinks'];
		},
	},

};
</script>
