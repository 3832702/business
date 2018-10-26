<template>
	<Heador :title="title"></Heador>
</template>

<script>
import Heador from '../../../public/common/header.vue'

export default {
	components: {
		Heador
	},
	data () {
    	return {
    		title: '个人中心'
    	}
  	}
}
</script>