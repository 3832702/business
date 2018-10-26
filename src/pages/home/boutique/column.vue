<template>
	<Menu :class="$style.boutique_list" :columnData="columnData"></Menu>		
</template>

<script>
import Menu from '../../../public/common/menu.vue'

const columnData = [
	{
		id: '1',
		path: '/',
		img: 'http://i1.fuimg.com/570833/0f6def0365164164s.png',
		title: '做出家乡般的感觉，吃出母爱般的味道',
		count: '50',
		username: '离城的西柚'
	},
	{
		id: '2',
		path: '/',
		img: 'http://i1.fuimg.com/570833/bed6b68219113611s.png',
		title: '家有贤妻，给你一顿贴心的晚餐',
		count: '66',
		username: '落花'
	}
]

export default {
	components: {
		Menu
	},
	data () {
    	return {
    		columnData
    	}
  	}
}
</script>

<style lang="scss" module>
	.boutique_list {
		margin-top:88px;
	}
</style>