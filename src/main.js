// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios' // 主要AJAX套件
import VueAxios from 'vue-axios' // 將他轉為Vue的套件
import Loading from 'vue-loading-overlay' // loading套件
import 'vue-loading-overlay/dist/vue-loading.css' // loading套件
import 'bootstrap'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules'
import $ from 'jquery'

import App from './App.vue'
import router from './router'
import './bus'
import currencyFilter from './filters/currency'
import timeStamp from './filters/Timestamp'
import date from './filters/date'
window.$ = $

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

localize('zh_TW', TW)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

axios.defaults.withCredentials = true // 自動儲存COOKIE (跨域用)

Vue.component('Loading', Loading) // 全域啟用元件
Vue.filter('currency', currencyFilter)
Vue.filter('timestamptrans', timeStamp)
Vue.filter('date', date)

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
