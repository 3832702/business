<template>
	<Heador :class="$style.myheader">
		<h3>{{ title }}</h3>
		<router-link to="/personal" tag="div" :class="$style.more" slot="rightico"></router-link>
	</Heador>
</template>

<script>

import Heador from '../../public/common/header.vue'

export default {
  name: 'mheader',
  data () {
    return {
    	title: '我的'
    }
  },
  components: {
  	Heador
  }
}
</script>

<style lang="scss" module>
	.myheader {
		.more {
			width: 120px;
			height: 100%;
			position:absolute;
			background:url('../../static/image/config.png') no-repeat 50% 50%;
			right:0;
		}
	}
</style>