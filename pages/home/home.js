// pages/home/home.js
import {theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {CategoryGrid} from "../../model/categoryGrid";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad() {
        this.initAllData();
    },

    async initAllData() {
        const bannerB = await Banner.getHomeLocationB();
        const themeA = await theme.getHomeThemeLocalationA();
        const grid = await CategoryGrid.getCategoryGride();
        this.setData({
            themeA: themeA[0],
            bannerB: bannerB,
            grid: grid
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})