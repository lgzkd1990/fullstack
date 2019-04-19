import Vue from 'vue';
import Router from 'vue-router';//不需要像vue那样
import Index from '@/index.vue';//为啥要@呢？用别名来简写
import News from '@/news.vue';

Vue.use(Router);//必须要use
//路由的js文件
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/news',
            name: 'news',
            component: News
        }
    ]
})
