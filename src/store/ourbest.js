const ourBest = {
    state: {
        ourbest: [],
    },
    getters: {
        getOurBest(state) {
            return state.ourbest
        }
    },
    mutations: {
		setBestsellersData(state, data) {
			state.ourbest = data;
		},
	},
	actions: {
		setBestsellersData({ commit }, data) {
			commit('setBestsellersData', data);
		},
	},
}

export default ourBest