<template>
	<Article :articleData="article_data"></Article>
</template>

<script>

import Article from '../../public/common/article.vue'

export default {
	props: {
		article_data: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		Article
	}
}
</script>