<template>
	<div class="commentsBody">
		<hr>
		<h3>Some words from the readers 🌏</h3>
		<div v-if="commentsFetchError">
			<b>oops!</b> There was an error connecting to the comments database. <br>This is very sad - and most likely not <b>your</b> fault! ☹️
		</div>
		<div v-else-if="comments.length != 0">
			<div v-for="comment in comments" :key="comment.id">
				<div class="commentInfo">
					<div class="author">{{ comment.name }}</div>
					<div class="date">at {{ buildDate(comment.created_on) }}</div>
				</div>
				<p class="commentContent">
					{{ comment.body }}
				</p>
			</div>
		</div>
		<div v-else>
			There are no comments...yet! You can be the first to post a comment! 🥳 
		</div>
	</div>
</template>

<script>
import ax from "../utils/commentsAxios.js";

export default {
  props: ["title"],
  name: "fetchComments",
  data() {
	  return {
		day: this.title.split(" ")[1],
		comments: '',
		commentsFetchError: '',
	  }
  },
  methods: {
	buildDate(date) {
		let x = date.split('T')[0].split('-');
		return [x[2], x[1], x[0]].join('/');
	},
    getComments() {
      ax.get("get_comments", {
        params: { day: this.day }
		  })
	  .then(r => {
		  if (r.status == 200) {
			  this.comments = r.data;
			  }
		  })
	  .catch(r => {
		  if (r.status == 404 || r.status == null) {
			  this.commentsFetchError = true;
		  }
		}
	  )
    },
  },

  mounted() {
    this.getComments();
  },
};
</script>

<style>
.postedComments {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
}

.postedComments > h3 {
  margin-bottom: 2px;
}

.commentInfo {
  display: flex;
  flex-direction: horizontal;
}

.commentInfo > div {
  margin-right: 5px;
}

.commentContent {
  margin-top: 2px;
  line-height: 1.4;
}

.author {
  font-weight: bold;
}
</style>
