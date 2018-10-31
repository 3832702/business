import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'


Vue.use(Vuex)

const state = {
	userInfo: {}, // 用户信息
	login: null, // 是否登陆
	is_back: null,
	loading: null, // 是否加载
	popup: false, // 是否显示弹窗
	commodity: {}, // 商品详情数据
	address: '', // 收货地址
}


export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state,
	mutations,
	actions,
	getters
})
