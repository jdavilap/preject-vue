const state = {
  funds: 10000,
  stocks: [],
};

const getters = {
  getStocksPortafolio() {
    return state.stocks;
  },
};

const mutations = {
  'BUY_STOCK'(state, { idStock, keyStock, priceStock, quantityStock }) {
    const record = state.stocks.find((elm) => (elm.idStock === idStock));
    if (record) {
      parseInt(record.quantityStock += quantityStock)
      state.funds -= priceStock * quantityStock;
    } else {
      state.stocks.push({
        idStock,
        priceStock,
        keyStock,
        quantityStock,
      });
    }
  },
};

const actions = {
  'BUY_STOCK': ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
