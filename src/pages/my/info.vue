<template>
	<div :class="$style.personal">
		<div :class="$style.info">
			<img :src="userInfo.avatar"/>
			<h4>{{ userInfo.username }}</h4>
		</div>
		<div :class="$style.more">
			<div :class="$style.identity">{{ userInfo.grade }}</div>
			<ul>
				<li>
					<span>{{ userInfo.follow_num }}</span>
					<span>关注</span>
				</li>
				<li>
					<span>{{ userInfo.fans_num }}</span>
					<span>粉丝</span>
				</li>
				<li>
					<span>{{ userInfo.integral_num }}</span>
					<span>积分</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { my } from '../../service/index.js'
import { getStore } from '../../public/js/util.js'

export default {
	created() {
		this.getData();
	},
  	data () {
    	return {
    		userInfo: {}
    	}
  	},
  	methods: {
  		/**
  		 * [getData 获取数据]
  		 * @return {[type]} [description]
  		 */
  		getData() {
  			const user_id = getStore('user_id');
  			
			my({user_id})
				.then(res => this.userInfo = res.data)
				.catch(err => console.log(err))
  		}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.personal {
	@include list(row);
	margin-top:88px;
	box-sizing:border-box;
	padding:20px 170px;
	width:100%;
	height:220px;
	justify-content: space-between;

	.info {
		@include list;
		width: 150px;
		height:180px;
		justify-content:space-between;

		img {
			width:145px;
			height:145px;
			border-radius:50%;
		}

		h4 {
			@include truncation;
			width: 100%;
			height:24px;
			line-height:24px;
			font-size:24px;
			color:#666666;
			text-align:center;
		}
	}

	.more {
		@include list;
		justify-content:flex-end;
		width:230px;
		height: 180px;

		.identity {
			@include list(row);
			align-items:center;
			width:100px;
			box-sizing:border-box;
			height:40px;
			border:1px solid #dadada;
			border-radius:4px;
			margin-bottom:10px;
			font-size:22px;
			&:before {
				width: 26px;
				height:26px;
				content:' ';
				display:inline-block;
				background:url('../../static/image/identity.png') no-repeat;
				background-size:cover;
				margin:0 6px;
			}
		}

		ul {
			@include list(row);
			width:100%;
			height: 50px;
			li {
				@include list;
				width: 33.333333%;
				text-align:center;
				span {
					width: 100%;
					&:first-child {
						height:26px;
						line-height:26px;
						color:#ff6600;
						font-size:22px;
					}
					&:last-child {
						height:24px;
						font-size:22px;
						line-height:24px;
						color:#666;
					}
				}
			}
		}
	}
}
</style>