<template>
	<div :class="$style.entry">
		<router-link 
			:to="item.path"
			tag="div"
			:class="$style.item"
			v-for="item,index in entryData"
			:key="index"
		>
			<span>{{ item.title }}</span>
			<span></span>
		</router-link>
	</div>
</template>

<script>

const entryData = [
	{
		path: '/collection',
		title: '我的收藏'
	},
	{
		path: '/diet',
		title: '我的菜谱'
	},
	{
		path: '/orderlist',
		title: '我的订单'
	},
	{
		path: '/cart',
		title: '购物车'
	},
	{
		path: '/',
		title: '我的关注'
	},
	{
		path: '/',
		title: '我的积分'
	},
	{
		path: '/',
		title: '我的粉丝'
	}
]

export default {
	name: 'entry',
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
	width: 100%;
	.item {
		@include list(row);
		justify-content:space-between;
		align-items:center;
		width: 100%;
		height: 90px;
		box-sizing:border-box;
		padding:0 20px;
		background:#fff;
		font-size:26px;
		color:#666666;
		margin-bottom:10px;
		span {
			&:last-child {
				@include leftArrow(16px, #666666);
			}
		}
	}
}
</style>