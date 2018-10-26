<template>
	<div :class="$style.diary">
		<ul :class="$style.item">
			<li v-for="item in diaryData" :key="item.id">
				<div :class="$style.info">
					<h4>{{ item.title }}</h4>
					<ul>
						<li>
							<img src="../../../static/image/comment1.png"/>
							<span v-if="item.comment_num">{{ item.comment_num }}</span>
							<span v-else>评论</span>
						</li>
						<li>
							来自 <span>{{ item.source }}</span>
						</li>
					</ul>
					<time>{{ item.timer }}</time>
				</div>
				<img src="http://i4.fuimg.com/570833/622bdc24cb6ac704s.jpg"/>
				<img src="http://i4.fuimg.com/570833/622bdc24cb6ac704s.jpg"/>
			</li>
		</ul>
	</div>
</template>

<script>

const diaryData = [
	{
		id: 1,
		title: '舍不得吃的便当',
		source: '私房菜',
		timer: '2016年9月22日',
		comment_num: 0
	},
	{
		id: 2,
		title: '舍不得吃的便当',
		source: '私房菜',
		timer: '2016年9月22日',
		comment_num: 0
	}
]

export default {
	data () {
    	return {
    		diaryData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.diary {
	width: 100%;

	.item {
		width: 100%;
		>li {
			width: 100%;
			height: 180px;
			padding:20px;
			box-sizing:border-box;
			border-bottom:1px solid #ccc;

			>img {
				width: 140px;
				height: 140px;
				float:right;
				margin-right:20px;
			}

			.info {
				width: 50%;
				float:left;
				>h4 {
					@include truncation;
					width: 100%;
					height: 62px;
					line-height: 62px;
					font-size:26px;
				}

				ul {
					@include list(row);
					height: 34px;
					align-items:center;
					width: 100%;
					li {
						@include list(row);
						align-items:center;
						font-size: 24px;
						height:100%;
						&:first-child {
							margin-right:40px;
						}

						&:last-child {
							color:#999999;
							span {
								color:#ff6e00;
							}
						}

						>img {
							width: 37px;
							height: 30px;
							margin-right:20px;
						}
					}
				}

				time {
					width: 100%;
					height: 50px;
					line-height:50px;
					display:block;
					font-size:24px;
					color:#999999;
				}
			}
		}
	}
}
</style>