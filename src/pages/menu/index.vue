<template>
	<div>
		<Heador :title="title"></Heador>
		<List></List>
	</div>
</template>

<script>

import Heador from '../../public/common/header.vue'
import List from './list.vue'

export default {
	components: {
		Heador,
		List
	},
	data () {
    	return {
    		title: '全部分类'
    	}
  	}
}
</script>

<style lang="scss" module>

</style>