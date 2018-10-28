<template>
	<Menu :columnData="menu_list"></Menu>
</template>

<script>

import Menu from '../../public/common/menu.vue'

export default {
	props: {
		menu_list: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		Menu
	}
}
</script>