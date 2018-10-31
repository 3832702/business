<template>
	<div>
    <!-- 头部 -->
		<Dheader></Dheader>

    <!-- 商品信息 -->
		<Info 
      :infoData="details" 
      :commodity_id="commodity_id"
      @emitChangeAddress="emitChangeAddress"
      @emitChangeSelected="emitChangeSelected" 
    ></Info>

    <!-- 评论 -->
		<Evaluate :evaluate="evaluate"></Evaluate>
	  
    <!-- 店铺信息 --> 
    <Shop :shopData="shop"></Shop>
		
    <!-- 图文详情 -->
    <Details :image_text="image_text"></Details>
		
    <!-- 底部 -->
    <NavBar @emitAddCart="emitAddCart"></NavBar>
    
    <!-- 弹窗 更多选项 -->
    <Selected 
      v-show="selectedBlock"
      @emitAddCart="emitAddCart"
      @emitChangeSelected="emitChangeSelected" 
    ></Selected>
    
    <!-- 弹窗 选择地址 -->
    <Address
      v-show="addressBlock"
      @emitChangeAddress="emitChangeAddress" 
    ></Address>
	</div>
</template>

<script>
import Dheader from './dheader.vue'
import Info from './info.vue'
import Evaluate from './evaluate.vue'
import Shop from './shop.vue'
import Details from './details.vue'
import NavBar from './navbar.vue'
import Selected from './selected.vue'
import Address from './address.vue'

import { commodity, addCart } from '../../../service/index.js'

import { mapMutations } from 'vuex'

export default {
	components: {
		Dheader,
		Info,
		Evaluate,
		Shop,
		Details,
		NavBar,
    Selected,
    Address
	},
	activated() {
		if (!this.$route.meta.is_back || !this.details.title) {
			this.getCommodityid();
			this.fetchDataHandler()
		}
	},
  beforeRouteLeave(to, from, next) {

    // 判断如果是进入提交订单页，给提交订单路由中元信息添加一个字段type  1 代表直接购买
    if (to.name === 'OrderDetails') {
      to.meta.type = 1
    }
    next();
  },
	data () {
    	return {
    		commodity_id: '', // 商品id
    		details: {}, // 商品信息,
    		shop: {}, // 店铺信息
    		evaluate: {}, // 评论信息
    		image_text: [], //图文详情
        selectedBlock: false, // 是否显示block块
        addressBlock: false, // 是否显示地址弹窗
    	}
  	},
  	methods: {
      ...mapMutations(['CHANGE_POPUP', 'RECORD_COMMODITY']),
  		
      /**
  		 * [getCommodityid 获取商品id]
  		 * @return {[type]} [description]
  		 */
  		getCommodityid() {
  			this.commodity_id = this.$route.params.id;
  		},

  		/**
  		 * [getUserId d获取user_id]
  		 * @return {[type]} [description]
  		 */
  		getUserId() {
  			return this.$getStore('user_id')
  		},

  		/**
  		 * [fetchDataHandler 查看商品详情]
  		 * @return {[type]} [description]
  		 */
  		fetchDataHandler() {
  			const user_id = this.getUserId();
  			const { commodity_id } = this;

  			commodity({ user_id, commodity_id })
  				.then(res => this.initDataHandler(res.data))
  				.catch(err => console.log(err))
  		},

  		/**
  		 * [initDataHandler 处理返回数据]
  		 * @param  {[type]} data [返回的数据]
  		 */
  		initDataHandler(data) {
  			
  			const { details, shop, image_text, evaluate } = data;
        const newDetails = Object.assign({}, details, { num: 1 });
  			this.details = newDetails;
  			this.shop = shop;
  			this.image_text = image_text;
  			this.evaluate = evaluate;

        this.RECORD_COMMODITY(newDetails);
  		},

      /**
       * [emitChangeSelected 自定义事件  更改已选弹窗的隐藏或显示]
       * @param  {[Boolan]} status [是否显示弹窗]
       */
      emitChangeSelected(status) {
        this.selectedBlock = status;
      },

      /**
       * [emitChangeAddress 自定义事件，更改地址栏弹窗的隐藏或显示]
       * @param  {[Boolean]} status [是否显示弹窗]
       */
      emitChangeAddress(status) {
        this.addressBlock = status;
      },

      /**
       * [addCartHandler 添加至购物车]
       */
      emitAddCart() {
        const { commodity_id, details: { num } } = this;
        const user_id = this.getUserId();

        addCart({num, commodity_id, user_id})
          .then(res => { console.log(res) })
          .catch(err => console.log(err))
      }

  	}
}
</script>