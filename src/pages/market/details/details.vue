<template>
	<div :class="$style.details">
		<img v-for="item,index in image_text" :key="index" :src="item" />
	</div>
</template>

<script>
	
export default {
	props: {
		image_text: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';
.details {
	@include list;
	margin-bottom:100px;
	width: 100%;
	img {
		width: 100%;
	}
}
</style>