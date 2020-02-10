<template>
  <div id = "appPage">
      <router-view/>
      <!-- 底部导航 -->
      <FooterGuide v-if = "$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  mounted(){
    this.$store.dispatch('getAddress')
  },
  // 组件引入需要通过components进行映射
  components:{
    FooterGuide
  }
}
</script>

<style lang = "stylus" rel = "stylesheet/stylus">
  #appPage
    width 100%
    height 100%
    background #f5f5f5
      

</style>
