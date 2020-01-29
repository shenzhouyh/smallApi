/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2019-11-20 00:25
 @描述：
 */
import {http} from "../utils/http";

class Banner {
    static locationB = 'b-1';
    static locationG = 'b-2';

    static async getHomeLocationB() {
        return await http.request({
            url: `banner/name/${this.locationB}`
        })
    }

    static async getHomeLocationG() {
        return await http.request({
            url: `banner/name/${this.locationG}`
        })
    }
}

export {Banner}