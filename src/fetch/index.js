import axios from 'axios'
import Vue from 'vue'
import store from '../store/index.js'

if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = 'https://easy-mock.com/mock/5b5fb5fd9f3d1d7bfe3a6fb8/example'
}

// request拦截器
axios.interceptors.request.use(
	config => {
		// 显示加载动画
		store.commit('CHANGE_LOADING', true)
		return config
	},
	error => {
		store.commit('CHANGE_LOADING', false)
		return Promise.reject(error)
	}
)

//response 拦截器
axios.interceptors.response.use(
  response => {
  	store.commit('CHANGE_LOADING', false)
    return response;
  },
  error => {
  	store.commit('CHANGE_LOADING', false)
    return Promise.reject(error)
  }
)


//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const fetch = function(url, params = {}) {
	return new Promise((resolve, reject) => {
		axios.get(url, { params })
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	})	
}


export const post = function(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.post(url, data)
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}
