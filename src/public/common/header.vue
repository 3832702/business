<template>
	<div :title="title" :class="$style.header">
		<slot>
			<div @click="backHandler" :class="$style.back"></div>
			<h3 :class="$style.title">{{ title }}</h3>
		</slot>
		<slot name="rightico"></slot>
	</div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
	props: {
		title: {
			type: String,
			default: '今日最新'
		}
	},
	data () {
    	return {

    	}
  	},
  	methods: {
  		...mapMutations([
  			'CHANGE_BACK'
  		]),
  		/*
  			@回退到上一页
  		 */
  		backHandler() {
  			this.$router.back();
  		}
  	}
}
</script>

<style lang="scss" module>
	@import '../css/element.scss';
	
	.header {
		width: 100%;
		height: 88px;
		background:#ffdd00;
		position:fixed;
		left:0;
		top:0;
		z-index: 100;
		.back {
			width: 120px;
			height: 100%;
			position:absolute;
			background:url('../../static/image/back.png') no-repeat 50% 50%;
			left:0;
		}
		h3 {
			position: absolute;
			left:120px;
			right: 120px;
			height:88px;
			line-height:88px;
			text-align:center;
			font-size:34px;
			color:#000;
		}
	}
	
</style>