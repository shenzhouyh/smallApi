/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2020-04-14 23:55
 @描述：
 */
//矩阵类
class Matrix {
    m;

//使用二维数组作为构造函数参数
    constructor(m) {
        this.m = m;
    }

    get rowsNum() {
        return this.m.length;
    }

    get colsNum() {
        return this.m[0].length
    }

    /**
     * 生成器写法，使用回调函数接收指定的行列值
     * @param cb
     */
    forEach(cb) {
        for (let j = 0; j < this.colsNum; j++) {
            for (let i = 0; i < this.rowsNum; i++) {
                const element = this.m[i][j]
                cb(element, i, j);
            }
        }
    }
}

export {
    Matrix
}