<template>
	<div :class="$style.share">
		<Panel :class="$style.share_panel" panelTitle="最新">
			<Slider :class="$style.share_slider" :swiperOption="swiperOption" :sliderData="slider_list">
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
						<div :class="{[$style.already]: item.is_follow }" @click="followHandler(index)">
							<span :class="$style.follow" v-if="!item.is_follow">关注</span>
							<span v-else>已关注</span>
						</div>
					</div>
					<img :src="item.img"/>
					<div :class="$style.info">
						<h4>{{ item.title }}</h4>
						<p>{{ item.content }}</p>
					</div>
					<ul :class="$style.more">
						<li @click="collectionHandler(index)">
							<img v-if="item.is_Collection" src="../../static/image/love.png">
							<img v-else src="../../static/image/love2.png">
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

import { follow, collection } from '../../service/index.js'

const swiperOption = {
	slidesPerView: 2.8,
	spaceBetween: 15,
	freeMode: true
}

export default {
	components: {
		Panel,
		Slider
	},
	props: {
		// 推荐
		articleData: {
			type: Array,
			default() {
				return []
			}
		},

		// 最新
		slider_list: {
			type: Array,
			default() {
				return []
			}
		}
	},
	created() {
		this.user_id = this.$getStore('user_id');
	},
  	data () {
    	return {
    		swiperOption,
    		user_id: '', // 用户id
    		follow_id: '', // 要关注的用户id
    		activeIndex: 0, // 当前点击的索引值
    		collection_id: 0, // 要收藏的帖子id
    	}
  	},
  	methods: {
  		/**
  		 * [followHandler 点击关注]
  		 */
  		followHandler(index) {
  			let { user_id } = this.articleData[index];

  			this.activeIndex = index;
  			this.follow_id = user_id;

  			this.fetchFollowHandler();
  		},

  		/**
  		 * [fetchFollowHandler 发起关注请求]
  		 */
  		fetchFollowHandler() {
  			const { user_id, follow_id } = this;

  			follow({ user_id, follow_id })
  				.then(res => { this.changeFollow() })
  				.catch(err => {console.log(err)})
  		},

  		/**
  		 * [changeFollow  处理关注请求]
  		 */
  		changeFollow() {
  			let currObj = this.articleData[this.activeIndex];
  			const { is_follow } = currObj

  			currObj.is_follow = !is_follow;
  		},

  		/**
  		 * [collectionHandler 点击收藏]
  		 */
  		collectionHandler(index) {
  			let { id } = this.articleData[index];

  			this.activeIndex = index;
  			this.collection_id = id;

  			this.fetchCollectionHandler();
  		},

  		/**
  		 * [collectionHandler 发送收藏请求]
  		 */
  		fetchCollectionHandler() {
  			const { user_id, collection_id } = this;

  			collection({ user_id, collection_id })
  				.then(res => { this.changeCollection() })
  				.catch(err => {console.log(err)})
  		},

  		/**
  		 * [changeCollection 处理收藏请求]
  		 */
  		changeCollection() {
  			let currObj = this.articleData[this.activeIndex];
  			const { is_Collection } = currObj

  			currObj.is_Collection = !is_Collection;
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
					.follow {
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

				.already {
					border:2px solid #ffdd00;
					color:#ffdd00;
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