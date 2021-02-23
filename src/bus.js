import Vue from 'vue'

Vue.prototype.$bus = new Vue() // 掛載在VUE的原型下

// Message
// vm.$bus.$emit(`message:push`, message, status);
// message(String): 訊息內容
// status(String): Alert的樣式
