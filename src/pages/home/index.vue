<template>
	<div>
		<HHeader></HHeader>
		<Hslider></Hslider>
		<Entry></Entry>
		<Column></Column>
		<Articie></Articie>
		<Navbar></Navbar>
	</div>
</template>

<script>
import Navbar from '../../public/common/navbar.vue'

import HHeader from './hheader.vue'
import Hslider from './hslider.vue'
import Entry from './entry.vue'
import Column from './column.vue'
import Articie from './article.vue'



export default {
  data () {
    return {

    }
  },
  components: {
  	HHeader,
  	Hslider,
  	Entry,
  	Column,
  	Articie,
    Navbar
  }
}
</script>
