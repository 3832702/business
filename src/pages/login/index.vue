<template>
	<div>
		<Heador :title="title"></Heador>	
		<router-view @emitChangeTitle="changeTitleHandler"></router-view>
	</div>
</template>

<script>
import Heador from '../../public/common/header.vue'

export default {
	components: {
		Heador
	},
	data () {
    	return {
    		title: '登陆'
    	}
  	},
  	methods: {
  		/**
  		 * [changeTitleHandler 更改头部标题]
  		 * @param  {[String]} title [要更改的标题]
  		 * @return {[type]}       [description]
  		 */
  		changeTitleHandler(title) {
  			this.title = title
  		}
  	}
}
</script>

<style lang="scss" module>
	
</style>