/*
    直接更新state的多个方法的对象

*/
import { 
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO
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


}