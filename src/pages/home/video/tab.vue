<template>
	<div :class="$style.tab">
		<ul>
			<li 
				v-for="item,index in tabData"
				:key="index"
				@click="searchHandler(index)"
				:class="{videoactive: index === activeIndex}"
			>
				<span>{{ item.title }}</span>
			</li>
		</ul>
		<div :class="$style.man">
			<h4>视频达人</h4>
			<ul>
				<li v-for="item in picList" :key="item.id">
					<img :src="item.avatar">
					<span>{{ item.name }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

const tabData = [
	{
		path: '/video',
		title: '最热'
	},
	{
		path: '/video/new',
		title: '最新'
	},
	{
		path: '/video/abroad',
		title: '家常'
	},
	{
		path: '/video/domestic',
		title: '异国'
	}
]

const picList = [
	{
		id: 1,
		avatar: 'http://i4.fuimg.com/570833/2354498c7a54256as.png',
		name: '味蕾达人'
	},
	{
		id: 2,
		avatar: 'http://i4.fuimg.com/570833/bce9bca008e3668bs.png',
		name: '小能手'
	},
	{
		id: 3,
		avatar: 'http://i4.fuimg.com/570833/3691b57e688fe35cs.png',
		name: '好厨娘'
	},
	{
		id: 4,
		avatar: 'http://i4.fuimg.com/570833/3ddb1d5e2dd54777s.png',
		name: '火焰'
	},
	{
		id: 5,
		avatar: 'http://i4.fuimg.com/570833/0411c02b5e1352e5s.png',
		name: '金勺子'
	}
]

export default {
	data () {
    	return {
    		tabData,
    		picList,
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

.tab {
	width: 100%;
	margin-top:88px;
	>ul {
		@include list(row);
		width: 100%;
		height:90px;
		background:#fff;
		li {
			width: 25%;
			height:100%;
			font-size:24px;
			text-align:center;
			line-height:90px;
			color:#666666;
			span {
				display:inline-block;
				height:100%;
				box-sizing:border-box;
				border-bottom:2px solid transparent;
			}
		}
	}

	.man {
		width: 100%;
		margin-bottom:20px;
		h4 {
			@include list(row);
			align-items:center;
			width: 100%;
			height: 60px;
			box-sizing:border-box;
			padding:0 20px;
			font-size:28px;
			line-height:60px;
			color:#666666;
			&:before {
				width: 24px;
				height:33px;
				content: ' ';
				display:inline-block;
				background:url('../../../static/image/hot.png') no-repeat;
				background-size:cover;
				margin-right: 10px;
			}
		}
		>ul {
			@include list(row);
			width: 100%;
			height:120px;
			background:#fff;
			li {
				@include list;
				width: 20%;
				height:100%;
				box-sizing:border-box;
				padding:10px 0;
				align-items:center;
				color:#737373;

				img {
					width: 60px;
					height:60px;
					border-radius:50%;
				}

				span {
					height:40px;
					width: 100%;
					line-height:40px;
					font-size:24px;
					text-align:center;
				}
			}
		}
	}
}
</style>
<style type="text/css">
	.videoactive {
		color:#ffdd00 !important;
	}

	.videoactive span {
		border-color:#ffdd00 !important;
	}
</style>