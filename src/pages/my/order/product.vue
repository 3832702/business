<template>
	<div :class="$style.product">
		<div :class="$style.item" v-for="item,index in product" :key="index">
			<div :class="$style.head">
				<h4>{{ item.title }}</h4>
				<slot name="status"></slot>
			</div>
			<ul>
				<li v-for="productItem in item.list" :key="productItem.id">
					<img :src="productItem.img" />
					<div :class="$style.info">
						<h4>{{ productItem.title }}</h4>
						<p>{{ productItem.desc }}</p>
					</div>
					<p>
						<span>￥{{ productItem.price }}</span>
						<span>×{{ productItem.num }}</span>
					</p>
				</li>
			</ul>
			<div :class="$style.welfare">
				<p>
					<img src="../../../static/image/mail.png" />
					<span>店铺满58元包邮</span>
				</p>
			</div>
			<p>共1件商品,合计{{ item.count_price }}<span>(含运费￥.00)</span></p>
			<slot name="more"></slot>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		product: {
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
@import '../../../public/css/element.scss';
.product {
	width: 100%;
	.item {
		width: 100%;
		margin-bottom:20px;
		background:#fff;

		.head {
			@include list(row);
			width: 100%;
			height: 86px;
			align-items:center;
			justify-content:space-between;
			box-sizing:border-box;
			padding:0 20px;
			font-size:26px;
			position:relative;

			&:after {
				content: ' ';
				height: 2px;
				position:absolute;
				left: 20px;
				bottom:0;
				right: 20px;
				background:#ccc;
			}

			>h4 {
				@include list(row);
				align-items:center;
				height: 86px;
				&:before {
					width: 34px;
					height: 34px;
					content: ' ';
					background:url('../../../static/image/shop1.png');
					background-size:cover;
					margin-right:20px;
				}

				&:after {
					@include leftArrow($bg:#999999);
					content: ' ';
					margin-left:20px;
				}
			}
		}

		>ul {
			width: 100%;
			padding-top:40px;
			li {
				@include list(row);
				justify-content:space-between;
				width: 100%;
				box-sizing:border-box;
				padding:0 20px 20px;
				>img {
					width: 168px;
					height: 128px;
				}
				.info {
					width: 43%;
					height: 128px;

					>h4 {
						@include truncation;
						width: 100%;
						font-size:26px;
						height:28px;
						line-height: 28px;
					}

					p {
						@include truncation;
						width: 100%;
						font-size: 24px;
						height: 40px;
						line-height:40px;
						text-align:left;
						color:#999999;
					}
				}

				>p {
					@include list;
					width: 160px;
					height:128px;
					justify-content:flex-end;
					align-items:flex-end;

					span {
						width: 100%;
						height: 40px;
						line-height:40px;
						font-size:24px;
						color:#999999;
						text-align:right;
					}
				}
			}
		}

		.welfare {
			width: 100%;
			overflow:hidden;
			position:relative;
			min-height:2px;
			&:after {
				height: 2px;
				content: ' ';
				position:absolute;
				left:20px;
				bottom:0;
				right: 20px;
				background:#ccc;
			}
			p {
				@include list(row);
				align-items:center;
				width: 100%;
				height: 30px;
				margin-bottom:20px;
				box-sizing:border-box;
				padding:0 20px;	

				img {
					width: 60px;
					height: 30px;
					margin-right:20px;
				}

				span {
					font-size:24px;
					color:#666666;
				}
			}
		}

		>p {
			width: 100%;
			height: 85px;
			line-height:85px;
			text-align:right;
			box-sizing:border-box;
			padding:0 20px;
			font-size: 24px;
			color:#666666;

			span {
				font-size:22px;
				color:#aaaaaa;
				margin-left:15px;
			}
		}
	}
}
</style>