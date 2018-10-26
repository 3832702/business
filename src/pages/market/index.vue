<template>
	<div>
        <Mheador></Mheador>
        
        <Mslider></Mslider>
        <Mentry></Mentry>
        <Rob></Rob>
        <Newgoods></Newgoods>
        <Recommend></Recommend>
        <Hot></Hot>

		<Navbar></Navbar>
	</div>
</template>

<script>
import Mheador from './mheader.vue'

import Mslider from './mslider.vue'
import Mentry from './mentry.vue'
import Rob from './rob.vue'
import Newgoods from './newgoods.vue'
import Recommend from './recommend.vue'
import Hot from './hot.vue'

import Navbar from '../../public/common/navbar.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    Mheador,
    Mslider,
    Mentry,
    Rob,
    Newgoods,
    Recommend,
    Hot,
    Navbar
  }
}
</script>
