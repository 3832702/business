<template>
	<div>
		<Heador :title="title"></Heador>		
		<Area></Area>
		<Payment></Payment>
		<Product></Product>
		<Navbar></Navbar>
	</div>
</template>

<script>

import Heador from '../../../public/common/header.vue'
import Area from './area.vue'
import Payment from './payment.vue'
import Product from './product.vue'
import Navbar from './navbar.vue'

export default {
	components: {
		Heador,
		Area,
		Payment,
		Product,
		Navbar
	},
	data () {
    	return {
    		title: '订单详情'
    	}
  	}
}
</script>
