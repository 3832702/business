<template>
	<div :class="$style.area">
		<div :class="$style.desc">吖咪正品承诺，质量问题7天退款</div>
		<div :class="$style.address">
			<div>
				<ul>
					<li>收件人:{{ addressData.name }}</li>
					<li>{{ addressData.phone }}</li>
				</ul>
				<p>收货地址：{{ addressData.address }}</p>
			</div>
			<span></span>
		</div>
	</div>
</template>

<script>

const addressData = {
	address: 'XX市XX区XX路XX号XXXX号',
	phone: '12345678910',
	name: '张三'
}

export default {
	data () {
    	return {
    		addressData
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.area {
	width: 100%;
	margin-top:88px;
	margin-bottom:40px;
	border-bottom:1px solid #ccc;	
	color:#333333;

	.desc {
		width: 100%;
		height:90px;
		text-align:center;
		line-height:90px;
		font-size:24px;	
		border-bottom:1px solid #ccc;	
	}

	.address {
		width: 100%;
		box-sizing:border-box;
		padding:0 20px;
		@include list(row);
		justify-content:space-between;
		align-items:center;
		background:#fff;

		>div {
			width: 84%;
			padding:17px 0;
			ul {
				@include list(row);
				align-items:center;
				justify-content:space-between;
				width: 100%;
				height:54px;
				line-height:54px;
				font-size: 30px;
			}

			p {
				width: 100%;
				max-height:80px;
				line-height:40px;
				font-size:26px;
			}
		}

		>span {
			@include leftArrow($bg: #000);

		}
	}
}
</style>