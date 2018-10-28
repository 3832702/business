import Vue from 'vue'
import VueRouter from 'vue-router'
import { getStore } from '../public/js/util.js'

Vue.use(VueRouter)

import Home from '../pages/home/index.vue'
import Market from '../pages/market/index.vue'
import My from '../pages/my/index.vue'
import Community from '../pages/community/index.vue'


// 我的设置
import Personal from '../pages/my/personal/index.vue'

//我的收藏
import Collection from '../pages/my/collection/index.vue'

// 我的食谱
import Diet from '../pages/my/diet/index.vue'

// 我的订单
import Order from '../pages/my/order/index.vue'

// 我的订单二级路由
import State_0 from '../pages/my/order/state-all.vue'
import State_1 from '../pages/my/order/state-1.vue'
import State_2 from '../pages/my/order/state-2.vue'
import State_3 from '../pages/my/order/state-3.vue'


// 登陆相关
import Login from '../pages/login/index.vue'

import Forget from '../pages/login/forget.vue'
import Register from '../pages/login/register.vue'
import Landing from '../pages/login/login.vue'



// 今日最新
import Newest from '../pages/home/newest/index.vue'

// 精品菜单
import Boutique from '../pages/home/boutique/index.vue'

// 视频专区
import Video from '../pages/home/video/index.vue'

// 好友动态
import Friends from '../pages/home/friends/index.vue'



// 全部分类
import Menu from '../pages/menu/index.vue'

// 全部分类下属子分类
import MenuSub from '../pages/menu/sub/index.vue'

// 百科
import Encyclopedias from '../pages/menu/encyclopedias/index.vue'




// 帖子详情页
import Cooking from '../pages/cooking/index.vue'

// 评论页面
import Comment from '../pages/cooking/comment/index.vue'



// 消息页
import News from '../pages/news/index.vue'


// 集市 购物车
import Cart from '../pages/cart/index.vue'

// 搜索页
import Search from '../pages/search/index.vue'

// 搜索页二级导航
import SearchFood from '../pages/search/food.vue'
import SearchGoods from '../pages/search/goods.vue'
import SearchUser from '../pages/search/user.vue'




// 集市二级页
import MarketTwo from '../pages/market/column/index.vue'

// 集市 商品详情
import MarketDetails from '../pages/market/details/index.vue'

// 集市  商家页
import MarketShop from '../pages/market/shop/index.vue'

// 集市  订单详情
import OrderDetails from '../pages/market/place-order/index.vue'



// 社区首页组件
import Share from '../pages/community/share.vue'
import Follow from '../pages/community/follow.vue'

// 社区组件 个人中心
import UserCenter from '../pages/community/user/index.vue'

// 个人中心二级路由
import UserWorks from '../pages/community/user/user-works.vue'
import UserMenu from '../pages/community/user/user-menu.vue'
import UserDiary from '../pages/community/user/user-diary.vue'

// 社区组件  更多话题
import Topic from '../pages/community/topic/index.vue'

// 社区组件  菜谱分类
import Vegetable from '../pages/community/vegetable/index.vue'

// 社区组件  话题列表
import TopicList from '../pages/community/topic-list/index.vue'



