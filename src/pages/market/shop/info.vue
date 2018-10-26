<template>
	<div :class="$style.info">
		<h3>{{ infoData.title }}</h3>
		<img :src="infoData.avatar" />
		<p>发货地: {{ infoData.area }}</p>
		<p>开张日期: {{ infoData.opening_time }}</p>
		<ul>
			<li>
				<span>在线咨询</span>
			</li>
			<li>
				<span>联系卖家</span>
			</li>
		</ul>
	</div>
</template>

<script>

const infoData = {
	id: 1,
	title: '鲜活旗舰店',
	avatar: 'http://i4.fuimg.com/570833/612a9c7e6b3b8bb0s.jpg',
	area: '北京',
	opening_time: '2015年5月15日'
}

export default {
	data () {
    	return {
    		infoData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';
.info {
	width: 100%;
	margin-top:88px;
	text-align:center;
	@include list;
	align-items:center;
	background:#fff;
	margin-bottom:30px;
	h3 {
		@include truncation;
		width: 100%;
		height:72px;
		line-height:72px;
		box-sizing:border-box;
		padding:0 20px;
		text-align:center;
		font-size:30px;
		font-weight:normal;
	}
	>img {
		width:80px;
		height:80px;
		display:inline-block;
		margin-bottom:15px;
		border-radius:50%;
	}
	p {
		width: 100%;
		height: 34px;
		line-height:34px;
		font-size: 24px;
	}
	ul {
		@include list(row);
		width:100%;
		margin-top:16px;
		border-top:1px solid #ccc;
		padding:24px 0;
		li {
			width: 50%;
			box-sizing:border-box;
			height:40px;
			&:last-child {
				border-left: 2px solid #ccc;

				span {
					&:before {
						background:url('../../../static/image/phone.png') no-repeat;
						background-size:cover;
					}
				}
			}
			&:first-child {

				span {
					&:before {
						background:url('../../../static/image/kf.png') no-repeat;
						background-size:cover;
					}
				}
			}
			span {
				display:inline-flex;
				align-items:center;
				height:48px;
				font-size:24px;
				&:before {
					width: 38px;
					height:38px;
					content: ' ';
					margin-right:20px;
				}
			}
		}
	}
}
</style>