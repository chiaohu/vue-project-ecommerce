import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { // 避免用戶進入不存在的頁面
    path: '*',
    redirect: '/home'
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'customer_order',
    path: '/CustomerOrder',
    component: () => import('@/views/CustomerOrder.vue')
  },
  {
    name: 'productInfo',
    path: '/CustomerOrder/:productId', // 動態路由
    component: () => import('@/views/ProductInfo.vue')
  },
  {
    name: 'ShoppingCart', // 客人購物車畫面
    path: '/ShoppingCart',
    component: () => import('@/views/ShoppingCart.vue')
  },
  {
    name: 'CustomerCoupon',
    path: '/customercoupon',
    component: () => import('@/views/CustomerCoupon.vue')
  },
  {
    name: 'CustomerCheckout', // 客人結帳畫面
    path: '/customer_checkout/:orderId',
    component: () => import('@/views/CustomerCheckout.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login.vue')
  },
  {
    name: 'Dashboard',
    path: '/admin',
    component: () => import('@/components/Dashboard.vue'),
    children: [
      {
        name: 'products',
        path: 'products',
        component: () => import('@/views/Products.vue'),
        meta: { requiresAuth: true } // 確認有無登入
      },
      {
        name: 'OrderManagement',
        path: 'ordermanagement',
        component: () => import('@/views/OrderManagement.vue'),
        meta: { requiresAuth: true } // 確認有無登入
      },
      {
        name: 'Coupon',
        path: 'coupon',
        component: () => import('@/views/Coupon.vue'),
        meta: { requiresAuth: true } // 確認有無登入
      },
      {
        name: 'Turnover',
        path: 'turnover',
        component: () => import('@/views/Turnover.vue'),
        meta: { requiresAuth: true } // 確認有無登入
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
