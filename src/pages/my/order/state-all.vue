<template>
	<div :class="$style.all" v-if="product.length > 0">
		<div v-for="item,index in product" :key="index">
			<State1 :product="[item]" v-if="item.type === 0"></State1>
			<State2 :product="[item]" v-else-if="item.type === 1"></State2>
			<State3 :product="[item]" v-else-if="item.type === 2"></State3>
			<State4 :product="[item]" v-else></State4>
		</div>
	</div>
	<Empty v-else></Empty>

</template>

<script>

import State1 from './state-1.vue'
import State2 from './state-2.vue'
import State3 from './state-3.vue'
import State4 from './state-4.vue'
import Empty from './empty.vue'

const product = [
	{
		title: '鲜活旗舰店',
		count_price: '120.00',
		type: 0,
		list: [
			{
				id: 1,
				title: '挪威进口冰鲜 新鲜三文鱼...',
				price: '120.00',
				num: 1,
				img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
				desc: '500g 送芥末酱'
			}
		]
	},
	{
		title: '鲜活旗舰店',
		count_price: '120.00',
		type: 0,
		list: [
			{
				id: 1,
				title: '挪威进口冰鲜 新鲜三文鱼...',
				price: '120.00',
				num: 1,
				img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
				desc: '500g 送芥末酱'
			}
		]
	},
	{
		title: '鲜活旗舰店',
		count_price: '120.00',
		type: 3,
		list: [
			{
				id: 1,
				title: '挪威进口冰鲜 新鲜三文鱼...',
				price: '120.00',
				num: 1,
				img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
				desc: '500g 送芥末酱'
			}
		]
	},
	{
		title: '鲜活旗舰店',
		count_price: '120.00',
		type: 2,
		list: [
			{
				id: 1,
				title: '挪威进口冰鲜 新鲜三文鱼...',
				price: '120.00',
				num: 1,
				img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
				desc: '500g 送芥末酱'
			}
		]
	},
	{
		title: '鲜活旗舰店',
		count_price: '120.00',
		type: 1,
		list: [
			{
				id: 1,
				title: '挪威进口冰鲜 新鲜三文鱼...',
				price: '120.00',
				num: 1,
				img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
				desc: '500g 送芥末酱'
			}
		]
	}
]

export default {
	components: {
		State1,
		State2,
		State3,
		State4,
		Empty
	},
	data () {
    	return {
    		product
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';
.all {
	overflow:hidden;
}
</style>