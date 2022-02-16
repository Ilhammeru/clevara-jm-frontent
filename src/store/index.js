import Vue from 'vue'
import Vuex from 'vuex'

// modules
import customer from './modules/customer/customer'
import product from './modules/inventory/product'
import general from './modules/general'
import auth from './modules/auth/auth'
import category from './modules/master/category'
import brand from './modules/master/brand'
import role from './modules/master/role'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    customer: customer,
    inventory: product,
    general: general,
    auth: auth,
    category: category,
    brand: brand,
    role: role
  }
})
