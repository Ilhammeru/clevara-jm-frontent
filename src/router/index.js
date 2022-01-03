import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Module/Dashboard/Index.vue'
import Customer from '../views/Module/Customer/Index.vue'
import Detail from '../views/Module/Customer/Detail.vue'
import Approval from '../views/Module/Customer/Approval.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/customer/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/approval',
    name: 'Approval',
    component: Approval
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
