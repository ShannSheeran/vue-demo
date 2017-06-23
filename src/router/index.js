import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/pages/shop/index'
import detail from '@/pages/shop/detail'
import list from '@/pages/shop/list'
import test from '@/pages/shop/test'
import input from '@/components/BigInput'
import MovieIndex from '@/pages/movie/Index'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path:'/shop',
            name:'shop/index',
            component:index
        },
        {
            path:'/shop/:id',
            name:'shop/detail',
            component:detail
        },
        {
            path:'/shop/list',
            name:'shop/list',
            component:list
        },
        {
            path:'/shop/test',
            name:'shop/test',
            component:test
        },
        {
            path:'/shop/input',
            name:'shop/input',
            component:input
        },
        {
            path:'/movie/index',
            name:'movie/index',
            component:MovieIndex
        }

    ]
})
