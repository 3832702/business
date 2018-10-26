<template>
	<div :class="$style.content">
		<ul :class="$style.tab">
			<router-link 
				:to="item.path"
				tag="li"
				v-for="item in tabData" 
				:key="item.title"
				replace
				exact
				:exact-active-class="$style.active"
			>
				{{ item.num }}{{ item.title }}
			</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>

const tabData = [
	{
		path: '/user',
		title: '菜谱',
		num: 381
	},
	{
		path: '/user/works',
		title: '作品',
		num: 373
	},
	{
		path: '/user/diary',
		title: '帖子',
		num: 118
	}
]

export default {
	data () {
    	return {
    		tabData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.content {
	width: 100%;
	.tab {
		@include list(row);
		align-items:center;
		justify-content:flex-end;
		box-sizing:border-box;
		padding:0 20px;
		width: 100%;
		height: 92px;
		background:#fff;
		border:{
			top: 1px solid #ccc;
			bottom: 1px solid #ccc;
		}

		li {
			width:210px;
			height: 90px;
			line-height: 90px;
			font-size: 28px;
		}

		.active {
			color:#ff6e00;
		}
	}
}
</style>