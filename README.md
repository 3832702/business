项目运行

git clone https://github.com/3832702/business.git

cd business

npm install

npm start


接口逐步对接中....



关于目录结构



├───fetch  // axios
├───pages // 页面
│   ├───cart // 购物车
│   ├───community // 社区
│   │   ├───topic // 更多话题
│   │   ├───topic-list // 每个话题的的列表
│   │   ├───user // 点击他人用户名显示的个人中心
│   │   └───vegetable // 菜谱分类
│   ├───cooking // 帖子详情
│   │   └───comment // 全部评论
│   ├───home // 首页
│   │   ├───boutique  // 精品菜单
│   │   ├───friends // 好友状态
│   │   ├───newest // 今日最新
│   │   └───video // 视频专区
│   ├───login // 登陆组件
│   ├───market // 集市
│   │   ├───column // 集市入口页展示
│   │   ├───details // 商品列表
│   │   ├───place-order // 提交订单
│   │   └───shop // 商家店铺
│   ├───menu // 首页的分类
│   │   ├───encyclopedias // 百度百科
│   │   └───sub  // 子分类
│   ├───my // 个人中心
│   │   ├───collection // 我的收藏
│   │   ├───diet // 我的食谱
│   │   ├───order // 我的订单
│   │   └───personal // 我的设置
│   ├───news // 消息
│   └───search // 搜索
├───public // 一些公共的方法
│   ├───common // 功能组件
│   ├───component 
│   ├───css // 功能css
│   └───js // 共有的js方法
├───router // 路由配置
├───service // 集中管理请求数据的方法
├───static // 静态资源
│   └───image
└───store // 状态管理
