<template>
	<div :class="$style.login">
		<div :class="$style.logo">
			<img src="../../static/image/logo.png"/>
			<p>欢迎加入吖咪</p>
		</div>
		<ul :class="$style.list">
			<li>
				<label>
					<input v-model="phone" placeholder="手机号" type="text" name="">
				</label>
			</li>
			<li>
				<label>
					<input v-if="!showPassword" v-model="password" placeholder="密码" type="password" name="">
					<input v-else v-model="password" placeholder="密码" type="text" name="">
				</label>
				<span @click="showPasswordHandler">
					<img src="../../static/image/eye1.png">
				</span>
			</li>
		</ul>
		<button @click="loginHandler">登陆</button>
		<p :class="$style.clause">
			<router-link to="/forget" tag="span">忘记密码</router-link>|
			<router-link to="/register" tag="span">注册账号</router-link>
		</p>
	</div>
</template>

<script>

import { mapMutations } from 'vuex'
import { login } from '../../service/index.js'

export default {
	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.$emit('emitChangeTitle', '登陆')
		})
	},
	created() {
		console.log(this.$route)
	},
	data () {
    	return {
    		phone: '',
    		password: '',
    		showPassword: false, // 是否显示密码
    		userinfo: null, // 用户信息
    	}
  	},
  	computed: {
  		// 判断是否为手机号
  		isPhone() {
  			return /^1\d{10}$/gi.test(this.phone)
  		}
  	},
  	methods: {
  		...mapMutations([
  			'RECORD_USERINFO'
  		]),

  		/**
  		 * [showPasswordHandler 密码是否显示控制]
  		 * @return {[type]} [description]
  		 */
  		showPasswordHandler() {
  			this.showPassword = !this.showPassword
  		},

        /**
         * [loginHandler 点击登陆]
         * @return {[type]} [description]
         */
  		loginHandler() {

  			const { phone, password } = this;

  			if (!this.isPhone) {
  				alert('请输入11位手机号')
  				return;
  			}

  			login({phone, password})
  				.then(res => {
  					
  					this.responceHandler(res.data)
  				})
  				.catch(err => {
  					console.log(err)
  				})
  			
  		},

  		/**
  		 * [responceHandler 处理登陆接口响应事件]
  		 * @param  {[Object]} data [返回的数据]
  		 * @return {[type]}      [description]
  		 */
  		responceHandler(data) {

  			if (data.status === 0) {
  				return;
  			}
  			
  			this.RECORD_USERINFO(data)
  			this.$router.replace({name: this.$route.query.redirect})
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
		margin-bottom:87px;
		
		li {
			margin-bottom:20px;
			&:last-child {
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
					&:before {
						background:url('../../static/image/password.png');
						background-size:cover;
					}
				}
			}
		
			label {
				width: 93%;
				display:block;
				background:#fff;
				height:80px;
				border-radius:10px;
				position:relative;
				margin:0 auto;

				&:before {
					width: 40px;
					height: 40px;
					content: ' ';
					position:absolute;
					left:35px;
					top:20px;
					background:url('../../static/image/my1.png');
					background-size:cover;
				} 

				input {
					width: 70%;
					display:block;
					border:none;
					height:80px;
					border-radius:10px;
					line-height:80px;
					box-sizing:border-box;
					padding-left: 100px;
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
		margin:0 auto 60px;
		display:block;
	}

	.clause {
		@include list(row);
		align-items:center;
		justify-content:flex-end;
		width: 71%;
		height: 50px;
		font-size: 30px;
		color:#666666;
		margin:0 auto;
	}
}
</style>