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

