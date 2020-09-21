const state = {
    stocks: [
        { key: 'BMW', price: 100 },
        { key: 'Apple', price: 120 }
    ]
}

const getters = {
    getStocks: state => {
        return state.stocks
    }
}

export default {
    state,
    getters
}