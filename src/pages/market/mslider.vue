<template>

	<Slider cname="mslider" :class="$style.slider" :sliderData="banners_list">
		<template slot-scope="slotProps">
			<router-link :to="{name: 'marketDetails',params: {id: slotProps.itemData.id}}" tag="div">
				<img :class="$style.bg" :src="slotProps.itemData.img">
				<h4>{{ slotProps.itemData.title }}</h4>
				<p>{{ slotProps.itemData.desc }}</p>
				<div :class="$style.get">立即进入</div>
			</router-link>
		</template>	
	</Slider>
</template>

<script>

import Slider from '../../public/common/slider.vue'

export default {
	props: {
		banners_list: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		Slider
	},
	methods: {

	}
}
</script>

<style lang="scss" module>
	@import '../../public/css/element.scss';

	.slider {
		padding-top: 88px;
		width: 100%;
		height:360px;
		position:relative;
		margin-bottom:30px;
		color:#fff;
		.bg {
			width: 100%;			
			height:360px;
		}

		h4 {
			width: 100%;
			box-sizing:border-box;
			padding-left:45px;
			height: 54px;
			line-height: 54px;
			font-size: 34px;
			position:absolute;
			left:0;
			top:230px;
		}

		p {
			width: 100%;
			height: 30px;
			line-height: 30px;
			font-size:28px;
			box-sizing:border-box;
			padding-left:45px;
			position:absolute;
			left:0;
			top: 284px;
		}

		.get {
			min-width: 120px;
			text-align:center;
			box-sizing:border-box;
			height: 38px;
			line-height:36px;
			font-size:24px;
			border-radius:5px;
			border:1px solid #fff;
			padding:0 10px;
			position:absolute;
			right:40px;
			bottom:30px;
		}
	}
</style>

<style lang="css">
	.mslider .swiper-pagination-progressbar {
		top:356px;
	}

	.mslider .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
		background:#ffdd00;
	}
</style>

