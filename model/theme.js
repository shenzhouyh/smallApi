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
    themes = [];

//批量获取主题
    async getThemes() {
        const names = `${theme.locationA},${theme.locationE},${theme.locationF},${theme.locationG}`
        this.themes = await http.request({
            url: "theme/by/names",
            data: {
                names
            }
        })
    }

    async getHomeThemeLocalationA() {
        return await this.themes.find(t => t.name === theme.locationA);
    }

    async getHomeThemeLocalationE() {
        return await this.themes.find(t => t.name === theme.locationE);
    }

    //
}

export {
    theme
}