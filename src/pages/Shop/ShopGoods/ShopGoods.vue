<template> 
    <div>
         <div class="goods">
              <div class="menu-wrapper" >
                   <ul>
                       <!-- current 选中样式 -->
                       <li class="menu-item" v-for = "(good,index) in goods" :key = "index" :class = "{current:index == currentIndex}" @click = "clickMenuItem(index)">
                            <span class="text bottom-border-1px">
                                 <img class="icon" :src="good.icon" v-if = "good.icon">
                                  {{good.name}} 
                             </span>
                        </li>
                    </ul>
              </div> 
              <div class="foods-wrapper" >
                   <ul ref = "foodsUl">
                       <li class="food-list-hook" v-for = "(good,index) in goods" :key = "index" > 
                           <h1 class="title">{{good.name}}</h1> 
                           <ul >
                               <li class="food-item bottom-border-1px" v-for = "(food,index) in good.foods" :key = "index"> 
                                   <div class="icon"> 
                                       <img width="57" height="57" :src="food.icon">
                                   </div> 
                                   <div class="content">
                                       <h2 class="name">{{food.name}}</h2>
                                        <p class="desc">{{food.description}}</p>
                                            <div class="extra"> 
                                                <span class="count">月售 {{food.sellCount}} 份</span> 
                                                <span>好评率 {{food.rating}}%</span>
                                            </div> 
                                            <div class="price"> 
                                                <span class="now">￥{{food.price}}</span> 
                                                <span class = "old" v-if = "food.oldPrice">￥{{food.oldPrice}}</span>
                                            </div> 
                                        <div class="cartcontrol-wrapper"> 
                                          <!--控制 -->
                                          <CartControl :food = "food"/>  
                                        </div> 
                                    </div>
                                </li> 
                            </ul>
                        </li>
                    </ul> 
                </div> 
            </div>
        </div> 
</template>


<script>
    import { mapState } from 'vuex';
    import BScroll from 'better-scroll'
    import CartControl from '../../../components/CartControl/CartControl.vue'
    export default {
        data(){
            return {
                scrollY:0, // 右侧滑动的Y轴的坐标（滑动过程实时变化）
                tops:[], // 所有右侧分类li的top组成的数组（列表第一次显示之后不再变化）
                //currentIndex:0
            }
        },
        // 组件引入需要通过components进行映射
        components:{
            CartControl
        },
        mounted(){
            // 调用异步action
            this.$store.dispatch('getShopGoods',()=>{
              this.$nextTick(()=>{ // 数据更新后执行
                  // 初始化滚动条
                  this._initScroll();
                  // 初始化tops
                  this._initTops();

              })
             
            })

            
        },
        computed:{
            // 读取state
            ...mapState(['goods']),
            // 计算得到当前分类的下标(初始和相关数据发生了变化就会执行)
            currentIndex(){
                // 得到条件数据
                const { scrollY,tops } = this;
                // 根据条件计算产生一个结果
                const index = tops.findIndex((top,index) => {
                  // 当前滚动位置的坐标（scrollY） >= 当前top 并且 当前滚动位置的坐标（scrollY） < 下一个top
                  return scrollY >= top && scrollY < tops[index +1];
                });
                return index
            }
        },
        methods:{
          // 初始化滚动条
          _initScroll(){
              // 列表显示之后创建
                new BScroll('.menu-wrapper',{
                 // click:true
                })
                // 食物列表
                this.foodsScroll = new BScroll('.foods-wrapper',{
                    probeType:2, // 
                   // click:true
                });
                // 食物列表滑动监听(实时监听)
                this.foodsScroll.on('scroll',({x,y}) => {
                    // console.log(x,y)
                    // 搜集 scrollY
                    this.scrollY = Math.abs(y)
                });
                // 监听滚动结束时返回最终结果
                this.foodsScroll.on('scrollEnd',({x,y}) => {
                    // console.log(x,y)
                    // 搜集 scrollY
                    this.scrollY = Math.abs(y)
                })


          },
          // 初始化tops
          _initTops(){
              // 初始化tops
              const tops = [] ;
              // 默认为0
              let top = 0; 
              tops.push(top)
              // 得到所有分类的li(指定在哪个标签下的li,这样就不用全局去找li了)
              const lis = this.$refs.foodsUl.getElementsByClassName("food-list-hook");
              // 将类数组转换为数组
              Array.prototype.slice.call(lis).forEach(li=>{
                top += li.clientHeight
                tops.push(top)
              })
              console.log(tops);
              // 更新数据
              this.tops = tops;
          },
          // 点击分类滑动右侧列表(当右侧滚动后计算属性currentIndex 也会被触发因为Y轴变化了)
          clickMenuItem(index){
              // 得到目标位置
              const Y = this.tops[index];
              // 将scrollY改变了同时计算属性里面会被更新（分两项成当前分类）
              this.scrollY = Y;
              // 平滑滑动右侧列表
              this.foodsScroll.scrollTo(0,-Y,500);
              //console.log(index)
          }
        }
        
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 195px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
