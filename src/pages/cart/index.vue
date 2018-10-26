<template>
	<div>
		<CartHeader></CartHeader>
		<ShopGoods></ShopGoods>
		<Navbar></Navbar>
	</div>
</template>

<script>
import CartHeader from './cart-header.vue'
import ShopGoods from './shop-goods.vue'
import Navbar from './navbar.vue'

export default {
	components: {
		CartHeader,
		ShopGoods,
		Navbar
	},
	data () {
    	return {

    	}
  	}
}
</script>