<template>
	<Goodslist :class="$style.hot" :panelTitle="panelTitle" :goodsListData="hot_list"></Goodslist>
</template>

<script>
import Panel from '../../public/common/panel.vue'

import Goodslist from '../../public/common/goodslist.vue'

export default {
	props: {
		hot_list: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		Panel,
		Goodslist
	},
  	data () {
    	return {
    		panelTitle: '热销商品'
    	}
  	}
}
</script>
<style lang="scss" module>
	.hot {
		margin-bottom:100px;
	}
</style>