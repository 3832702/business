<template>
	<div>
		<Sheader></Sheader>		
		<Info></Info>
		<Product></Product>
	
	</div>
</template>

<script>

import Sheader from './s-header.vue'
import Info from './info.vue'
import Product from './product.vue'

export default {
	components: {
		Sheader,
		Info,
		Product
	},
	data () {
    	return {

    	}
  	}
}
</script>