<template>
	<div>
		<div class="post" v-for="post in posts">
			<div class="postInfo">
				<router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
				<time style=""> {{ processedDate(post.frontmatter.date) }} </time>
			</div>
			<div>{{ post.frontmatter.description }}</div>
			<div class="postTags" v-if="'tags' in post.frontmatter">
				<ul class="tag" v-for="tag in getTags(post.frontmatter.tags)">
					<li>{{ tag }}</li>
				</ul>
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
				 return tagsLine.split(',').map(x => x.trim()).filter(x =>x.length > 0)
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
	  color: #38a263;
	  font-weight: 400;
	}

	@media (prefers-color-scheme: dark) {
		.postInfo > time {
		  color: #eaecef;
		}
	}

	.postTags {
      list-style: none;
      margin: 6px 0 0 0;
	  display: inline-block;
	  align-self: flex-end;
	}

	.tag {
	  background: #eee;
	  border-radius: 7px 0 0 7px;
	  color: #999;
	  display: inline-block;
	  line-height: 20px;
	  padding: 0 17px 0 20px;
	  position: relative;
	  margin: 0 10px 0 0;
	  text-decoration: none;
	  font-size: 11px;
	  -webkit-transition: color 0.2s;
	}

	@media (prefers-color-scheme: dark) {
		.tag {
		  background: #383737;
		  color: #d9ffd2;
		  -webkit-transition: color 0.2s;
		}
	}

	li::marker {
	  font-size: 150%;
	  color: white;
	}
</style>
