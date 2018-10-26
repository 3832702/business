import axios from 'axios'
import Vue from 'vue'

if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = 'https://easy-mock.com/mock/5b5fb5fd9f3d1d7bfe3a6fb8/example'
}


//http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
  	
    return Promise.reject(err)
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
