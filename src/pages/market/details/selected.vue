<template>
	<Popup :class="$style.selected">
		<div :class="$style.head">
			<div>
				<img :src="commodityData.img">
			</div>
			<p>￥{{ commodityData.price }}</p>
		</div>
		<dl>
			<dt>重量</dt>
			<dd>500g</dd>
		</dl>
		<div :class="$style.content">
			<button @click.stop="increaseHandler">+</button>
			<span>{{ commodityData.num }}</span>
			<button @click.stop="reduceHandler">-</button>
		</div>
		<div :class="$style.btn">
			<button>立即支付</button>
			<button @click="addCartHandler">加入购物车</button>
		</div>
	</Popup>
</template>

<script>
import Popup from '../../../public/common/popup.vue'
import { mapState, mapMutations } from 'vuex'

export default {
	components: {
		Popup
	},
	computed: {
		...mapState(['popup', 'commodity'])
	},
	watch: {
		popup() {

			if (!this.popup) {
				setTimeout(() => {
					this.$emit('emitChangeSelected', false)
				}, 600)
			}
		},

		commodity() {
			this.commodityData = this.commodity
		}
	},
	data () {
    	return {
    		commodityData: {}, // 商品数据
    	}
  	},
  	methods: {
  		...mapMutations(['RECORD_COMMODITY']), 
  		/**
  		 * [increaseHandler 增加数量]
  		 */
  		increaseHandler() {
  			const num = this.commodityData.num + 1;

  			// 合并num到commodityData中
  			this.RECORD_COMMODITY(Object.assign({}, this.commodityData, { num }))
  		},

  		/**
  		 * [reduceHandler 减少数量]
  		 */
  		reduceHandler() {
  			const num = this.commodityData.num - 1;


  			if (num <= 0) {
  				return;
  			}

  			this.RECORD_COMMODITY(Object.assign({}, this.commodityData, { num }))
  		},

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

.selected {
	.head {
		@include list(row);
		box-sizing:border-box;
		padding:0 20px;
		width: 100%;
		height: 120px;
		border-bottom:1px solid #ccc;

		>div {
			@include list(row);
			align-items:center;
			justify-content:center;
			width: 120px;
			height: 120px;
			background:#f5f5f5;
			border-radius:10px;	
			position:relative;
			top: -30px;	

			img {
				width: 100px;
				height: 100px;
			}	
		}

		>p {
			width: 76%;
			height: 40px;
			line-height:40px;
			color:red;
			font-weight:bold;
			font-size: 30px;
			margin-top:40px;
		}
	}
	dl {
		width: 100%;
		box-sizing:border-box;
		padding:0 20px;
		dt {
			height: 40px;
			font-size: 26px;
			color:#666;
			line-height:40px;
			margin-top:10px;
		}

		dd {
			display:inline-block;
			padding: 0 15px;
			margin-bottom:10px;
			margin-right: 20px;
			box-sizing:border-box;
			border:1px  solid red;
			color:red;
			font-size: 26px;
			height: 40px;
			line-height: 38px;
			border-radius:5px;
		}
	}
	.content {
		width: 100%;
		height:40px;
		box-sizing:border-box;
		padding:0 20px;
		margin-top:30px;
		
		&:before {
			content: '数量';
			font-size: 26px;
			color:#999;
			height: 40px;
			float:left;
			line-height:40px;
		}

		button {
			border:1px solid #ccc;
			padding:0 auto;
			float:right;
			width: 60px;
			height: 40px;
			line-height:38px;
			text-align:center;
			font-size: 28px;
			background:transparent;
			color:#666;
		}

		span {
			min-width: 100px;
			height: 40px;
			font-size: 26px;
			text-align:center;
			line-height:38px;
			border:{
				top: 1px solid #ccc;
				bottom:1px solid #ccc;
			}
			float:right;
		}
	}
	.btn {
		@include list(row);
		width: 100%;
		height: 100px;
		position:absolute;
		bottom:0;
		left: 0;

		button {
			width: 50%;
			height: 100%;
			background:#ff7106;
			font-size: 30px;
			color:#fff;
			line-height: 100px;
			border:none;
			padding:0;
			text-align:center;
			&:last-child {
				background:#ffb505;
			}
		}
	}
}

</style>