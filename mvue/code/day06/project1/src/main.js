// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 导入vuex对象

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// 动画
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 注册一下vuex对象
  components: { App },
  template: '<App/>'
})
