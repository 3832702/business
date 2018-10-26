<template>
	<div :class="$style.works">
		<dl v-for="item in worksData" :key="item.id">
			<dt>
				<p>{{ item.time }}</p>
				<time>{{ item.week }}</time>
				<div>
					<span>{{ item.city }}</span>
					<span>{{ item.num }}篇</span>
				</div>
			</dt>
			<dd v-for="picItem,picIndex in item.list" :key="picIndex">
				<img :src="picItem">
			</dd>
		</dl>
	</div>
</template>

<script>

const worksData = [
	{
		id: 1,
		time: '9月22',
		week: '星期四',
		city: '上海',
		num: 3,
		list: [
			'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
			'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
			'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
			'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
			'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg'
		]
	},
	{
		id: 2,
		time: '9月22',
		week: '星期四',
		city: '上海',
		num: 3,
		list: [
			'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
			'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
			'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
			'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
			'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg'
		]
	}
]

export default {
	data () {
    	return {
    		worksData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.works {
	width: 100%;

	dl {
		@include list(row);
		width: 100%;
		box-sizing:border-box;
		padding-left:20px;
		margin-bottom:20px;
		
		dt {
			width: 223px;
			height: 223px;
			background:#fff;
			margin-top:20px;
			margin-right: 20px;

			p {
				margin-top:30px;
				height:40px;
				line-height: 40px;
				color:#000000;
				font-size:24px;
				box-sizing:border-box;
				padding-left:30px;
			}

			time {
				display:block;
				width: 100%;
				line-height:38px;
				height: 38px;
				font-size:26px;
				color:#999999;
				box-sizing:border-box;
				padding-left:30px;
				margin-bottom:60px;
			}

			div {
				@include list(row);
				align-items:center;
				width: 100%;
				height: 50px;

				span {
					font-size:24px;
					&:first-child {
						@include truncation;
						width: 150px;
						box-sizing:border-box;
						padding-left:30px;
					}

					&:last-child {
						width: 70px;
						text-align:center;
					}
				}
			}
		}

		dd {
			width: 223px;
			height: 223px;
			margin-top:20px;
			margin-right: 20px;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}

</style>