<template>
	<div :class="$style.loading">
		<div>
			<svg width="76" height="76" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
			    <g fill="none" fill-rule="evenodd">
			        <g transform="translate(1 1)" stroke-width="2">
			            <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
			            <path d="M36 18c0-9.94-8.06-18-18-18">
			                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
			            </path>
			        </g>
			    </g>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" module>

@import '../../public/css/element.scss';

	.loading {
		width: 100%;
		height: 100%;
		position:fixed;
		left:0;
		top:0;
		z-index:111111111;
		div {
			@include middle;
			position:absolute;
			background-color: rgba(0, 0, 0, .6);
			border-radius:10px;
			width: 108px;
			height: 108px;
		}
		svg {
			width:76px;
			height:76px;
			margin-left: 16px;
			margin-top:16px;
		}
	}
</style>