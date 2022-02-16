import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 3rd party
import './lib/bootstrap'
import './lib/axios'
import './lib/toast'
import './lib/loader'
import './lib/sweetalert'

// component
import Table from '@/components/Table.vue'
Vue.component(Table)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
