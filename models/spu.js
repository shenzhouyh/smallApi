import {http} from "../utils/http";

/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2020-04-14 22:26
 @描述：
 */
class Spu {
    static getDetail(pid) {
        return http.request({
            url: `v1/spu/id/${pid}/detail`
        });
    }
}

export {
    Spu
}