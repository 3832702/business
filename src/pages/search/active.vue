<template>
	<Panel :panelTitle="panelTitle">
		<ul :class="$style.list">
			<li v-for="item,index in activeData" :key="index">
				<img :src="item.avatar">
				<span>{{ item.username }}</span>
			</li>
		</ul>
	</Panel>
</template>

<script>

import Panel from '../../public/common/panel.vue'

const activeData = [
	{
		id: 1,
		avatar: 'http://i4.fuimg.com/570833/41abff403069f9a3s.jpg',
		username: '喵喵的喵喵'
	},
	{
		id: 2,
		avatar: 'http://i4.fuimg.com/570833/41abff403069f9a3s.jpg',
		username: '南小果'
	},
	{
		id: 3,
		avatar: 'http://i4.fuimg.com/570833/41abff403069f9a3s.jpg',
		username: '云多面'
	},
	{
		id: 4,
		avatar: 'http://i4.fuimg.com/570833/41abff403069f9a3s.jpg',
		username: '萌城美食'
	},
	{
		id: 5,
		avatar: 'http://i4.fuimg.com/570833/41abff403069f9a3s.jpg',
		username: '洛奇'
	}
]

export default {
	components: {
		Panel
	},
	data () {
    	return {
    		panelTitle: '活跃达人',
    		activeData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.list {
	width: 100%;
	box-sizing:border-box;
	padding: 0 20px;
	background:#fff;
	@include list(row);

	li {
		@include list;
		align-items:center;
		height: 250px;
		width: 122px;
		margin:0 10px;
		color:#000000;

		img {
			width: 120px;
			height: 120px;
			margin-top:34px;
			border-radius:50%;
			margin-bottom:30px;
		}

		span {
			@include truncation;
			width: 100%;
			height: 36px;
			line-height:36px;
			font-size: 26px;
			text-align:center;
		}
	}
}
</style>