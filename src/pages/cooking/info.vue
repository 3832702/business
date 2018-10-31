<template>
	<div :class="$style.head">
		<img :src="article.banner"/>
		<h4>{{ article.title }}</h4>	
		<div :class="$style.user">
			<img :src="article.avatar">
			<p>{{ article.username }}</p>
			<span @click="followHandler" v-if="!article.is_follow">+ 关注</span>
			<span @click="followHandler" v-else>已关注</span>
		</div>	
		<p>
			{{ article.rowse_num }}浏览-{{ article.collection_num }}收藏-{{ article.study_num }}学做
		</p>
		<div v-if="article.is_sole" :class="$style.more">
			<span>独家</span>
		</div>
		<hr>
		<div :class="$style.content" v-html="article.content"></div>
		<ul :class="$style.release">
			<li>上传我学做的</li>
			<li>{{ article.comment_num }}条评论</li>
		</ul>
		<time>- 发布于{{ article.timer }} -</time>
		<div :class="$style.interactive">
			<div>
				<router-link to="/comment" tag="span">评论</router-link>
				<span 
					@click="collectionHandler" 
					v-if="article.is_Collection" 
					:class="$style.collection"
				>
					已收藏
				</span>
				<span @click="collectionHandler" v-else>收藏</span>
			</div>
		</div>
	</div>
</template>

<script>

import { follow, collection } from '../../service/index.js'

export default {
	props: {
		article: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		getUserId() {
			return this.$getStore('user_id');
		},

		/**
		 * [followHandler 请求关注接口]
		 * @return {[type]} [description]
		 */
		followHandler() {
			const { user_id: follow_id } = this.article;
			const opt = { user_id: this.getUserId(), follow_id  }
			follow(opt)
				.then(res => this.changeFollowHandler())
				.catch(err => console.log(err))
		},

		/**
		 * [changeFollowHandler 更改关注]
		 * @return {[type]} [description]
		 */
		changeFollowHandler() {
			this.article.is_follow = !this.article.is_follow;
		},

		/**
		 * [collectionHandler 发送收藏请求]
		 * @return {[type]} [description]
		 */
		collectionHandler() {
			const { id: collection_id } = this.article;
			const opt = { user_id: this.getUserId(), collection_id  }

			collection(opt)
				.then(res => this.changeCollectionHandler())
				.catch(err => console.log(err))
		},

		/**
		 * [changeCollectionHandler 更改收藏]
		 * @return {[type]} [description]
		 */
		changeCollectionHandler() {
			this.article.is_Collection = !this.article.is_Collection;
		}
	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.head {
	width: 100%;
	margin-top:88px;

	>img {
		width:100%;
		height: 528px;
		margin-bottom:30px;
	}

	h4 {
		width: 100%;
		line-height: 52px;
		box-sizing:border-box;
		padding:0 20px;
		font-size:34px;
		text-align:center;
	}

	>p {
		width: 100%;
		height: 36px;
		line-height:36px;
		font-size:22px;
		text-align:center;
		color:#929292;
	}

	.more {
		@include list(row)
		justify-content:center;
		align-items:center;
		width:100%;
		height:50px;
		margin-bottom:15px;

		span {
			width: 60px;
			height: 30px;
			text-align:center;
			color:#fff;
			line-height:30px;
			font-size:22px;
			background:#ff6e00;
			border-radius:5px;
		}
	}

	.user {
		@include list(row);
		align-items:center;
		justify-content:center;
		width: 100%;
		height: 50px;
		box-sizing:border-box;
		padding:0 20px;
		position:relative;

		>img {
			width: 40px;
			height: 40px;
			border-radius:50%;
		}

		p {
			font-size:24px;
			color:#656565;
			margin:0 20px;
		}

		span {
			width: 88px;
			height: 44px;
			border-radius:5px;
			line-height:42px;
			font-size: 24px;
			text-align:center;
			color:#fe6d00;
			border:1px solid #fe6d00;
			position:absolute;
			right:60px;
			top:0;
		}
	}

	hr {
		background:#ccc;
	}

	.content {
		width: 100%;
		margin-top:10px;
		p {
			width: 100%;
			box-sizing:border-box;
			padding:0 20px;
			line-height:32px;
			max-height: 99999px;
			font-size: 24px;
			color:#666666;
			margin:10px 0;
		}

		img {
			width: 94.5%;
			height: 400px;
			margin-left:20px;
		}
	}

	.release {
		width: 100%;
		padding-top:10px;

		li {
			@include list(row);
			align-items:center;
			width: 100%;
			height: 40px;
			font-size: 24px;
			box-sizing:border-box;
			padding-left: 20px;
			color:#fe9663;

			&:before {
				content: ' ';
				width: 10px;
				height: 10px;
				background:#ff6e00;
				border-radius:50%;
				margin-right:10px;
			}
		}
	}

	time {
		width: 100%;
		height: 60px;
		line-height: 60px;
		display:block;
		font-size:22px;
		color:#666666;
		text-align:center;
		margin-bottom:10px;
	}

	.interactive {
		width: 100%;
		@include list(row);
		justify-content:flex-end;

		>div {
			@include list(row);
			justify-content:center;
			width: 400px;
			background:#fff;
			height: 60px;
			border-radius: 30px 0 0 30px;
			margin-bottom:100px;

			span {
				@include list(row);
				align-items:center;
				font-size: 24px;
				width: 126px;
				color:#666666;
				&:before {
					content: ' ';
					width: 24px;
					height: 24px;
					margin-right:10px;
				}

				&:first-child {
					position:relative;
					margin-right:20px;
					&:before {
						background:url('../../static/image/comment2.png');
						background-size:cover;
					}
					&:after {
						content: ' ';
						width:2px;
						box-sizing:border-box;
						border-left: 1px solid #666666;
						position:absolute;
						top: 20px;
						bottom:20px;
						right:-5px;
					}
				}

				&:last-child {
					&:before {
						background:url('../../static/image/love2.png');
						background-size:cover;
					}
				}
			}

			.collection {
				&:before {
					background:url('../../static/image/love3.png') !important;
					background-size:cover !important;
				}
			}
		}
	}
}

</style>