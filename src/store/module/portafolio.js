const state = {
  funds: 10000,
  stocks: [],
};

const getters = {
  getStocksPortafolio() {
    return state.stocks;
  },
  getFunds() {
    return state.funds;
  },
};

const mutations = {
  BUY_STOCK(state, { idStock, keyStock, priceStock, quantityStock }) {
    const record = state.stocks.find((elm) => elm.idStock === idStock);
    if (record) {
      record.quantityStock += quantityStock;
    } else {
      state.stocks.push({
        idStock,
        priceStock,
        keyStock,
        quantityStock,
      });
    }
    state.funds -= priceStock * quantityStock;
  },
  SELL_STOCKS(state, { idStock, keyStock, priceStock, quantityStock }) {
    const record = state.stocks.find((elm) => elm.idStock === idStock);
    if (record) {
      if (record.quantityStock - quantityStock > 0) {
        record.quantityStock -= quantityStock;
        state.funds += priceStock * quantityStock;
      } else {
        state.stocks.splice(state.stocks.indexOf(keyStock));
        state.funds += priceStock * record.quantityStock;
      }
    } else {
      state.stocks.splice(state.stocks.indexOf(keyStock));
      state.funds += priceStock * quantityStock;
    }
  },
};

const actions = {
  BUY_STOCK: ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
  SELL_STOCKS: ({ commit }, order) => {
    commit("SELL_STOCKS", order);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
