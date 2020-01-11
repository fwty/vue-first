import Vue from 'vue'
import VueRouter from 'vue-router'
//引入登陆组件
import login from '../components/login.vue'
//引入注册组件
import reg from '../components/reg.vue'
//引入首页组件
import index from '../components/tabber.vue'
//引入首页衣服的详情页面
import detalis from "../components/details.vue"
//引入购物车页面
import cart from "../components/cart.vue"
//引入我的页面
import mine from "../components/mine.vue"
//引入简介页面
import info from "../components/info.vue"
Vue.use(VueRouter)

const routes = [
 
  // {
  //   path: '/about',
  //   name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {path:"/",component:login},
  {path:"/reg",component:reg},
  {path:"/index",component:index},
  {path:"/details",component:detalis},
  {path:"/cart",component:cart},
  {path:"/mine",component:mine},
  {path:"/info",component:info}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
