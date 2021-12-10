<template>
  <div class="commentsForm">
    <h3>Some words from the readers 🌏</h3>
    <div class="postedComments">
		<div v-if="this.comments.length == 0">
			There are no comments...yet! 
		</div>
		<div v-else>
{{ this.comments }}
			number of comments: {{ this.comments.length }} <br>
			<div v-for comment in this.comments>
				<div class="commentInfo">
					<div class="author">John Doe</div>
					<div class="date">at 10/10/2021</div>
				</div>
				<p class="commentContent">
				What a great blog post! It is very near to being a literary masterpiece.
				Why would one need Proust, when we have this? 🙇‍♂️
				</p>
			</div>
		</div>
    </div>
    <h3>Let me know what you think! ✍️</h3>
    <form>
      <div class="formElement">
        <label>What shall I call you?</label>
        <input
          name="submitted-name"
          autocomplete="name"
          placeholder="Place a name (required)"
          v-model="form.name"
        />
        <div class="message error" v-if="nameError">
          This field cannot be empty!
        </div>
      </div>
      <div class="formElement">
        <label
          >What's your email? (not required, and will not be published!)</label
        >
        <input
          name="submitted-email"
          autocomplete="email"
          placeholder="Your email"
          v-model="form.email"
        />
      </div>
      <div class="formElement">
        <label>Say what you will!</label>
        <textarea v-model="form.comment"></textarea>
        <div class="message error" v-if="commentError">
          This field cannot be empty!
        </div>
      </div>
      <button type="submit" @click.prevent.stop="submitForm">Submit</button>
      <div class="message success" v-if="postSuccess">
        Your comment was sent, and is pending approval! 🥳
      </div>
    </form>
  </div>
</template>

<script>
import ax from "../utils/commentsAxios.js";

export default {
  props: ["title"],
  name: "comments",
  data() {
    return {
      form: {
        name: "",
        email: "",
        comment: "",
        day: this.title.split(" ")[1],
      },
      nameError: false,
      commentError: false,
      postSuccess: false,
      postError: false,
	  comments: [],
    };
  },

  methods: {

	postComment() {
		ax.post('/post_comment', this.form)
		.then(r => {
			console.dir(r, {depth: null, colors: true});
			console.log(r.status, "TADFA");
		})
		.catch(r => {
			console.log(r.status, "TADFA");
		})
	},

    submitForm() {
      this.postSuccess = false;
      this.nameError = this.form.name === "";
      this.commentError = this.form.comment === "";
      if (!(this.commentError || this.nameError)) {
        this.nameError = false;
        this.commentError = false;

        this.postComment();

        this.postSuccess = true;
        this.form = {
          name: "",
          email: "",
          comment: "",
        };
      }
    },

    getComments() {
      ax.get("get_comments", {
        params: { day: this.form.day }
      }).then(r => {
		  if (r.status == 200) {
			  this.comments = r.data;
			  console.log("SUCCESS");
		  }
		  else {
			  console.log("no comments!");
			  console.log(this.comments);
		  }
	  })
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

.formElement {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
}

.formElement > label {
  margin-bottom: 4px;
}

textarea {
  font-family: sans-serif;
  padding-inline-start: 4px;
  border-style: solid;
  border-radius: 2px;
}

@media (prefers-color-scheme: dark) {
  textarea,
  input {
    background-color: #3695634f;
    color: white;
  }
  ,
  ::placeholder {
    color: gray;
  }
}

.message {
  margin-top: 2px;
}

.error {
  color: red;
  font-size: 11px;
}

.success {
  color: green;
  font-size: 14px;
}
</style>
