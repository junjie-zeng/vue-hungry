

/*
    通过mutation间接更新state的多个方法的对象
*/

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
    DECREMENT_FOOD_COUNT,
    CLEAR_CART
} from './mutation-types'
// 封装api函数
import { reqAddress,reqFoodCategorys,reqShopList,reqUserInfo,reqLogout,reqShopInfo,reqShopRatings,reqShopGoods} from '../api'

export default {
    // 异步获取地址action
    async getAddress({commit,state}){
        // 发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result  = await reqAddress(geohash)
        
        // 提交一个mutations
        if(result.code === 0){
            const address = result.data;
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    // 异步获取食品分类action
    async getCategorys({commit,state}){
        // 发送异步ajax请求
        const result  = await reqFoodCategorys();
        
        // 提交一个mutations
        if(result.code === 0){
            const categorys = result.data;
            commit(RECEIVE_CATEGORS,{categorys})
        }
    },

    // 异步获取商家列表action
    async getShops({commit,state}){
        // 发送异步ajax请求
        const latitude = state.latitude;
        const longitude = state.longitude;
        const result  = await reqShopList(longitude,latitude);
        
        // 提交一个mutations
        if(result.code === 0){
            const shops = result.data;
            commit(RECEIVE_SHOPS,{shops})
        }
    },
    
    // 异步获取用户信息
    async getUserInfo({commit}){
        const result = await reqUserInfo();
        console.log(result)
        if(result.code === 0){
            const userInfo = result.data;
            commit(RECEIVE_USERINFO,{userInfo})
        }
    },
    // 异步登出action
    async logout({commit}){
        const result = await reqLogout();
        if(result.code === 0){
            commit(RESET_USER_INFO)
        }

    }
    ,
    
    // 同步纪录用户信息action (直接在页面中将请求信息拿到然后取更新state)
    recordUser({commit},userInfo){
        commit(RECEIVE_USERINFO,{userInfo})
    },

    // 异步获取商家信息
    async getShopInfo({commit}){
        const result = await reqShopInfo();
        if(result.code == 0){
            const info = result.data;
            commit(RECEIVE_INFO,{info})
        }
    },
    // 异步获取商家评价信息
    async getShopRatings({commit}){
        const result = await reqShopRatings();
        if(result.code == 0){
            const ratings = result.data;
            commit(RECEIVE_RATINGS,{ratings})
        }
    },

    // 异步获取商家食物
    async getShopGoods({commit},callback){
        const result = await reqShopGoods();
        if(result.code == 0){
            const goods = result.data;
            commit(RECEIVE_GOODS,{goods})
            // 数据更新了调用回调
            callback && callback()
        } 
    },

    // 同步更新food中的count值
    updateFoodCount({commit},{isAdd,food}){
        // console.log(food)
        if(isAdd){
            commit(INCREMENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },

    // 清空购物车同步action
    clearCart({commit}){
        commit(CLEAR_CART)
    }
}

