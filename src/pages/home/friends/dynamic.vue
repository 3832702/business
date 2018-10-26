<template>
	<ul :class="$style.list">
		<li :class="$style.item" v-for="item in dynamicData" :key="item.id">
			<div :class="$style.avatar">
				<img :src="item.avatar" />
			</div>
			<div :class="$style.content">
				<span>{{ item.name }}发布了菜谱</span>
				<time>{{ item.timer }}</time>
				<h4 v-if="item.title">{{ item.title }}</h4>
				<p>{{ item.content }}</p>
				<img :src="item.img"/>
				<div :class="$style.more">
					<span>{{ item.collection_num }}</span>
					<span>{{ item.comments_num }}</span>
				</div>
				<div v-if="item.is_video" :class="$style.play"></div>
			</div>
		</li>
	</ul>
</template>

<script>

const dynamicData = [
	{
		id: 1,
		type: 1,
		name: '小孩',
		avatar: 'http://i4.fuimg.com/570833/7822934d8029988bs.png',
		timer: '2小时前',
		title: '黑椒牛排',
		content: '欧洲中世纪时，猪肉及羊肉是平民百姓的食用肉，牛肉则是王公贵族们的高级肉品，尊贵的牛肉被他们搭配上了当时也是享有…',
		img: 'http://i2.tiimg.com/570833/26b07ff36cfe604cs.png',
		comments_num: 50,
		is_video: 1,
		collection_num: 436
	},
	{
		id: 2,
		type: 1,
		name: '时光',
		avatar: 'http://i4.fuimg.com/570833/8b2612cedbd767d9s.png',
		timer: '4小时前',
		title: '',
		content: '很久没有花这么久的时间在一道菜上了，虽然做的不是很好，但是卖相还不错啦，今天就来美美地秀一番~~',
		img: 'http://i4.fuimg.com/570833/c48cfce4f403ee98s.png',
		comments_num: 42,
		is_video: 0,
		collection_num: 320
	},
	{
		id: 3,
		type: 1,
		name: '小惠',
		avatar: 'http://i4.fuimg.com/570833/cac87205f5f5e183s.png',
		timer: '5小时前',
		title: '',
		content: '这种微凉的秋天，是该多吃肉补充一下热量。但是还是要荤素搭配起来。最简单的几样蔬菜，小小秀了一下厨艺，味道真是赞！',
		img: 'http://i4.fuimg.com/570833/8d34470edaf078fbs.png',
		comments_num: 33,
		is_video: 0,
		collection_num: 260
	},
	{
		id: 4,
		type: 1,
		name: '美美',
		avatar: 'http://i4.fuimg.com/570833/dd67bbcbe990fc66s.png',
		timer: '2小时前',
		title: '凉拌毛豆',
		content: '虽然现在已经接近夏天的尾声了，但是凉菜还是不能错过的一道美食呢？今天和我来瞅瞅凉拌毛豆是怎么做的把，很简单的哦！',
		img: 'http://i4.fuimg.com/570833/4d3c59a946d80e72s.png',
		comments_num: 30,
		is_video: 0,
		collection_num: 180
	},
	{
		id: 5,
		type: 1,
		name: '蛋蛋',
		avatar: 'http://i4.fuimg.com/570833/a33b374d04c06918s.png',
		timer: '8小时前',
		title: '我的早餐，健康又营养，哈哈哈……',
		content: '俗话说得好呀，一天之计在于晨，所以早餐对于一个人来说是至关重要的，要健康又营养。今天我特地起了大早，精心准备了……',
		img: 'http://i4.fuimg.com/570833/619503299f86030ds.png',
		comments_num: 25,
		is_video: 0,
		collection_num: 155
	}
]

export default {
	data () {
    	return {
    		dynamicData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.list {
	width: 100%;
	margin-top:88px;
	.item {
		@include list(row);
		width: 100%;
		.avatar {
			width: 12%;
			height: 90px;
			box-sizing:border-box;
			padding:20px;
			img {
				width: 50px;
				height:50px;
				border-radius:50%;
			}
		}
		.content {
			width: 88%;
			color:#666;
			padding-top:20px;
			position:relative;
			>span {
				display:block;
				height:26px;
				line-height:24px;
				font-size:24px;
			}
			>time {
				display:block;
				height:29px;
				line-height:29px;
				font-size: 24px;
				margin-bottom:23px;
			}
			h4 {
				@include truncation;
				height:46px;
				line-height:46px;
				width:100%;
				box-sizing:border-box;
				padding-right:20px;
				font-size:24px;
			}
			>p {
				@include multiline-truncation;
				max-height:68px;
				line-height:34px;
				width: 100%;
				box-sizing:border-box;
				font-size: 24px;
				padding-right:20px;
				margin-bottom:13px;
			}
			>img {
				width: 96%;
				height: 400px;
			}

			.more {
				width: 100%;
				height:46px;
				span {
					vertical-align: top;
					display:inline-flex;
					align-items:center;
					font-size: 20px;
					height:100%;
					margin-right:10px;
					&:before {
						width: 24px;
						content: ' ';
						display:inline-block;
						margin-right:10px;
					}

					&:first-child {
						&:before {
							height: 22px;
							background:url('../../../static/image/love3.png');
							background-size:cover;
						}
					}
					&:last-child {
						&:before {
							height: 24px;
							background:url('../../../static/image/msg1.png');
							background-size:cover;
						}
					}
				}
			}

			.play {
				width:80px;
				height:80px;
				background:url('../../../static/image/mask.png') no-repeat;
				background-size:cover;
				position:absolute;
				left:50%;
				bottom:206px;
				transform:translateX(-50%);
			}
		}
	}
}
</style>