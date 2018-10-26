<template>
	<div>
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
		<Taboo v-show="activeIndex === 1"></Taboo>
		<Effect v-show="activeIndex === 0"></Effect>
	</div>
</template>

<script>

import Taboo from './taboo.vue'
import Effect from './effect.vue'

const tabData = [
	{
		title: '营养功效'
	},
	{
		title: '饮食禁忌'
	}
]

export default {
	components: {
		Taboo,
		Effect
	},
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
	justify-content:space-between;
	width: 100%;
	margin-top:88px;
	background:#fff;
	box-sizing:border-box;
	padding:0 20px;
	li {
		@include list(row);
		align-items:center;
		width: 160px;

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