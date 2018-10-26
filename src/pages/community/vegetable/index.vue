<template>
	<div>
		<Heador :title="title"></Heador>		
		<List></List>
	</div>
</template>

<script>
import Heador from '../../../public/common/header.vue'
import List from './list.vue'

export default {
	components: {
		Heador,
		List
	},
	data () {
    	return {
    		title: '分类'
    	}
  	}
}
</script>