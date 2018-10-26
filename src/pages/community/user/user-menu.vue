<template>
	<Article :articleData="articleData"></Article>
</template>

<script>

import Article from '../../../public/common/article.vue'

const articleData = [
	{
		id: '1',
		path: '/',
		title: '好吃好看的泡椒牛蛙',
		img: 'http://i1.fuimg.com/570833/03e34ce6def574c6s.png',
		avatar: 'http://i1.fuimg.com/570833/85b57ad0fbd0e67es.jpg',
		username: '爱吃的董小姐',
		content: '无论我们在这个世界是多么地渺小，只要我们是被需要的，就会感觉发着光。是的呢，在家里我就是这么一个存在。每当我在细心……',
		browse: '35478',
		collection: '2000'
	},
	{
		id: '2',
		path: '/',
		is_video: true,
		title: '看一眼就忘不了的黑椒牛排',
		img: 'http://i4.fuimg.com/570833/4ab1c867e001b1f9s.png',
		avatar: 'http://i4.fuimg.com/570833/b9c6696b9ef487f5s.jpg',
		username: '小孩',
		content: '欧洲中世纪时，猪肉及羊肉是平民百姓的食用肉，牛肉则是王公贵族们的高级肉品，尊贵的牛肉被他们搭配上了当时也是享有尊贵……',
		browse: '50000',
		collection: '4000'
	}
]

export default {
	components: {
		Article
	},
	data () {
    	return {
    		articleData
    	}
  	}
}
</script>