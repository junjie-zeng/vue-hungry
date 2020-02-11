<template>
  <div id = "appPage">
      <router-view/>
      <!-- 底部导航 -->
      <FooterGuide v-if = "$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// 映射函数
import { mapActions } from 'vuex'
export default {
  mounted(){
    // 获取地址
    //this.$store.dispatch('getAddress')
    this.getAddress();
  },
  methods:{
     ...mapActions(['getAddress'])
  },
  // 组件引入需要通过components进行映射
  components:{
    FooterGuide
  }
}
</script>

<style lang = "stylus" rel = "stylesheet/stylus">
  a
    text-decoration none
      
      

</style>
