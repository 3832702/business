<template>
	<div :class="$style.list">
		<div :class="$style.item">
			<span>头像</span>
			<p>
				<img src="http://i4.fuimg.com/570833/989d9c351ff0c998s.png">
			</p>
		</div>
		<div :class="$style.item">
			<span>昵称</span>
			<p>小时光</p>
		</div>
		<div :class="$style.item">
			<span>性别</span>
			<p>女</p>
		</div>
		<div :class="$style.item">
			<span>家乡</span>
			<p>浙江金华</p>
		</div>
		<div :class="$style.item">
			<span>个性签名</span>
			<p>面朝大海，春暖花开面朝大海，面朝大海，春暖花开面朝大海，春暖花开面朝大海，春暖花开面朝大海，春暖花开</p>
		</div>
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

.list {
	width: 100%;
	margin-top:88px;
	padding-top:20px;

	.item {
		@include list(row);
		align-items:center;
		justify-content:space-between;
		width: 100%;
		height: 100px;
		background:#fff;
		box-sizing:border-box;
		padding:0 70px 0 40px;
		position:relative;
		font-size: 24px;

		&:after {
			content: ' ';
			@include leftArrow($width:18px,$bg:#666666);
			position:absolute;
			right:40px;
			top:35px;
		}

		span {
			color:#666666;
		}

		p {
			@include truncation;
			width: 70%;
			color:#666666;
			text-align:right;

			img {
				width:70px;
				height:70px;
				border-radius:50%;
			}
		}

		&:first-child {
			border-bottom:1px solid #ccc;
		}

		&:nth-of-type(2) {
			margin-bottom:20px;
		}

		&:nth-of-type(n+2) {
			height: 92px;	
			border-bottom:1px solid #ccc;		
		}

		&:last-child {
			border:none;
		}
	}
}
</style>