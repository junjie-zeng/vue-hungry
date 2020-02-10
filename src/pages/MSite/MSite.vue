<template>
     <section class="msite">
        <!--首页头部-->
        <HeaderTop :title="address.name">
            <!-- slot 指定插入到哪 -->
            <span class="header_search" slot = "left">
                <i class="iconfont icon-sousuo"></i>
            </span>
            <span class="header_login" slot = "right">
                <span class="header_login_text">登录|注册</span>
            </span>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if = "categorys.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide"  v-for = "(categorys,index) in categorysArr" :key = "index">
                <a href="javascript:" class="link_to_food"  v-for = "(category,index) in categorys" :key = "index">
                  <div class="food_container">
                    <img :src="baseImageUrl + category.image_url">
                  </div>
                  <span>{{category.title}}</span>
                </a>
              </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <img src = "./images/msite_back.svg" alt = "..." v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <!-- 商家列表组件 -->
          <ShopList/>
        </div>
      </section>
</template>

<script>
    import { mapState } from 'vuex'
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    // 头部组件
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    // 商家列表组件
    import ShopList from '../../components/ShopList/ShopList.vue'
    
    export default{
        data(){
          return {
            baseImageUrl:'http://fuss10.elemecdn.com', //基本图片地址

          }
        },
        mounted(){
           // 调用action
           this.$store.dispatch('getCategorys');
           this.$store.dispatch('getShops');
           
        },
        computed:{
          // 读取状态
          ...mapState(['address','categorys','shops']),
          // 根据categorys一维数组生成一个二维数据(小数组中的元素数组最大个数为8)
          categorysArr(){
            const  {categorys} = this;
            const arr = [];
            let mixArr = [];
            // 遍历categorys
            categorys.forEach(c=>{
              
              // 如果minArr子元素数量等于8则置空，重新装
              if(mixArr.length === 8){
                mixArr = [];
              }

              // 如果minArr当前是一个空的，则把minArr添加到arr
              if(mixArr.length ===0){
                arr.push(mixArr)
              }
              // 将当前元素保存到小数组中（满足条件：小数组没满，小数组必须已经关联到了大数组中（运用引用类型的指针））
              mixArr.push(c);
             
            })

            console.log(arr)
            return arr;
          }
        },
        watch:{
           categorys(value){ // 监听 categorys中是否有数据
              // 界面更新就立即创建Swiper对象
              this.$nextTick(()=>{// 一旦完成界面更新，立即调用（该语句要写在数据更新之后）
                // 创建一个Swiper实例对象，来实现轮播
                new Swiper('.swiper-container',{
                    loop:true, // 可以循环轮播
                    pagination:{ // 如果需要分页器
                        el:'.swiper-pagination'
                    }
                })

              })


              


           }  
        },
        // 组件引入需要通过components进行映射
        components:{
            HeaderTop,
            ShopList
        }
    }
</script>

<style lang = "stylus" rel = "stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .msite  //首页
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
            
</style>
