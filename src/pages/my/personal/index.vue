<template>
	<div>
		<Heador :title="title"></Heador>
		<List></List>
		<button :class="$style.btn">退出登陆</button>
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
    		title: '设置'
    	}
  	}
}
</script>

<style lang="scss" module>

	.btn {
		width: 400px;
		height:82px;
		border:none;
		padding:0;
		background:#ff6e00;
		font-size: 28px;
		line-height: 82px;
		text-align:center;
		color:#fff;
		margin:90px auto 0;
		border-radius:5px;
		display:block;
	}

</style>