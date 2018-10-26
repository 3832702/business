<template>
	<div :class="$style.details">
		<img v-for="item,index in detailsData" :key="index" :src="item" />
	</div>
</template>

<script>

const detailsData = [
	'http://i1.fuimg.com/570833/e01c1dc770b52fd9s.png',
	'http://i1.fuimg.com/570833/8987238595bddafes.jpg',
	'http://i4.fuimg.com/570833/282f8ee6e597e37bs.jpg',
	'http://i1.fuimg.com/570833/bfd161c598c075c4s.jpg',
	'http://i4.fuimg.com/570833/06fe78b1694128bbs.jpg',
	'http://i4.fuimg.com/570833/c39b4488f1460030s.jpg',
	'http://i4.fuimg.com/570833/7bd39d9097f9570ds.jpg'
]

export default {
	data () {
    	return {
    		detailsData
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