<template>
	<div :class="$style.article">
		<router-link 
			:to="item.path" 
			tag="div" 
			:class="$style.item" 
			v-for="item in articleData" 
			:key="item.id"
		>
			<img :src="item.img">
			<h4>{{ item.title }}</h4>
			<div :class="$style.user">
				<img :src="item.avatar">
				<span>{{ item.username }}</span>
			</div>
			<p>{{ item.content }}</p>
			<slot name="browse">
				<div :class="$style.browse">
					<span>{{ item.browse }}</span>
					<span>{{ item.collection }}</span>
				</div>
			</slot>
			<div v-if="item.is_video" :class="$style.mask"></div>
		</router-link>
	</div>
</template>

<script>

export default {
	props: {
		articleData: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data () {
    	return {
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../css/element.scss';

	.article {
		width: 100%;
		margin-bottom:100px;
		.item {
			width: 100%;
			background:#fff;
			color:#666666;
			position:relative;
			margin-bottom:20px;
			>img {
				width: 100%;
				height: 400px;
				margin-bottom:10px;
			}
			h4 {
				width:100%;
				height:50px;
				line-height:50px;
				text-align:center;
				font-size:30px;
			}
			.user {
				@include flex(row);
				width: 100%;
				height: 40px;
				align-items:center;
				justify-content:center;
				padding-bottom:12px;
				img {
					width: 40px;
					height:40px;
					border-radius:50%;
					margin-right:20px;
				}
				span {
					font-size: 22px;
				}
			}
			p {
				@include multiline-truncation;
				width:100%;
				box-sizing:border-box;
				padding:0 20px;
				line-height:35px;
				height: 70px;
				font-size: 24px;
			}
			.browse {
				@include list;
				width: 98px;
				height:60px;
				position:absolute;
				top:340px;
				right:20px;
				color:#fff;
				span {
					width: 100%;
					height: 30px;
					font-size:18px;
					display:inline-flex;
					align-items:center;
					&:before {
						content: '';
						width: 20px;
						height: 20px;
						display:block;
						margin-right:10px;
					}
					&:first-child {
						&:before {
							background:url('../../static/image/eye.png') no-repeat;
							background-size:cover;
						}
					}
					&:last-child {
						&:before {
							background:url('../../static/image/stars.png') no-repeat;
							background-size:cover;
						}
					}
				}
			}
			.mask {
				width:100px;
				height:100px;
				position:absolute;
				left:50%;
				top:150px;
				z-index:12;
				transform:translateX(-50%);
				background:url('../../static/image/mask.png') no-repeat;
				background-size:cover;
			}
		}
	}
</style>