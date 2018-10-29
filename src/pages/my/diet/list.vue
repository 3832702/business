<template>
	<Recipes :recipesData="list" :class="$style.drecipes">
		<template slot-scope="slotProps">
			<p>{{ slotProps.recipes.content }}</p>
		</template>
	</Recipes>
</template>

<script>
import Recipes from '../../../public/common/recipes.vue'

export default {
	props: {
		list: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		Recipes
	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.drecipes {
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