#问题：
## 参数问题：
1. http://xxx/1.php?a=12&b=5 query
2. http://xxx/user/12/5/  params，利于seo

## 浏览器支持自定义标签
7、为什么把router-view标签放在div外面，然后我也没引vue-router文件，
浏览器却没有报错
<aaa>
## methods方法
不太明白methods中什么叫输出几次就重新计算几次，数据变动不就是重新输出吗？
methods: {
  sum(){
  }
}
只要重新渲染，sum就会重新执行，和计算属性不同。
## 在node和webpack中不同
看到一句话  “var $ = require('jquery'); 
和 import $ from 'jquery' 是完全不同的两种概念”    
有什么不同？
node和webpack中用的，混用的情况不多
## 内容 
### Vue2.0和Vue1.0组件的不同
V1.0组件：
new Vue({
//局部组件
  components: {
  }
});
//全局组件
Vue.component('xxx', {
  data(){
  },
  template:,
  methods: {
  }
});
### Vue2.0组件： 
1. 组件生存周期
new Vue({})
Vue.component({})
判断el和template
created   适合：数据操作
mounted   适合：操作元素
2. 钩子函数，不能拦截系统操作
挂载也不太理解。
生成HTML
oDiv.innerHTML='xxdfds';输出到html中就是挂载
3. 组件间通信：
1.土办法
  父->子
    ref=""    this.$refs
  子->父
    :parent="this"    props: ['parent']   this.parent.xxx
 >> 组件的事件
     $emit  发送 
     $on    接收
     $off   删除
     $once  单次

2. 非父子
一级一级往上找，耦合度非常的高
3. vuex 
管理组件通信和状态
父->子 简单，通过增加一个ref
  <div>
    父级
    <input type="button" value="+1" @click="fn()" />
  </div>
  <child ref="c1"/>
  fn(){
    this.$refs.c1.a();
    this.$refs.c1.num++;
  }
子->父 相对来说比较复杂 
以后使用vuex
如果是非父子之间通信

### Vue2.0
vue2.0——组件
编译到vue1.0

