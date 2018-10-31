import { fetch, post } from '../fetch/index.js'

/**
 * [login 登陆]
 * @param  {Object} data [上传参数]
 * @param {String} { phone }   [手机号]
 * @param {String} {password}  [密码]
 * @return {[Promise]}      [promise决议]
 */
export const login = function (data = {}) {
	return post('/api/login', data)
}


/**
 * [my 个人中心]
 * @param  {Object} data [提交参数]
 * @param  {String}  user_id  [当前用户id]
 * @return {[type]}      [description]
 */
export const my = function(data = {}) {
	return post('/api/my', data)
}

/**
 * [market 获取集市首页数据]
 * @return {[type]} [description]
 */
export const market = function(params){
	return fetch('/api/market', params)
}

/**
 * [home 获取首页数据]
 * @return {[type]} [description]
 */
export const home = function(params) {
	return fetch('/api/home', params)
}

/**
 * [community 获取社区首页数据]
 * @param  {[Object]} data [要传的参数]
 * @param {[Number]} data {type} [为0时代表分享，为1时代表关注]
 * @return {[type]}      [description]
 */
export const community = function (data = {}) {
	return post('/api/community', data)
}


/**
 * [follow 点击关注]
 * @param  {[Object]} data [要传的参数]
 * @param {[user_id]} data [自己的标识]
 * @param {[follow_id]} data [要关注用户的标识]
 * @return {[type]}      [description]
 */
export const follow = function (data = {}) {
	return post('/api/follow', data)
}

/**
 * [collection 点击收藏]
 * @param  {[Object]} data [要传的参数]
 * @param {[user_id]} data [自己的标识]
 * @param {[collection_id]} data [要收藏帖子的id]
 */
export const collection = function (data = {}) {
	return post('/api/collection', data)
}

/**
 * [myCollection 我的收藏列表]
 * @param  {[Object]} data [user_id]
 * @return {[type]}      [description]
 */
export const myCollection = function (data = {}) {
	return post('/api/my_collection', data)
}

/**
 * [myDiet 我的菜谱]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const myDiet = function (data = {}) {
	return post('/api/my_diet', data)
}


/**
 * [article 文章详情]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const article = function(data = {}) {
	return post('/api/article', data)
}

/**
 * [commodity 获取商品详情]
 * @param  {[Object]} data [description]
 * @param  {[Stirng]} user_id [自身标识]
 * @param  {[String]} commodity_id [产品id]
 * @return {[type]}      [description]
 */
export const commodity = function(data = {}) {
	return post('/api/commodity', data);
}

/**
 * [addCart 加入购物车]
 * @param {[Object]} data [description]
 * @param {[String]} user_id [user_id]
 * @param {[Number]} num [产品数量]
 * @param {[String]} commodity_id  [产品id]
 */
export const addCart = function(data = {}) {
	return post('/api/addcart', data)
}