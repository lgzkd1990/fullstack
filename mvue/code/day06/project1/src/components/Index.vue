<template>
  <div>
    <div>a: {{a}}</div>
    <div>b: {{b}}</div>
    <div>count: {{count}}</div>
    <input type="button" value="a+5" @click="addA(5)" />
    <input type="button" value="b+3" @click="addB(3)" />

    <br>
    str: {{$store.state.str}}<br>
    a_str: {{str_a}}<br>
    b_str: {{str_b}}<br>
    <input type="button" value="设置A" @click="set_a('aaa')">
    <input type="button" value="设置B" @click="set_b('bbb')">
    <br>

    <input type="button" value="张三出现" @click="setOnline(5)" />
    <ul>
      <li v-for="user in onlineUsers">
        名字：{{user.name}}
        年龄：{{user.age}}
      </li>
    </ul>
  </div>
</template>

<script>
import Table from '@/components/common/Table'
import Cmp1 from '@/components/Cmp1'
import {mapState, mapActions, mapGetters} from 'vuex' // 辅助方法 映射state成computed、映射actions成methods、映射getters成computed

export default {
  name: 'Index',
  data () {
    return {
      fields: [
        {name: 'ID', text: 'ID'},
        {name: 'name', text: '姓名'},
        {name: 'age', text: '年龄'}
      ],
      datas: [
        {ID: 1, name: 'blue', age: 18},
        {ID: 2, name: '张三', age: 25},
        {ID: 4, name: 'tom', age: 8}
      ]
    }
  },
  async created () {
    await this.readUsers() // 单独来做，效率不高，应该是需要再执行
    // this.setStr('sdfasdfsdg');
  },
  methods: {
    del (id) {
      this.datas = this.datas.filter(data => data.ID !== id)
    },
    ...mapActions(['addA', 'addB', 'setOnline', 'readUsers']),
    // ...mapActions(['setStr'])
    ...mapActions({
      set_a: 'mod_a.setStr',
      set_b: 'mod_b.setStr'
    })
    // set_a(){
    //   this.$store.dispatch('mod_a.setStr', 'aaa');
    // },
    // set_b(){
    //   this.$store.dispatch('mod_b.setStr', 'bbb');
    // }
  },
  components: {
    Table, Cmp1
  },
  computed: {// 必须放在这里面，才能映射，因为json直接使用回到导致报错，json放到json中怎么办使用...
    ...mapState(['a', 'b']),
    ...mapState({ // 函数
      str_a: state => state.mod_a.str,
      str_b: state => state.mod_b.str
    }),
    ...mapGetters(['count', 'onlineUsers'])
  }
}
</script>

<style scoped>
</style>
