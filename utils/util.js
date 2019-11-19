/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2019-11-19 23:37
 @描述：
 */


//promisic的用法，传入内置函数，返回promise，使用了代理模式处理了回调函数
const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res);
                },
                fail: (error) => {
                    reject(error);
                }
            });
            func(args);
        });
    };
};
export {promisic}