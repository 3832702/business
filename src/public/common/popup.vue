<template>
	<div :class="$style.popup" @click="hidePopupHandler">
		<transition
	      :leave-to-class="$style.leave_to_class"
	      :enter-class="$style.enter_class"
	      :leave-active-class="$style.leave_active_class"
	      :enter-active-class="$style.enter_active_class"
	      :enter-to-class="$style.enter_to_class"
	    >
	        <div v-if="popup">
				<slot></slot>
			</div>	
    	</transition>	
	</div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
	computed: {
		...mapState(['popup'])
	},
	methods: {
		...mapMutations(['CHANGE_POPUP']),
		hidePopupHandler() {
			this.CHANGE_POPUP(false)
		}
	}
}
</script>

<style lang="scss" module>
@import '../css/element.scss';

.popup {
	width: 100%;
	height: 100%;
	background:rgba(0,0,0,.6);
	position:fixed;
	z-index:100;
	left:0;
	top:0;

	>div {
		width: 100%;
		height: 800px;
		background:#fff;
		position:absolute;
		left:0;
		bottom:0
	}

	.enter_class, .leave_to_class {
	   transform: translateY(100%)
	}

	.enter_to_class {
	   transform: translateY(0)
	}

	.enter_active_class, .leave_active_class {
	   transition:.5s;
	}
}

</style>