<template>
	<li :class="classItem">
		<router-link :to="link">{{ title }}</router-link>
	</li>
</template>
<script>
export default {
	props: {
		link: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		classItem: {
			type: String,
			required: true,
		},
	},
};
</script>
