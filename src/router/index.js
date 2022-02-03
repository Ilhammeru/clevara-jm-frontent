import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Module/Dashboard/Index.vue'
import Customer from '../views/Module/Customer/Index.vue'
import Detail from '../views/Module/Customer/Detail.vue'
import Approval from '../views/Module/Customer/Approval.vue'
import Product from '../views/Module/Master/Product/Product.vue'
import DetailProduct from '../views/Module/Master/Product/DetailProduct.vue'
import Category from '../views/Module/Master/Category/Category.vue'
import Unit from '../views/Module/Master/Unit/Unit.vue'
import Brand from '../views/Module/Master/Brand/Brand.vue'
import Supplier from '../views/Module/Master/Supplier/Supplier.vue'
import AddSupplier from '../views/Module/Master/Supplier/AddSupplier.vue'

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
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'Detail Product',
    component: DetailProduct
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/unit',
    name: 'Unit',
    component: Unit
  },
  {
    path: '/brand',
    name: 'Brand',
    component: Brand
  },
  {
    path: '/supplier',
    name: 'Supplier',
    component: Supplier
  },
  {
    path: '/supplier/create',
    name: 'Create Supplier',
    component: AddSupplier
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
