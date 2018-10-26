<template>
	<div>
		<Heador :title="title"></Heador>
		<Tab></Tab>
		<List></List>
	</div>
</template>

<script>
import Heador from '../../../public/common/header.vue'
import Tab from './tab.vue'
import List from './list.vue'

export default {
	components: {
		Heador,
		Tab,
		List
	},
	data () {
    	return {
    		title: '大闸蟹'
    	}
  	}
}
</script>