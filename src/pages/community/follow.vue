<template>
	<div :class="$style.list">
		<div 
			:class="$style.item" 
			v-for="item in followData" 
			:key="item.id"
		>
			<div :class="$style.head">
				<img :src="item.avatar">
				<router-link to="/user" tag="p">
					<span>{{ item.username }}</span>
					<span>编辑推荐</span>
				</router-link>
				<div>
					<img src="../../static/image/love1.png">
				</div>
			</div>
			<img :src="item.img" />
			<div :class="$style.content">
				<h4>{{ item.title }}</h4>
				<p>{{ item.content }}</p>
				<div>
					<img src="../../static/image/love2.png">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

const followData = [
	{
		id: 1,
		avatar: 'http://i4.fuimg.com/570833/3691b57e688fe35cs.png',
		username: 'Carol Maky',
		img: 'http://i1.fuimg.com/570833/f44a23c82cfdac3bs.png',
		title: '香辣猪排',
		content: '香酥嫩滑，无时无刻不在挑逗你的眼球和味蕾',
		is_collection: 0,
		is_love: 0
	},
	{
		id: 2,
		avatar: 'http://i2.tiimg.com/570833/efb44240eec06102s.png',
		username: '安娜520',
		img: 'http://i4.fuimg.com/570833/5c555e46bb82a0f9s.png',
		title: '柠檬孜然鸡腿',
		content: '最喜欢的食物之一 鸡肉带有孜然的香气 柠檬也起到了很好的解腻作用',
		is_collection: 0,
		is_love: 0
	}
]

export default {
	name: 'follow',
  	data () {
    	return {
    		followData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.list {
	width:100%;
	margin-bottom:100px;
	.item {
		width: 100%;
		border-top:1px solid #999999;
		margin-top:10px;
		.head {
			width:100%;
			height:100px;
			box-sizing:border-box;
			padding:0 0 0 20px;
			position:relative;
			overflow:hidden;

			>img {
				width:60px;
				height:60px;
				float:left;
				margin-top:20px;
			}

			p {
				@include list(row);
				height:60px;
				position:absolute;
				left:100px;
				right:100px;
				top:20px;

				span {
					width:100%;
					height:30px;
					line-height:30px;
					&:first-child {
						font-size: 24px
					}	
					&:last-child {
						font-size: 24px;
						color:#999999;
					}					
				}
			}

			div {
				@include list(row);
				align-items:center;
				float:right;
				justify-content:center;
				width: 100px;
				height:100px;
				img {
					width: 48px;
					height:48px;
				}
			}
		}

		>img {
			width:100%;
			height:550px;
		}

		.content {
			width: 100%;
			height:100px;
			position:relative;
			h4 {
				@include truncation;
				font-size: 26px;
				height:62px;
				line-height:62px;
				width: 90%;
				box-sizing:border-box;
				padding-left:20px;
			}
			p {
				@include truncation;
				font-size: 24px;
				height:48px;
				line-height:30px;
				width: 90%;
				box-sizing:border-box;
				padding-left:20px;
			};
			div {
				@include list(row);
				justify-content:center;
				align-items:center;
				position:absolute;
				height:100px;
				width:100px;
				right:0;
				top:0;

				img {
					width: 48px;
					height:48px;
				}
			}
		}
	}
}
</style>