<template>
	<div>
		<Heador :title="title"></Heador>		
		<Info></Info>
	</div>
</template>

<script>
import Heador from '../../public/common/header.vue'
import Info from './info.vue'

export default {
	components: {
		Heador,
		Info
	},
	data () {
    	return {
    		title: ' '
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';


</style>