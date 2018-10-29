<template>
	<div id="community">
    <Cheader></Cheader>
    <Tab 
      :topic_list="topic_list"
      @emitChangeType="emitChangeType"
    >
      
    </Tab>
    <router-view 
      :articleData="articleData" 
      :followData="followData"
      :slider_list="slider_list"
    >
      
    </router-view>
		<Navbar></Navbar>
	</div>
</template>

<script>

import Cheader from './cheader.vue'
import Tab from './tab.vue'

import Navbar from '../../public/common/navbar.vue'

import { community } from '../../service/index.js'

import { getStore } from '../../service'

export default {
  data () {
    return {
      user_id: '', // 用户标识
      type: 0, // 类型 0为分享  1为关注
      articleData: [], // 分享数据
      topic_list: [], // 栏目数据
      followData: [], //关注数据
      slider_list:[], //分享上方的滑块
    }
  },

  methods: {
    /**
     * [fetchDataHandler 请求数据]
     * @return {[type]} [description]
     */
    fetchDataHandler() {
      this.user_id = this.$getStore('user_id');
      
      const opt = { type: this.type, user_id: this.user_id }

      community(opt)
        .then(res => {
          this.initDataHandler(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    /**
     * [initDataHandler 处理返回的数据]
     * @param  {[Object]} data [返回的数据]
     * @return {[type]}      [description]
     */
    initDataHandler(data) {
      if (this.type === 0) {
        this.articleData = data.list
        this.topic_list = data.topic_list
        this.slider_list = data.slider_list
      } else {
        this.followData = data.list
        this.topic_list = data.topic_list
      }
    },

    /**
     * [emitChangeType 更改type]
     * @param  {[Number]} type [当前类型]
     * @return {[type]}      [description]
     */
    emitChangeType(type) {
      this.type = type
      this.fetchDataHandler();
    }
  },
  components: {
    Cheader,
    Tab,
  	Navbar
  }
}
</script>
