<template>
	<div>
		<Heador :title="title"></Heador>	
		<List :list="list"></List>
		<button :class="$style.uploade">上传</button>
	</div>
</template>

<script>
import Heador from '../../../public/common/header.vue'
import List from './list.vue'

import { myDiet } from '../../../service/index.js'

export default {
	components: {
		Heador,
		List
	},
	activated() {
		if (!this.$route.meta.is_back) {
			this.fetchDietHandler()
		}
	},
	data () {
    	return {
    		title: '我的菜谱',
    		list: [], // 菜谱列表
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
	  	 * [fetchDietHandler 请求数据]
	  	 * @return {[type]} [description]
	  	 */
  		fetchDietHandler() {
  			const user_id = this.getUserId();

  			myDiet({ user_id })
  				.then(res => this.initDiet(res.data))
  				.catch(err => console.log(err))
  		},

  		/**
  		 * [initDiet 对数据做一些处理]
  		 * @param  {[Object]} data [description]
  		 */
  		initDiet(data) {
  			this.list = data.list;
  		}
  	}
}
</script>

<style lang="scss" module>
.uploade {
	width:250px;
	height:90px;
	display:block;
	font-size:28px;
	line-height:28px;
	text-align:center;
	color:#fff;
	background:#ffcc00;
	border:none;
	padding:0;
	margin:200px auto 0;
}
</style>