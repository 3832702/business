<template>
	<ul :class="$style.tab">
		<li 
			v-for="item,index in tabData" 
			:key="index"
			:class="{[$style.active]: index === activeIndex}"
			@click="searchHandler(index)"
		>
			<span>
				{{ item.title }}
			</span>
		</li>
	</ul>
</template>

<script>


const tabData = [
	{
		title: '综合最佳'
	},
	{
		title: '收藏最多'
	},
	{
		title: '做过最多'
	}
]

export default {
	data () {
    	return {
    		tabData,
    		activeIndex: 0
    	}
  	},
  	methods: {
  		/**
  		 * [searchHandler 切换选项卡]
  		 * @return {[Number]} [当前点击索引]
  		 */
  		searchHandler(index) {
  			this.activeIndex = index;
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
		width: 33.33333%;

		span {
			width: 160px;
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