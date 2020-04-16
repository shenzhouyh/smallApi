/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2020-04-09 00:19
 @描述：
 */
import {Cell} from "./cell";

class Fence {
    valueTitles = [];
    specs = [];
    cells = [];

    constructor(specs) {
        this.specs = specs;
    }

//初始化
    init() {
        this.specs.forEach(s => {
            const tempCell = new Cell(s.value)
            this.cells.push(tempCell);
        })
    }

    pushValueTitle(title) {
        this.valueTitles.push(title);
    }

}

export {
    Fence
}