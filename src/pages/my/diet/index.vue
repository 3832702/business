<template>
	<div>
		<Heador :title="title"></Heador>	
		<List></List>
		<button :class="$style.uploade">上传</button>
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
    		title: '我的菜谱'
    	}
  	}
}
</script>

<style lang="scss" module>
.uploade {
	width:250px;
	height:90px;
	display:block;
	font-size:28px;
	line-height:28px;
	text-align:center;
	color:#fff;
	background:#ffcc00;
	border:none;
	padding:0;
	margin:200px auto 0;
}
</style>