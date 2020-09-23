import { stocks } from "../../data/stocks";

const state = {
  stocks: [],
};

const getters = {
  getStocks: (state) => {
    return state.stocks;
  },
};

const mutations = {
  SET_STOCKS(state, data) {
    state.stocks = data;
  },
  SET_FUNDS(state, payload) {
    state.funds -= payload.quantity * payload.price;
  },
};

const actions = {
  INIT_STOCKS: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
