<template>
	<Heador :class="$style.fheader" :title="title">
		<router-link to="" tag="div" :class="$style.add" slot="rightico"></router-link>
	</Heador>
</template>

<script>
import Heador from '../../../public/common/header.vue'

export default {
	components: {
		Heador
	},
	data () {
    	return {
    		title: '好友动态'
    	}
  	}
}
</script>

<style lang="scss" module>
	.fheader {
		.add {
			width: 120px;
			height: 100%;
			position:absolute;
			background:url('../../../static/image/add.png') no-repeat 50% 50%;
			right:0;
		}
	}
</style>