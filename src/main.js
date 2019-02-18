// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import store from './store/index.js'//引入store

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/iconfont.css'

import '@/assets/js/axios.js'
import '@/assets/js/element.js'

import '@/assets/css/base.css'
import '../static/css/main.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
