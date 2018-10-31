<template>
	<div>
		<Heador :title="title"></Heador>		
		<Info :article="article"></Info>
	</div>
</template>

<script>
import Heador from '../../public/common/header.vue'
import Info from './info.vue'

import { article } from '../../service/index.js'

export default {
	components: {
		Heador,
		Info
	},
	created() {
		this.getArticleId()
		this.fetchArticleHandler()
	},
	data () {
    	return {
    		title: ' ',
    		id: '', // 帖子id
    		article: {}, // 文章详情
    	}
  	},
  	methods: {
  		/**
  		 * [getUserId 获取user_id]
  		 * @return {[String]} [返回user_id]
  		 */
  		getUserId() {
  			return this.$getStore('user_id');
  		},
  		/**
  		 * [getArticleId 获取帖子id]
  		 * @return {[type]} [description]
  		 */
  		getArticleId() {
  			this.id = this.$route.params.id
  		},

  		/**
  		 * [fetchArticleHandler 请求帖子数据]
  		 * @return {[type]} [description]
  		 */
  		fetchArticleHandler() {
  			const user_id = this.getUserId();
  			const { id } = this;

  			article({user_id, id})
  				.then(res => {this.initArticleHandler(res.data)})
  				.catch(err => console.log(err))
  		},

  		/**
  		 * [initArticleHandler ]
  		 * @param  {[type]} data [description]
  		 * @return {[type]}      [description]
  		 */
  		initArticleHandler(data) {
  			this.title = data.title
  			this.article = data;
  		}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';


</style>