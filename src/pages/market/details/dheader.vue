<template>
	<Heador :class="$style.dheader" :title="title">
		<div :class="$style.right" slot="rightico">
			<span></span>
			<span></span>
		</div>
	</Heador>
</template>

<script>
import Heador from '../../../public/common/header.vue'

export default {
	components: {
		Heador
	},
	data () {
    	return {
    		title: '商品详情'
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';
.dheader {
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
			}
			&:first-child {
				&:after {
					background:url('../../../static/image/cart1.png') no-repeat;
					background-size: cover;
				}
			}
			&:last-child {
				&:after {
					background:url('../../../static/image/share1.png') no-repeat;
					background-size: cover;
				}
			}
		}
	}
}
</style>