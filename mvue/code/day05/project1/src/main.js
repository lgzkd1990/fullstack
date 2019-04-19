// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 通用的东西

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// vuex1-引入
import Vuex from 'vuex'

Vue.config.productionTip = false

// vuex2-添加到vue身上
Vue.use(Vuex)

// vuex3-声明store对象
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 非生产时采用严格模式：防止直接修改state
  state: { a: 12, b: 5 }, // 核心：数据
  mutations: {
    add (state, n) {
      state.a += n
    }
  }, // 对操作的封装，唯一合法对数据操作的地方，一个mutation改多个state
  actions: { // 不直接修改state，所以是context，即当前store对象
    add ({ commit }, n) {
      commit('add', n)
    }
  }, // 不止处理mutation，还有其他东西，同时容纳多个mutation；不需要加锁，因为js是基于单进程单线程基于事件的脚本语言
  getters: {}, // 设置值的方法
  modules: {} // 处理模块开发
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
