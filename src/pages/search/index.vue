<template>
	<div>
		<Heador></Heador>
		<Tab></Tab>
		<router-view></router-view>
	</div>
</template>

<script>

import Heador from './header.vue'
import Tab from './tab.vue'

export default {
	components: {
		Heador,
		Tab
	},
	data () {
    	return {
    		
    	}
  	}
}
</script>