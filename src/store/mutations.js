import {
	GET_USERINFO,
	RECORD_USERINFO,
	CHANGE_BACK
} from './mutation-type.js'


import { setStore, getStore } from '../public/js/util.js' 

export default {
	// 记录信息
	[RECORD_USERINFO](state, info) {
		state.userInfo = info;
		state.login = true;
		setStore('user_id', info.user_id)
	},
	// 获取用户信息
	[GET_USERINFO](state, info) {
		if (state.userInfo && (state.userInfo.username !== info.username)) return
		if (!state.login) return
		state.userInfo = !info.message ? {...info} : null
	},

	// 监控浏览器前进后退以及back
	[CHANGE_BACK](state, status) {
		state.is_back = status;
	}
}