import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import goodsItems from './goodsitems'
import ourCoffee from './ourcoffee'
import ourBest from './ourbest'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        links,
        goodsItems,
        ourCoffee,
        ourBest
    }
})

export default store