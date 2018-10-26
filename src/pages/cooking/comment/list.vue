<template>
	<ul :class="$style.list">
		<li>
			<div :class="$style.head">
				<img src="http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg">
				<div>
					<span>小孩</span>
					<span>20分钟前</span>
				</div>
			</div>
			<p>感觉您十分地专业，学习啦</p>
		</li>	
		<li>
			<div :class="$style.head">
				<img src="http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg">
				<div>
					<span>小孩</span>
					<span>20分钟前</span>
				</div>
			</div>
			<p>感觉您十分地专业，学习啦</p>
		</li>	
		<li>
			<div :class="$style.head">
				<img src="http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg">
				<div>
					<span>小孩</span>
					<span>20分钟前</span>
				</div>
			</div>
			<p>感觉您十分地专业，学习啦</p>
		</li>	
		<li>
			<div :class="$style.head">
				<img src="http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg">
				<div>
					<span>小孩</span>
					<span>20分钟前</span>
				</div>
			</div>
			<p>感觉您十分地专业，学习啦</p>
		</li>	
		<li>
			<div :class="$style.head">
				<img src="http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg">
				<div>
					<span>小孩</span>
					<span>20分钟前</span>
				</div>
			</div>
			<p>感觉您十分地专业，学习啦</p>
		</li>	
	</ul>
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

.list {
	width: 100%;
	margin-top:88px;

	li {
		width: 100%;
		box-sizing:border-box;
		padding:0 20px;
		background:#fff;
		margin-bottom:20px;

		.head {
			width: 100%;
			box-sizing:border-box;
			padding:20px 20px 0;
			height:70px;
			@include list(row);

			img {
				width: 50px;
				height: 50px;
				margin-right:20px;
				border-radius:50%;
			}

			div {
				@include list;
				span {
					color:#666666;
					&:first-child {
						height: 26px;
						font-size: 24px;
						line-height: 24px;
					}

					&:last-child {
						height: 24px;
						font-size: 22px;
						line-height: 24px;
					}
				}
			}
		}

		>p {
			width: 100%;
			box-sizing:border-box;
			padding:15px 20px;
			line-height: 32px;
			font-size: 24px;
			max-height: 99999px;
			color:#666666;
		}
	}
}
</style>
