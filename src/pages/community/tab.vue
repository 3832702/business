<template>
	<div :class="$style.tab">
		<div :class="$style.head">
			<router-link
				to="/community"
				@click="searchTabHandler(0)"
				tag="span" 
				:class="{ communityTabActive: activeIndex === 0 }"
			>
				{{ tabData[0].title }}
			</router-link>
			<router-link
				to="/community/follow" 
				@click="searchTabHandler(1)"
				tag="span" 
				:class="{ communityTabActive: activeIndex === 1 }"
			>
				{{ tabData[1].title }}
			</router-link>
		</div>
		<ul :class="$style.content">
			<router-link 
				:to="item.path" 
				tag="li" 
				v-for="item,index in tabData[activeIndex].data" 
				:key="item.id"
			>
				<h4>#{{ item.title }}</h4>
				<p v-if="tabData.length === index + 1"><span>{{ item.num }}</span>个分享</p>
				<p v-else><span>{{ item.num }}</span>个话题</p>
			</router-link>
		</ul>
	</div>
</template>

<script>

const tabData = [
	{	
		title: '分享',
		data: [
			{	
				id: 12,
				title: '戒不掉的甜品',
				num: 134,
				path: '/topiclist'
			},
			{	
				id: 13,
				title: '最爱的香港美食',
				num: 30,
				path: '/topiclist'
			},
			{	
				id: 14,
				title: '更多话题',
				num: 18,
				path: '/topic'
			},
		],
	},
	{	
		title: '关注',
		data: [
			{	
				id: 12,
				title: '戒不掉的甜品',
				num: 134,
				path: '/'
			},
			{	
				id: 13,
				title: '最爱的香港美食',
				num: 30,
				path: '/'
			},
			{	
				id: 14,
				title: '更多话题',
				num: 18,
				path: '/'
			},
		],
	}
]

export default {
	data () {
    	return {
    		tabData,
    		activeIndex: 0
    	}
  	},
  	created() {
  		this.initActiveIndex();
  	},
  	watch: {
  		$route() {
  			this.initActiveIndex();
  		}
  	},
  	methods: {
  		/*
  			初始化tab索引值
  		 */
  		initActiveIndex() {
  			this.activeIndex = this.$route.meta.index;
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

<style type="text/css">
	.communityTabActive {
		color:#ff6e00;
	}

	.communityTabActive:after {
		background:transparent !important;
	}
</style>