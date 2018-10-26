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