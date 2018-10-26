<template>
	<div>
		<Hot></Hot>
		<History></History>
	</div>
</template>

<script>

import Hot from './hot.vue'
import History from './history.vue'

export default {
	components: {
		Hot,
		History
	},
	data () {
    	return {

    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';




</style>