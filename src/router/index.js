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
import Promo from '../views/Module/Master/Promo/Promo.vue'
import CreatePromo from '../views/Module/Master/Promo/CreatePromo.vue'
import FluctuationPrice from '../views/Module/Master/Price/FluctuationPrice.vue'
import PriceUpdate from '../views/Module/Master/Price/PriceUpdate.vue'
import CreatePriceUpdate from '../views/Module/Master/Price/CreatePriceUpdate.vue'
import SalesOrder from '../views/Module/Transaction/SalesOrder.vue'
import DetailOrder from '../views/Module/Transaction/DetailOrder.vue'
import ConfirmationPayment from '../views/Module/Transaction/ConfirmationPayment.vue'
import PurchaseList from '../views/Module/ERP/PurchaseList.vue'
import InvoiceList from '../views/Module/ERP/InvoiceList.vue'
import CreatePurchase from '../views/Module/ERP/CreatePurchase.vue'
import DetailPurchase from '../views/Module/ERP/DetailPurchase.vue'
import PnL from '../views/Module/Finance/PnL.vue'
import DetailPnL from '../views/Module/Finance/DetailPnL.vue'
import Master from '../views/Module/Finance/Master.vue'
import Article from '../views/Module/Media/Article.vue'
import Banner from '../views/Module/Media/Banner.vue'
import CreateBanner from '../views/Module/Media/CreateBanner.vue'
import CreateArticle from '../views/Module/Media/CreateArticle.vue'
import ArticleCategory from '../views/Module/Media/ArticleCategory.vue'
import User from '../views/Module/User/User.vue'
import CreateUser from '../views/Module/User/CreateUser.vue'
import Access from '../views/Module/User/Access.vue'
import DetailUser from '../views/Module/User/DetailUser.vue'
import Mitra from '../views/Module/Mitra/Mitra.vue'
import CreateMitra from '../views/Module/Mitra/CreateMitra.vue'
import SettingGeneral from '../views/Module/Setting/General.vue'
import SettingPage from '../views/Module/Setting/Page.vue'
import CreatePage from '../views/Module/Setting/CreatePage.vue'

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
    path: '/promo',
    name: 'Promo',
    component: Promo
  },
  {
    path: '/promo/create',
    name: 'Create Promo',
    component: CreatePromo
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
  {
    path: '/order/:id',
    name: 'Detail Order',
    component: DetailOrder
  },
  {
    path: '/order-confirmation',
    name: 'Confirmation Payment',
    component: ConfirmationPayment
  },
  {
    path: '/purchase',
    name: 'Purchase Order',
    component: PurchaseList
  },
  {
    path: '/purchase/create',
    name: 'Create Purchase Order',
    component: CreatePurchase
  },
  {
    path: '/purchase/detail/:id',
    name: 'Detail Purchase Order',
    component: DetailPurchase
  },
  {
    path: '/invoice',
    name: 'Invoice List',
    component: InvoiceList
  },
  {
    path: '/finance/pnl',
    name: 'Profit and Loss',
    component: PnL
  },
  {
    path: '/finance/pnl/detail',
    name: 'Detal Profit and Loss',
    component: DetailPnL
  },
  {
    path: '/finance/master',
    name: 'Master Finance',
    component: Master
  },
  {
    path: '/media/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/media/article/create',
    name: 'Create Article',
    component: CreateArticle
  },
  {
    path: '/media/banner',
    name: 'Banner',
    component: Banner
  },
  {
    path: '/media/banner/create',
    name: 'Create Banner',
    component: CreateBanner
  },
  {
    path: '/media/article/category',
    name: 'Article Cateogry',
    component: ArticleCategory
  },
  {
    path: '/management/user',
    name: 'User List',
    component: User
  },
  {
    path: '/management/user/detail',
    name: 'Detail User List',
    component: DetailUser
  },
  {
    path: '/management/user/create',
    name: 'Create User',
    component: CreateUser
  },
  {
    path: '/management/access',
    name: 'Access',
    component: Access
  },
  {
    path: '/mitra',
    name: 'Mitra',
    component: Mitra
  },
  {
    path: '/mitra/create',
    name: 'Mitra Create',
    component: CreateMitra
  },
  {
    path: '/setting/general',
    name: 'Setting General',
    component: SettingGeneral
  },
  {
    path: '/setting/page',
    name: 'Setting Page',
    component: SettingPage
  },
  {
    path: '/setting/page/create',
    name: 'Create Page',
    component: CreatePage
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
