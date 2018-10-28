<template>
	<div :class="$style.cheader">
		<Heador>
			<h3>{{ title }}</h3>
			<router-link 
				to="/vegetable" 
				tag="div" 
				:class="$style.column" 
				slot="rightico"
			>
				分类
			</router-link>
		</Heador>
		<div :class="$style.city">
			<span>上海</span>
			<i></i>
		</div>
	</div>
</template>

<script>
import Heador from '../../public/common/header.vue'

export default {
	name: 'cheader',
	components: {
		Heador
	},
  	data () {
    	return {
    		title: '社区'
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.cheader {
	width: 100%;
	position:fixed;
	z-index:100;
	left:0;
	top:0;
	overflow:hidden;
	height:88px;
	line-height:88px;
	.column {
		width:120px;
		height:88px;
		text-align:center;
		position:absolute;
		right:0;
		font-size:26px;
		top:0;
	}
	.city {
		height: 88px;
		font-size:26px;
		position:absolute;
		z-index:111;
		left:40px;
		top:0;
		span {
			@include truncation;
			max-width:100px;
			display:inline-block;
			margin-right:5px;
		}
		&:after {
			@include leftArrowBottom(8px, #3f3700);
			content: ' ';
			display:inline-block;
			position:absolute;
			right:-20px;
			top:35px;
		}
	}
}
</style>