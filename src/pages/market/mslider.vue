<template>

	<Slider cname="mslider" :class="$style.slider" :sliderData="sliderData">
		<template slot-scope="slotProps">
			<img :class="$style.bg" :src="slotProps.itemData.img">
			<h4>{{ slotProps.itemData.title }}</h4>
			<p>{{ slotProps.itemData.desc }}</p>
			<div :class="$style.get">立即进入</div>
		</template>	
	</Slider>
</template>

<script>

import Slider from '../../public/common/slider.vue'

const sliderData = [
	{
		id: 1,
		base_name: '/',
		img: 'http://i1.fuimg.com/570833/bd781b9971b9b411s.png',
		title: '挪威进口冰鲜三文鱼',
		desc: '色泽鲜亮 肉质肥美'
	},
	{
		id: 2,
		base_name: '/',
		img: 'http://i1.fuimg.com/570833/8cc127d2d4ee5934s.jpg',
		title: '美国进口冰鲜食材',
		desc: '口感不错 肥美肉质'
	},
	{
		id: 3,
		base_name: '/',
		img: 'http://i1.fuimg.com/570833/73d992ad9653d141s.jpg',
		title: '英国进口海鲜食材',
		desc: '肉质肥美 口感不错'
	},
	{
		id: 4,
		base_name: '/',
		img: 'http://i1.fuimg.com/570833/aef23f7d84e77704s.jpg',
		title: '国际名菜系列之干煸豆角',
		desc: '口感不错，国外畅销'
	},
	{
		id: 5,
		base_name: '/',
		img: 'http://i1.fuimg.com/570833/d4833c89e5a68136s.jpg',
		title: '国际名菜系列之干煸花菜',
		desc: '国外畅销,口感不错'
	}
]

export default {
	components: {
		Slider
	},
	data () {
    	return {
    		sliderData
    	}
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

