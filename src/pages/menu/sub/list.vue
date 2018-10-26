<template>
	<dl :class="$style.goods">
		<router-link to="/encyclopedias" tag="dt">
			<img src="" />
			<div>
				<h4>大闸蟹</h4>
				<p>食材的营养功效，饮食搭配</p>
			</div>
			<span></span>
		</router-link>
		<dd v-for="item in listData" :key="item.id">
			<img :src="item.img">
			<div>
				<h4>{{ item.title }}</h4>
				<p>{{ item.column }}</p>
				<p>{{ item.name }}</p>
				<p>
					<span>{{ item.collection_num }}收藏</span>
					<span>{{ item.works_num }}作品</span>
				</p>
			</div>
		</dd>
	</dl>
</template>

<script>

const listData = [
	{
		id: 1,
		title: '香辣蟹',
		name: '离城的小柚',
		column: '大闸蟹',
		collection_num: 2121,
		works_num: 1212,
		img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png'
	},
	{
		id: 2,
		title: '香辣蟹',
		name: '离城的小柚',
		column: '大闸蟹',
		collection_num: 2121,
		works_num: 1212,
		img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png'
	},
	{
		id: 3,
		title: '香辣蟹',
		name: '离城的小柚',
		column: '大闸蟹',
		collection_num: 2121,
		works_num: 1212,
		img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png'
	},
	{
		id: 4,
		title: '香辣蟹',
		name: '离城的小柚',
		column: '大闸蟹',
		collection_num: 2121,
		works_num: 1212,
		img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png'
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

.goods {
	width: 100%;
	margin-top:20px;

	dt {
		@include list(row);
		justify-content:space-between;
		align-items:center;
		width: 100%;
		height: 140px;
		box-sizing:border-box;
		padding:0 30px;
		background:#fff;
		margin-bottom:20px;

		>img {
			width: 120px;
			height: 120px;
		}

		div {
			width: 70%;
			height: 100%;
			h4 {
				@include truncation;
				width: 100%;
				height: 72px;
				font-size: 28px;
				line-height:72px;
			}

			p {
				@include truncation;
				width: 100%;
				height: 64px;
				line-height: 64px;
				font-size:24px;
				color:#666666;
			}
		}

		>span {
			@include leftArrow($bg:#999999,$width:20px);
		}
	}

	dd {
		@include list(row);
		justify-content:space-between;
		width: 100%;
		height:260px;
		box-sizing:border-box;
		padding:30px;
		background:#fff;

		img {
			width: 260px;
			height: 200px;
		}

		>div {
			width: 58%;
			height: 200px;

			>h4 {
				@include truncation;
				font-size: 30px;
				height: 30px;
				line-height: 30px;
			}

			p {
				&:nth-of-type(1) {
					height:84px;
					line-height:84px;
					font-size: 26px;
					color:#666666;
				}
				&:nth-of-type(2) {
					height: 30px;
					line-height:30px;
					font-size:24px;
					color:#b6b6b6;
					margin-bottom:22px;
				}
				&:nth-of-type(3) {
					@include list(row);
					align-items:center;
					height: 24px;
					line-height: 24px;
					font-size:24px;
					color:#999999;
					span {
						margin-right:50px;
					}
				}
			}
		}
	}
}
</style>