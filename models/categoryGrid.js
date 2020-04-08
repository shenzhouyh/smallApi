/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2019-11-22 01:05
 @描述：
 */
import {http} from "../utils/http";

class CategoryGrid {

    static async getHomeLocationC() {
        return await http.request({
            url: "category/grid/all"
        })

    }
}

export {CategoryGrid}