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
		title: '全部',
		path: '/orderlist'
	},
	{
		title: '待付款',
		path: '/orderlist/unpaid'
	},
	{
		title: '待发货',
		path: '/orderlist/pack'
	},
	{
		title: '待评价',
		path: '/orderlist/completed'
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

.tab {
	@include list(row);
	width: 100%;
	margin-top:88px;
	background:#fff;
	li {
		@include list(row);
		align-items:center;
		justify-content:center;
		width: 25%;

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