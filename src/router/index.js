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
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/newest',
			name: 'Newest',
			component: Newest
		},
		{
			path: '/boutique',
			name: 'Boutique',
			component: Boutique
		},
		{
			path: '/video',
			name: 'Video',
			component: Video
		},
		{
			path: '/friends',
			name: 'Friends',
			component: Friends
		},
		{
			path: '/market',
			name: 'Market',
			component: Market
		},
		{
			path: '/community',
			component: Community,
			children: [
				{
					path: '',
					name: 'Community',
					meta: {
						index: 0
					},
					component: Share
				},
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
		{
			path: '/markettwo',
			name: 'MarketTwo',
			component: MarketTwo
		},
		{
			path: '/marketdetails',
			name: 'MarketDetails',
			component: MarketDetails
		},
		{
			path: '/marketshop',
			name: 'MarketShop',
			component: MarketShop
		},
		{
			path: '/orderdetails',
			name: 'OrderDetails',
			component: OrderDetails
		},
		{
			path: '/cart',
			name: 'Cart',
			component: Cart
		},
		{
			path: '/user',
			component: UserCenter,
			children: [
				{
					path: '',
					name: 'User',
					component: UserMenu
				},
				{
					path: 'diary',
					name: 'Diary',
					component: UserDiary
				},
				{
					path: 'works',
					name: 'Works',
					component: UserWorks
				}
			]
		},
		{
			path: '/topic',
			name: 'Topic',
			component: Topic
		},
		{
			path: '/topiclist',
			name: 'TopicList',
			component: TopicList
		},
		{
			path: '/vegetable',
			name: 'Vegetable',
			component: Vegetable
		},
		{
			path: '/personal',
			name: 'Personal',
			component: Personal
		},
		{
			path: '/menu',
			name: 'Menu',
			component: Menu
		},
		{
			path: '/menu/sub',
			name: 'SubMenu',
			component: MenuSub
		},
		{
			path: '/encyclopedias',
			name: 'Encyclopedias',
			component: Encyclopedias
		},
		{
			path: '/cooking',
			name: 'Cooking',
			component: Cooking
		},
		{
			path: '/comment',
			name: 'Comment',
			component: Comment
		},
		{
			path: '/news',
			name: 'News',
			component:News
		},
		{
			path: '/search',
			component: Search,
			children: [
				{
					path: '',
					name: 'Search',
					component: SearchFood
				},
				{
					path: 'goods',
					name: 'SearchGoods',
					component: SearchGoods
				},
				{
					path: 'user',
					name: 'SearchUser',
					component: SearchUser
				}
			]
		},
		{
			path: '/login',
			component: Login,
			children: [
				{
					path: '',
					name: 'Login',
					component: Landing
				},
				{
					path: '/forget',
					name: 'Forget',
					component: Forget
				},
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
				is_login: true
			},
			component: My,
			children: [
				{
					path: 'collection',
					name: 'collection',
					component: Collection
				}
			]
		},
		// 我的收藏
		{
			path: '/collection',
			name: 'Collection',
			component: Collection
		},
		// 我的菜谱
		{
			path: '/diet',
			name: 'Diet',
			component: Diet
		},
		// 我的订单
		{
			path: '/orderlist',
			component: Order,
			children: [
				{
					path: '',
					name: 'OrderList',
					component: State_0
				},
				{
					path: 'unpaid',
					name: 'Unpaid',
					component: State_1
				},
				{
					path: 'pack',
					name: 'Pack',
					component: State_2
				},
				{
					path: 'completed',
					name: 'Completed',
					component:State_3
				}
			]
		}
	]
}) 


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

export default config