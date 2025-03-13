<template>
	<header>
		<ul
			class="header d-flex justify-content-center justify-content-md-start flex-wrap"
		>
			<li class="header__item">
				<router-link :to="links[0].link">
					<img
						:src="require(`@/assets/logo/${links[0].icon}`)"
						:alt="links[0].icon"
					/>
				</router-link>
			</li>
			<nav-links
				classItem="header__item"
				:link="links[1].link"
				:title="links[1].text"
			/>
			<nav-links
				classItem="header__item"
				:link="links[2].link"
				:title="links[2].text"
			/>
			<nav-links
				classItem="header__item"
				:link="links[3].link"
				:title="links[3].text"
			/>
		</ul>
	</header>
</template>

<script>
import NavLinks from '@/components/NavLinks.vue';
export default {
	components: { NavLinks },
	data() {
		return {
			links: [
				{
					id: 0,
					link: '/',
					icon: 'Logo.svg',
				},
				{
					id: 1,
					text: 'Our coffee',
					link: '/our-coffee',
				},
				{
					id: 2,
					text: 'For your pleasure',
					link: '/goods',
				},
				{
					id: 3,
					text: 'Contact us',
					link: '/contacts',
				},
			],
		};
	},
};
</script>
