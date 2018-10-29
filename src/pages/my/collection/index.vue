<template>
	<div>
		<Heador :title="title"></Heador>
		<List :list="list"></List>
	</div>
</template>

<script>
import Heador from '../../../public/common/header.vue'
import List from './list.vue'

import { myCollection } from '../../../service/index.js'

export default {
	components: {
		Heador,
		List
	},
	activated() {
		if (!this.$route.meta.is_back) {
			this.fetchCollectionHandler()
		}
	},
  	data () {
    	return {
    		title: '我的收藏',
    		user_id: '',
    		list: [], // 收藏列表
    	}
  	},
  	methods: {
  		/**
	  	 * [getUserId 获取user_id]
	  	 */
	  	getUserId() {
	  		return this.$getStore('user_id')
	  	},

	  	/**
	  	 * [fetchCollectionHandler 请求收藏列表数据]
	  	 */
  		fetchCollectionHandler() {
  			const user_id = this.getUserId();

  			myCollection({ user_id })
  				.then(res => this.initCollection(res.data))
  				.catch(err => console.log(err))
  		},

  		/**
  		 * [initCollection 对数据做一些处理]
  		 * @param  {[Object]} data [description]
  		 */
  		initCollection(data) {
  			this.list = data.list;
  		}
  	}
}
</script>