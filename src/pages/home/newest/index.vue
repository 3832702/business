<template>
	<div>
		<Heador :title="title"></Heador>
		<Narticle></Narticle>		
	</div>
</template>

<script>
import Heador from '../../../public/common/header.vue'

import Narticle from './Narticle.vue'

export default {
	components: {
		Heador,
		Narticle
	},
	data () {
    	return {
    		title: '今日最新'
    	}
  	}
}
</script>