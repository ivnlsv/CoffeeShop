const ourCoffee = {
	state: {
		ourcoffee: [],
		searchValue: '',
		sortValue: '',
	},
	mutations: {
		setCoffeeData(state, data) {
			state.ourcoffee = data;
		},
		setSearchValue(state, value) {
			state.searchValue = value;
		},
		setSortValue(state, value) {
			state.sortValue = value;
		},
	},
	actions: {
		setCoffeeData({ commit }, data) {
			commit('setCoffeeData', data);
		},
		setSearchValue({ commit }, value) {
			commit('setSearchValue', value);
		},
		setSortValue({ commit }, value) {
			commit('setSortValue', value);
		},
	},
	getters: {
		getOurCoffeeItems(state) {
			return state.ourcoffee
				.filter((item) =>
					item.name.toLowerCase().includes(state.searchValue.toLowerCase())
				)
				.filter((item) =>
					item.country.toLowerCase().includes(state.sortValue.toLowerCase())
				);
		},
		getProductById(state) {
			return (id) => {
				return state.ourcoffee.find((card) => card.id === +id);
			};
		},
		getCoffeeById: (state) => (id) => {
			return state.ourcoffee.find((coffee) => coffee.id === id);
		},
		getSearchValue(state) {
			return state.searchValue;
		},
	},
};
export default ourCoffee;
