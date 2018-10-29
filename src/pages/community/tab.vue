<template>
	<div :class="$style.tab">
		<div :class="$style.head">
			<router-link
				to="/community"
				tag="span" 
				:exact-active-class="$style.active"
				exact
			>
				分享
			</router-link>
			<router-link
				to="/community/follow" 
				tag="span" 
				:exact-active-class="$style.active"
				exact
			>
				关注
			</router-link>
		</div>
		<ul :class="$style.content">
			<router-link 
				:to="topic_list.length === index + 1 ? '/topiclist' : '/topic'" 
				tag="li" 
				v-for="item,index in topic_list" 
				:key="item.id"
			>
				<h4>#{{ item.title }}</h4>
				<p v-if="topic_list.length === index + 1"><span>{{ item.num }}</span>个分享</p>
				<p v-else><span>{{ item.num }}</span>个话题</p>
			</router-link>
		</ul>
	</div>
</template>

<script>

export default {
	props: {
		topic_list: {
			type: Array,
			default() {
				return []
			}
		}
	},

  	created() {
  		this.changeTypeHandler();
  	},

  	watch: {
  		$route() {
  			this.changeTypeHandler();
  		}
  	},
  	methods: {

  		/**
  		 * [changeTypeHandler 更改type并提交]
  		 * @return {[type]} [description]
  		 */
  		changeTypeHandler() {
  			const { index } = this.$route.meta;
  			if (index == null) return;
  			this.$emit('emitChangeType', index)
  		}
  	}
}
</script>

<style lang="scss" module>
@import '../../public/css/element.scss';
.tab {
	width: 100%;
	margin-top:88px;
	.head {
		@include list(row);
		width: 100%;
		height: 60px;
		line-height:60px;
		font-size:30px;
		span {
			width: 50%;
			text-align:center;
			position:relative;
			&:after {
				content: '';
				display:inline-block;
				width: 10px;
				height:10px;
				background:#ff6e00;
				border-radius:50%;
				right:100px;
				top:25px;
				position:absolute;
			}
		}

		.active {
			color:#ff6e00;

			&:after {
				background:transparent;
			}
		}
	}
	.content {
		@include list(row);
		width:100%;
		height:90px;
		li {
			@include list;
			align-items:center;
			box-sizing:border-box;
			width:33.33333%;
			overflow:hidden;
			border-right:1px solid #000000;
			&:last-child {
				border:none;
			}
			h4 {
				@include truncation;
				font-size:28px;
				width:100%;
				height:50px;
				line-height:50px;
				text-align:center;
			}
			p {
				width: 100%;
				text-align:center;
				font-size: 24px;
				color:#999999;
				height:30px;
				line-height:30px;
				span {
					color:#ff6e00;
				}
			}
		}
	}
}
</style>