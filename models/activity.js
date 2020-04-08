/**
 @作者: yinhao
 @邮箱: 286817442@qq.com
 @创建时间: 2019-11-22 23:37
 @描述：
 */
import {http} from "../utils/http";

class Activity {
    static async getHomeLocationD() {
        return await http.request({
            url: `activity/name/a-2`
        })
    }
}

export {Activity}