import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Module/Dashboard/Index.vue'
import Customer from '../views/Module/Customer/Index.vue'
import CustomerCreate from '../views/Module/Customer/Create.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Customer
  },
  {
    path: '/customer/create',
    name: 'CustomerCreate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CustomerCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
