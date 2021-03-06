// pages/home/home.js
import {Banner} from "../../models/banner";
import {CategoryGrid} from "../../models/categoryGrid";
import {Activity} from "../../models/activity";
import {theme} from "../../models/theme";
import {SpuPaging} from "../../models/spu-paging";

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
        themeESpu: null,
        bannerG: null,
        spuPaging: null,
        loadingType: "loading"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad() {
        this.initAllData();
        this.initBottomSpuList();
    },
    async initBottomSpuList() {
        const spuPaging = SpuPaging.getLateast();
        this.data.spuPaging = spuPaging;
        const data = await spuPaging.getMoreData();
        if (!data) {
            return
        }
        wx.lin.renderWaterFlow(data.items);
    },

    async initAllData() {
        //const themeA = await theme.getHomeThemeLocalationA();
        //const themes = await theme.getThemes();
        const themes = new theme();
        await themes.getThemes();
        const themeA = await themes.getHomeThemeLocalationA();
        const themeE = await themes.getHomeThemeLocalationE();

        let themeESpu = [];
        if (themeE.online) {
            const data = await theme.getHomeLocationESpu();
            if (data) {
                themeESpu = data.spu_list.slice(0, 8);
            }
        }
        const themeF = await themes.getHomeThemeLocalationF();
        const bannerB = await Banner.getHomeLocationB();
        const gridC = await CategoryGrid.getHomeLocationC();
        const activityD = await Activity.getHomeLocationD();
        const bannerG = await Banner.getHomeLocationG();
        const themeH = await themes.getHomeThemeLocalationH();

        this.setData({
            themeA: themeA,
            bannerB: bannerB,
            grid: gridC,
            activity: activityD,
            themeE,
            themeESpu,
            themeF,
            bannerG,
            themeH
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
    onReachBottom: async function () {
        const data = await this.data.spuPaging.getMoreData();
        if (!data) {
            return;
        }
        wx.lin.renderWaterFlow(data.items);
        if (!data.moreData) {

            this.setData({
                loadingType: "end"
            })
        }

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})