// components/realm/index.js
import {FenceGroup} from "../models/fense-group";

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
      fenceGroup.initFence();
    }
  }
  /**
   * 组件的方法列表
   */

})
