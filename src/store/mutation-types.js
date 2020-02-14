/*
    包含多个mutation的type名称常量

*/

export const RECEIVE_ADDRESS = 'receive_address'; // 接收地址对象
export const RECEIVE_CATEGORS = 'receive_categors'; // 接收食品分类数组
export const RECEIVE_SHOPS = 'receive_shops'; // 接收商家数组
export const RECEIVE_USERINFO = 'receive_userinfo'; // 接收用户信息
export const RESET_USER_INFO = "reset_user_info"; /// 重置用户信息、

export const RECEIVE_GOODS = 'receive_goods'; //商品数组
export const RECEIVE_RATINGS = 'receive_ratings'; // 商品评价
export const RECEIVE_INFO = 'receive_info' ; // 接收商家信息

// 增加food 中count值
export const INCREMENT_FOOD_COUNT = 'increment_food_count'
// 减少food 中count值
export const DECREMENT_FOOD_COUNT = 'decrement_food_count'

// 清空购物车
export const CLEAR_CART = 'clear_cart';