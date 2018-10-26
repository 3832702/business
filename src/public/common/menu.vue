<template>
	<div :class="$style.column">
		<div :class="$style.item" v-for="item,index in columnData" :key="index">
			<img :src="item.img"/>
			<p>♦&nbsp;共{{ item.count }}道菜&nbsp;♦</p>
			<h4>{{ item.title }}</h4>
			<span>由 {{ item.username }} 创建</span>
		</div>
	</div>
</template>

<script>

export default {
  	props: {
  		columnData: {
  			type: Array,
  			default() {
  				return []
  			}
  		}
  	},
  	data () {
    	return {
    	
    	}
  	}
}
</script>

<style lang="scss" module>
	.column {
		width: 100%;
		>div {
			width: 100%;
			height: 400px;
			position: relative;
			text-align:center;
			color:#fff;
			margin-bottom:20px;
			overflow:hidden;
			>img {
				width:100%;
				height:400px;
			}
			p {
				position: absolute;
				left: 0;
				right:0;
				top: 120px;
				height: 44px;
				line-height:44px;
				font-size: 24px;
			}
			h4 {
				position:absolute;
				left:0;
				right:0;
				top:186px;
				font-size: 28px;
				height: 48px;
				line-height:48px;
			}
			span {
				display:block;
				font-size: 20px;
				height: 40px;
				line-height: 40px;
				position:absolute;
				left: 0;
				right:0;
				top:232px;
			}
		}
	}
</style>