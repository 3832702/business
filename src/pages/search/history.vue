<template>
	<Panel :panelTitle="panelTitle">
		<ul :class="$style.list">
			<li v-for="item,index in HistoryData" :key="index">
				{{ item }}
			</li>
		</ul>
	</Panel>
</template>

<script>

import Panel from '../../public/common/panel.vue'

const HistoryData = ['刀叉', '榴莲', '压力锅', '海底捞调料', '黑米', '葡萄酒', '大闸蟹', '豆瓣酱', '秋葵', '红枣片']

export default {
	components: {
		Panel
	},
	data () {
    	return {
    		panelTitle: '历史记录',
    		HistoryData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.list {
	@include list(row);
	width: 100%;
	background:#fff;
	li {
		width: 100%;
		height: 90px;
		box-sizing:border-box;
		padding-left:40px;
		position:relative;
		font-size:26px;
		line-height:90px;
		color:#666666;
		

		&:after {
			content: ' ';
			height:2px;
			box-sizing:border-box;
			border-bottom:1px solid #ccc;
			position:absolute;
			left: 40px;
			right:40px;
			bottom:0px;
		}
	}
}

</style>