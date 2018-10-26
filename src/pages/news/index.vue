<template>
	<div>
		<Heador :title="title"></Heador>
		<List></List>
		<Banner></Banner>
	</div>
</template>

<script>
import Heador from '../../public/common/header.vue'
import List from './list.vue'
import Banner from './banner.vue'

export default {
	components: {
		Heador,
		List,
		Banner
	},
	data () {
    	return {
    		title: '消息'
    	}
  	}
}
</script>

<style lang="scss" module>
</style>