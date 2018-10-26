<template>
	<div :class="$style.banner">
		<h4>活动商品</h4>
		<ul>
			<li v-for="item in bannerData" :key="item.id">
				<img :src="item.img"/>
				<p>{{ item.title }}</p>
				<time>{{ item.timer }} 00:00 结束</time>
			</li>
		</ul>
	</div>
</template>

<script>

const bannerData = [
	{
		id: 1,
		path: '',
		title: '#热门活动#霸气战斧  柔嫩多汁',
		timer: '10月28',
		img: 'http://i2.tiimg.com/570833/b70f7c531c5b8aafs.png'
	},
	{
		id: 2,
		path: '',
		title: '#热门活动#宝岛美食  邀您共享',
		timer: '11月15',
		img: 'http://i2.tiimg.com/570833/cf2bb803cfab3ee2s.png'
	},
	{
		id: 3,
		path: '',
		title: '#热门活动#简约餐具  返璞归真',
		timer: '12月13',
		img: 'http://i2.tiimg.com/570833/dae729b31a9a03e0s.png'
	}
]

export default {
	data () {
    	return {
    		bannerData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.banner {
	width: 100%;

	h4 {
		@include list(row);
		align-items:center;
		width: 100%;
		height:90px;
		background:#fff;
		box-sizing:border-box;
		padding:0 20px;
		font-size:30px;
		color:#333333;

		&:before {
			width: 24px;
			height: 33px;
			content: ' ';
			background:url('../../static/image/hot.png') no-repeat;
			background-size:cover;
			margin-right:25px;
		}
	}

	ul {
		width: 100%;
		@include list;

		li {
			width: 100%;
			background:#fff;
			margin-bottom:20px;
			>img {
				width: 100%;
				height: 420px;
			}
			p {
				width: 100%;
				height:52px;
				line-height:52px;
				box-sizing:border-box;
				padding:0 20px;
				font-size:26px;
				color:#666666;
			}

			time {
				display:block;
				height:40px;
				line-height:40px;
				box-sizing:border-box;
				padding:0 20px;
				font-size: 24px;
				color:#999999;
				margin-bottom:12px;
			}
		}
	}
}

</style>