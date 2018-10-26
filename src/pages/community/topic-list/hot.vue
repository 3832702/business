<template>
	<ul :class="$style.hot">
		<li v-for="item in hotData" :key="item.id">
			<div :class="$style.head">
				<img :src="item.avatar">
				<div>
					<span>{{ item.username }}</span>
					<span>{{ item.timer }}</span>
				</div>
			</div>
			<img :src="item.img">
			<div :class="$style.more">
				<p>
					<span>{{ item.title }}</span>
					<time>{{ item.timer }}</time>
				</p>
				<p>
					<img src="../../../static/image/love2.png">
					<span>{{ item.love_num }}</span>
				</p>
			</div>
		</li>
	</ul>
</template>

<script>

const hotData = [
	{
		id: 1,
		title: '翡翠饺子',
		timer: '09-23',
		love_num: 15,
		img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
		username: '秀智777',
		avatar: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png'
	},
	{
		id: 2,
		title: '翡翠饺子',
		timer: '09-23',
		love_num: 15,
		img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
		username: '秀智777',
		avatar: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png'
	}
]

export default {
	data () {
    	return {
    		hotData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.hot {
	@include list(row);
	width:100%;
	box-sizing:border-box;
	padding-left: 20px;
	margin-top:20px;
	background:#fff;
	margin-bottom:100px;
	li {
		width: 345px;
		margin-right:20px;
		
		.head {
			@include list(row);
			justify-content:space-between;
			width: 100%;
			background:#f2f2f2;
			height: 60px;
			padding:20px 0;
			>img {
				width: 60px;
				height: 60px;
			}
			div {
				width: 260px;
				height: 60px;
				span {
					width: 100%;
					height: 30px;
					line-height: 30px;

					&:first-child {
						font-size: 26px;
					}

					&:last-child {
						font-size: 24px;
						color:#999999;
					}
				}
			}
		}

		>img {
			width: 345px;
			height: 345px;
			display:block;
		}

		.more {
			@include list(row);
			width: 100%;
			height: 90px;
			background:#f2f2f2;
			box-sizing:border-box;
			padding-left:20px;
			p {
				@include list;
				height: 90px;
				box-sizing:border-box;
				padding-top:15px;
				&:first-child {
					width: 240px;
					span {
						width: 100%;
						height: 45px;
						line-height: 45px;
						font-size: 36px;
					}

					time {
						width: 100%;
						height: 26px;
						line-height: 26px;
						font-size: 24px;
						color:#999999;
					}
				}

				&:last-child {
					width: 80px;
					color:#999999;
					align-items:center;
					img {
						width: 42px;
						height: 42px;
					}

					span {
						width:100%;
						height: 26px;
						line-height: 26px;
						font-size: 24px;
						text-align:center;
					}
				}
			}
		}
	}
}
</style>