<template>
  <div >
      <router-view/>
      <!-- 底部导航 -->
      <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  // 组件引入需要通过components进行映射
  components:{
    FooterGuide
  }
}
</script>

<style lang = "stylus" rel = "stylesheet/stylus">
      

</style>
