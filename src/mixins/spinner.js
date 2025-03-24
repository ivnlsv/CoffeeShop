export const spinner = {
	computed: {
		isLoading() {
			return this.$store.getters['getIsLoading'];
		},
	},
	methods: {
		setLoading(value) {
			this.$store.dispatch('setIsLoading', value);
		},
	},
};
