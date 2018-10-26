<template>
	<Heador :title="title">
		<div :class="$style.right" slot="rightico">
			<span></span>
		</div>
	</Heador>
</template>

<script>
import Heador from '../../../public/common/header.vue'

export default {
	name: 's-header',
	components: {
		Heador
	},
  	data () {
    	return {
    		title: '店铺详情'
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.right {
	@include list(row);
	height:100%;
	position:absolute;
	right:20px;
	top:0;
	span {
		@include list(row);
		width: 80px;
		height:100%;
		align-items:center;
		justify-content:center;
		&:after {
			width: 40px;
			height:40px;
			content: ' ';
			display:inline-block;
			background:url('../../../static/image/share1.png') no-repeat;
				background-size: cover;
		}
	}
}
</style>