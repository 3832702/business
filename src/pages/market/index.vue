<template>
	<div>
        <Mheador></Mheador>
        
        <Mslider :banners_list="banners_list"></Mslider>
        <Mentry></Mentry>
        <Rob :rob_list="rob_list"></Rob>
        <Newgoods :new_list="new_list"></Newgoods>
        <Recommend :recommend_list="recommend_list"></Recommend>
        <Hot :hot_list="hot_list"></Hot>

		<Navbar></Navbar>
	</div>
</template>

<script>
import Mheador from './mheader.vue'

import Mslider from './mslider.vue'
import Mentry from './mentry.vue'
import Rob from './rob.vue'
import Newgoods from './newgoods.vue'
import Recommend from './recommend.vue'
import Hot from './hot.vue'

import Navbar from '../../public/common/navbar.vue'

import { market } from '../../service/index.js'

export default {
    components: {
        Mheador,
        Mslider,
        Mentry,
        Rob,
        Newgoods,
        Recommend,
        Hot,
        Navbar
    },
    data () {
        return {
            banners_list: [], 
            rob_list: [], 
            new_list: [], 
            recommend_list: [], 
            hot_list: []
        }
    },
    activated() {
        if (!this.$route.meta.is_back) {
            this.fetchDataHandler()
        }
    },
    methods: {
        /**
         * [fetchDataHandler 获取集市首页数据]
         * @return {[type]} [description]
         */
        fetchDataHandler() {
            market()
                .then(res => {
                    this.initDataHandler(res.data);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        /**
         * [initDataHandler 处理首页集市数据]
         * @param  {[Object]} data [返回的集市数据]
         * @return {[type]}      [description]
         */
        initDataHandler(data) {
            ({ 
                banners_list: this.banners_list, 
                rob_list: this.rob_list, 
                new_list: this.new_list, 
                recommend_list: this.recommend_list, 
                hot_list: this.hot_list 
            } = data);
        }
    }
}
</script>
