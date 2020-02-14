
/*
    包含多个基于state的getter计算属性的对象

*/

export default {
    // 购物车总数量
    totalCount(state){
        // 循环购物车中的商品，初始传入0，进行累加最终返回购物车总数量
        return state.cartFoods.reduce((total,food)=>total + food.count,0)
    },
    // 购物车总价格
    totalPrice(state){
        // 循环遍历购物车的商品，初始传入0，0就是形参total,每次循环都在原来基础上进行累加，最后返回总价格
        return state.cartFoods.reduce((total,food)=>{
            // console.log(total)
            // console.log(food.count)
            // console.log(food.price)
            // console.log(total + food.count * food.price)
            return total + food.count * food.price
        },0)

    },
    positiveSize(state){
        return state.ratings.reduce((total,rating)=>total + (rating.rateType == 0 ? 1 : 0),0)

    }
}