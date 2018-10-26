<template>
	<ul :class="$style.list">
		<li v-for="item in ListData" :key="item.id">
			<img :src="item.img">
			<div>
				<h4>{{ item.title }}</h4>
				<p>{{ item.num }}个分享</p>
			</div>
		</li>
	</ul>
</template>

<script>

const ListData = [
	{
		id: 1,
		title: '戒不掉的甜品',
		num: '134',
		img: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg'
	},
	{
		id: 12,
		title: '戒不掉的甜品',
		num: '134',
		img: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg'
	},
	{
		id: 13,
		title: '戒不掉的甜品',
		num: '134',
		img: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg'
	},
	{
		id: 14,
		title: '戒不掉的甜品',
		num: '134',
		img: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg'
	},
	{
		id: 15,
		title: '戒不掉的甜品',
		num: '134',
		img: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg'
	},
	{
		id: 16,
		title: '戒不掉的甜品',
		num: '134',
		img: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg'
	}
]

export default {
	data () {
    	return {
    		ListData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.list {
	margin-top:88px;
	width: 100%;

	li {
		@include list(row);
		justify-content:space-between;
		width: 100%;
		height: 120px;
		box-sizing:border-box;
		padding:20px;
		position:relative;
		border-bottom:1px solid #ccc;
		background:#fff;

		&:after {
			@include leftArrow($bg:#666666,$width:16px);
			content: ' ';
			position:absolute;
			top:40px;
			right:20px;
		}

		img {
			width: 80px;
			height: 80px;
		}

		>div {
			@include list(row);
			width: 82%;
			height: 80px;

			h4 {
				width: 540px;
				height:42px;
				line-height:42px;
				font-size:28px;
			}

			p {
				width: 540px;
				height:38px;
				line-height: 38px;
				font-size: 24px;
				color:#999999;
			}
		}
	}
}

</style>