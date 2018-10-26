<template>
	<div>
		<Heador :title="title"></Heador>		
		<List></List>
		<Hot></Hot>
		<div :class="$style.release">
			<img src="../../../static/image/camera.png">
			<span>参与话题</span>
		</div>
	</div>
</template>

<script>

import Heador from '../../../public/common/header.vue'
import List from './list.vue'
import Hot from './hot.vue'

export default {
	components: {
		Heador,
		List,
		Hot
	},
	data () {
    	return {
    		title: '戒不掉的甜品'
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.release {
	@include list(row);
	align-items:center;
	justify-content:center;
	width: 100%;
	height: 100px;
	position:fixed;
	left:0;
	bottom:0;
	background:#333333;
	font-size:34px;
	color:#fff;

	img {
		width: 52px;
		height: 45px;
		margin-right:20px;
	}
}
</style>