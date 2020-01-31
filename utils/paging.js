/**
 @作者: yinhao
 @邮箱:286817442@qq.com
 @创建时间:2020-01-31 10:46
 @描述：分页工具类
 */
import {http} from "./http";

class Paging {
    //属性
    start
    count
    locker = false
    req
    url
    moreData
    accumulator = []

    /**
     * 构造方法,用于初始化数据
     * @param url 请求数据的地址
     * @param start 起始条数
     * @param count 获取的数据条数
     */
    constructor(req, start, count) {
        this.count = count
        this.start = start
        this.req = req
    }

    /**
     * 获取数据,每次分页请求的方法
     使用锁机制，防止多次请求
     */
    async getMoreData() {
        //getLocker,获取对象锁
        if (!this.moreData) {
            return
        }
        if (!this._getLocker()) {
            //无法获取对象锁
            return
        }

        //request,请求数据

        const data = await this._actualGetData();
        //释放对象锁
        this._releaseLocker()
        return data

    }

    async _actualGetData() {
        //接收处理完成之后的请求
        const req = this._getCurrentReq();
        let paging = await http.request(req)
        //请求失败
        if (!paging) {
            return null
        }
        if (paging.total === 0) {
            return {
                empty: true,
                items: [],
                moreData: false,
                accumulator: []
            }
        }
        //将moreData转换成全局变量
        this.moreData = this._moreData(paging.total_page, paging.page)
        //将起始值累加数量
        if (this.moreData) {
            this.start += count
        }
        //累加条目
        this._accumulator(paging.items)

        return {
            empty: false,
            items: paging.items,
            moreData: this.moreData,
            accumulator: this.accumulator
        }


        return {
            empty: boolean,
            items: [],
            moreData: boolean,
            accumulator: []

        }
    }

    _accumulator(items) {
        this.accumulator = this.accumulator.concat(items)
    }

    /**
     * 判断是否有更多数据
     * @param totalPage 总页码
     * @param pageNum 当前页码
     * @private
     */
    _moreData(totalPage, pageNum) {
        return pageNum < totalPage - 1

    }

    //v1/spu/latest?start=0&count=10
    //对原始的req进行处理
    _getCurrentReq() {
        //接收处理最原始的url
        //对比参考this.req.url,避免重复处理参数
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        //分两种情况，有？和没有？号
        if (url.indexOf('?') !== -1) {
            url += '&' + params
        } else {
            url += '?' + params
        }
        this.req.url = url
        return this.req


    }

    /**
     * 获取对象锁
     * @returns {boolean}
     */
    _getLocker() {
        if (this.locker) {
            return false;
        }
        this.locker = true;
        return true;
    }

    /**
     * 释放对象锁
     */
    _releaseLocker() {
        this.locker = false;
    }

}

export {
    Paging
}