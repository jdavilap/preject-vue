const state = {
  funds: 10000,
  stocks: [],
};

const getters = {
  getStocksPortafolio() {
    console.log(state.stocks);
    return state.stocks;
  },
};

const mutations = {
  BUY_STOCK(state, { idStock, keyStock, priceStock, quantity }) {
    const record = state.stocks.find((elm) => (elm.id = idStock));
    if (record) {
      record.quantity += quantity;
      this.funds -= priceStock * quantity;
    } else {
      state.stocks.push({
        idStock,
        priceStock,
        keyStock,
        quantity,
      });
    }
  },
};

const actions = {
  BUY_STOCK: ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
