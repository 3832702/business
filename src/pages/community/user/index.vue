<template>
	<div>
		<UserHeader></UserHeader>		
		<UserInfo></UserInfo>
		<UserTab></UserTab>
	</div>
</template>

<script>
import UserHeader from './user-header.vue'
import UserInfo from './user-info.vue'
import UserTab from './user-tab.vue'

export default {
	components: {
		UserHeader,
		UserInfo,
		UserTab
	},
	data () {
    	return {

    	}
  	}
}
</script>