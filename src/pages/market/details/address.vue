<template>
	<Popup :class="$style.address">
		<dl>
			<dt>配送至</dt>
			<dd 
				@click.stop="searchHandler(index)" 
				:class="{[$style.active]: item.is_default}" 
				v-for="item,index in address" 
				:key="index"
			>
				<p>{{ item.content }}</p>
				<span v-if="item.is_default"></span>
			</dd>
		</dl>
	</Popup>
</template>

<script>
import Popup from '../../../public/common/popup.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

const address = [
	{
		id: '1',
		is_default: 0,
		content: '广州总集散中心已装车,准备发往长春长青集散中心'
	},
	{
		id: 2,
		is_default: 1,
		content: '快件在【长春长青集散中心】已装车,准备发往下一站'
	},
	{
		id: 3,
		is_default: 0,
		content: '快件在【延吉朝阳集散点】已装车,准备发往 【珲春市信德路速运营业点】'
	},
	{
		id: 4,
		is_default: 0,
		content: '快件到达 【珲春市信德路速运营业点】'
	}
]

export default {
	components: {
		Popup
	},
	computed: {
		...mapState(['popup'])
	},
	watch: {
		popup() {

			if (!this.popup) {
				setTimeout(() => {
					this.$emit('emitChangeAddress', false)
				}, 600)
			}
		}
	},
	data () {
    	return {
    		address
    	}
  	},
  	methods: {
  		...mapMutations(['CHANGE_POPUP', 'RECORD_ADDRESS']),
  		...mapActions(['delayHidePopup']),
  		/**
  		 * [searchHandler 切换地址]
  		 * @param  {[type]} index [description]
  		 * @return {[type]}       [description]
  		 */
  		searchHandler(index) {
  			this.address.forEach((item, i) => {
  				this.address[i].is_default = index === i ? 1 : 0;

  				if (index === i) {
  					this.RECORD_ADDRESS(item)
  				}
  			})

  			// 延迟隐藏弹窗
  			this.delayHidePopup(false)
  		}
  	}
}
</script>

<style lang="scss" module>
@import '../../../public/css/element.scss';

.address {
	dl {
		width: 100%;
		dt {
			width: 100%;
			height: 100px;
			line-height: 100px;
			font-size: 28px;
			color:#999;
			text-align:center;
		}

		dd {
			@include list(row);
			align-items:center;
			width: 100%;
			box-sizing:border-box;
			padding:0 20px;
			font-size: 26px;
			color:#333;
			position:relative;
			&:before {
				content: ' ';
				width:26px;
				height:26px;
				background:#ccc;
				margin-right:15px;
			}
			&:after {
				content: ' ';
				height:2px;
				box-sizing:border-box;
				border-bottom:1px solid #ccc;
				position:absolute;
				left:20px;
				right:0;
				bottom:0;
			}

			p {
				width: 89%;
				height: 100%;
				padding:15px 0;
				line-height: 30px;
			}

			>span {
				width: 26px;
				height: 26px;
				background:#ccc;
			}
		}

		.active {
			color:red;
			&:before {
				background:red;
			}
		}
	}
}
</style>