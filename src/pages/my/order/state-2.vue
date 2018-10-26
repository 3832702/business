<template>
	<Product :product="productData" v-if="productData.length > 0">
		<div slot-scope="slotProps" :class="$style.status" slot="status">待发货</div>
		<div slot-scope="slotProps" :class="$style.more" slot="more">
			<p>取消订单</p>
		</div>
	</Product>
	<Empty v-else></Empty>
</template>

<script>
import Product from './product.vue'
import Empty from './empty.vue'

const product = [
	{
		title: '鲜活旗舰店',
		count_price: '120.00',
		list: [
			{
				id: 1,
				title: '挪威进口冰鲜 新鲜三文鱼...',
				price: '120.00',
				num: 1,
				img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
				desc: '500g 送芥末酱'
			}
		]
	}
]

export default {
	props: {
		product: {
			type: Array,
			default() {
				return []
			}
		}
	},
	beforeRouteEnter(from, to, next) {
		next((vm) => {

			if (from.name === 'Pack') {
				vm.productData = product;
			}
		});
	},
	components: {
		Product,
		Empty
	},
	data () {
    	return {
    		productData: this.product
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.status {
	font-size:24px;
	color:#999;
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