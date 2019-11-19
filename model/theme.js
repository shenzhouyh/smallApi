/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2019-11-18 00:03
 @描述：
 */

import {http} from "../utils/http";

class theme {
    //加入回调函数参数
    static async getHomeThemeLocalationA(callback) {
        return await http.request({
            url: "theme/by/names",
            data: {
                names: "t-1"
            },
            callback: data => {
                callback(data)
            }
        })

    }
}

export {
    theme
}