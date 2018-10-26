<template>
	<Heador :class="$style.mheader">
		<label>
			<input type="text" placeholder="搜索食材、餐具" />
		</label>
		<router-link :class="$style.cart" :to="{path: '/'}" tag="div" ></router-link>
	</Heador>
</template>

<script>

import Heador from '../../public/common/header.vue'

export default {
  name: 'mheader',
  data () {
    return {

    }
  },
  components: {
  	Heador
  }
}
</script>

<style lang="scss" module>
	.mheader {
		overflow:hidden;
		label {
			position: absolute;
			left:38px;
			right: 120px;
			height:60px;
			overflow:hidden;
			top:12px;
			input {
				width: 100%;
				height: 100%;
				border-radius:30px;
				line-height:60px;
				background:url('../../static/image/search.png') no-repeat 20px 15px #fff;
				text-indent:67px;
				font-size:30px;
				color:#ccc;
				border:0;
				&::-webkit-input-placeholder {
		        	color: #aab2bd;
		        	font-size: 30px;
		        	line-height:60px;
			    }
			}
		}
		.cart {
			width: 120px;
			height: 100%;
			float:right;
			background:url('../../static/image/cart.png') no-repeat 50% 50%;
		}
	}
</style>