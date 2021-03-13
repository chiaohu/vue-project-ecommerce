import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Layout',
    path: '/',
    component: () => import('@/views/frontend/Layout.vue'),
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import('@/views/frontend/Home.vue')
      },
      {
        name: 'Customer_order',
        path: '/CustomerOrder',
        component: () => import('@/views/frontend/CustomerOrder.vue')
      },
      {
        name: 'ProductInfo',
        path: '/CustomerOrder/:productId',
        component: () => import('@/views/frontend/ProductInfo.vue')
      },
      {
        name: 'ShoppingCart',
        path: '/ShoppingCart',
        component: () => import('@/views/frontend/ShoppingCart.vue')
      },
      {
        name: 'CustomerCoupon',
        path: '/customercoupon',
        component: () => import('@/views/frontend/CustomerCoupon.vue')
      },
      {
        name: 'CustomerCheckout',
        path: '/customer_checkout/:orderId',
        component: () => import('@/views/frontend/CustomerCheckout.vue')
      },
      {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/backend/Login.vue')
      }
    ]
  },
  {
    name: 'Dashboard',
    path: '/admin',
    component: () => import('@/components/Dashboard.vue'),
    children: [
      {
        name: 'Products',
        path: 'products',
        component: () => import('@/views/backend/Products.vue'),
        meta: { requiresAuth: true }
      },
      {
        name: 'OrderManagement',
        path: 'ordermanagement',
        component: () => import('@/views/backend/OrderManagement.vue'),
        meta: { requiresAuth: true }
      },
      {
        name: 'Coupon',
        path: 'coupon',
        component: () => import('@/views/backend/Coupon.vue'),
        meta: { requiresAuth: true }
      },
      {
        name: 'Turnover',
        path: 'turnover',
        component: () => import('@/views/backend/Turnover.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  { // 避免用戶進入不存在的頁面
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
