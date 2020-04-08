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
    static locationH = 't-5';
    themes = [];

//批量获取主题
    async getThemes() {
        const names = `${theme.locationA},${theme.locationE},${theme.locationF},${theme.locationG},${theme.locationH}`
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

    async getHomeThemeLocalationF() {
        return await this.themes.find(t => t.name === theme.locationF);
    }

    async getHomeThemeLocalationH() {
        return await this.themes.find(t => t.name === theme.locationH);
    }

    static getHomeLocationESpu() {
        return theme.getThemeSpuByName(theme.locationE);
    }

    //获取单个专题详情（带有spu）
    static getThemeSpuByName(name) {
        return http.request({
            url: `theme/name/${name}/with_spu`
        });
    }
}

export {
    theme
}