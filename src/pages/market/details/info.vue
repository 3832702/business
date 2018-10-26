<template>
	<div :class="$style.info">
		<img :src="infoData.img"/>
		<h4>{{ infoData.title }}</h4>
		<p>￥{{ infoData.price }}</p>
		<ul>
			<li>
				<span>月售{{ infoData.sales_num }}件</span>
				<span>{{ infoData.city }}</span>
			</li>
			<li>
				<span>运费￥{{ infoData.freight }}</span>
			</li>
		</ul>
		<div :class="$style.desc" v-html="infoData.desc"></div>
		<div :class="$style.select"><span>已选 {{ infoData.select }}</span></div>
		<div :class="$style.select"><span>配送至 {{ infoData.address }}</span></div>
	</div>
</template>

<script>

const infoData = {
	title: '挪威进口冰鲜 新鲜三文鱼整条中断刺身500G配芥末酱油 深海海域捕捞 肉质新鲜',
	img: 'http://i2.tiimg.com/570833/a9dff4656d5bbd5cs.png',
	price: '120.00',
	city: '北上深',
	sales_num: 160,
	freight: 20,
	select: '三文鱼500g',
	address: '挪威进口冰鲜 新鲜三文鱼整条中断刺身500G配芥末酱油 深海海域捕捞 肉质新鲜',
	desc: '<p>冰冻健康 全熟烹饪食用 香煎口感</p><p>今日下单次日到达,优质食材直送到家,满199元免运费!</p>'
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
		margin-top:88px;
		>img {
			width: 100%;
			height:360px;
			margin-bottom:17px;
		}
		h4 {
			@include multiline-truncation;
			max-height:62px;
			line-height:31px;	
			font-size:26px;
			color:#333333;	
			width:100%;
			box-sizing:border-box;
			padding:0 20px;	
			background:#fff;
		}
		>p {
			width: 100%;
			box-sizing:border-box;
			padding:0 20px;
			font-size:26px;
			line-height:48px;
			height:48px;
			color:#ff7106;
			background:#fff;
		}
		ul {
			width: 100%;
			background:#fff;
			margin-bottom:20px;
			li {
				@include list(row);
				align-items:center;
				justify-content:space-between;
				width: 100%;
				height:60px;
				box-sizing:border-box;
				padding:0 20px;
				border-top:1px solid #cccccc;
				font-size:23px;
			}
		}
		.desc {
			width:100%;
			box-sizing:border-box;
			padding:20px;
			background:#fff;
			margin-bottom:20px;
			p {
				height:40px;
				line-height:40px;
				font-size:24px;
				color:#333333;
				text-align:center;
			}
		}
		.select {
			@include list(row);
			align-items:center;
			background:#fff;
			justify-content:space-between;
			width: 100%;
			box-sizing:border-box;
			padding:0 20px;
			height:91px;
			border-top:1px solid #ccc;
			font-size:24px;
			margin-bottom: 20px;
			span {
				@include truncation;
				width:90%;
			}
			&:after {
				@include leftArrow($bg:#343434);
				content: '';
				display:inline-block;
			}
		}
	}
</style>