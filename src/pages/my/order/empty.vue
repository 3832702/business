<template>
	<div :class="$style.empty">
		<div :class="$style.not">
			<img src="../../../static/image/not.png"/>
			<h4>你还没有相关订单</h4>
			<p>可以去看看有哪些想买的</p>
		</div>
		<div :class="$style.list">
			<div :class="$style.head">
				<h5>你可能想买</h5>
			</div>
			<ul>
				<li v-for="item in recommendData" :key="item.id">
					<img :src="item.img">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

const recommendData = [
	{
		img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
		id: 1
	},
	{
		img: 'http://i4.fuimg.com/570833/622bdc24cb6ac704s.jpg',
		id: 2
	}
]

export default {
	data () {
    	return {
    		recommendData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';
.empty {
	width: 100%;
	.not {
		@include list;
		width: 100%;
		height: 720px;
		align-items:center;
		img {
			width: 154px;
			height: 154px;
			margin:165px 0 60px;
		}

		h4 {
			width: 100%;
			height: 54px;
			line-height: 54px;
			font-size: 34px;
			text-align:center;
			color:#000000;
		}

		p {
			width: 100%;
			height: 40px;
			line-height: 40px;
			font-size: 24px;
			text-align:center;
			color:#666666;
		}
	}

	.list {
		width: 100%;
		.head {
			width: 100%;
			height: 80px;
			position:relative;
			&:after {
				content: ' ';
				height: 2px;
				background:#ccc;
				position:absolute;
				left: 34px;
				right: 34px;
				top: 39px;
			}
			h5 {
				@include list(row);
				justify-content:center;
				align-items:center;
				width: 210px;
				height: 100%;
				font-size: 24px;
				margin:0 auto;
				position:relative;
				z-index:2;
				background:#f5f5f5;

				&:before {
					width: 24px;
					height: 24px;
					content: ' ';
					background:url('../../../static/image/heart.png') no-repeat;
					background-size:cover;
					margin-right:5px;
				}
			}
		}

		ul {
			@include list(row);
			justify-content:space-between;
			width: 100%;
			li {
				width: 370px;
				height: 310px;
				margin-bottom:10px;

				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}

</style>