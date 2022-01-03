import Vue from 'vue'
import Vuex from 'vuex'

// modules
import customer from './modules/customer/customer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    customer: customer
  }
})
