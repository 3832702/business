<template>
	<ul :class="$style.tab">
		<router-link 
			:to="item.path"
			tag="li"
			v-for="item,index in tabData" 
			:key="index"
			:exact-active-class="$style.active"
			exact
			replace
		>
			<span>
				{{ item.title }}
			</span>
		</router-link>
	</ul>
</template>

<script>


const tabData = [
	{
		title: '菜谱',
		path: '/search'
	},
	{
		title: '用户',
		path: '/search/user'
	},
	{
		title: '商品',
		path: '/search/goods'
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
@import '../../public/css/element.scss';

.tab {
	@include list(row);
	width: 100%;
	margin-top:88px;
	background:#fff;
	li {
		@include list(row);
		align-items:center;
		justify-content:center;
		width: 33.33333%;

		span {
			width: 100px;
			height: 90px;
			font-size: 28px;
			line-height:90px;
			text-align:center;
			box-sizing:border-box;
			border-bottom:2px solid transparent;
		}
	}

	.active {
		color:#ffcc00;
		span {
			border-color:#ffcc00;
		}
	}
}

</style>