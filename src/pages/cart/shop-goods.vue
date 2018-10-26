<template>
	<div>
		<div :class="$style.shop" v-for="item,index in shopData" :key="index">
			<div :class="$style.head">
				<img :class="$style.checkout" src="../../static/image/checkout1.png" />
				<span>{{ item.title }}</span>
			</div>
			<ul>
				<li v-for="productItem in item.list" :key="productItem.id">
					<img :class="$style.checkout" src="../../static/image/checkout1.png"/>
					<img :class="$style.productImg" :src="productItem.productImg"/>
					<div :class="$style.info">
						<h4>{{ productItem.name }}</h4>
						<p>{{ productItem.desc }}</p>
						<div>
							<button>-</button>
							<span>{{ productItem.num }}</span>
							<button>+</button>
						</div>
					</div>
					<span>￥{{ productItem.price }}</span>
				</li>
			</ul>
			<div :class="$style.more">
				<p>
					<img src="../../static/image/mail.png">
					<span>店铺满58元包邮</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
const shopData = [
	{
		title: '鲜活旗舰店',
		list: [
			{
				name: '挪威进口冰鲜 新鲜三文鱼...',
				desc: '500g 送芥末酱',
				productImg: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
				num: 1,
				price: '12220.00'
			}
		]
	}
]

export default {
	name: 'shop-goods',
  	data () {
    	return {
    		shopData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.shop {
	width: 100%;
	margin-top:88px;
	background:#fff;

	.head {
		@include list(row);
		align-items:center;
		width: 100%;
		height: 90px;
		box-sizing:border-box;
		padding:0 20px;
		border-bottom:1px solid #ccc;
		
		span {
			@include list(row);
			align-items:center;
			height: 100%;
			font-size:28px;
			color:#333333;
			&:before {
				width: 34px;
				height: 34px;
				content: ' ';
				display:inline-block;
				background:url('../../static/image/shop1.png');
				background-size:cover;
				margin:0 20px;
			}

			&:after {
				@include leftArrow($bg:#b7b7b7);
				content: ' ';
				margin-left:20px;
			}
		}

	}

	ul {
		width: 100%;
		padding:40px 0 0;

		li {
			@include list(row);
			justify-content:space-between;
			align-items:center;
			width: 100%;
			box-sizing:border-box;
			padding:0 20px 40px;
			position:relative;

			&:after {
				width: 94.5%;
				height:2px;
				content:' ';
				position:absolute;
				left:20px;
				bottom:0;
				background:#ccc;
			}

			.productImg {
				width: 168px;
				height: 128px;
			}

			.info {
				width: 42%;
				height: 128px;
				position: relative;
				h4 {
					@include truncation;
					width: 100%;
					height: 28px;
					font-size:26px;
					line-height: 28px;
				}

				p {
					width: 100%;
					height: 40px;
					line-height: 40px;
					font-size:24px;
					color:#b6b6b6;
				}

				>div {
					@include list(row);
					align-items:center;
					min-width: 90px;
					height: 40px;
					position:absolute;
					left:0;
					bottom:0;
					
					>button {
						width: 40px;
						height: 40px;
						border:none;
						padding:0;
						color:#cccccc;
						background:#f1f4ed;
						border:1px solid #cccccc;
						box-sizing:border-box;
					}

					span {
						height: 40px;
						font-size:24px;
						border-top:1px solid #cccccc;
						border-bottom:1px solid #cccccc;
						padding:0 15px;
						line-height:40px;
						box-sizing:border-box;
					}
				}
			}

			>span {
				min-width: 120px;
				font-size: 24px;
				color:#ff6600;
				text-align:right;
			}
		}
	}

	.more {
		width: 100%;
		box-sizing:border-box;
		padding:0 20px;

		p {
			@include list(row);
			align-items:center;
			height:70px;
			color:#7f7f7f;
			>img {
				width: 60px;
				height: 30px;
				margin-right:20px;
			}

			span {
				font-size:24px;
			}
		}
	}

	.checkout {
		width: 34px;
		height: 34px;
	}
}
</style>