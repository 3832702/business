<template>
	<div>
    <Heador></Heador>
    <Info></Info>
    <Entry></Entry>

		<Navbar></Navbar>
	</div>
</template>

<script>
import Heador from './header.vue'
import Info from './info.vue'
import Entry from './entry.vue'

import Navbar from '../../public/common/navbar.vue'

export default {
  beforeRouteEnter(to, from, next) {
    console.log(from)
    console.log('to', to)
    next();
  },
  components: {
    Heador,
    Info,
    Entry,
  	Navbar
  }
}
</script>
