const goodsItems = {
    state: {
       coffee: [],
    },
    getters: {
        getGoodsItems(state) {
            return state.coffee
        },
        
        getGoodsById: (state) => (id) => {
            return state.coffee.find(goods => goods.id === id);
        },
    },
    mutations: {
		setGoodsData(state, data) {
			state.coffee = data;
		},
	},
	actions: {
		setGoodsData({ commit }, data) {
			commit('setGoodsData', data);
		},
	},
}

export default goodsItems