<template>
	<div :class="$style.navbar">
		<router-link
			:to="item.path"
			tag="div"
			v-for="item,index in navbarData"
			:key="index"
			replace
		>
			<img v-if="item.name === $route.name || item.name === $route.meta.baseName " :src="item.active_img"/>
			<img v-else :src="item.img"/>
		</router-link>
	</div>
</template>

<script>
const navbarData = [
	{
		img: require('../../static/image/home.png'),
		active_img: require('../../static/image/active_home.png'),
		name: 'Home',
		path: '/'
	},
	{
		img: require('../../static/image/market.png'),
		active_img: require('../../static/image/active_market.png'),
		name: 'Market',
		path: '/market'
	},
	{
		img: require('../../static/image/community.png'),
		active_img: require('../../static/image/active_community.png'),
		name: 'Community',
		path: '/community'
	},
	{
		img: require('../../static/image/my.png'),
		active_img: require('../../static/image/active_my.png'),
		name: 'my',
		path: '/my'
	}
]

export default {
  name: 'navbar',
  created() {
  	
  },
  data () {
    return {
    	navbarData
    }
  }
}
</script>

<style lang="scss" module>
	@import '../css/element.scss';

	.navbar {
		@include list(row);
		width: 100%;
		height: 100px;
		position:fixed;
		background:#fff;
		z-index: 100;
		left:0;
		bottom:0;
		div {
			@include flex(row);
			width: 25%;
			height: 100%;
			justify-content:center;
			align-items: center;
			img {
				width: 54px;
				height:82px;
			}
		}
	}
</style>