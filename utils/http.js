/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2019-11-18 00:25
 @描述：http请求封装
 */
class http{

    static request({url,data,callback,method="GET"}){
        wx.request({
            url:`${config.apiBaseUrl}${url}`,
            data,
            method,
            header:{
                appKey:"NIUg9jsXK3OjEXGi"
            },
            success(res) {
                callback(res.data)
            }
        })
    }
}

export {
    http
}
