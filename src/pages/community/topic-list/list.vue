<template>
	<ul :class="$style.list">
		<li v-for="item in listData" :key="item.id">
			<div :class="$style.head">
				<img :src="item.avatar">
				<p>
					<span>{{ item.username }}</span>
					<span>{{ item.timer }}</span>
				</p>
				<span>+ 关注</span>
			</div>
			<div :class="$style.content">
				<img :src="item.img">
				<p>{{ item.content }}</p>
			</div>
			<div :class="$style.more">
				<div>
					<img src="../../../static/image/menu1.png">
				</div>
				<div>
					<img src="../../../static/image/menu2.png">
				</div>
			</div>
		</li>
	</ul>
</template>

<script>

const listData = [
	{
		id: 1,
		username: '秀智777',
		avatar: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
		timer: '09-28',
		img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
		content: '女生天生有两个胃，一个用来装正餐，一个用来储藏零食甜点。无论正餐过后还是休闲下午茶时光亦或是半夜嘴巴寂寞了，甜点总是吃货们的不两个胃，一个用来装正餐，一个用来储藏零食甜点。无论正餐过后还是休闲下午茶时光亦或是半夜嘴巴寂寞了，甜点总是吃货们的不'
	},
	{
		id: 2,
		username: '秀智777',
		avatar: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
		timer: '09-28',
		img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
		content: '女生天生有两个胃，一个用来装正餐，一个用来储藏零食甜点。无论正餐过后还是休闲下午茶时光亦或是半夜嘴巴寂寞了，甜点总是吃货们的不两个胃，一个用来装正餐，一个用来储藏零食甜点。无论正餐过后还是休闲下午茶时光亦或是半夜嘴巴寂寞了，甜点总是吃货们的不'
	}
]

export default {
	data () {
    	return {
    		listData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.list {
	width:100%;
	margin-top:88px;

	li {
		width: 100%;
		background:#fff;
		.head {
			@include list(row);
			align-items:center;
			justify-content:space-between;
			width: 100%;
			height: 100px;
			box-sizing:border-box;
			padding:20px;
			>img {
				width: 60px;
				height: 60px;
			}

			p {
				@include list;
				width: 71%;
				height: 60px;
				span {
					width: 100%;
					height: 30px;
					line-height: 30px;

					&:first-child {
						font-size: 26px;
					}

					&:last-child {
						font-size: 22px;
						color:#999999;
					}
				}
			}

			>span {
				width: 88px;
				height: 45px;
				box-sizing:border-box;
				border-radius:5px;
				border:1px solid #ff6e00;
				font-size:24px;
				text-align:center;
				line-height: 43px;
				color:#ff6e00;
			}
		}

		.content {
			width: 100%;
			margin-bottom:20px;
			>img {
				width: 100%;
				height: 450px;
				margin-bottom:12px;
			}

			p {
				@include multiline-truncation($clamp:3);
				line-height:30px;
				max-height: 90px;
				font-size: 24px;
				color:#333;
				box-sizing:border-box;
				padding:0 20px;
			}
		}

		.more {
			@include list(row);
			justify-content:center;
			width: 100%;
			height: 60px;
			border:{
				top:1px solid #ccc;
				bottom:1px solid #ccc;
			}

			div {
				@include list(row);
				align-items:center;
				justify-content:center;
				width: 320px;
				height: 100%;
				>img {
					width: 32px;
					height: 32px;
				}
			}
		}

	}
}
</style>