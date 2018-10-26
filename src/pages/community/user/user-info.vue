<template>
	<div :class="$style.head">
		<div :class="$style.info">
			<img src="http://i4.fuimg.com/570833/989d9c351ff0c998s.png" />
			<ul>
				<li :class="$style.left">
					<span>我爱洗澡</span>
					<span>年龄: 21</span>
				</li>
				<li :class="$style.right">
					<span :class="$style.grade">厨娘</span>
					<span>常住地: 上海</span>
				</li>
			</ul>
		</div>		
		<p>吃货一枚，爱吃，爱玩，爱睡.....</p>
		<ul>
			<li>
				<span>0</span>
				<span>关注</span>
			</li>
			<li>
				<span>6002</span>
				<span>粉丝</span>
			</li>
			<li>
				<span>4002</span>
				<span>积分</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
    	return {

    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.head {
	width: 100%;
	margin-top:88px;
	background:#fff;
	margin-bottom:20px;

	.info {
		width: 100%;
		height: 299px;
		background:url('../../../static/image/user-bg.png') no-repeat;
		background-size:cover;
		border-top:1px solid #ccc;

		>img {
			width: 100px;
			height: 100px;
			border-radius:50%;
			display:block;
			margin:80px auto 0;
			margin-bottom:10px;
		}

		ul {
			@include list(row);
			width: 100%;

			li {
				@include list;
				width: 50%;
				height: 90px;
				box-sizing:border-box;
				color:#333;

				span {
					height: 44px;
					line-height: 44px;
					font-size:26px;

					&:last-child {
						font-size: 24px;
						color:#949493;
					}
				}

				.grade {
					@include list(row);
					align-items:center;
					justify-content:center;
					width: 100px;
					height:40px;
					font-size: 24px;
					box-sizing:border-box;
					border:1px solid #ccc;
					border-radius:5px;
					margin-left:25px;

					&:before {
						width: 26px;
						height: 26px;
						content:' ';
						background:url('../../../static/image/identity.png') no-repeat;
						background-size:cover;
						margin-right:10px;
					}
				}
			}

			.left {
				padding-right: 40px;
				align-items:flex-end;
			}

			.right {
				padding-left: 50px;
			}
		}


	}

	>p {
		width: 100%;
		box-sizing:border-box;
		padding:0 20px;
		height: 64px;
		line-height: 64px;
		font-size:24px;
		color:#333333;
	}

	>ul {
		@include list(row);
		align-items:center;
		width:100%;
		box-sizing:border-box;
		padding:0 20px;
		border-bottom:1px solid #ccc;
		li {
			@include list;
			align-items:center;
			justify-content:center;
			flex: 1;
			height: 90px;
			position:relative;

			&:last-child {
				&:after {
					background:transparent;
				}
			}
			
			&:after {
				width: 1px;
				height: 61px;
				background:#ccc;
				content:' ';
				position:absolute;
				right:0;
				top:17px;
			}

			span {
				width: 100%;
				height: 42px;
				line-height:42px;
				text-align:center;
				&:first-child {
					color:#ff7324;
					font-size: 28px;
				}
				&:last-child {
					color:#333333;
					font-size:28px;
				}
			}
		}
	}
}

</style>