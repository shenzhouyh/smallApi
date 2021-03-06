## 学习记录
>本文档主要记录本次教程的所有学习过程，包括知识点的记录，总结，感悟等。

### 第一天
- npm的安装和使用
    - 安装nodeJS，使用node -v 以及 npm -v 查询版本
    - 初始化npm，切换到小程序的根目录，使用npm init初始化项目，生成package.json文件
    - 安装lin-ui，使用npm i 或者 npm install，在package已经指明了依赖（网速慢的话，可以切换到淘宝源）
- semver语法规则简介
    例如：依赖组件的版本号为：0.6.0（大版本.小版本.补丁版本）
    - ~0.6.0：会自动调用0.6.X的最高补丁版本
    - ^0.6.0: 会自动调用0.X.X的最高版本
    - latest：会自动调用最高版本
    > semver 语法比较丰富，后续可以深入理解
- Grid 构建六宫格
    * 创建自定义组件
        + 数据请求地址最好由创建方（调用方）指定
        + 组件内的样式需要进行组件隔离
    * 采用grid组件
    
    
### 第二天
- 组件的意义
  - 样式、骨架、业务逻辑/行为，进行封装
  - 灵活性
    + 使用内部样式
    + slot插槽
- 组件灵活性和易用性的选择
    + 使用默认值
- 代金券简介
    + 代金券类别（满减、折扣、全品类、指定类、组合类）
    + 前端核算

### 第三天
- 更改小程序背景色
    + 方式一：在view标签上面添加样式
        * 缺点：需要每个页面进行背景色设置
        > 解决图片展示自动带下边距的方法：display:flex;<br>
        > 未设置背景色，则默认为透明
    + 方式二：在page元素上面添加样式
        * 优点：全局设置背景色
        
    >小程序官网文档中.json文件中的backgroundColor属性并不是小程序背景色，二十小程序窗口背景色（真机中下拉滑动的部分）
    
- 页面http请求的方式
    - 方式
        - 1、单个数据，单个请求
        - 2、所有数据，单个请求
        - 3、有选择的合并http请求
    - 评估维度
        - 1、http请求数量
        - 2、数据库查询次数
        - 3、接口的灵活性以及可维护性，颗粒度比较小
    - 合并策略：减少数据库的查询为主（考虑到服务器的性能）
    > IO 密集型，web应用 <br/>
    > CPU 密集型，视频解析等
 - 函数式变成简介
    - 常用的函数
        - filter、find、map、reduce、some等
        - e·g：`const theme = themes.find(t=>t.name==='t-1')`,筛选名称为t-1的主题
