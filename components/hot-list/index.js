// components/hot-list/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        banner: Object
    },
    /**
     * 使用监听器（新式）
     */
    observers: {
        //声明监听的对象，
        'banner': function (banner) {
            if (!banner) {
                return
            }
            if (banner.items.length === 0) {
                return
            }
            const left = banner.items.find(i => i.name === 'left');
            const rightTop = banner.items.find(i => i.name === 'right-top');
            const rightBottom = banner.items.find(i => i.name === 'right-bottom');
            this.setData({
                left,
                rightTop,
                rightBottom
            })

        }

    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {}
})
