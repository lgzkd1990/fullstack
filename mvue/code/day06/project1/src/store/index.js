import Vue from 'vue'
import Vuex from 'vuex'

// 子模块
import ModA from './mod_a'
import ModB from './mod_b'

Vue.use(Vuex)

// vuex3-声明store对象
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 严格模式：防止直接修改state
  state: { // 核心：数据
    a: 12,
    b: 5,
    users: []
  },
  mutations: {
    addA (state, n) {
      state.a += n
    },
    addB (state, n) {
      state.b += n
    },
    setOnline (state, id) {
      state.users.forEach(user => {
        if (user.id === id) {
          user.online = true
        }
      })
    },
    setUsers (state, users) {
      state.users = users
    }
  },
  actions: {
    addA ({commit}, n) {
      commit('addA', n)
    },
    addB ({commit}, n) {
      commit('addB', n)
    },
    setOnline ({commit}, id) {
      commit('setOnline', id)
    },
    async readUsers ({commit}) { // 读取数据整个应用都可以用，用fetch不用导包了
      let res = await fetch('http://localhost:8081/user.txt')
      let users = await res.json()
      commit('setUsers', users)
    }
  },
  getters: {// 获取东西的方法 降低耦合度和计算组合状态，只有读
    count (state) {
      return state.a + state.b
    },
    onlineUsers (state, getters, context) {
      // 执行 readuser()
      // 1、state对象的 arguments
      // if(!state.users) // 防止重复读，缓存数据
      // await store.dispatch('readUsers')
      // 数据发生变化，getters就会执行，因此死循环
      // 2、异步 3、缓存 4、读2次，本地2次 服务器一次
      return state.users.filter(user => user.online)
    }
  },
  modules: {
    mod_a: ModA,
    mod_b: ModB
  }
})
