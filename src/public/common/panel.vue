<template>
	<div :class="[$style.panel, cname]">
    <h4 v-if="panelTitle">{{ panelTitle }}</h4>
		<slot></slot>
	</div>
</template>

<script>
export default {
  props: {
  	cname: {
  		type: String,
  		default: ''
  	},
    panelTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" module>
	@import '../css/element.scss';

	.panel {
		@include panel;
    margin-bottom:30px;
    position:relative;
    >h4 {
      width: 100%;
      height: 74px;
      line-height: 74px;
      padding-left: 40px;
      box-sizing:border-box;
      font-size:32px;
      color:#333;
    }
	}

</style>