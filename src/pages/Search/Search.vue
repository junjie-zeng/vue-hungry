<template>
     <section class="search">
        <HeaderTop title="搜索"></HeaderTop>
        <form class="search_form" @submit.prevent = "search">
            <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" v-model = "keyword">
            <input type="submit" name="submit" class="search_submit">
        </form>
        <section class="list" v-if = "!noSearchShops">
            <ul class="list_container">
              <router-link class="list_li" :to = "{path:'/shop',query:{id:searchShop.id}}" tag = "li" v-for = "(searchShop,index) in searchShops" :key = "index">
                  <section class="item_left">
                      <img :src="searchShop.image_path">
                  </section>
                  <section class="item_right">
                      <div class="item_right_text">
                          <p><span>{{searchShop.name}}</span> </p>
                          <p>月售 {{searchShop.month_sales}} 单</p>
                          <p>{{searchShop.delivery_fee}} 元起送 / 距离 {{searchShop.distance}} 公里</p>
                      </div>
                  </section>
              </router-link>
            </ul>
         </section>
         <div class = "search_none" v-else>无搜索结果</div>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default{
        data(){
          return{
            keyword:'',
            noSearchShops:false
          }
        },
        computed:{
          ...mapState(['searchShops'])
        },
        methods:{
          search(){
              // 搜索关键字
              const keyword = this.keyword.trim();
              // 搜索
              if(keyword){
                
                this.$store.dispatch('searchShops',keyword);
              }
              
          }
        },
        watch:{
          searchShops(value){
            if(!value.length){
              this.noSearchShops = true;
            }else{
              this.noSearchShops = false;
            }

          }
        },
        // 组件引入需要通过components进行映射
        components:{
            HeaderTop
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    height 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #0080cb
          font-size 16px
          color #fff
          background-color #0080cb

    .list
      .list_container
        background-color: #fff;
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid $bc;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      background-color: #fff
      text-align: center
      margin-top: 0.125rem
</style>
