<template>
	<div :class="$style.share">
		<Panel :class="$style.share_panel" panelTitle="最新">
			<Slider :class="$style.share_slider" :swiperOption="swiperOption" :sliderData="sliderData">
				<template slot-scope="slotProps">
					<img :class="$style.sliderimg" :src="slotProps.itemData.img"/>
				</template>
			</Slider>
		</Panel>
		<Panel :class="$style.share_panel" panelTitle="推荐">
			<div :class="$style.list">
				<div :class="$style.item" v-for="item,index in articleData" :key="index">
					<div :class="$style.head">
						<img :src="item.avatar">
						<router-link to="/user" tag="p">
							<span>{{ item.username }}</span>
							<span>编辑推荐</span>
						</router-link>
						<div>
							<span>关注</span>
						</div>
					</div>
					<img :src="item.img"/>
					<div :class="$style.info">
						<h4>{{ item.title }}</h4>
						<p>{{ item.content }}</p>
					</div>
					<ul :class="$style.more">
						<li>
							<img src="../../static/image/love.png">
						</li>
						<li>
							<img src="../../static/image/comment.png">
						</li>
						<li>
							<img src="../../static/image/share.png">
						</li>
					</ul>
					<div :class="$style.piclist">
						<ul>
							<li 
								v-for="picItem,picIndex in item.fabulous_list" 
								:key="picIndex"
							>
								<img :src="picItem">
							</li>
						</ul>
						<p>{{ item.fabulous_list.length }}</p>
					</div>
					<ul :class="$style.comment">
						<li v-for="commentItem,commentIndex in item.comment_list" :key="commentIndex">
							<span>{{ commentItem.name }}:</span>
							<p>{{ commentItem.content }}</p>
						</li>
						<li>查看全部{{ item.commentCount }}条评论</li>
					</ul>
				</div>
			</div>
		</Panel>
	</div>
</template>

<script>
import Panel from '../../public/common/panel.vue'
import Slider from '../../public/common/slider.vue'

const sliderData = [
	{
		id: 1,
		path: '/',
		img: 'http://i1.fuimg.com/570833/bd781b9971b9b411s.png'
	},
	{
		id: 2,
		path: '/',
		img: 'http://i1.fuimg.com/570833/bd781b9971b9b411s.png'
	},
	{
		id: 3,
		path: '/',
		img: 'http://i1.fuimg.com/570833/bd781b9971b9b411s.png'
	}
]

const swiperOption = {
	slidesPerView: 2.8,
	spaceBetween: 15,
	freeMode: true
}

const articleData = [
	{
		id: 1,
		avatar: 'http://i1.fuimg.com/570833/92b227843ebf7817s.png',
		username: 'Carol Mak',
		is_follow: 0,
		is_Collection: 0,
		img: 'http://i1.fuimg.com/570833/948e3441e378dd44s.png',
		title: '韩式什锦烧烤',
		content: '皮脆柔滑,连里边的肉都是味道满满的',
		fabulous_list: [
			'http://i4.fuimg.com/570833/8933f3aceed6de6es.png',
			'http://i4.fuimg.com/570833/2354498c7a54256as.png',
			'http://i4.fuimg.com/570833/bce9bca008e3668bs.png',
			'http://i4.fuimg.com/570833/3691b57e688fe35cs.png',
			'http://i4.fuimg.com/570833/3ddb1d5e2dd54777s.png',
			'http://i4.fuimg.com/570833/0411c02b5e1352e5s.png',
			'http://i4.fuimg.com/570833/c8a70fa19e9516e9s.png',
			'http://i4.fuimg.com/570833/c8a70fa19e9516e9s.png'
		],
		comment_list: [
			{
				name: 'sina_我叫大漂亮',
				content: '太赞了！'
			},
			{
				name: '盆克雷',
				content: '一杯小酒，三两知己，伴着烧烤是极好的！！'
			}
		],
		commentCount: 122
	},
	{
		id: 2,
		avatar: 'http://i2.tiimg.com/570833/9cdd3e3777195c5ds.png',
		username: '秀智77',
		is_follow: 0,
		is_Collection: 0,
		img: 'http://i2.tiimg.com/570833/05e078b022e08aafs.png',
		title: '干煸辣子鸡',
		content: '徐州游子到哪都惦记着的干煸辣子鸡',
		fabulous_list: [
			'http://i4.fuimg.com/570833/8933f3aceed6de6es.png',
			'http://i4.fuimg.com/570833/2354498c7a54256as.png',
			'http://i4.fuimg.com/570833/bce9bca008e3668bs.png',
			'http://i4.fuimg.com/570833/3691b57e688fe35cs.png',
			'http://i4.fuimg.com/570833/3ddb1d5e2dd54777s.png',
			'http://i4.fuimg.com/570833/0411c02b5e1352e5s.png',
			'http://i4.fuimg.com/570833/c8a70fa19e9516e9s.png',
			'http://i4.fuimg.com/570833/c8a70fa19e9516e9s.png'
		],
		comment_list: [
			{
				name: 'Ccok',
				content: '很美味的样子呢！哈喇子流一地'
			},
			{
				name: 'sina-美味nisa',
				content: '是啊，吃着爽爽的！'
			}
		],
		commentCount: 13542
	},
	{
		id: 3,
		avatar: 'http://i2.tiimg.com/570833/efb44240eec06102s.png',
		username: '安娜520',
		is_follow: 0,
		is_Collection: 0,
		img: 'http://i4.fuimg.com/570833/5c555e46bb82a0f9s.png',
		title: '柠檬孜然鸡腿',
		content: '最喜欢的食物之一 鸡肉带有孜然的香气 柠檬也起到了很好的解腻作用',
		fabulous_list: [
			'http://i4.fuimg.com/570833/8933f3aceed6de6es.png',
			'http://i4.fuimg.com/570833/2354498c7a54256as.png',
			'http://i4.fuimg.com/570833/bce9bca008e3668bs.png',
			'http://i4.fuimg.com/570833/3691b57e688fe35cs.png',
			'http://i4.fuimg.com/570833/3ddb1d5e2dd54777s.png',
			'http://i4.fuimg.com/570833/0411c02b5e1352e5s.png',
			'http://i4.fuimg.com/570833/c8a70fa19e9516e9s.png',
			'http://i4.fuimg.com/570833/c8a70fa19e9516e9s.png'
		],
		comment_list: [
			{
				name: 'Kitty',
				content: '看起来就好好吃，晚上等会来试着做做。'
			},
			{
				name: '可可人儿',
				content: 'OMG！好想吃！！！'
			}
		],
		commentCount: 2542
	}
]

