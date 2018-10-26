<template>
	<div>
		<Heador :title="title"></Heador>		
		<List></List>
		<div :class="$style.release">
			<input placeholder="发布你的见解吧" type="text" name="">
			<button>发布</button>
		</div>
	</div>
</template>

<script>

import Heador from '../../../public/common/header.vue'
import List from './list.vue'

export default {
	components: {
		Heador,
		List
	},
	data () {
    	return {
    		title: '全部评论'
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

	.release {
		@include list(row);
		justify-content:space-between;
		width: 100%;
		height:100px;
		box-sizing:border-box;
		position:fixed;
		left:0;
		bottom:0;
		background:#fff;

		input {
			width: 85%;
			height: 100%;
			font-size: 26px;
			line-height: 100px;
			border:none;
			text-indent:20px;
		}

		button {
			width: 110px;
			height: 100%;
			font-size: 26px;
			line-height: 100px;
			text-align:center;
			color:#ff6e00;
			border:none;
			background:#fff;
			padding:0;
		}
	}
</style>