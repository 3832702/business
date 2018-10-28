<template>
	<div>
		<keep-alive>
			<router-view v-if="$route.meta.is_keep"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.is_keep"></router-view>
	</div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
    	
    }
  }
}
</script>
