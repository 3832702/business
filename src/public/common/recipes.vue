<template>
	<div :class="$style.recipes">
		<div :class="$style.item" v-for="item in recipesData" :key="item.id">
			<img :src="item.img"/>
			<div :class="$style.content">
				<h4>{{ item.title }}</h4>
				<slot :recipes="item"></slot>
				<time>{{ item.timer }}</time>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		recipesData: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data () {
    	return {
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';
.recipes {
	margin-top: 88px;
	.item {
		@include list(row);
		background:#fff;
		justify-content: space-between;
		margin-bottom:10px;
		width:100%;
		>img {
			width: 32%;
			height: 164px;
		}
		.content {
			width: 64%;
			color:#666;
			>h4 {
				@include truncation;
				width: 100%;
				height: 76px;
				line-height:76px;
				box-sizing:border-box;
				padding-right:20px;
				font-size:28px;
			}
			time {
				width: 100%;
				height:46px;
				line-height:46px;
				font-size:24px;
			}
		}
	}
}
</style>