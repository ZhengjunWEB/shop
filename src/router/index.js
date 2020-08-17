import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home'
import Category from '../views/category/category'
import Cart from '../views/cart/cart'
import User from '../views/user/user'

import Pop from '@/views/home/childComps/pop'
import New from '@/views/home/childComps/new'
import Sell from '@/views/home/childComps/sell'

Vue.use(VueRouter)

  const routes = [
    {path:'',redirect:'/home'},
    {path:'/home',component:Home,redirect:'/home/pop',children:[
      {path:'/home/pop',component:Pop},
      {path:'/home/new',component:New},
      {path:'/home/sell',component:Sell}
    ]},
    {path:'/category',component:Category},
    {path:'/cart',component:Cart},
    {path:'/user',component:User}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
