import {
	RECORD_USERINFO,
	CHANGE_BACK,
	CHANGE_LOADING,
	CHANGE_POPUP,
	RECORD_COMMODITY,
	RECORD_ADDRESS
} from './mutation-type.js'


import { setStore, getStore } from '../public/js/util.js' 

export default {
	// 记录信息
	[RECORD_USERINFO](state, info) {
		state.userInfo = info;
		setStore('user_id', info.user_id)
	},

	// 监控浏览器前进后退以及back
	[CHANGE_BACK](state, status) {
		state.is_back = status;
	},

	// 是否正在加载
	[CHANGE_LOADING](state, status) {
		state.loading = status
	},

	// 是否显示弹窗
	[CHANGE_POPUP](state, status) {
		state.popup = status
	},

	// 记录商品详情
	[RECORD_COMMODITY](state, data) {
		state.commodity = data
	},

	// 记录收货地址
	[RECORD_ADDRESS](state, data) {
		state.address = data
	}
}