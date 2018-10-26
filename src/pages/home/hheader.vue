<template>
	<Heador title="首页" :class="$style.header">
		<router-link :class="$style.menu" :to="{path: '/menu'}" tag="div"></router-link>
		<router-link to="search" tag="label"><input type="text" placeholder="菜谱、用户、商品" /></router-link>
		<router-link :class="$style.msg" :to="{path: '/news'}" tag="div" ></router-link>
	</Heador>
</template>

<script>

import Heador from '../../public/common/header.vue'

export default {
  data () {
    return {

    }
  },
  components: {
  	Heador
  }
}
</script>

<style lang="scss" module>
	@import '../../public/css/element.scss';
	
	.header {

		.menu, .msg {
			width: 120px;
			height: 100%;
			position:absolute;
		}

		.menu {
			background:url('../../static/image/class.png') no-repeat 50% 50%;
			lefr:0;
		}

		.msg {
			background:url('../../static/image/msg.png') no-repeat 50% 50%;
			right:0;
		}

		label {
			position: absolute;
			left:120px;
			right: 120px;
			height:60px;
			overflow:hidden;
			top:12px;
			input {
				width: 100%;
				height: 100%;
				border-radius:30px;
				line-height:60px;
				background:url('../../static/image/search.png') no-repeat 20px 15px #fff;
				text-indent:67px;
				font-size:30px;
				color:#ccc;
				border:0;
				&::-webkit-input-placeholder {
		        	color: #aab2bd;
		        	font-size: 30px;
		        	line-height:60px;
			    }
			}
		}
	}
	
</style>