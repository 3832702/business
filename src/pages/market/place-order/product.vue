<template>
	<div :class="$style.product">
		
		<div 
			:class="[$style.list, {[$style.first]: index === 0 }]" 
			v-for="item,index in commodityData" 
			:key="index"
		>
			<div :class="$style.head">
				<span>{{ item.shop_name }}</span>
			</div>
			<ul>
				<li v-for="productsItem in item.products" :key="productsItem.id">
					<img :src="productsItem.img"/>
					<div :class="$style.info">
						<h4>{{ productsItem.title }}</h4>
						<p>{{ productsItem.specifications }}</p>
						<span>不配送偏远地区</span>
					</div>
					<span>￥{{ productsItem.price }}</span>
				</li>
			</ul>
		</div>
		<div :class="$style.remarks">
			<textarea placeholder="备注"></textarea>
		</div>
	</div>
</template>

<script>
	
export default {
	props: {
		commodityData: {
			type: Array,
			default() {
				return [];
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
	margin-bottom:100px;
	border-bottom:1px solid #ccc;

	.list {
		width: 100%;
		border-top:1px solid #ccc;
		margin-top:40px;
		background:#fff;
		padding-bottom:40px;

		.head {
			width: 100%;
			height:90px;

			span {
				display:inline-flex;
				align-items:center;
				height:100%;
				font-size:26px;
				width:100%;
				box-sizing:border-box;
				padding:0 20px;

				&:before {
					width: 34px;
					height:34px;
					display:inline-block;
					content: ' ';
					background:url('../../../static/image/shop1.png');
					background-size:cover;
					margin-right:20px;
				}
			}
		}

		ul {
			width: 100%;
			padding:40px 0;
			position:relative;

			&:before {
				width: 94.5%;
				height:2px;
				content: ' ';
				background:#ccc;
				position:absolute;
				left: 20px;
				top:0;
			}

			&:after {
				width: 94.5%;
				height:1px;
				content: ' ';
				background:#ccc;
				position:absolute;
				left: 20px;
				bottom:0;
			}

			li {
				@include list(row);
				justify-content:space-between;
				width: 100%;
				box-sizing:border-box;
				padding:0 20px;
				margin-bottom:40px;

				&:last-child {
					margin:0;
				}
				
				>img {
					display:inline-block;
					width: 22%;
					height: 128px;
				}

				.info {
					width: 45%;
					h4 {
						@include truncation;
						width: 100%;
						height:28px;
						font-size: 26px;
						line-height: 26px;
					}

					p {
						width: 100%;
						height: 40px;
						line-height: 40px;
						font-size: 24px;
						color:#999999;
						margin-bottom:18px;
					}

					span {
						display:block;
						width: 200px;
						height: 44px;
						box-sizing:border-box;
						border:1px solid #ccc;
						border-radius:5px;
						line-height: 42px;
						text-align:center;
						font-size: 24px;
						background:#f5f5f5;
						color:#999999;
					}
				}

				>span {
					width: 18%;
					height: 128px;
					text-align:right;
					line-height: 128px;
					font-size:24px;
					color:#ff6600;
				}

			}
		}
	}

	.first {
		margin:0;
	}

	.remarks {
		width: 100%;
		height: 150px;
		background:#fff;

		textarea {
			width: 95%;
			height: 90px;
			border:1px solid #cccccc;
			background:#f5f5f5;
			border-radius:5px;
			box-sizing:border-box;
			margin:0 auto;
			display:block;
			font-size:26px;
			line-height: 40px;
			padding: 5px;
		}
	}
}

</style>