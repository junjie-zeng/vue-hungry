/*
    ajax请求函数模块
    返回值：promise 异步返回数据
*/
import axios from 'axios'
export default function ajax(url,data = {},type = 'GET'){
    return new Promise((resolve,reject)=>{
        // 执行异步ajax请求
        let promise;
        if(type === 'GET'){
            // url参数拼接
            let dataStr = '';
            Object.keys(data).forEach(key=>{
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !=''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr

            }
            // get
            promise = axios.get(url);
        }else{
            // post
            promise = axios.post(url,data)
        }
        // axios 返回的是一个promise对象
        promise.then(res=>{
            // 成功了调用 resolve
            resolve(res.data)
        }).catch(err=>{
            // 失败调用reject
            reject(err)
        })
    })
    

}