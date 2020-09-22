import { stocks } from '../../data/stocks';

const state = {
    funds: 10000,
    stocks: []
}

const getters = {
    getStocks: state => {
        return state.stocks
    },
    getFunds: state => {
        return state.funds
    }
}

const mutations = {
    'SET_STOCKS'(state, data) {
        state.stocks = data;
    },
    'SET_FUNDS'(state, payload) {
        state.funds -= payload.quantity * payload.price
    }
}

const actions = {
    'INIT_STOCKS': ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },
    'SET_FUNDS': ({ commit }, payload) => {
        commit('SET_FUNDS', payload)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}