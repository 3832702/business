<template>
	<div :class="$style.shop">
		<div :class="$style.head">
			<span>店铺信息</span>
			<span>吖咪认证</span>
		</div>
		<div :class="$style.info">
			<img :src="shopData.avatar" />
			<dl>
				<dt>{{ shopData.title }}</dt>
				<dd>全部商品 {{ shopData.count }}</dd>
				<dd>{{ shopData.desc }}</dd>
			</dl>
			<button>进店逛逛</button>
		</div>
		<ul :class="$style.more">
			<li>描述相符<span>{{ shopData.desc_rate }}</span></li>
			<li>服务态度<span>{{ shopData.service_rate }}</span></li>
			<li>发货速度<span>{{ shopData.speed_rate }}</span></li>
		</ul>
		<div :class="$style.ensure">
			<img src="../../../static/image/ensure.png"/>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		shopData: {
			type: Object,
			default() {
				return {}
			}
		}
	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';
.shop {
	margin-top:20px;
	.head {
		@include list(row);
		align-items:center;
		justify-content:space-between;
		width: 100%;
		height: 91px;
		box-sizing:border-box;
		padding:0 20px;
		background:#fff;
		border: 1px solid #ccc {
			right: none;
			left: none;
		}
		span {
			font-size: 26px;
			&:last-child {
				font-size: 24px;
				color:#3cae3c;
			}
		}
	}

	.info {
		width: 100%;
		box-sizing:border-box;
		padding:0 20px;
		overflow:hidden;
		background:#fff;
		border-bottom:1px solid #ccc;
		>img {
			width: 40px;
			height: 40px;
			float:left;
			margin-top:20px;
			border-radius:50%;
		}
		>dl {
			width: 72%;
			padding:10px 0;
			float:left;
			margin-left: 10px;
			dt {
				@include truncation;
				width: 100%;
				height: 36px;
				line-height: 36px;
				font-size: 28px;
			}
			dd {
				@include truncation;
				width: 100%;
				height: 32px;
				line-height: 32px;
				font-size:24px;
				color:#999999;
			}
		}
		button {
			border-radius:5px;
			padding:0;
			width:120px;
			height:40px;
			box-sizing:border-box;
			line-height:38px;
			text-align:center;
			font-size: 24px;
			color:#ff7106;
			border:1px solid #ff7106;
			background:#fff;
			margin-top:28px;
			float:right;
		}
	}

	.more {
		@include list(row);
		align-items:center;
		justify-content:space-between;
		width: 100%;
		height: 90px;
		box-sizing:border-box;
		padding:0 20px;
		margin-bottom:20px;
		background:#fff;
		li {
			@include list(row);
			align-items:center;
			justify-content:space-between;
			width: 23%;
			height: 100%;
			font-size:24px;			
		}
	}

	.ensure {
		@include list(row);
		align-items:center;
		justify-content:center;
		width: 100%;
		height: 130px;
		background:#fff;

		img {
			width: 94%;
			height: 90px;
		}
	}
}
</style>