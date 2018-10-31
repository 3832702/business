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
  components: {
    Heador,
    Info,
    Entry,
  	Navbar
  }
}
</script>
