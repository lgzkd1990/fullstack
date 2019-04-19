import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

// 导入路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
