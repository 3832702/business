<template>
	<Panel :panelTitle="panelTitle">
		<ul :class="$style.list">
			<li v-for="item,index in hotData" :key="index">
				{{ item }}
			</li>
		</ul>
	</Panel>
</template>

<script>

import Panel from '../../public/common/panel.vue'

const hotData = ['月饼', '茄子', '大闸蟹', '红烧肉', '三文鱼', '鸡翅']

export default {
	components: {
		Panel
	},
	data () {
    	return {
    		panelTitle: '热门搜索',
    		hotData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.list {
	width: 100%;
	height: 180px;
	padding:0 40px;
	box-sizing:border-box;
	background:#fff;
	position:relative;
	@include list(row);

	&:after {
		content: ' ';
		height:2px;
		position:absolute;
		box-sizing:border-box;
		border-bottom:1px solid #999999;
		left: 40px;
		right:40px;
		top: 92px;
	}

	li {
		width: 223px;
		height: 92px;
		font-size: 28px;
		box-sizing:border-box;
		line-height: 92px;
		text-align:center;
		color:#666666;
		border-right:1px solid #999999;
		&:nth-of-type(3n+0) {
			border:none;
		}
	}
}
</style>