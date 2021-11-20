<template>
<div>
	<div v-for="post in posts">
	<div>
		<div class="postInfo">
			<router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
			<time style="color: #2f855e; float:right; font-weight: 600"> {{ processedDate(post.frontmatter.date) }} </time>
		</div>
	</div>
        <div style="margin-top: 0px;">{{ post.frontmatter.description }}</div>
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
.postInfo > a { 
  font-size: 1.65rem;
  padding-bottom: .3rem;
  border-bottom: 1px solid #a7b1bc;
  font-weight: 600;
	line-height: 1.25;
}

</style>
