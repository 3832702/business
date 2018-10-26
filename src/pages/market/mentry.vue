<template>
	<div :class="$style.mentry">
		<router-link 
			:to="item.path" 
			tag="div" 
			v-for="item, index in mentryData" 
			:key="index"
			:class="$style.item"
		>
			<img :src="item.img"/>
		</router-link>
	</div>
</template>

<script>

const mentryData = [
	{
		img: require('../../static/image/rice.png'),
		path: '/markettwo',
		name: '米面粮油'
	},
	{
		img: require('../../static/image/fruits.png'),
		path: '/',
		name: '果蔬生鲜'
	},
	{
		img: require('../../static/image/kitchen.png'),
		path: '/',
		name: '厨房电器'
	},
	{
		img: require('../../static/image/condiment.png'),
		path: '/',
		name: '调味品'
	},
	{
		img: require('../../static/image/tableware.png'),
		path: '/',
		name: '厨房餐具'
	},
	{
		img: require('../../static/image/raise.png'),
		path: '/',
		name: '养生食材'
	}
]

export default {
	name: 'mentry',
  	data () {
    	return {
    		mentryData
    	}
  	}
}
</script>

<style lang="scss" module>
	@import '../../public/css/element.scss';

	.mentry {
		@include list(row);
		width: 100%;
		height: 113px;
		margin-bottom:30px;
		.item {
			width: 16.666666%;
			height: 100%;
			text-align:center;
			>img {
				width: 102px;
				height: 107px;
				display:inline-block;
			}
		}
	}
</style>