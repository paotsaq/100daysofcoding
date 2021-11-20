<template>
				<div>
								<div class="post" v-for="post in posts">
												<div class="postInfo">
																<router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
																<time style="color: #2f855e; float:right; font-weight: 600"> {{ processedDate(post.frontmatter.date) }} </time>
												</div>
												<div>{{ post.frontmatter.description }}</div>
								</div>
				</div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    },
    methods: {
	processedDate(postDate) {
		return postDate.split('T')[0].split('-').reverse().join('/')
	}
    }
}
</script>

<style scoped>

.post {
	margin-bottom: 20px;
}

.postInfo {
  border-bottom: 1px solid #a7b1bc;
	display: flex;
	display: flex;
}
.postInfo > a { 
  font-size: 1.65rem;
  padding-bottom: .3rem;
  font-weight: 600;
	line-height: 1.25;
	width: 85vw;
}


</style>
