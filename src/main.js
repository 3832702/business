import './public/css/reset.scss'

import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import store from './store/index.js'


Vue.config.productionTip = false;

const vm = new Vue({
	el: '#app',
	store,
	router,
	components: {
		App
	},
	render(createElement) {
		return createElement(App)
	}
})
