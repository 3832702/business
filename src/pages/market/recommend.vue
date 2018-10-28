<template>
	<Panel :class="$style.recommend" :panelTitle="panelTitle">
		<div :class="$style.list">
			<router-link 
				:to="{name: 'marketDetails',params: {id: item.id}}"
				tag="div"
				:class="$style.item" 
				v-for="item in recommend_list" 
				:key="item.id"
			>
				<img :src="item.img" />
				<h5>{{ item.title }}</h5>
			</router-link>
		</div>
		<router-link to="/" tag="div" :class="$style.more">
			更多
		</router-link>
	</Panel>
</template>

<script>
import Panel from '../../public/common/panel.vue'

export default {
	props: {
		recommend_list: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		Panel
	},
	data () {
    	return {
    		panelTitle: '为你推荐'
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.recommend {
	.list {
		@include list(row);
		justify-content:space-around;
		width: 100%;
		.item {
			width:220px;
			overflow:hidden;
			img {
				width: 100%;
				height: 200px;
			}
			h5 {
				width: 100%;
				height:42px;
				line-height:42px;
				font-size:24px;
				color:#333333;
				text-align:center;
			}
		}
	}

	.more {
		@include list(row);
		align-items:center;
		position:absolute;
		top:0;
		right:40px;
		font-size: 26px;
		height:74px;
		color:#ff7106;
		&:after{
			@include leftArrow(12px, #ff7106)
			display:inline-block;
			content: ' ';
			margin-left:10px;
		}
	}
}
</style>