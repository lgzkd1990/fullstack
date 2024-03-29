## 简介

### 三大框架：
*  vue     前端
*  react   程序
*  angular

### 开发模式
* 现代开发模式？ 20%表现层 vue/react
* 传统开发模式？ 80%表现层 jQuery

### MVC——数据、表现、行为分离
* 视图层 <--> 数据层

* MVC、MVP、MVVM
* 前端渲染vs后台渲染
> 降低服务器负担、带宽压力小，SEO、兼容、安全性，用户体验好

## vue的核心是数据

### 指令(directive)——补充了html的属性

v-bind
可以用于任何属性，有两个属性有另外的写法
class、style

class="aaa bbb ccc active"
style="width: 200px; height: 200px; background: red;"

v-bind:xxx=""
:xxx=""

--------------------------------------------------------------------------------

v-model：数据双向绑定
数据(data)和input之间双向绑定

输入组件

v-model进来的数据，都是字符串

--------------------------------------------------------------------------------

v-text    直接输出html代码
v-html    innerHTML

--------------------------------------------------------------------------------

v-bind
v-model
v-text/html

--------------------------------------------------------------------------------

vue事件
v-on:click="fn(x,x,x...)"
@click="fn(x,x,x...)"

--------------------------------------------------------------------------------

v-show    display
v-if      删除元素

--------------------------------------------------------------------------------

v-for
1.数组    v-for="item,index in array"
2.json    v-for="val,key in json"
3.字符串  v-for="char,index in str"
4.数字    v-for="i in num"

--------------------------------------------------------------------------------

虚拟DOM——json
{
  tag: 'ul',
  child: [
    {tag: 'li', child: [
      ...
    ]}
  ]
}

<ul>
  <li>
    <h2></h2>
    <p></p>
  </li>
</ul>

:key属性
1.不能重复
2.不能变

--------------------------------------------------------------------------------

[
  ...,
  ...,
  ...
]

[
  ...,
  ...,
  ...,
  ...
]

--------------------------------------------------------------------------------

v-for
v-on
v-show/if

--------------------------------------------------------------------------------

v-on

v-once    ?

--------------------------------------------------------------------------------

v-pre：预编译
提高性能
防止意外

--------------------------------------------------------------------------------

v-cloak

--------------------------------------------------------------------------------

1.vm结构
  new Vue({
    el, data, methods
    computed, props, watch, template, router, ...
  })

2.概念
  数据同步
  双向绑定
  虚拟DOM

3.指令

--------------------------------------------------------------------------------

虚拟DOM：
合并请求
快速查询
局部刷新

--------------------------------------------------------------------------------
