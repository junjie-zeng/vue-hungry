/*
    接口请求函数模块

*/
import ajax from './ajax.js'
const BASE_URL = '/api'
// 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(BASE_URL + `/position/${geohash}`)

// 获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category');

// 根据经纬度获取商铺列表
export const reqShopList = (longitude,latitude) => ajax(BASE_URL + '/shops',{longitude,latitude})

// 根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash,keyword) => ajax(BASE_URL + '/search_shops',{geohash,keyword});

// 用户名秘密码登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL + '/login_pwd',{name,pwd,captcha},'POST');

// 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode',{phone});

// 手机号验证码登录
export const reqSmsLogin = (phone,code) => ajax(BASE_URL + '/login_sms',{phone,code},'POST');

// 根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

// 用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout')


/*
     模拟数据不需要使用代理

 */

// 获取商家信息
export const reqShopInfo = () => ajax('/info');

// 获取商家评价
export const reqShopRatings = () => ajax('/ratings')

// 获取商家商品
export const reqShopGoods = () => ajax('/goods')