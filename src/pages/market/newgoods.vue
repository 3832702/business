<template>
	<Panel :class="$style.newgoods" :panel-title="panelTitle">
		<div :class="$style.list">
			<router-link 
				:to="{name: 'marketDetails',params: {id: item.id}}"
				tag="div"
				:class="$style.item" 
				v-for="item in new_list" 
				:key="item.id"
			>
				<img :src="item.img">
				<h5>{{ item.title }}</h5>
				<p>
					<span>月售{{ item.num }}件</span>
					<span>￥{{ item.price }}</span>
				</p>
				<button>购买</button>
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
		new_list: {
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
    		panelTitle: '最新商品'
    	}
  	}
}
</script>

<style lang="scss" module>

@import '../../public/css/element.scss';

.newgoods {
	margin-bottom:10px;
	position:relative;

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

.list {
	@include list(row);
	width: 100%;
	justify-content:space-around;

	.item {
		width: 220px;
		height: 380px;
		overflow:hidden;
		margin-bottom:20px;
		>img {
			width: 220px;
			height: 200px;
			margin-bottom:6px;
		}
		h5 {
			width: 100%;
			height: 58px;
			line-height:29px;
			font-size:24px;
			color:#333333;
			margin-bottom:15px;
		}
		>p {
			@include flex(row);
			width: 100%;
			height:50px;
			line-height:50px;
			background:#fff;
			font-size: 22px;
			color:#333333;
			margin-bottom:10px;
			span {
				text-align:center;
				&:first-child {
					width: 130px;
					height: 50px;
					box-sizing:border-box;
					overflow:hidden;
					border-right:1px solid #cfcfcf;
				}
				&:last-child {
					width: 90px;
				}
			}	
		}

		button {
			padding:0;
			border:none;
			display:block;
			min-width:80px;
			padding:0 10px;
			text-align:center;
			height:40px;
			line-height:40px;
			color:#fff;
			background:#ff7106;
			position:relative;
			top:0;
			left:220px;
			transform:translateX(-100%);
		}
	}
}	

</style>