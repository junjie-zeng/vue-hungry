// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'
// 图片懒加载插件
import VueLazyload from 'vue-lazyload'
// 加载自定义过滤器
import './filters'
// 加载mock serve
import './mock/mockService'

// 引入图片
import loading from './common/images/loading-bars.svg';
Vue.config.productionTip = false

// 使用
Vue.use(VueLazyload,{ // 内部自定义一个指令 lazy
  loading
})


// 注册全局组件标签
Vue.component(Button.name,Button) //<mt-button>
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 使用vue-router
  components: { App },
  template: '<App/>',
  store, // 使用vuex
})
