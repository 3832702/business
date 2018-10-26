<template>
	<div :class="$style.navbar">
		<p>
			运费 <span>￥20</span>
			合计 <span>￥140</span>
		</p>
		<button>去支付</button>
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

.navbar {
	width: 100%;
	height: 98px;
	position:fixed;
	left:0;
	bottom:0;
	background:#fff;
	box-sizing:border-box;
	border-top:1px solid #ccc;

	p {
		@include list(row);
		align-items:center;
		justify-content:flex-end;
		width: 71%;
		height: 100%;
		float:left;
		font-size: 24px;
		color:#a0a0a0;
		span {
			color:#ff6600;
			margin-right:10px;
		}
	}

	button {
		width: 28%;
		height: 98px;
		border:none;
		padding:0;
		text-align:center;
		line-height:98px;
		color:#fff;
		background:#ff6600;
		font-size: 30px;
		float:right;
	}
}
</style>