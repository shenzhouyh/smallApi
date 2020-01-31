/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2020-01-31 12:36
 @描述：
 */

import {Paging} from "../utils/paging";

class SpuPaging {
    static getLateast() {
        return new Paging({
            url: `spu/latest`,
        }, 3)
    }
}

export {SpuPaging}