export default {
	name: 'share',
	components: {
		Panel,
		Slider
	},
  	data () {
    	return {
    		sliderData,
    		swiperOption,
    		articleData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.share {
	width: 100%;
	margin-bottom:100px;

	.share_panel {
		z-index:10;
		>h4 {
			padding-left: 20px;
		}
	}

	.share_slider {
		width: 710px;
		margin:0 auto;
		.sliderimg {
			width:100%;
			height:250px;
		}
	}

	.list {
		width: 100%;
		.item {
			background:#fff;
			margin-bottom:20px;
			width: 100%;
			.head {
				width:100%;
				box-sizing:border-box;
				padding:20px 20px 0;
				position:relative;
				margin-bottom:20px;
				overflow:hidden;

				>img {
					width:60px;
					height:60px;
					float:left;
				}

				p {
					@include list(row);
					height:60px;
					position:absolute;
					left:100px;
					right:100px;
					top:20px;

					span {
						width:100%;
						height:30px;
						line-height:30px;
						&:first-child {
							font-size: 24px
						}	
						&:last-child {
							font-size: 24px;
							color:#999999;
						}					
					}
				}

				div {
					@include list(row);
					align-items:center;
					justify-content:center;
					float: right;
					width:88px;
					height:44px;
					border:2px solid #ff6e00;
					border-radius:5px;
					box-sizing:border-box;
					color:#ff6e00;
					font-size:20px;
					text-align:center;
					line-height:44px;
					span {
						&:before {
							content: '+';
							display: inline-block;
							width:14px;
							height:14px;
							color:#ff6e00;
							margin-right:8px;
							font-size:24px;
						}
					}
				}
			}

			>img {
				width:100%;
				height:545px;
			}

			.info {
				width: 100%;
				height:104px;
				h4 {
					@include truncation;
					width: 100%;
					height: 66px;
					line-height:66px;
					font-size:26px;
					box-sizing:border-box;
					padding:0 20px;
				}

				p {
					@include truncation;
					width: 100%;
					height:24px;
					line-height:24px;
					box-sizing:border-box;
					padding:0 20px;
					font-size:22px;
				}
			}

			.more {
				width:100%;
				height:90px;
				overflow:hidden;
				li {
					width:90px;
					height:100%;
					float:left;
					display:flex;
					align-items:center;
					justify-content:center;
					img {
						width:42px;
						height:42px;
					}

					&:last-child {
						float:right;
					}
				}
			}

			.piclist {
				@include list(row);
				justify-content:space-between;
				width:100%;
				height:90px;
				box-sizing:border-box;
				padding:0 20px;
				ul {
					@include list(row)
					align-items:center;
					width:560px;
					height: 100%;
					overflow:hidden;
					li {
						width: 60px;
						height:60px;
						margin:15px 20px 15px 0;
						img {
							width:100%;
							height:100%;
						}
					}
				}

				p {
					width:60px;
					height:60px;
					background:#c9c9c9;
					border-radius:5px;
					text-align:center;
					line-height:60px;
					font-size:20px;
				}
			}
			.comment {
				width:100%;
				height: 126px;
				li {
					height: 42px;
					line-height:42px;
					font-size:24px;
					width:100%;
					box-sizing:border-box;
					padding:0 20px;

					span {
						@include truncation;
						display:inline-block;
						max-width:220px;
						margin-right:20px;
						height:100%;
					}

					p {
						@include truncation;
						max-width:450px;
						height:100%;
						display:inline-block;
						color:c5c5c5;
						vertical-align: top;
					}

					&:last-child {
						font-size: 22px;
						color:#ff6e00;
						padding-bottom:15px;
					}
				}
			}
		}
	}
}
</style>