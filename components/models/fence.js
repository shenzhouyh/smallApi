/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2020-04-09 00:19
 @描述：
 */

class Fence {
    valueTitles = [];
    specs = [];

    constructor(specs) {
        this.specs = specs;
    }

//初始化
    init() {
        this.specs.forEach(s => {
            this.pushValueTitle(s.value);
        })
    }

    pushValueTitle(title) {
        this.valueTitles.push(title);
    }

}

export {
    Fence
}