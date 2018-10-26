<template>
	<div :class="$style.nav">
		<div>
			<img src="../../static/image/checkout1.png"/>
			全选
		</div>
		<ul>
			<li><span :class="$style.size24">不含运费</span>合计: <span :class="$style.ff6600">0.00</span></li>
			<li>优惠: 0.00</li>
		</ul>
		<button>去结算</button>
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
@import '../../public/css/element.scss';

.nav {
	@include list(row);
	justify-content:space-between;
	width: 100%;
	height: 98px;
	box-sizing:border-box;
	border-top:1px solid #ccc;
	position:fixed;
	left:0;
	bottom:0;

	>div {
		@include list(row);
		align-items:center;
		width: 100px;
		margin-left: 20px;
		font-size:24px;

		img {
			width: 34px;
			height: 34px;
			margin-right:12px;
		}
	}

	ul {
		@include list;
		width: 43%;
		height: 100%;
		box-sizing:border-box;
		padding:14px 0;

		li {
			height: 34px;
			width:100%;
			line-height: 34px;
			font-size: 26px;
			text-align:right;

			.colorff6600 {
				color:#ff6600;
			}

			.size24 {
				font-size: 24px;
				margin-right:15px;
				color:#999999;
			}
		}
	}

	button {
		width: 210px;
		height: 100%;
		line-height: 98px;
		text-align:center;
		border:none;
		padding:0;
		color:#fff;
		font-size:30px;
		background:#ff6600;
	}
}
</style>