<template>
	<div :class="$style.navbar">
		<div>
			<img src="../../../static/image/kf.png" />
			<h4>联系卖家</h4>
		</div>
		<router-link to="/marketshop" tag="div">
			<img src="../../../static/image/shop.png" />
			<h4>店铺</h4>
		</router-link>
		<button @click="addCartHandler" :class="$style.add">加入购物车</button>
		<router-link 
			:to="{path: '/orderdetails'}" 
			tag="button"
		>
			立即购买
		</router-link>
	</div>
</template>

<script>
export default {
	data () {
    	return {

    	}
  	},
  	methods: {
  		/**
  		 * [addCartHandler 添加购物车]
  		 */
  		addCartHandler() {
  			this.$emit('emitAddCart')
  		}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.navbar {
	@include list(row);
	width: 100%;
	height: 100px;
	position:fixed;
	left:0;
	bottom:0;
	background:#fff;
	div {
		@include list;
		align-items:center;
		width: 22.5%;
		height: 100%;
		padding-top:14px;
		box-sizing:border-box;
		border-top:1px solid #cccccc;	
		>img {
			width: 34px;
			height: 34px;
		}	
		h4 {
			font-size: 24px;
			text-align:center;
			height:48px;
			line-height:48px;
			font-weight:normal;
			color:#666666;
		}
	}
	button {
		padding:0;
		border:none;
		width: 27.5%;
		height:100%;
		line-height:100px;
		text-align:center;
		color:#fff;
		font-size:28px;
		&:last-child {
			background:#ff7106;
		}
	}
	.add {
		background:#ffb505;
	}
}
</style>