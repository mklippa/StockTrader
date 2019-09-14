import Vue from "vue"
import Vuex from "vuex"

import getters from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    stocks: [
      {
        name: "BMW",
        price: 110
      },
      {
        name: "Google",
        price: 200
      },
      {
        name: "Apple",
        price: 250
      },
      {
        name: "Twitter",
        price: 8
      },
    ],
    portfolio: []
  },
  getters,
  // mutations,
  // actions
})
