<template>
	<div>
		<Heador :title="title"></Heador>		
		<Area></Area>
		<Payment></Payment>
		<Product :commodityData="commodityData"></Product>
		<Navbar></Navbar>
	</div>
</template>

<script>

import Heador from '../../../public/common/header.vue'
import Area from './area.vue'
import Payment from './payment.vue'
import Product from './product.vue'
import Navbar from './navbar.vue'

import { mapState } from 'vuex'

export default {
	components: {
		Heador,
		Area,
		Payment,
		Product,
		Navbar
	},
	computed: {
		...mapState(['commodity'])
	},
	beforeRouteEnter(to, from, next) {

		// 禁止非详情页或者购物车页面进入，如果手动输入重定向到其他页面
		/*if (from.name !== 'marketDetails' && from.name !== 'cart') {
			next({path: '/login'})
		} else {
			next()
		}*/
		next()
	},
	created() {
		if (this.$route.meta.type === 1) {
			this.directHandler();
		}
	},
	data () {
    	return {
    		title: '订单详情',
    		commodityData: []
    	}
  	},
  	methods: {
  		directHandler() {
  			const {  shop_name, shop_id } = this.commodity;

  			this.commodityData = [{shop_name, shop_id, products: [this.commodity]}]
  		}
  	}
}
</script>
