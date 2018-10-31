<template>
	<div :class="$style.info">
		<img :src="infoData.img"/>
		<h4>{{ infoData.title }}-- 商品id {{ commodity_id }}</h4>
		<p>￥{{ infoData.price }}</p>
		<ul>
			<li>
				<span>月售{{ infoData.sales_num }}件</span>
				<span>{{ infoData.city }}</span>
			</li>
			<li>
				<span>运费￥{{ infoData.freight }}</span>
			</li>
		</ul>
		<div :class="$style.desc" v-html="infoData.desc"></div>
		<div @click="changeSelectHandler" :class="$style.select"><span>已选 {{ infoData.select }} *{{ infoData.num }}</span></div>
		<div 
			@click="changeAddressHandler" 
			:class="$style.select"
		>
			<span>配送至 {{ address.content || '请选择收货地址' }}</span>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'	

export default {
	props: {
		infoData: {
			type: Object,
			default(){
				return {}
			}
		},
		commodity_id: [String, Number]
	},
	computed: {
		...mapState(['address'])
	},
	methods: {

		/**
		 * [changeSelectHandler 提交给父组件，告知已选被点击]
		 * @return {[type]} [description]
		 */
		changeSelectHandler() {
			this.$emit('emitChangeSelected', true)
			this.$store.commit('CHANGE_POPUP', true)
		},

		/**
		 * [changeAddressHandler 提交给父组件，告知已选被点击]
		 * @return {[type]} [description]
		 */
		changeAddressHandler() {
			this.$emit('emitChangeAddress', true)
			this.$store.commit('CHANGE_POPUP', true)
		}
	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

	.info {
		margin-top:88px;
		>img {
			width: 100%;
			height:360px;
			margin-bottom:17px;
		}
		h4 {
			@include multiline-truncation;
			max-height:62px;
			line-height:31px;	
			font-size:26px;
			color:#333333;	
			width:100%;
			box-sizing:border-box;
			padding:0 20px;	
			background:#fff;
		}
		>p {
			width: 100%;
			box-sizing:border-box;
			padding:0 20px;
			font-size:26px;
			line-height:48px;
			height:48px;
			color:#ff7106;
			background:#fff;
		}
		ul {
			width: 100%;
			background:#fff;
			margin-bottom:20px;
			li {
				@include list(row);
				align-items:center;
				justify-content:space-between;
				width: 100%;
				height:60px;
				box-sizing:border-box;
				padding:0 20px;
				border-top:1px solid #cccccc;
				font-size:23px;
			}
		}
		.desc {
			width:100%;
			box-sizing:border-box;
			padding:20px;
			background:#fff;
			margin-bottom:20px;
			p {
				height:40px;
				line-height:40px;
				font-size:24px;
				color:#333333;
				text-align:center;
			}
		}
		.select {
			@include list(row);
			align-items:center;
			background:#fff;
			justify-content:space-between;
			width: 100%;
			box-sizing:border-box;
			padding:0 20px;
			height:91px;
			border-top:1px solid #ccc;
			font-size:24px;
			margin-bottom: 20px;
			span {
				@include truncation;
				width:90%;
			}
			&:after {
				@include leftArrow($bg:#343434);
				content: '';
				display:inline-block;
			}
		}
	}
</style>