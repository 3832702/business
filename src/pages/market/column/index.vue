<template>
	<div>
		<Heador :title="title"></Heador>		
		<Commodity></Commodity>
	</div>
</template>

<script>
import Heador from '../../../public/common/header.vue'
import Commodity from './commodity.vue'

export default {
	components:{
		Heador,
		Commodity
	},
	data () {
    	return {
    		title: '咪咕'
    	}
  	}
}
</script>
