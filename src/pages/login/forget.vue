<template>
	<div :class="$style.login">
		<div :class="$style.logo">
			<img src="../../static/image/logo.png"/>
			<p>欢迎加入吖咪</p>
		</div>
		<ul :class="$style.list">
			<li>
				<label>
					<input placeholder="请输入手机号" type="text" name="">
				</label>
			</li>
			<li>
				<label>
					<input placeholder="请输入验证码" type="text" name="">
				</label>
				<span>获取验证码</span>
			</li>
			<li>
				<label>
					<input placeholder="设置密码" type="text" name="">
				</label>
				<span>
					<img src="../../static/image/eye1.png">
				</span>
			</li>
		</ul>
		<button>提交</button>
	</div>
</template>

<script>

export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			//vm.$parent.$data.title="忘记密码"
			vm.$emit('emitChangeTitle', '忘记密码')
		});
	},
	data () {
    	return {
    		
    	}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';

.login {
	width: 100%;
	margin-top:88px;

	.logo {
		width: 100%;
		@include list;
		align-items:center;
		
		>img {
			width: 182px;
			height: 182px;
			margin-top:80px;
		}

		p {
			width: 100%;
			height: 62px;
			line-height: 62px;
			color:#000000;
			text-align:center;
			font-size: 24px;
			margin-bottom:90px;
		}
	}

	.list {
		width: 100%;
		margin-bottom:190px;
		
		li {
			margin-bottom:20px;
			&:nth-of-type(2) {
				position:relative;
				span {
					width: 140px;
					height:50px;
					color:#fff;
					background:#00cc33;
					font-size: 22px;
					text-align:center;
					line-height: 50px;
					position:absolute;
					right: 54px;
					top:15px;
					border-radius:5px;
				}

				label {
					input {
						width: 70%;
					}
				}
			}

			&:nth-of-type(3) {
				position:relative;
				span {
					display:inline-flex;
					align-items:center;
					justify-content:center;
					width: 140px;
					height:100%;
					position:absolute;
					right: 54px;
					top:0;

					img {
						width: 35px;
						height: 22px;
					}
				}

				label {
					input {
						width: 70%;
					}
				}
			}
		
			label {
				width: 93%;
				display:block;
				background:#fff;
				height:80px;
				border-radius:10px;
				margin:0 auto; 

				input {
					width: 100%;
					display:block;
					border:none;
					height:80px;
					border-radius:10px;
					line-height:80px;
					box-sizing:border-box;
					padding-left: 30px;
					font-size: 28px;
				}
			}

		}
	}

	button {
		width: 72%;
		height:80px;
		text-align:center;
		line-height:80px;
		background:#ffcc00;
		font-size:32px;
		color:#6b5400;
		border:none;
		padding:0;
		border-radius:10px;
		margin:0 auto;
		display:block;
	}
}
</style>