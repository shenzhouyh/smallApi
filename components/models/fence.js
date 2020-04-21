/**
 @作者: yinhao
 @邮箱: 286817442@qq.com
 @创建时间: 2020-04-09 00:19
 @描述:
 */
import {Cell} from "./cell";

class Fence {

    specs = [];
    cells = [];
    //规格名
    title;
    //规格名ID
    id;


    constructor(specs) {
        this.specs = specs;
        this.title = specs[0].key;
        this.id = specs[0].key_id;
    }

//初始化
    init() {
        this._initCell();
    }

//使用some对cell进行去重
    _initCell() {
        this.specs.forEach(s => {
            //判断cell是否存在，some和every的区别
            const exist = this.cells.some(c => {
                return c.id == s.value_id;
            });
            if (exist) {
                return;
            }
            const tempCell = new Cell(s);
            this.cells.push(tempCell);
        })
    }

    /* pushValueTitle(title) {
         this.title.push(title);
     }*/

}

export {
    Fence
}