### 第四天
 - 页面数据的缓存方法
    - 缓存（需要对缓存进行管理）
    - 全局app（全局参数可放在里面）
    - 当前页面的属性值（this.data.themes = themes）
    - 对象
 - 面向对象的思想
 
    类可以保存数据，但不能保存状态；对象是可以保存数据，也可以保存状态。`const t1 =new theme(); t1.a =1`
    
 - 改写getThemes()方法
 
    使用面向对象思想改写获取主题的方法，将多个主题获取之后放到对象中，对外提供获取主题的方法 
    
 - SPU和SKU概念(调研之后形成手记或教程， [商品的SPU和SKU](https://blog.csdn.net/shenzhou_yh/article/details/103461026) )
 
    SPU：Standard Product Unit 标准化产品单元
    SKU：Stock keeping Unit  库存量单位
    
 - 技术的输入和输出
    - 表达能力、逻辑思维能力、编程思维、学习编程知识、坚持写博客
### 第五天
 - 方法是否需要加上static属性
    * 区别一：静态方法可以通过类直接调用，而非静态方法必须通用实例对象调用
    * 区别二：需要保存对象状态的使用非静态方法，不需要保存对象状态的使用静态方法
 - await和async的使用场景
    * 当方法请求后跟着其他程序处理是，需要加上await进行等待处理；没有其他逻辑处理时，可以不使用await  
    * 强制方法返回一个promise时，需要加上async(可以将任何返回结果包装为一个promise)
 ### 第六天
 - 完成scroll-view组件的编写
 - 引入price组件
 
 组件样式和外部类样式并没有明确的优先级关系，所以在强烈需要使用外部类样式时，最好加上！important

### 第六天
- scroll-view组件
    * 开启scroll-view对于flex布局的支持——enable-flex
    * 开启scroll-view的横向滑动——scroll-x
- css编写原则
    * 多尝试，从尝试中寻求最佳方案
    * 尽量不要给容器设置固定的宽高（width：100%容易产生横向滚动条，可以不指定宽度，或者和box-sizing: border-box;一起使用）
    * 从代码中抽象出原则，便于后面的最佳实践
- wxs(javascript)
    小程序的逻辑层和视图层是分离的，wxs是专门用于wxml页面的，主要在视图层调用函数
### 第七天
- WXS的使用
    - 引入：`<wxs src="../../miniprogram_npm/lin-ui/filter/string.wxs" module="s"></wxs>`,指定引入的地址以及模块别名
    - 使用：`<text class="spu-text">{{item.title.length>8?s.substring(item.title,0,7)+"...":item.title}}</text>`，调用wxs文件中的字符串截取方法
- 原生组件和自定义组件的边距问题（image组件和s-spu-scroll组件的边距问题）

    1、设置image组件的下边距，可以生效<br>
    2、设置s-spu-scroll的上边距，不生效，尽量不要直接更改自定义组件的内部样式，可以采用外部样式类进行指定修改<br>
    3、可以使用原生组件view进行包裹，然后对整个view设置上边距<br>
### 第八天
- hot-list组件
    - 组件创建步骤：<br>
        - 新建组件component
        - 调用方的json文件中引入组件，并使用别名，如"s-hot-list": "/components/hot-list/index"
        - 调用方的页面使用组件，并进行数据绑定，如<s-hot-list banner="{{bannerG}}"><s-hot-list>
        - 构建组件内容，搭建骨架<br>
- 监听器        
    - 新式监听器的使用:
        - 新式监听器的声明：observers:{}
        - 监听对象的绑定：observers:{'banner':function(banner){}}'',监听banner对象
- 点击态(页面组件的点击动画)
    - view组件自带对点击态的支持，参考 [微信开发文档](https://developers.weixin.qq.com/miniprogram/dev/component/view.html)
    `<view hover-class="rect-hover" hover-stay-time="300"></view>`
    hover-class：引用自定义组件的样式，hover-stay-time：点击态的保留时间
    - 使用@import关键字导入外部样式，因为点击态需要进行复用，所以最好保存在一个全局文件中中，当使用的时候直接进行引入就行。
    例如：@import "../../wxss/wxss.wxss"(指明引入的路径)
    > 既然是全局使用，为什么不放到app.wxss文件中呢？
    因为小程序的组件具备封闭性，app.wxss中的样式只能在page中使用,而不能在自定义组件中调用
### 第九天
- 抽象节点
    自定义组件中的节点不是由自定义组件本身决定的，而是由调用方决定的，这是可以将这个节点声明为抽象节点
    详情参考， [抽象节点](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/generics.html)    
- 前端分页考虑的情况（分页封装的必要性）
    - 1、没有数据
    - 2、最后一页，没有更多数据
    - 3、数据累加，请求按照分页进行请求，1-20,21-40，但是页面的setData数据渲染则是累加进行渲染，1-20,1-40等
    - 4、非分页数据，a:正在加载loading，b：空
        分页数据，a:正在加载，b：加载完成，c:没有更多数据
    - 5、上滑加载数据，避免用户的重复请求，后台可以使用redis缓存，数据锁等
       按钮 button防抖，截流。禁用、倒计时、模态（页面大图层）、loading等       
- 编程tips：多用return提前结束语句，少用else语句
### 第十天
- 使用瀑布流组件
  - 价格组件
  - 标签组件
  - 原价和折扣价的关系，以及如何合理的展示
- 使用抽象节点
### 第十一天
- 使用wxs文件处理主价和划线价关系
  - 主价逻辑：当折扣价存在时，主价为折扣价，否则主价为现价
  - 划线价逻辑：当折扣价存在时，现价为划线价，否则不展示划线价
  - wx:if判断折扣价是否为空
  - wxs文件引用，`<wxs src="../../wxs/price.wxs" module="p"></wxs>`
  - wxs文件使用：
  `<l-price value="{{p.mainPrice(data.price,data.discount_price)}}"></l-price>
        <l-price wx:if="{{data.discount_price?true:false}}"
                 deleted
                 value="{{p.slashedPrice(data.price,data.discount_price)}}"></l-price>`
- 瀑布流中动态的计算图片的宽高
  - 监听图片的加载完成动作，bindload="onImgLoad",在回调函数中获取图片的实际宽高
  - 保持图片不变形的要领：保持宽高比
  - 已知当前瀑布流的宽以及图片时间宽高，可以推算出瀑布流中的高度
  - 样式也可以采用数据绑定的方式进行传值
  `style="width={{w}}rpx;height={{h}}rpx"`
- 使用loadMore组件
  - 长页面的加载状态应该只有两种，加载中和没有更多数据
  - 加载中状态是常态，在没有更多数据这个状态之前，底部应该都是加载中的状态
  - 加载完成只是个中间状态，用于每次分页的请求，可以不作为状态考虑
### 第十二天
- 小程序页面跳转
  - 使用navigateTo函数
  - 事件触发和数据绑定
    `<image class="img" bind:tap="onImgLoad" data-pid="{{data.id}}" src="{{data.img}}"></image>`
  - 页面参数绑定的获取
    `const pid = event.currentTarget.dataset.pid;
      wx.navigateTo({
        url: `../../pages/detail?id=${pid}`
      })`
  - 复习SPU和SKU的概念
  - 项目中问题的思考需要加深，注重个人独立完成能力的培养
### 第十三天
- SKU的核心问题
  - 规格值的提取
    - 使用矩阵思想获取规格值，矩阵的转置和旋转（可以使用二维数组模拟矩阵）
  - 规格值的计算逻辑
    - 规格值的状态：可选、已选、不可选
    - 规格值的动态计算方式：实时根据选中的规格值重新计算所有的规格值的状态
  - 处理对象属性的两种方式
    - 使用监听器
    `
    //只有spu对象改变时，才会触发监听器处理对象信息
    observers:{
     'spu':function(spu){
      //处理对象
    }
    }
    `

    - 借助小程序组件的自定义生命周期函数处理
        `
        lifetimes{
            attach(){},
            ready(){}
    }
        `

### 第十四天
- SKU的选择

    SKU的选择即是选择确定一组单品，核心的问题就是规格的状态（可选、选中、禁用），本质就是需要确定禁用状态，可以采用如下两种算法进行实现：

    1、根据用的选择的组合提醒用户是否存在该组单品
    2、用户每选择一个规格，则自动提醒剩余可选规格。
    从用户体验上面来说，方式二是比较符合用户体验的，减少用户的尝试
- SKU核心算法剖析
    - 已存在的SKU路径（由后端返回）
    - 待确认的SKU路径（已选择的规格加上未选的规格，组成一组临时的待确认SKU的路径）
    - 比较待确认的SKU路径是否在已存在的SKU路径中，如果不在，则待选规格禁用，如果存在，则可选状态，以此类推
    - 正常情况下，初始值的所有规格值均可选择
    - 每选择一次就需要重新计算所有的待确认路径
    - 难点：在选择第二个规格值之后，不仅需要计算未计算的规格值路径，还需要重新计算已选的规格值路径

