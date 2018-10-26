<template>
	<div>
    <Cheader></Cheader>
    <Tab></Tab>
    <!--<Share></Share>
    <Follow></Follow>-->
    <router-view></router-view>
		<Navbar></Navbar>
	</div>
</template>

<script>

import Cheader from './cheader.vue'
import Tab from './tab.vue'
import Share from './share.vue'
import Follow from './follow.vue'

import Navbar from '../../public/common/navbar.vue'


export default {
  data () {
    return {

    }
  },
  components: {
    Cheader,
    Tab,
    Share,
    Follow,
  	Navbar
  }
}
</script>
