/**
 *     路由器对象模块
 * 
 */
import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
// import MSite from '../pages/MSite/MSite.vue'
// import Order from '../pages/Order/Order.vue'
// import Search from '../pages/Search/Search.vue'
// import Profile from '../pages/Profile/Profile.vue'
// 路由懒加载配置（此时返回的是路由组件的函数，只有执行函数的时候才会加载路由，这个函数会在请求对应的路由路径时才会执行）
const MSite = ()=> import("../pages/MSite/MSite.vue")
const Order = ()=> import("../pages/Order/Order.vue")
const Search = ()=> import("../pages/Search/Search.vue")
const Profile = ()=> import("../pages/Profile/Profile.vue")

import Login from '../pages/Login/login.vue'
// 商家一些路由
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'


// 声明使用插件
Vue.use(Router)

export default new Router({
  // 所有路由
  routes: [
    { // 首页
      path:'/msite',
      component:MSite, 
      meta:{
        showFooter:true
      }
    },
    { // 订单
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    { // 搜索
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },{ // 自己
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    { // 登录
      path:'/login',
      component:Login
    },
    { // 商家
      path:'/shop',
      component:Shop,
      children:[ // 子路由
        { // 商家实物列表
          path:'/shop/goods',
          component:ShopGoods
        },
        { // 商家信息
          path:'/shop/info',
          component:ShopInfo
        },
        {  // 评论
          path:'/shop/ratings', 
          component:ShopRatings
        },
        { // 默认
          path:'',
          redirect:'/shop/goods'
        }

      ]
    },
    
    { // 默认
      path:'/',
      redirect:'/msite'
    }
  ]
})
