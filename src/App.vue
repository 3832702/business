<template>
	<div>
		<keep-alive>
			<router-view v-if="$route.meta.is_keep"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.is_keep"></router-view>
		<Loading v-if="loading"></Loading>
	</div>
</template>

<script>

import Loading from './public/component/loading.vue'
import { mapState } from 'vuex'

export default {
  components: {
  	Loading
  },
  computed: {
  	...mapState(['loading'])
  },
  data () {
    return {
    	is_loading: false
    }
  }
}
</script>
