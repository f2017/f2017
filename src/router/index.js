import Vue from 'vue'
import Router from 'vue-router'//路由是vue的插件
import Home from '../components/Home'
import Me from '../components/Me'
import Order from '../components/Order'
import Shop from '../components/Shop'
import Food from '../components/Food.vue'
import Shoptwo from '../components/Shoptwo.vue'
import Myyouhui from '../components/Myyouhui.vue'
import Zhifuyemian from '../components/Zhifu.vue'
import Xiangqing from '../components/zhifu/xiangqing.vue'

Vue.use(Router);//路径 和视图 一一对应的关系

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/order',
            name: 'order',
            component: Order
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/me',
            name: 'me',
            component: Me
        },
        {
            path: '/my',
            name: 'food',
            component: Food
        },
        {
            path:'/shoptwo',
            name:'shoptwo',
            component:Shoptwo
        },
        {
            path:'/myyouhui',
            name:'myyouhui',
            component:Myyouhui
        },
        {
            path:'/zhifu',
            name:'zhifu',
            component:Zhifuyemian
        },
        {
            path:'/xiangqing',
            name:'xiangqing',
            component:Xiangqing
        }
    ]
})
