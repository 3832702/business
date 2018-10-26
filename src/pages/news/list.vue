<template>
	<ul :class="$style.list">
		<li v-for="item,index in newsData" :key="index">
			<img :src="item.img" />
			<h4>{{ item.title }}</h4>
			<span></span>
		</li>
	</ul>
</template>

<script>

const newsData = [
	{
		img: require('../../static/image/comment2.png'),
		title: '评论',
		path:'/'
	},
	{
		img: require('../../static/image/stars1.png'),
		title: '收藏和赞',
		path:'/'
	},
	{
		img: require('../../static/image/fans.png'),
		title: '新的粉丝',
		path:'/'
	},
	{
		img: require('../../static/image/notice.png'),
		title: '官方通知',
		path:'/'
	}
]

export default {
	data () {
    	return {
    		newsData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.list {
	width: 100%;
	margin-top:88px;
	margin-bottom:20px;
	@include list;

	li {
		@include list(row);
		align-items:center;
		justify-content:space-between;
		width:100%;
		height:90px;
		box-sizing:border-box;
		padding:0 20px;
		background:#ffffff;
		border-bottom:1px solid #999999;

		img {
			width: 38px;
			height:38px;
		}

		h4 {
			width: 85%;
			font-size: 30px;
			color:#333333;
		}

		span {
			@include leftArrow($bg:#999999);
		}
	}
}
</style>