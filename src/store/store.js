import Vue from 'vue'
import Vuex from 'vuex'

import stock from './module/stocks'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        stock
    }
})