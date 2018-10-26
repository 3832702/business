<template>
	<div>
		<Dheader></Dheader>
		<Info></Info>
		<Evaluate></Evaluate>
		<Shop></Shop>
		<Details></Details>
		<NavBar></NavBar>
	</div>
</template>

<script>
import Dheader from './dheader.vue'
import Info from './info.vue'
import Evaluate from './evaluate.vue'
import Shop from './shop.vue'
import Details from './details.vue'
import NavBar from './navbar.vue'

export default {
	components: {
		Dheader,
		Info,
		Evaluate,
		Shop,
		Details,
		NavBar
	},
	data () {
    	return {

    	}
  	}
}
</script>