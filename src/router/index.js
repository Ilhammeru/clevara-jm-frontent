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
import Discount from '../views/Module/Master/Discount/Discount.vue'
import FluctuationPrice from '../views/Module/Master/Price/FluctuationPrice.vue'
import PriceUpdate from '../views/Module/Master/Price/PriceUpdate.vue'
import CreatePriceUpdate from '../views/Module/Master/Price/CreatePriceUpdate.vue'
import SalesOrder from '../views/Module/Transaction/SalesOrder.vue'

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
  {
    path: '/discount',
    name: 'Discount',
    component: Discount
  },
  {
    path: '/fluctuation',
    name: 'Price Fluctuation',
    component: FluctuationPrice
  },
  {
    path: '/update-price',
    name: 'Update Price',
    component: PriceUpdate
  },
  {
    path: '/update-price/create',
    name: 'Create Update Price',
    component: CreatePriceUpdate
  },
  {
    path: '/order',
    name: 'Sales Order',
    component: SalesOrder
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
