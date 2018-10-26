<template>
	<div :class="[cname]">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="item in sliderData" :key="item.id">
		    	<slot :itemData="item"></slot>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>

//	import '~swiper/dist/css/swiper.css';
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	props: {
		cname: {
			type: String,
			default: ''
		},
		swiperOption: {
          type: Object,
          default() {
          	return {
          		pagination: {
		          el: '.swiper-pagination',
		          type: 'progressbar'
		        },
		        autoplay:true,
		        loop:true
          	}
          }
        },
        sliderData: {
        	type: Array,
        	default() {
        		return []
        	}
        }
	},
	components: {
		swiper, 
		swiperSlide
	},
	data () {
		return {
	
		}
    }
}
</script>

<style lang="css">
	@import '~swiper/dist/css/swiper.css';
</style>
