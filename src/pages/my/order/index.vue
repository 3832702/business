<template>
	<div>
		<Heador :title="title"></Heador>
		<Tab></Tab>
		<router-view></router-view>
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
    		title: '我的订单'
    	}
  	}
}
</script>
