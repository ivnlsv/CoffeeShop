export const spinner = {
    data() {
        return {
            isLoading: false,
        };
    },
    computed: {
        loadingState() {
            return this.$store.getters['getIsLoading'];
        },
    },
    methods: {
        setLoading(value) {
            this.isLoading = value;
            this.$store.dispatch('setIsLoading', value);
        },
    },
    
};
