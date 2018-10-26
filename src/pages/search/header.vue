<template>
	<div :class="$style.search">
		<label>
			<img src="../../static/image/search.png">
			<input placeholder="商品名" type="text" name="">	
		</label>
		<button>取消</button>
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

.search {
	background:#ffdd00;
	position:fixed;
	left:0;
	top:0;
	z-index:1111111;
	width: 100%;
	height: 88px;
	box-sizing:border-box;
	padding:0 20px;
	@include list(row);
	align-items:center;
	justify-content:space-between;

	label {
		@include list(row);
		width: 82%;
		height: 60px;
		line-height: 60px;
		position:relative;
		input {
			width: 100%;
			height: 100%;
			border-radius:30px;
			background:#fff;
			border:none;
			padding:0;
			text-indent:60px;
			font-size:26px;
		}

		img {
			width: 28px;
			height: 28px;
			position:absolute;
			left: 20px;
			top: 15px;
		}
	}

	button {
		width: 90px;
		height: 100%;
		line-height: 88px;
		padding:0;
		border:none;
		text-align:right;
		font-size: 34px;
		background:transparent;
	}
}
</style>