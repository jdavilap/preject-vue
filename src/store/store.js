import Vue from "vue";
import Vuex from "vuex";

import stock from "./module/stocks";
import portafolio from "./module/portafolio";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    stock,
    portafolio,
  },
});
