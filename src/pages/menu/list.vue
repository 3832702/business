<template>
	<div :class="$style.list">
		<ul :class="$style.item">
			<li :class="$style.subitem" v-for="item,index in listData" :key="item.id">
				<div :class="{[$style.transparent]: item.is_block}" @click="openHandler(index)">
					<img :src="item.img"/>
					<h4>{{ item.title }}</h4>
					<span></span>
				</div>
				<ul v-show="item.is_block">
					<router-link 
						to="/menu/sub"
						tag="li"
						v-for="subItem in item.list" 
						:key="subItem.id"
					>
						{{ subItem.title }}
					</router-link>
				</ul>
			</li>
		</ul>		
	</div>
</template>

<script>

const listData = [
	{
		id: 1,
		title: '时令食材',
		img: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
		list: [
			{
				title: '小龙虾',
				id: 111
			},
			{
				title: '草鱼',
				id: 112
			},
			{
				title: '排骨',
				id: 113
			},
			{
				title: '鸡肉',
				id: 114
			},
			{
				title: '西瓜',
				id: 115
			},
			{
				title: '西红柿',
				id: 116
			},
			{
				title: '黄瓜',
				id: 117
			},
			{
				title: '豌豆',
				id: 118
			},
			{
				title: '韭菜',
				id: 119
			},
			{
				title: '糯米',
				id: 120
			},
			{
				title: '百香果',
				id: 121
			},
			{
				title: '樱桃',
				id: 122
			},
			{
				title: '毛豆',
				id: 123
			},
			{
				title: '茄子',
				id: 124
			},
			{
				title: '西葫芦',
				id: 125
			}
		]
	},
	{
		id: 2,
		title: '时令食材',
		img: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
		list: [
			{
				title: '小龙虾',
				id: 111
			},
			{
				title: '草鱼',
				id: 112
			},
			{
				title: '排骨',
				id: 113
			},
			{
				title: '鸡肉',
				id: 114
			},
			{
				title: '西瓜',
				id: 115
			},
			{
				title: '西红柿',
				id: 116
			},
			{
				title: '黄瓜',
				id: 117
			},
			{
				title: '豌豆',
				id: 118
			},
			{
				title: '韭菜',
				id: 119
			},
			{
				title: '糯米',
				id: 120
			},
			{
				title: '百香果',
				id: 121
			},
			{
				title: '樱桃',
				id: 122
			},
			{
				title: '毛豆',
				id: 123
			},
			{
				title: '茄子',
				id: 124
			},
			{
				title: '西葫芦',
				id: 125
			}
		]
	},
	{
		id: 3,
		title: '时令食材',
		img: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
		list: [
			{
				title: '小龙虾',
				id: 111
			},
			{
				title: '草鱼',
				id: 112
			},
			{
				title: '排骨',
				id: 113
			},
			{
				title: '鸡肉',
				id: 114
			},
			{
				title: '西瓜',
				id: 115
			},
			{
				title: '西红柿',
				id: 116
			},
			{
				title: '黄瓜',
				id: 117
			},
			{
				title: '豌豆',
				id: 118
			},
			{
				title: '韭菜',
				id: 119
			},
			{
				title: '糯米',
				id: 120
			},
			{
				title: '百香果',
				id: 121
			},
			{
				title: '樱桃',
				id: 122
			},
			{
				title: '毛豆',
				id: 123
			},
			{
				title: '茄子',
				id: 124
			},
			{
				title: '西葫芦',
				id: 125
			}
		]
	},
	{
		id: 4,
		title: '时令食材',
		img: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
		list: [
			{
				title: '小龙虾',
				id: 111
			},
			{
				title: '草鱼',
				id: 112
			},
			{
				title: '排骨',
				id: 113
			},
			{
				title: '鸡肉',
				id: 114
			},
			{
				title: '西瓜',
				id: 115
			},
			{
				title: '西红柿',
				id: 116
			},
			{
				title: '黄瓜',
				id: 117
			},
			{
				title: '豌豆',
				id: 118
			},
			{
				title: '韭菜',
				id: 119
			},
			{
				title: '糯米',
				id: 120
			},
			{
				title: '百香果',
				id: 121
			},
			{
				title: '樱桃',
				id: 122
			},
			{
				title: '毛豆',
				id: 123
			},
			{
				title: '茄子',
				id: 124
			},
			{
				title: '西葫芦',
				id: 125
			}
		]
	}
]

/**
 * [addHideHandler 初始化数据，给数据每一项添加一个字段is_block来控制是否显示，默认false]
 * @param {[Array]} data [分类数据]
 */
function addHideHandler(data) {

	data.forEach(item => {
		item.is_block = false
	})

	return data;
}

/**
 * [allContraction 隐藏所有子分类]
 * @param  {[Array]} data        [分类数据]
 * @param  {[Number]} activeIndex [忽略的数据索引]
 * @return {[Array]}             [返回新的数据]
 */
function allContraction(data, activeIndex) {
	data.forEach((item, index) => {
		if (index !== activeIndex) {
			item.is_block = false
		}
	})

	return data;
}

export default {
	data () {
    	return {
    		listData: []
    	}
  	},
  	created() {
  		this.initHandler();
  	},
  	methods: {
  		/*
  			@module 初始化一些数据
  		 */
  		initHandler() {
  			this.listData = addHideHandler(listData);
  		},

  		// 展开以及收缩分类
  		openHandler(index) {
  			const listData = allContraction(this.listData, index);
  			listData[index].is_block = !listData[index].is_block;
  		}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.list {
	width: 100%;
	margin-top:88px;

	.item {
		width: 100%;
		.subitem {
			@include list;
			width: 100%;
			
			.transparent {
				&:after {
					background:transparent;
				}

				span {
					@include leftArrow($bg:#000,$rotate:rotate(-135deg));
					margin-top:15px;
				}
			}

			div {
				@include list(row);
				align-items:center;
				justify-content:space-between;
				width: 100%;
				box-sizing:border-box;
				padding:0 20px;
				height:90px;
				background:#fff;
				position:relative;
				z-index:211;
				overflow:hidden;
				img {
					width: 70px;
					height:70px;
				}

				h4 {
					width: 74%;
					font-size:32px;
					height: 90px;
					line-height:90px;
				}

				span {
					@include leftArrow($bg:#000,$rotate:rotate(45deg));
				}

				&:after {
					width: 83%;
					height:1px;
					content: ' ';
					position:absolute;
					right:0;
					bottom:1px;
					background:#999999;
				}
			}

			>ul {
				@include list(row);
				width: 100%;
				margin-bottom:20px;
				position:relative;
				z-index:1;
				overflow-x: hidden;

				li {
					width: 210px;
					height:88px;
					margin:20px 20px 0;
					background:#ffffff;
					border-radius:5px;
					line-height:88px;
					text-align:center;
					font-size:28px;
					color:#666666;
				}
			}
		}
	}
}

</style>