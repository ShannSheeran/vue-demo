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
import MovieList from '@/pages/movie/List'
import Detail from '@/pages/movie/Detail'
import SearchList from '@/pages/movie/SearchList'
import vscroll from '@/components/common/scroll'


//Mall Router
import MallIndex from '@/pages/mall/Index'
import MallGoodsList from '@/pages/mall/GoodsList'
import MallGoodsDetail from '@/pages/mall/GoodsDetail'
import MallCart from '@/pages/mall/Cart'



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
      path: '/shop',
      name: 'shop/index',
      component: index
    },
    {
      path: '/shop/:id',
      name: 'shop/detail',
      component: detail
    },
    {
      path: '/shop/list',
      name: 'shop/list',
      component: list
    },
    {
      path: '/shop/test',
      name: 'shop/test',
      component: test
    },
    {
      path: '/shop/input',
      name: 'shop/input',
      component: input
    },
    {
      path: '/movie/index',
      name: 'movie/index',
      component: MovieIndex,
      children: [
        {
          path: '/movie/detail',
          name: 'movie/detail',
          component: Detail,
        },
        {
          path: '/movie/list',
          name: 'movie/list',
          component: MovieList,
        },
        {
          path: '/movie/search/list',
          name: 'movie/search/list',
          component: SearchList,
        }
      ]
    },
    //Mall
    {
      path:'/mall',
      name:'mall',
      component:MallIndex,
      children:[
        {
          path: '/mall/goods',
          name: 'mall-goods',
          component: MallGoodsList,
        },
        {
          path: '/mall/goods-detail/:id',
          name: 'mall-goods-detail',
          component: MallGoodsDetail,
        }
      ]
    },
    {
      path:'/mall/cart',
      name:'mall-cart',
      component:MallCart,
    },
    {
      path:'/scroll',
      name:'scroll',
      component:vscroll
    }

  ]
})
