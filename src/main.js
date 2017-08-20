// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/rem.js'
import App from './App'//入口组价
import router from './router'//前端路由

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App></App>',
  components: { 'App':App }
})
