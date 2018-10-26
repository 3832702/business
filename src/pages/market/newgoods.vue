<template>
	<Panel :class="$style.newgoods" :panel-title="panelTitle">
		<div :class="$style.list">
			<router-link 
				:to="item.path"
				tag="div"
				:class="$style.item" 
				v-for="item in newGoodsData" 
				:key="item.id"
			>
				<img :src="item.img">
				<h5>{{ item.title }}</h5>
				<p>
					<span>月售{{ item.num }}件</span>
					<span>￥{{ item.price }}</span>
				</p>
				<button>购买</button>
			</router-link>
		</div>
		<router-link to="/" tag="div" :class="$style.more">
			更多
		</router-link>
	</Panel>
</template>

<script>

import Panel from '../../public/common/panel.vue'

const newGoodsData = [
	{
		id: 1,
		img: 'http://i4.fuimg.com/570833/87af5b95df2639d2s.png',
		title: '意大利进口奥尼特级初榨橄榄油',
		price: '199',
		num: '528',
		path: '/'
	},
	{
		id: 2,
		img: 'http://i2.tiimg.com/570833/c9840ff963a35d34s.png',
		title: '顶级不锈钢刀叉',
		price: '88',
		num: '998',
		path: '/'
	},
	{
		id: 3,
		img: 'http://i4.fuimg.com/570833/d4990d3a4e8524c5s.png',
		title: '墨西哥进口牛油果',
		price: '199',
		num: '528',
		path: '/'
	},
	{
		id: 4,
		img: 'http://i2.tiimg.com/570833/41e46d791fa8efbfs.png',
		title: '美的WT2121节能电磁炉',
		price: '499',
		num: '306',
		path: '/'
	},
	{
		id: 5,
		img: 'http://i4.fuimg.com/570833/226ad57291c60202s.png',
		title: '越南进口黑胡椒粒',
		price: '19',
		num: '568',
		path: '/'
	},
	{
		id: 6,
		img: 'http://i4.fuimg.com/570833/b98dc4f997a607bcs.png',
		title: '滋阴美容养生薏米',
		price: '49',
		num: '306',
		path: '/'
	}
]

export default {
	name: 'newgoods',
  	components: {
  		Panel
  	},
  	data () {
    	return {
    		panelTitle: '最新商品',
    		newGoodsData
    	}
  	}
}
</script>

<style lang="scss" module>

@import '../../public/css/element.scss';

.newgoods {
	margin-bottom:10px;
	position:relative;

	.more {
		@include list(row);
		align-items:center;
		position:absolute;
		top:0;
		right:40px;
		font-size: 26px;
		height:74px;
		color:#ff7106;
		&:after{
			@include leftArrow(12px, #ff7106)
			display:inline-block;
			content: ' ';
			margin-left:10px;
		}
	}
}

.list {
	@include list(row);
	width: 100%;
	justify-content:space-around;

	.item {
		width: 220px;
		height: 380px;
		overflow:hidden;
		margin-bottom:20px;
		>img {
			width: 220px;
			height: 200px;
			margin-bottom:6px;
		}
		h5 {
			width: 100%;
			height: 58px;
			line-height:29px;
			font-size:24px;
			color:#333333;
			margin-bottom:15px;
		}
		>p {
			@include flex(row);
			width: 100%;
			height:50px;
			line-height:50px;
			background:#fff;
			font-size: 22px;
			color:#333333;
			margin-bottom:10px;
			span {
				text-align:center;
				&:first-child {
					width: 130px;
					height: 50px;
					box-sizing:border-box;
					overflow:hidden;
					border-right:1px solid #cfcfcf;
				}
				&:last-child {
					width: 90px;
				}
			}	
		}

		button {
			padding:0;
			border:none;
			display:block;
			min-width:80px;
			padding:0 10px;
			text-align:center;
			height:40px;
			line-height:40px;
			color:#fff;
			background:#ff7106;
			position:relative;
			top:0;
			left:220px;
			transform:translateX(-100%);
		}
	}
}	

</style>