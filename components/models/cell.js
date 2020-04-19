/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2020-04-17 00:00
 @描述：
 */

class Cell {
    //规格值的名称
    title;
    //规格值的ID
    id;

    constructor(specs) {
        this.title = specs.value;
        this.id = specs.value_id;
    }
}

export {
    Cell
}