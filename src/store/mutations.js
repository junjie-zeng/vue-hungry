/*
    直接更新state的多个方法的对象

*/
import Vue from 'vue';
import { 
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT
} from './mutation-types'



export default {
    // 地址
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },

    [RECEIVE_CATEGORS](state,{categorys}){
    state.categorys = categorys
    },
    // 商家列表
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    },
    // 用户信息
    [RECEIVE_USERINFO](state,{userInfo}){
        state.userInfo = userInfo
    },
    // 重置用户信息
    [RESET_USER_INFO](state){
        state.userInfo = {}
    },
    // 商家实物
    [RECEIVE_GOODS](state,{goods}){
        state.goods = goods
    },
    // 商家评论
    [RECEIVE_RATINGS](state,{ratings}){
        state.ratings = ratings
    },
    // 商家信息
    [RECEIVE_INFO](state,{info}){
        state.info = info
    },
    // 增加
    [INCREMENT_FOOD_COUNT](state,{food}){
        if(!food.count){// 第一次增加
            // food.count = 1; // 新增属性（没有数据绑定）
            Vue.set(food,'count',1) // 让新增的属性也有数据绑定
        }else{
            food.count ++ ;
        }
    },
    // 减少
    [DECREMENT_FOOD_COUNT](state,{food}){
        // 有值大于0的时候才进行 --
        if(food.count){
            food.count -- ;
        }
        
    }



    // INCREMENT_FOOD_COUNT,
    // DECREMENT_FOOD_COUNT
}