import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 3rd party
import './lib/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
