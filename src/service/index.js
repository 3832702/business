import { fetch, post } from '../fetch/index.js'

/**
 * [login 登陆]
 * @param  {Object} data [上传参数]
 * @param {String} { phone }   [手机号]
 * @param {String} {password}  [密码]
 * @return {[Promise]}      [promise决议]
 */
export const login = function (data = {}) {
	return new Promise((resolve, reject) => {
		post('/api/login', data)
		.then(res => {
			resolve(res)
		})
		.catch(err => {
			reject(err)
		})
	})
}


/**
 * [my 个人中心]
 * @param  {Object} data [提交参数]
 * @param  {String}  user_id  [当前用户id]
 * @return {[type]}      [description]
 */
export const my = function(data = {}) {
	return new Promise((resolve, reject) => {
		post('/api/my', data)
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}

/**
 * [market 获取集市首页数据]
 * @return {[type]} [description]
 */
export const market = function(){
	return new Promise((resolve, reject) => {
		fetch('/api/market', {})
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}

/**
 * [home 获取首页数据]
 * @return {[type]} [description]
 */
export const home = function() {
	return new Promise((resolve, reject) => {
		fetch('/api/home')
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

/**
 * [community 获取社区首页数据]
 * @param  {[Object]} data [要传的参数]
 * @param {[Number]} data {type} [为0时代表分享，为1时代表关注]
 * @return {[type]}      [description]
 */
export const community = function (data) {
	return new Promise((resolve, reject) => {
		post('/api/community', data)
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}


/**
 * [follow 点击关注]
 * @param  {[Object]} data [要传的参数]
 * @param {[user_id]} data [自己的标识]
 * @param {[follow_id]} data [要关注用户的标识]
 * @return {[type]}      [description]
 */
export const follow = function (data) {
	return new Promise((resolve, reject) => {
		post('/api/follow', data)
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

/**
 * [collection 点击收藏]
 * @param  {[Object]} data [要传的参数]
 * @param {[user_id]} data [自己的标识]
 * @param {[follow_id]} data [要关注用户的标识]
 */
export const collection = function (data) {
	return new Promise((resolve, reject) => {
		post('/api/collection', data)
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

/**
 * [myCollection 我的收藏列表]
 * @param  {[Object]} data [user_id]
 * @return {[type]}      [description]
 */
export const myCollection = function (data) {
	return new Promise((resolve, reject) => {
		post('/api/my_collection', data)
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

/**
 * [myDiet 我的菜谱]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const myDiet = function (data) {
	return new Promise((resolve, reject) => {
		post('/api/my_diet', data)
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}
