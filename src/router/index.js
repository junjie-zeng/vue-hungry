/**
 *     路由器对象模块
 * 
 */
import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'

// 声明使用插件
Vue.use(Router)

export default new Router({
  // 所有路由
  routes: [
    {
      path:'/msite',
      component:MSite
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/search',
      component:Search
    },{
      path:'/profile',
      component:Profile
    },
    { // 默认
      path:'/',
      redirect:'/msite'
    }
  ]
})
