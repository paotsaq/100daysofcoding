<template>
	<div>
		<div class="post" v-for="post in posts">
			<div class="postInfo">
				<router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
				<time style=""> {{ processedDate(post.frontmatter.date) }} </time>
			</div>
			<div>{{ post.frontmatter.description }}</div>
			<div class="tags" v-if="'tags' in post.frontmatter">
				<div class="tag" v-for="tag in getTags(post.frontmatter.tags)">
					{{ tag }}
				</div>
			</div>
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
				 },
			 getTags(tagsLine) {
				 return tagsLine.split(',').map(x => x.trim())
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
	  margin-block-start: 0.83em;
	  margin-block-end: 0.83em;
	  margin-inline-start: 0px;
	  margin-inline-end: 0px;
	  padding-bottom: .3rem;
	}
	.postInfo > a { 
	  font-size: 1.65rem;
	  font-weight: 600;
	  line-height: 1.25;
	  width: 80vw;
	  margin-right: 40px;
	}

	.postInfo > time { 
	  display: inline-block;
	  align-self: flex-end;
	  color: #eaecef;
	  font-weight: 400;
	}

	.tags {
	  display: inline-block;
	  align-self: flex-end;
	}

	.tag {
	  background: #eee;
	  border-radius: 3px 0 0 3px;
	  color: #999;
	  display: inline-block;
	  height: 20px;
	  line-height: 26px;
	  padding: 0 20px 0 23px;
	  position: relative;
	  margin: 0 10px 10px 0;
	  text-decoration: none;
	  text-size: 10;
	  -webkit-transition: color 0.2s;
	}

	.tag > {

</style>
