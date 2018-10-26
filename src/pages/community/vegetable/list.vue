<template>
	<div :class="$style.list">
		<div :class="$style.item" v-for="item in listData" :key="item.id">
			{{ item.title }}
		</div>
	</div>
</template>

<script>

const listData = [
	{
		id: 1,
		title: '烘焙'
	},
	{
		id: 2,
		title: '沙拉'
	},
	{
		id: 3,
		title: '意面'
	},
	{
		id: 4,
		title: '烧烤'
	},
	{
		id: 5,
		title: '牛排'
	},
	{
		id: 6,
		title: '甜品'
	},
	{
		id: 7,
		title: '小吃'
	},
	{
		id: 8,
		title: '饮品'
	},
	{
		id: 9,
		title: '火锅'
	},
	{
		id: 10,
		title: '汤'
	},
	{
		id: 11,
		title: '日本料理'
	},
	{
		id: 12,
		title: '香港美食'
	},
	{
		id: 13,
		title: '台湾美食'
	},
	{
		id: 14,
		title: '凉菜'
	},
	{
		id: 15,
		title: '创意菜'
	},
	{
		id: 16,
		title: '西餐'
	},
	{
		id: 17,
		title: '湘菜'
	},
	{
		id: 18,
		title: '微菜'
	},
	{
		id: 19,
		title: '粤菜'
	},
	{
		id: 20,
		title: '鲁菜'
	},
	{
		id: 21,
		title: '川菜'
	},
	{
		id: 22,
		title: '泰国菜'
	},
	{
		id: 23,
		title: '西北菜'
	},
	{
		id: 24,
		title: '更多'
	}
]

export default {
	data () {
    	return {
    		listData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.list {
	@include list(row);
	width: 100%;
	margin-top:88px;

	&:before {
		width: 100%;
		height: 20px;
		display:block;
		content:' ';
		background:#999999;
		margin-bottom:20px;
	}

	.item {
		width: 110px;
		height: 42px;
		box-sizing:border-box;
		border-radius:5px;
		border:1px solid #000000;
		line-height:40px;
		text-align:center;
		margin:0 20px 10px;
		font-size: 26px;
	}
}
</style>