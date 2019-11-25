// pages/home/home.js
import {Banner} from "../../model/banner";
import {CategoryGrid} from "../../model/categoryGrid";
import {Activity} from "../../model/activity";
import {theme} from "../../model/theme";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activity: null,
        themeE: null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad() {
        this.initAllData();
    },

    async initAllData() {
        //const themeA = await theme.getHomeThemeLocalationA();
        const themes = theme.getThemes();
        /*for (let theme of themes) {
            if (theme.name === 't-1') {

            }
        }*/
        //find、filter、map、reduce、some
        const themeA = themes.find(t => t.name === 't-1');
        const themeE = themes.find(t => t.name === 't-2');
        const bannerB = await Banner.getHomeLocationB();
        const gridC = await CategoryGrid.getHomeLocationC();
        const activityD = await Activity.getHomeLocationD()
        this.setData({
            themeA,
            bannerB: bannerB,
            grid: gridC,
            activity: activityD,
            themeE
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