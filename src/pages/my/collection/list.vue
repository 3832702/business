<template>
	<Recipes :class="$style.crecipes" :recipesData="recipesData">
		<template slot-scope="slotProps">
			<p>{{ slotProps.recipes.num }}收藏&nbsp;by&nbsp;{{ slotProps.recipes.author }}</p>
		</template>
	</Recipes>
</template>

<script>
import Recipes from '../../../public/common/recipes.vue'

const recipesData = [
	{
		id: 1,
		img: 'http://i4.fuimg.com/570833/ea4a81fab04bff40s.png',
		title: '黄瓜变蛋',
		content: '我最喜欢吃的一款凉菜，分享给大家',
		timer: '2016.3.18',
		num: 732,
		author: '爱笑的吃货'
	},
	{
		id: 2,
		img: 'http://i4.fuimg.com/570833/f1549d78497c1f0es.png',
		title: '干煸花菜',
		content: '今天做的干煸花菜，味道不错哦',
		timer: '2016.3.1',
		num: 506,
		author: '小珊珊'
	}
]

export default {
	components: {
		Recipes
	},
	data () {
    	return {
    		recipesData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.crecipes {
	p {
		@include truncation;
		width:100%;
		height:28px;
		line-height:28px;
		font-size: 24px;
		box-sizing:border-box;
		padding-right:20px;
	}
}
</style>