const config = new VueRouter({
	//mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} 

		return {x: 0, y: 0}
	},
	routes: [
		// 主页
		{
			path: '/',  
			name: 'Home',
			component: Home,
			meta: {
				is_back: false,
				is_keep: true
			}
		},
		// 首页 今日最新
		{
			path: '/newest',  
			name: 'Newest',
			component: Newest
		},
		// 首页 精品菜单
		{
			path: '/boutique',
			name: 'Boutique',
			component: Boutique
		},
		// 首页 视频专区
		{
			path: '/video',
			name: 'Video',
			component: Video
		},
		// 首页 好友动态
		{
			path: '/friends',
			name: 'Friends',
			component: Friends
		},

		// 首页 全部分类
		{
			path: '/menu',
			name: 'Menu',
			component: Menu
		},
		// 首页 分类子栏目
		{
			path: '/menu/sub',
			name: 'SubMenu',
			component: MenuSub
		},
		// 分类 百度百科
		{
			path: '/encyclopedias',
			name: 'Encyclopedias',
			component: Encyclopedias
		},

		// 集市
		{
			path: '/market',
			name: 'Market',
			component: Market,
			meta: {
				is_keep: true, // 是否需要缓存
				is_back: false // 是否通过回退按钮点击
			}
		},
		// 集市栏目页
		{
			path: '/markettwo',
			name: 'MarketTwo',
			component: MarketTwo
		},
		// 商品详情页
		{
			path: '/marketdetails/:id',
			name: 'marketDetails',
			component: MarketDetails
		},
		// 店铺页
		{
			path: '/marketshop',
			name: 'MarketShop',
			component: MarketShop
		},
		// 提交订单
		{
			path: '/orderdetails',
			name: 'OrderDetails',
			component: OrderDetails
		},
		// 购物车
		{
			path: '/cart',
			name: 'Cart',
			component: Cart
		},
		// 社区
		{
			path: '/community',
			component: Community,
			children: [
				// 社区分享列表
				{
					path: '',
					name: 'Community',
					meta: {
						index: 0
					},
					component: Share
				},
				// 社区关注列表
				{
					path: 'follow',
					meta: {
						index: 1,
						baseName:'Community'
					},
					component: Follow
				}
			]
		},
		// 社区  用户页
		{
			path: '/user',
			component: UserCenter,
			children: [
				// 用户菜谱
				{
					path: '',
					name: 'User',
					component: UserMenu
				},
				// 用户帖子
				{
					path: 'diary',
					name: 'Diary',
					component: UserDiary
				},
				// 用户作品
				{
					path: 'works',
					name: 'Works',
					component: UserWorks
				}
			]
		},
		// 社区 话题
		{
			path: '/topic',
			name: 'Topic',
			component: Topic
		},
		// 社区 话题列表
		{
			path: '/topiclist',
			name: 'TopicList',
			component: TopicList
		},
		// 社区  分类
		{
			path: '/vegetable',
			name: 'Vegetable',
			component: Vegetable
		},

		// 帖子详情
		{
			path: '/cooking',
			name: 'Cooking',
			component: Cooking
		},

		// 全部评论
		{
			path: '/comment',
			name: 'Comment',
			component: Comment
		},

		// 我的消息
		{
			path: '/news',
			name: 'News',
			component:News
		},

		// 搜索页
		{
			path: '/search',
			component: Search,
			children: [
				// 菜谱搜索
				{
					path: '',
					name: 'Search',
					component: SearchFood
				},

				// 商品搜索
				{
					path: 'goods',
					name: 'SearchGoods',
					component: SearchGoods
				},

				// 用户搜索
				{
					path: 'user',
					name: 'SearchUser',
					component: SearchUser
				}
			]
		},
		// 登陆页
		{
			path: '/login',
			component: Login,
			children: [
				// 登陆
				{
					path: '',
					name: 'Login',
					component: Landing
				},
				// 忘记密码
				{
					path: '/forget',
					name: 'Forget',
					component: Forget
				},
				// 注册
				{
					path: '/register',
					name: 'Register',
					component: Register
				}
			]
		},
		// 我的
		{
			path: '/my',
			name: 'my',
			meta: {
				is_login: true,
				is_keep: true, // 是否需要缓存
				is_back: false // 是否通过回退按钮点击
			},
			component: My
		},
		// 我的收藏
		{
			path: '/collection',
			meta: {
				is_login: true,
				is_keep: true, // 是否需要缓存
				is_back: false // 是否通过回退按钮点击
			},
			name: 'Collection',
			component: Collection
		},
		// 我的菜谱
		{
			path: '/diet',
			meta: {
				is_login: true,
				is_keep: true, // 是否需要缓存
				is_back: false, // 是否通过回退按钮点击
			},
			name: 'Diet',
			component: Diet
		},
		// 我的设置
		{
			path: '/personal',
			name: 'Personal',
			component: Personal
		},
		// 我的订单
		{
			path: '/orderlist',
			component: Order,
			children: [
				// 全部订单
				{
					path: '',
					name: 'OrderList',
					component: State_0
				},
				// 待付款
				{
					path: 'unpaid',
					name: 'Unpaid',
					component: State_1
				},
				// 待收货
				{
					path: 'pack',
					name: 'Pack',
					component: State_2
				},
				// 待评价
				{
					path: 'completed',
					name: 'Completed',
					component:State_3
				}
			]
		}
	]
}) 


// 路由全局钩子函数
// 处理问题 通过user_id判断是否登陆，如未登陆则跳转登陆组件，否则继续执行

config.beforeEach((to, from, next) => {
	if (to.matched.some(item => item.meta.is_login)) {

		if (getStore('user_id')) {
			next();
		} else {
			next(`/login?redirect=${to.name}`)
		}

	} else {
		next()
	}
})

// 路由全局钩子函数
// 处理问题， 结合vuex与vue-router来判断是否是通过回退按钮点击进来
// 使用popstate事件来监听浏览器的前进后退与back操作，如果触发此事件，则代表着是通过回退，在vuex中更改is_back为true
// 最后在afterEach中把当前的状态添加至路由的元信息(meta)中，最后初始化vuex中回退状态


config.afterEach((to, from) => {
	const { state, commit } = config.app.$store;
	to.meta.is_back = state.is_back; // 获取vuex中的is_back状态

	if (state.is_back !== null) { // 刷新后vuex中的is_back状态会被清空为null,需要单独处理
		commit('CHANGE_BACK', false);
	}
})

window.addEventListener("popstate", function(e) {

	const { state, commit } = config.app.$store;

	// 当监听到回退按钮时
	// is_back为null时，也就是已经刷新了当前页面并且清空了vuex,所以返回时应该重新请求数据

	if (state.is_back == null) { 
		config.app.$store.commit('CHANGE_BACK', false);
		return;
	}

	config.app.$store.commit('CHANGE_BACK', true)
}, false);


export default config