<template>
	<div :class="$style.evaluate">
		<div>
			<span>( {{ evaluate.num }} )</span>
			<span>{{ evaluate.praise }}</span>
		</div>
		<ul>
			<li 
				v-for="item in evaluate.list"
				:key="item.id"
			>
				<div>
					<img :src="item.avatar">
					<span>{{ item.user_name }}</span>
					<p>好评</p>
				</div>
				<p>{{ item.content }}</p>
				<ul>
					<li v-for="picItem,picIndex in item.pic_list" :key="picIndex">
						<img :src="picItem"/>
					</li>
				</ul>
			</li>
		</ul>
		<p>查看更多评价</p>
	</div>
</template>

<script>

export default {
	props: {
		evaluate: {
			type: Object,
			default() {
				return {}
			}
		}
	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';
.evaluate {
	width: 100%;
	margin-top:20px;
	background:#fff;
	>div {
		@include list(row);
		align-items:center;
		justify-content:space-between;
		width:100%;
		height:90px;
		box-sizing:border-box;
		padding:0 20px;
		border-top:1px solid #ccc;
		span {
			font-size: 24px;
			&:first-child {
				color:#999999;
				&:before {
					content: '晒单评价';
					color:#333333;
					display:inline-block;
					margin-right:20px;
				}
			}
			&:last-child {
				color:#ff6600;
				&:after {
					content: '好评度';
					color:#999999;
					display:inline-block;
				}
			}
		}
	}
	>ul {
		border-top:1px  solid #ccc;
		width: 100%;
		>li {
			width: 100%;
			padding-bottom:20px;
			position:relative;
			&:after {
				content: ' ';
				width: 94%;
				height: 1px;
				background:#ccc;
				position:absolute;
				left:3%;
				bottom:0;
			}
			
			&:last-child {
				&:after {
					background:transparent;
				}
			}

			div {
				width: 100%;
				height: 74px;
				box-sizing:border-box;
				padding:6px 20px 0;
				font-size:24px;
				img {
					width: 40px;
					height:40px;
					margin-top:14px;
					border-radius:50%;
					display:inline-block;
					margin-right:18px;
				}
				span {
					width: 300px;
					height:68px;
					line-height:68px;
					display:inline-block;
					vertical-align:top;
				}
				p {
					float:right;
					height:68px;
					line-height:68px;
					&:before {
						content: ' ';
						display:inline-block;
						width:30px;
						height:30px;
						background:url('../../../static/image/praise.png') no-repeat;
						background-size: cover;
						vertical-align:middle;	
						margin-right:20px;
					}
				}
			}

			>p {
				@include multiline-truncation;
				max-height:64px;
				box-sizing:border-box;
				width:100%;
				padding:0 20px;
				font-size: 24px;
				line-height:32px;
				margin-bottom:10px;
			}

			ul {
				@include list(row);
				box-sizing:border-box;
				padding:0 20px;
				width: 100%;
				height:160px;

				li {
					width: 150px;
					height:160px;
					margin-left: 20px;

					&:first-child {
						margin:0;
					}

					img {
						width: 100%;
						height:100%;
					}
				}
			}
		}
	}
	>p {
		width: 100%;
		height:92px;
		border: 1px solid #ccc {
			left: none; 
			right: none;
		};
		font-size:24px;
		line-height:92px;
		text-align:center;
		color:#999999;
	}
}
</style>