export default {
  state: {
    str: 'store_a' // 起个名字
  },
  mutations: { // ，同名的话都会执行
    'mod_a.setStr': function (state, s) {
      alert('a的setStr')
      state.str = s
    }
  },
  actions: { // ，同名的话都会执行
    'mod_a.setStr': function ({commit}, s) {
      commit('mod_a.setStr', s)
    }
  }
}
