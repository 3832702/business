<template>
	<div :class="$style.entry">
		<router-link 
			:to="item.path" 
			tag="div" 
			v-for="item, index in entryData" 
			:key="index"
		>
			<img :src="item.img" />
		</router-link>
	</div>
</template>

<script>

const entryData = [
	{
		path: '/newest',
		img: require('../../static/image/new.png')
	},
	{
		path: '/boutique',
		img: require('../../static/image/menu.png')
	},
	{
		path: '/video',
		img: require('../../static/image/video.png')
	},
	{
		path: '/friends',
		img: require('../../static/image/dynamic.png')
	}
]

export default {
	data () {
  		return {
  			entryData
    	}
  	}
}
</script>

<style lang="scss" module>

@import '../../public/css/element.scss';

	.entry {
		@include list(row);
		width: 100%;
		height: 205px;
		line-height:205px;
		background:#fff;
		div {
			width: 25%;
			height: 100%;
			text-align:center;
			@include list(row);
			align-items:center;
			justify-content:center;
			img {
				width: 92px;
				height: 105px;
				display:inline-block;
			}
		}
	}
</style>