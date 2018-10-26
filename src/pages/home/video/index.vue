<template>
	<div>
		<Heador :title="title"></Heador>
		<Tab></Tab>
		<Varticle></Varticle>
	</div>
</template>

<script>
import Heador from '../../../public/common/header.vue'
import Tab from './tab.vue'
import Varticle from './varticle.vue'

export default {
	components: {
		Heador,
		Tab,
		Varticle
	},
	data () {
    	return {
    		title: '视频专区'
    	}
  	}
}
</script>