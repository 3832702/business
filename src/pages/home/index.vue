<template>
	<div>
		<HHeader></HHeader>
		<Hslider :banner_list="banner_list"></Hslider>
		<Entry></Entry>
		<Column :menu_list="menu_list"></Column>
		<Articie :article_data="article_data"></Articie>
		<Navbar></Navbar>
	</div>
</template>

<script>
import Navbar from '../../public/common/navbar.vue'

import HHeader from './hheader.vue'
import Hslider from './hslider.vue'
import Entry from './entry.vue'
import Column from './column.vue'
import Articie from './article.vue'

import { home } from '../../service/index.js'



export default {
    activated() {
      if (!this.$route.meta.is_back) {
        this.fetchHandler()
      }
    },
    data () {
      return {
        banner_list: [], // 轮播图列表
        menu_list: [], // 菜谱列表
        article_data: [] // 文章列表
      }
    },
    methods: {
      /**
       * [fetchHandler 发起ajax请求]
       * @return {[type]} [description]
       */
      fetchHandler() {
        home()
          .then(res => this.initDataHandler(res.data) )
          .catch(err => console.log(err))
      },

      /**
       * [initDataHandler 处理返回的响应数据]
       * @param  {[Object]} data [返回的数据]
       * @return {[type]}      [description]
       */
      initDataHandler(data) {

        ({
          banner_list: this.banner_list, 
          menu_list: this.menu_list, 
        } = data)

        this.initArticleData(data);

      },

      /**
       * [initArticleData 初始胡文章列表]
       * @param  {[Object]} data [所有数据]
       * @return {[type]}      [description]
       */
      initArticleData(data) {
        const { article_list, video_list } = data;

        video_list.forEach(item => {
          item.is_video = true
        })

        this.article_data = [...article_list, ...video_list];
      }
    },
    components: {
    	HHeader,
    	Hslider,
    	Entry,
    	Column,
    	Articie,
      Navbar
    }
}
</script>
