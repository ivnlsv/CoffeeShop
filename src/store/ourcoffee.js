const ourCoffee = {
	state: {
		ourcoffee: [],
	},
	mutations: {
		setCoffeeData(state, data) {
			state.ourcoffee = data;
		},
	},
	actions: {
		setCoffeeData({ commit }, data) {
			commit('setCoffeeData', data);
		},
	},
	getters: {
		getOurCoffeeItems(state) {
			return state.ourcoffee;
		},
		getProductById(state) {
			return (id) => {
				return state.ourcoffee.find((card) => card.id === +id);
			};
		},
		getCoffeeById: (state) => (id) => {
			return state.ourcoffee.find((coffee) => coffee.id === id);
		},
	},
};
export default ourCoffee;
