<template>

	<Slider cname="slider" :class="$style.slider" :sliderData="banner_list">
		<template slot-scope="slotProps">
			<router-link to="" tag="div">
				<img :class="$style.bg" :src="slotProps.itemData.img">
				<div :class="$style.avatar">
					<img :src="slotProps.itemData.avatar" />
				</div>
				<h4>{{ slotProps.itemData.title }}</h4>
				<span>{{ slotProps.itemData.user_name }}</span>
			</router-link>
		</template>	
	</Slider>
</template>

<script>

import Slider from '../../public/common/slider.vue'

export default {
	props: {
		banner_list: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		Slider
	},
	data () {
    	return {
    		
    	}
   	}
}
</script>

<style lang="scss" module>
	@import '../../public/css/element.scss';

	.slider {
		padding-top: 88px;
		width: 100%;
		height:530px;
		position:relative;
		.bg {
			width: 100%;			
			height:530px;
		}
		h4 {
			width: 100%;
			height: 50px;
			line-height: 50px;
			font-size: 34px;
			text-align:center;
			position:absolute;
			left:0;
			top:332px;
			color:#fff;
		}
		.avatar {
			width: 50px;
			height:50px;
			position:absolute;
			left:272px;
			top:406px;
			overflow:hidden;
			border-radius:50%;
			background:#fff;
			text-align:center;
			line-height:50px;
			>img {
				width: 48px;
				height: 48px;
				border-radius:50%;
			}
		}
		span {
			@include truncation;
			width: 150px;
			height: 50px;
			line-height:50px;
			position:absolute;
			left: 342px;
			top: 406px;
			font-size:28px;
			color:#fff;
		}
	}
</style>

<style lang="css">
	.slider .swiper-pagination-progressbar {
		top:526px;
	}

	.slider .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
		background:#ffdd00;
	}
</style>

