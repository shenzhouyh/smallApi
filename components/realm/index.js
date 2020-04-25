// components/realm/index.js
import {FenceGroup} from "../models/fence-group";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object
  },

  /**
   * 组件的初始数据
   */
  data: {},
  /**
   * 处理对象属性的两种方式：
   * 1、使用监听器
   * 2、在小程序组件的自定义生命周期中处理属性
   */
  observers: {
    'spu': function (spu) {
      if (!spu) {
        return;
      }
      console.log("********" + spu);
      const fenceGroup = new FenceGroup(spu);
      //初始化fenceGroup
      fenceGroup.initFenceByTranspose();
      this.bindFenceGroup(fenceGroup);
      console.log("fences初始化之后", fenceGroup.fences);
    },

  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindFenceGroup(fenceGroup) {
      this.setData({
        fences: fenceGroup.fences
      })
    }
  }
})

