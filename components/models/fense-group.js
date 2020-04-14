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

    initFense(spu) {
        const matrix = this._createMatrix(spu);
        matrix.forEach()
        {
            
        }

    }

    //使用矩阵旋转或转置的思想获取规格值，使用二维数组模拟矩阵
    _createMatrix(spu) {
        const m = [];
        spu.skuList.forEach(sku => {
            m.push(sku.specs);
        });
        return new Matrix(m);

    }
}

export {
    fenseGroup
}