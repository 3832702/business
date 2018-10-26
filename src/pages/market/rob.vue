<template>
	<Panel :panelTitle="panelTitle">
		<div :class="$style.rob">
			<div :class="$style.item" v-for="item in robData" :key="item.id">
				<img :src="item.img" />
				<h5>{{ item.title }}</h5>
				<p :class="$style.price">￥{{ item.price }}</p>
				<p :class="$style.original">￥{{ item.original }}</p>
				<div :class="$style.more">
					<span>剩余{{ item.num }}件</span>
					<button>立即抢购</button>
				</div>
			</div>
			<div :class="$style.count_down">
				<span>距离本场结束</span>
				<p>
					<span>12</span> : 
					<span>40</span> : 
					<span>39</span>
				</p>
			</div>
		</div>
		<div :class="$style.tomorrow">
			<span>
				明日开抢
			</span>
		</div>
	</Panel>
</template>

<script>

import Panel from '../../public/common/panel.vue'

const robData = [
	{
		id: '1',
		title: '美国进口无仔黑提',
		price: '120',
		original: '158',
		num: '10',
		img: 'http://i2.tiimg.com/570833/b2c06a353ba38a94s.png'
	},
	{
		id: '2',
		title: '法国拉菲传说波多尔AOC红葡萄酒',
		price: '11220',
		original: '15800',
		num: '28',
		img: 'http://i2.tiimg.com/570833/4efc9676dfa4222ds.png'
	},
	{
		id: '3',
		title: '澳洲顶级安格斯牛腩块',
		price: '170',
		original: '198',
		num: '2',
		img: 'http://i2.tiimg.com/570833/2ce6091fb06144e3s.png'
	}
]

export default {
	name: 'rob',
	components: {
		Panel
	},
  	data () {
    	return {
    		panelTitle: '限时抢购',
    		robData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.rob {
	@include list(row);
	width: 100%;
	justify-content:space-around;
	position:relative;
	
	.item {
		width: 220px;
		height: 430px;		
		>img {
			width: 220px;
			height: 200px;
			margin-bottom:9px;
		}

		h5 {
			@include multiline-truncation;
			width:100%;
			height: 58px;	
			line-height:29px;
			color:#333333;
			font-size:24px;		
		}
			
		>p {
			width: 100%;
			text-align:center;
		}

		.price {
			height: 50px;
			line-height:50px;
			font-size: 24px;
			color:#ff7106;	
		}

		.original {
			height: 28px;
			line-height: 28px;
			font-size: 20px;
			color:#333333;
			text-decoration:line-through;
			margin-bottom:15px;
		}

		.more {
			@include list(row);
			width:100%;
			height:50px;
			justify-content:space-between;
			align-items:center;
			background:#fff;
			span {
				font-size: 20px;
				padding-left:4px;
				max-width:105px;
				box-sizing:border-box;
				overflow:hidden;					
			}

			button {
				padding:0;
				border:none;
				background:#ff7106;
				height:50px;
				line-height:50px;
				min-width:110px;
				text-align:center;
				box-sizing:border-box;
				padding:0 10px;
				border-radius:5px;
				color:#fff;
				font-size:24px;
			}
		}
	}

	.count_down {
		@include list(row);
		justify-content:flex-end;
		align-items:center;
		max-width:460px;
		height:74px;
		overflow:hidden;
		position:absolute;
		padding-right: 40px;
		right:0;
		top:-74px;
		border-radius:2px;
		>span {
			font-size: 24px;
			color:#333333;
			margin-right:10px;
		}
		p {
			height: 40px;
			font-size:22px;
			span {
				display:inline-block;
				min-width: 40px;
				height: 40px;
				line-height:40px;
				box-sizing:border-box;
				padding:0 5px;
				background:#ff7106;
				text-align:center;
			}
		}
	}
}

.tomorrow {
	width: 100%;
	height: 88px;
	line-height:88px;
	text-align:center;
	color:#fff;
	background:#ff7106;
	overflow:hidden;

	>span {
		font-size:28px;
		height:88px;
		
		&:after {
			@include leftArrow(15px);
			content: '';
			display:inline-block;
		}	
	}
}		
</style>