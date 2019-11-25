/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2019-11-18 00:03
 @描述：
 */

import {http} from "../utils/http";

class theme {
    static locationA = 't-1';
    static locationE = 't-2';
    static locationF = 't-3';
    static locationG = 't-4';

    static async getThemes() {
        const names = `${theme.locationA},${theme.locationE},${theme.locationF},${theme.locationG}`
        return await http.request({
            url: "theme/by/names",
            data: {
                names
            }
        })
    }

    //加入回调函数参数
    static async getHomeThemeLocalationA() {
        return await http.request({
            url: "theme/by/names",
            data: {
                names: theme.locationA
            }
        })
    }

    //
}

export {
    theme
}