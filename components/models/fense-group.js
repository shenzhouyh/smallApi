/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2020-04-09 00:19
 @描述：
 */
import {Fence} from "./fence";
import {Matrix} from "./Matrix";

class FenceGroup {
    spu;
    skuList = [];
    specs = [];

    constructor(spu) {
        this.spu = spu;
        this.skuList = spu.sku_list;
    }

    /*initFence() {
        console.log("spu", this.spu);
        console.log("skuList", this.skuList);
        const matrix = this._createMatrix(this.skuList);
        const fences = [];
        let temp = -1;
        //通过遍历达到行列转换
        matrix.forEach((element, i, j) => {
            if (temp !== j) {
                //创建一个新的fence
                temp = j;
                let fence = this._createFence();
                fences[j] = fence;
            }
            fences[j].pushValueTitle(element.value)
        });
        console.log(fences);
    }*/

    initFenceByTranspose() {
        const matrix = this._createMatrix(this.skuList);
        const fences = [];
        let AT = matrix.transpose();
        console.log("转置之后的值", AT)
        AT.forEach(row => {
            let fence = new Fence(row);
            fence.init();
            fences.push(fence);
        })

        console.log("使用转置方式获取的fence值", fences);
    }

    _createFence() {
        return new Fence();
    }

    //使用矩阵旋转或转置的思想获取规格值，使用二维数组模拟矩阵
    _createMatrix(skuList) {
        const m = [];
        skuList.forEach(sku => {
            m.push(sku.specs);
        });
        console.log("-*-*-*-" + m)
        return new Matrix(m);

    }
}

export {
    FenceGroup
}