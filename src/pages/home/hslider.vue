<template>

	<Slider cname="slider" :class="$style.slider" :sliderData="sliderData">
		<template slot-scope="slotProps">
			<img :class="$style.bg" :src="slotProps.itemData.img">
			<div :class="$style.avatar">
				<img :src="slotProps.itemData.avatar" />
			</div>
			<h4>{{ slotProps.itemData.title }}</h4>
			<span>{{ slotProps.itemData.user_name }}</span>
		</template>	
	</Slider>
</template>

<script>

import Slider from '../../public/common/slider.vue'

const sliderData = [
	{
		id: 1,
		base_name: '/',
		img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
		user_name: '离城的小柚',
		avatar: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
		title: '色香味俱全的香辣蟹！'
	},
	{
		id: 2,
		base_name: '/',
		img: 'http://i4.fuimg.com/570833/622bdc24cb6ac704s.jpg',
		user_name: '离城的大柚',
		avatar: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
		title: '色香味俱全的剁椒鱼头！'
	},
	{
		id: 3,
		base_name: '/',
		img: 'http://i4.fuimg.com/570833/41abff403069f9a3s.jpg',
		user_name: '离城的中柚',
		avatar: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
		title: '色香味俱全的泡椒牛蛙！'
	},
	{
		id: 4,
		base_name: '/',
		img: 'http://i4.fuimg.com/570833/83d183b182385642s.jpg',
		user_name: '离城的微柚',
		avatar: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
		title: '色香味俱全的吃的！'
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

