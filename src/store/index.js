import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import goodsItems from './goodsitems'
import ourCoffee from './ourcoffee'
import ourBest from './ourbest'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		isLoading: false,
	},
	mutations: {
		setIsLoading(state, value) {
			state.isLoading = value;
		},
	},
	actions: {
        setIsLoading({ commit }, value ) {
			commit('setIsLoading', value);
		},
	},
	getters: {
		getIsLoading(state) {
			return state.isLoading;
		},
	},
    modules: {
        links,
        goodsItems,
        ourCoffee,
        ourBest
    }
})

export default store