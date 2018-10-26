<template>
	<Product :product="product" v-if="product.length > 0">
		<div :class="$style.status" slot="status">交易成功</div>
		<div :class="$style.more" slot="more">
			<p>删除订单</p>
		</div>
	</Product>
	<Empty v-else></Empty>
</template>

<script>

import Product from './product.vue'
import Empty from './empty.vue'


export default {
	props: {
		product: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		Product,
		Empty
	},
	data () {
    	return {
    		
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.status {
	font-size:24px;
	color:#ff7f3f;
}

.more {
	@include list(row);
	align-items:center;
	justify-content:flex-end;
	width: 100%;
	box-sizing:border-box;
	padding:0 20px;
	height:75px;

	>p {
		@include list(row);
		align-items:center;
		justify-content:center;
		width: 150px;
		height: 50px;
		box-sizing:border-box;
		font-size:24px;
		border:1px solid #ccc;
		border-radius:5px;
		color:#666666;
		margin-left: 20px;
	}
}
</style>