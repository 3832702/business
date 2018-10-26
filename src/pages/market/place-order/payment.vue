<template>
	<ul :class="$style.list">
		<li v-for="item,index in paymentData" :key="item.id">
			<p>
				<img :src="item.icon" />
				{{ item.title }}
			</p>
			<div @click="searchHandler(index)">
				<img v-if="index === activeIndex" src="../../../static/image/checkout2.png"/>
				<img v-else src="../../../static/image/checkout1.png"/>
			</div>
		</li>
	</ul>
</template>

<script>

const paymentData = [
	{
		id: 1,
		title: '支付宝支付',
		icon: require('../../../static/image/zfb.png')
	},
	{
		id: 2,
		title: '微信支付',
		icon: require('../../../static/image/wx.png')
	},
	{
		id: 3,
		title: '银行卡支付',
		icon: require('../../../static/image/yhk.png')
	}
]

export default {
	data () {
    	return {
    		paymentData,
    		activeIndex: 0
    	}
  	},
  	methods: {
  		searchHandler(index) {
  			this.activeIndex = index;
  		}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.list {
	@include list;
	width: 100%;
	border-top:1px solid #ccc;
	border-bottom:1px solid #ccc;
	background:#fff;
	margin-bottom:40px;
	li {
		@include list(row);
		width: 100%;
		justify-content:space-between;
		align-items:center;
		height:90px;
		box-sizing:border-box;
		padding:0 20px;
		position:relative;

		&:after {
			width: 100%;
			height:1px;
			content: ' ';
			background:#ccc;
		}

		&:last-child {
			&:after {
				width: 100%;
				height:1px;
				content: ' ';
				background:transparent;
			}
		}

		p {
			@include list(row);
			align-items:center;
			font-size:32px;
			color:#333333;
			>img {
				width: 44px;
				height:44px;
				margin-right:20px;
			}
		}

		div {
			@include list(row);
			align-items:center;
			justify-content:flex-end;
			width: 65px;
			height:100%;
			img {
				width: 34px;
				height: 34px;
			}
		}
	}
}
</style>