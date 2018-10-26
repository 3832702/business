<template>
	<div>
    <Heador></Heador>
    <Info></Info>
    <Entry></Entry>

		<Navbar></Navbar>

    <router-view></router-view>
	</div>
</template>

<script>
import Heador from './header.vue'
import Info from './info.vue'
import Entry from './entry.vue'

import Navbar from '../../public/common/navbar.vue'

export default {
  beforeRouteEnter(to, from, next) {
    console.log(to)
    console.log(from)
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
