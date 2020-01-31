/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2019-11-18 00:25
 @描述：http请求封装
 */
import {config} from "../config/config";
import {promisic} from "./util";

class http{
    static async request({url, data, method = "GET"}) {
       const res =  await promisic(wx.request)({
            url:`${config.apiBaseUrl}${url}`,
            data,
            method,
            header:{
              appKey:`${config.appKey}`
            }
        })
        return res.data
    }
    //异步调用的方式(三种)
    //callback
    //promise(需要非常熟悉)
    //async await==> 基于promise方式
        //函数内部出现await，则函数定义必须使用async声明修饰
        //await 后面函数需要有返回值
        //async修饰的方法，最终都会返回一个promise
}

export {
    http
}
