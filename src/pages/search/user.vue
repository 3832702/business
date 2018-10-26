<template>
	<div>
		<Active></Active>
		<History></History>
	</div>
</template>

<script>

import Active from './active.vue'
import History from './history.vue'

export default {
	components: {
		Active,
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