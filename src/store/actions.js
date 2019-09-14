export default {
  buy: ({ commit }, payload) => {
    commit('buy', payload);
  },
  sell: ({ commit }, payload) => {
    commit('sell', payload);
  },
  updateStocks: ({ commit }, payload) => {
    commit('updateStocks', payload);
  },
  updatePortfolio: ({ commit }, payload) => {
    commit('updatePortfolio', payload);
  }
}
