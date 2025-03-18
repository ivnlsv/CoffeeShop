<template>
	<li :class="classItem">
		<router-link :to="link">{{ title }}<slot></slot></router-link>
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
			required: false,
		},
		classItem: {
			type: String,
			required: true,
		},
	},
};
</script>
