<template>
	<div>
		<Heador :title="title"></Heador>
		<Tab></Tab>		
	</div>
</template>

<script>

import Heador from '../../../public/common/header.vue'
import Tab from './tab.vue'

export default {
	components: {
		Heador,
		Tab
	},
	data () {
    	return {
    		title: '百度百科'
    	}
  	}
}
</script>