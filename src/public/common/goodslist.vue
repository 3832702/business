<template>
	<Panel :class="$style.goodslist" :panelTitle="panelTitle">
		<ul>
			<li :class="{[$style.hotActive]: activeIndex === 0}">综合</li>
			<li :class="{[$style.hotActive]: activeIndex === 1}">销量</li>
			<li :class="{[$style.hotActive]: activeIndex === 2}">
				价格
				<div>
					<span></span>
					<span></span>
				</div>
			</li>
			<li :class="{[$style.hotActive]: activeIndex === 3}">新品</li>
		</ul>
		<slot name="subnav"></slot>
		<div :class="$style.list">
			<router-link 
				:to="item.path"
				tag="div"
				:class="$style.item" 
				v-for="item in goodsListData" 
				:key="item.id"
				exact
			>
				<img :src="item.img"/>
				<h5>{{ item.title }}</h5>
				<span>￥{{ item.price }}</span>
				<p>{{ item.sell_num }}人已付款</p>
			</router-link>
		</div>
	</Panel>
</template>

<script>
import Panel from '../../public/common/panel.vue'

export default {
	props: {
		goodsListData: {
			type: Array,
			default() {
				return []
			}
		},
		panelTitle: {
			type: String,
			default: ''
		},
		subActiveIndex:{
			type: Number,
			default:  -1
		}
	},
	computed: {
		subActive() {
			return this.subActiveIndex;
		}
	},
	components: {
		Panel
	},
  	data () {
    	return {
    		activeIndex: 0
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../css/element.scss';

	.goodslist {
		margin:0;
		>ul {
			@include list(row);
			width: 100%;
			height: 46px;
			line-height:46px;
			background:#fff;
			li {
				@include list(row);
				justify-content:center;
				width: 25%;
				height: 100%;
				font-size: 29px;
				color:#333333;
				align-items:center;
				>div {
					@include list;
					width: 30px;
					height:100%;
					display:inline-block;
					position:relative;
					span {
						display:inline-block;
						position:absolute;
						left:10px;
						&:first-child {
							@include triangletop;
							top:20px;
						}
						&:last-child {
							@include trianglebt;
							top:14px;
						}
					}
				}
			}
			.hotActive {
				color:#ff7106;
			}
		}

		.list {
			@include list(row);
			width: 100%;
			.item {
				width: 345px;
				box-sizing:border-box;
				padding:20px;
				margin-left:20px;
				img {
					width: 305px;
					height:250px;
					margin-bottom:15px;
				}
				h5 {
					@include multiline-truncation;
					width: 305px;
					height:58px;
					line-height:29px;
					font-size:24px;
				}
				>span {
					display:block;
					height: 58px;
					line-height:58px;
					text-align:center;
					color:#ff7106;
					font-size:26px;
				}
				p {
					@include truncation;
					font-size: 22px;
					height: 30px;
					margin-bottom:10px;
					width: 305px;
				}
			}
		}
	}
</style>