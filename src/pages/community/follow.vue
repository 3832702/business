<template>
	<div :class="$style.list">
		<div 
			:class="$style.item" 
			v-for="item,index in followData" 
			:key="item.id"
		>
			<div :class="$style.head">
				<img :src="item.avatar">
				<router-link to="/user" tag="p">
					<span>{{ item.username }}</span>
					<span>编辑推荐</span>
				</router-link>
				<div v-if="false">
					<img src="../../static/image/love1.png">
				</div>
			</div>
			<img :src="item.img" />
			<div :class="$style.content">
				<h4>{{ item.title }}</h4>
				<p>{{ item.content }}</p>
				<div @click="collectionHandler(index)">
					<img v-if="item.is_Collection" src="../../static/image/love.png">
					<img v-else src="../../static/image/love2.png">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { collection } from '../../service/index.js'
	
export default {
	props: {
		followData: {
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
    		user_id: '', // 用户id
    		activeIndex: 0, // 当前点击的索引值
    		collection_id: 0, // 要收藏的帖子id
    	}
  	},
  	methods: {
  		/**
  		 * [collectionHandler 点击收藏]
  		 */
  		collectionHandler(index) {
  			let { id } = this.followData[index];

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
  			let currObj = this.followData[this.activeIndex];
  			const { is_Collection } = currObj

  			currObj.is_Collection = !is_Collection;
  		}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.list {
	width:100%;
	margin-bottom:100px;
	.item {
		width: 100%;
		border-top:1px solid #999999;
		margin-top:10px;
		.head {
			width:100%;
			height:100px;
			box-sizing:border-box;
			padding:0 0 0 20px;
			position:relative;
			overflow:hidden;

			>img {
				width:60px;
				height:60px;
				float:left;
				margin-top:20px;
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
				float:right;
				justify-content:center;
				width: 100px;
				height:100px;
				img {
					width: 48px;
					height:48px;
				}
			}
		}

		>img {
			width:100%;
			height:550px;
		}

		.content {
			width: 100%;
			height:100px;
			position:relative;
			h4 {
				@include truncation;
				font-size: 26px;
				height:62px;
				line-height:62px;
				width: 90%;
				box-sizing:border-box;
				padding-left:20px;
			}
			p {
				@include truncation;
				font-size: 24px;
				height:48px;
				line-height:30px;
				width: 90%;
				box-sizing:border-box;
				padding-left:20px;
			};
			div {
				@include list(row);
				justify-content:center;
				align-items:center;
				position:absolute;
				height:100px;
				width:100px;
				right:0;
				top:0;

				img {
					width: 48px;
					height:48px;
				}
			}
		}
	}
}
</style>