<template>
	<Heador :title="title"></Heador>	
</template>

<script>

import Heador from '../../public/common/header.vue';

export default {
	components: {
		Heador
	},
	data () {
    	return {
    		title: '购物车'
    	}
  	}
}
</script>

<style lang="scss" module>
</style>