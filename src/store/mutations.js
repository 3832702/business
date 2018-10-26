import {
	GET_USERINFO,
	RECORD_USERINFO
} from './mutation-type.js'


import { setStore, getStore } from '../public/js/util.js' 

export default {
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
	}
}