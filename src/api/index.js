/*
    接口请求函数模块

*/
import ajax from './ajax.js'
// 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

// 获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category');

// 根据经纬度获取商铺列表
export const reqShopList = (longitude,latitude) => ajax('/shops',{longitude,latitude})

