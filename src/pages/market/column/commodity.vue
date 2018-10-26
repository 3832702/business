<template>
	<Goodslist :subActiveIndex="subActiveIndex" :class="$style.commodity" :goodsListData="goodsListData">
		<div :class="$style.subnav" slot="subnav">
			<div 
				:class="{[$style.active]: subActiveIndex === index}"  
				v-for="item,index in subnav" 
				:key="item.id"
				@click="subSearchHandler(index)"
			>
				{{ item.title }}
			</div>
		</div>
	</Goodslist>
</template>

<script>
import Panel from '../../../public/common/panel.vue'

import Goodslist from '../../../public/common/goodslist.vue'

const goodsListData = [
	{
		id: 1232,
		img: 'http://i2.tiimg.com/570833/6f06f3e2d9b0b796s.png',
		type: 0,
		title: '海底捞麻辣香锅调味料 3包 无添加防腐剂 火锅炒菜必备',
		path: '/marketdetails',
		price: '34.9',
		sell_num: 2910
	},
	{
		id: 2112,
		img: 'http://i4.fuimg.com/570833/2d976d4dcc1fccabs.png',
		type: 0,
		title: '餐具 顶级不锈钢刀叉 食品级材质 耐腐抗氧化',
		path: '/',
		price: '19.9',
		sell_num: 1890
	},
	{
		id: 212,
		img: 'http://i4.fuimg.com/570833/b4298459e1eb66f2s.png',
		type: 0,
		title: '黑米 无染色黑香米250g 五谷杂粮放心粗粮黑大米 ',
		path: '/',
		price: '1.9',
		sell_num: 1808
	},
	{
		id: 211,
		img: 'http://i4.fuimg.com/570833/282f1442f2126ae9s.png',
		type: 0,
		title: '正宗新疆若羌红枣片  美容养颜 补气养血 ',
		path: '/',
		price: '29.9',
		sell_num: 1506
	},
	{
		id: 21132,
		img: 'http://i4.fuimg.com/570833/ed1e88ab36febdbas.png',
		type: 0,
		title: '意大利Dile Moscato 上帝天使之手莫斯卡托甜白葡萄酒香槟起泡酒',
		path: '/',
		price: '299.9',
		sell_num: 1229
	},
	{
		id: 213212,
		img: 'http://i4.fuimg.com/570833/5b0d1f0960ef4624s.png',
		type: 0,
		title: '新鲜农家现摘秋葵',
		path: '/',
		price: '9.9',
		sell_num: 1099
	},
	{
		id: 21312,
		img: 'http://i4.fuimg.com/570833/c7898b57ad0b2b5es.png',
		type: 0,
		title: '智利帝王蟹2.4-2.8斤 熟冻皇帝蟹大个进口',
		path: '/',
		price: '158',
		sell_num: 1078
	},
	{
		id: 231121,
		img: 'http://i4.fuimg.com/570833/50e4972cc2d3926es.png',
		type: 0,
		title: '鲜活加拿大龙虾650-700g 不活包赔 空运进口',
		path: '/',
		price: '178',
		sell_num: 499
	},
	{
		id: 23112,
		img: 'http://i4.fuimg.com/570833/d3c8fbfabee0c659s.png',
		type: 0,
		title: '川老滙 红油郫县豆瓣酱 家庭必备调味料',
		path: '/',
		price: '13.9',
		sell_num: 325
	},
	{
		id: 22112,
		img: 'http://i4.fuimg.com/570833/f5bcdff781b1be59s.png',
		type: 0,
		title: '特级雨前雀舌春茶 新茶 纯天然 500g',
		path: '/',
		price: '158',
		sell_num: 299
	},
	{
		id: 211332,
		img: 'http://i4.fuimg.com/570833/807a2c7da7b35d90s.png',
		type: 0,
		title: '云南野生无硫精选白茯苓 中药药材 煲汤卤料常备',
		path: '/',
		price: '3.9',
		sell_num: 207
	},
	{
		id: 211132,
		img: 'http://i4.fuimg.com/570833/70ddd1bc3ea156f9s.png',
		type: 0,
		title: '餐具套装釉下彩日式和风碗碟套装',
		path: '/',
		price: '138',
		sell_num: 181
	}
]

const subnav = [
	{
		id: 1,
		title: '全部'
	},
	{
		id: 2,
		title: '南北干货'
	},
	{
		id: 3,
		title: '米面油'
	},
	{
		id: 4,
		title: '方便速食'
	},
	{
		id: 5,
		title: '其他'
	}
]

export default {
	components: {
		Panel,
		Goodslist
	},
	created() {
		console.log(this.$style)
	},
  	data () {
    	return {
    		goodsListData,
    		subActiveIndex: 0,
    		subnav
    	}
  	},
  	methods: {
  		subSearchHandler(index) {
  			this.subActiveIndex = index;
  		}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

	.commodity {
		margin-top:88px;
		>ul{
			height:90px !important;
			line-height:90px !important;
			li {
				>div {
					span {
						&:first-child {
							@include triangletop;
							top:45px;
						}
						&:last-child {
							@include trianglebt;
							top:39px;
						}
					}
				}
			}
		}

		.subnav {
			@include list(row);
			width: 100%;
			box-sizing:border-box;
			padding:0 20px;
			>div {
				padding:0 15px;
				height:50px;
				line-height:50px;
				border-radius:5px;
				background:#fff;
				font-size:28px;
				color:#333333;
				margin:18px 20px 0 0;
			}
			.active {
				background:#ffcc00;
				color:#fff;
			}
			
		}
	}
</style>