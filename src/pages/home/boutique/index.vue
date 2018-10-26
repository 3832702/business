<template>
	<div>
		<Heador :title="title"></Heador>
		<Column></Column>		
	</div>
</template>

<script>
import Heador from '../../../public/common/header.vue'
import Column from './column.vue'

export default {
	components: {
		Heador,
		Column
	},
	data () {
    	return {
    		title: '精品菜单'
    	}
  	}
}
</script>