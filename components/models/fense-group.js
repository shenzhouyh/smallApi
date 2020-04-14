/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2020-04-09 00:19
 @描述：
 */
class fenseGroup {
    spu;
    skuList = [];
    specs = [];

    constructor(spu) {
        this.spu = spu;
        this.skuList = spu.sku_list;

    }
}

export {
    fenseGroup
}