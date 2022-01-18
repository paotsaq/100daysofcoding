<template>
  <div class="commentsForm">
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
        <textarea v-model="form.body"></textarea>
        <div class="message error" v-if="commentError">
          This field cannot be empty!
        </div>
      </div>
      <button type="submit" @click.prevent.stop="submitForm">Submit</button>
      <div class="message success" v-if="postSuccess">
        Your comment was sent, and is pending approval! 🥳
      </div>
      <div class="message error" v-if="postError">
        For some reason, your comment did not go through... maybe try it again later? ☹️
      </div>
    </form>
  </div>
</template>

<script>
import ax from "../utils/commentsAxios.js";
var FormData = require('form-data');

export default {
  props: ["title"],
  name: "commentsForm",
  data() {
    return {
      formData: new FormData(),
      form: {
        name: "",
        email: "",
        body: "",
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
		console.log(this.form);
		ax.post("/post_comment", this.formData)
		  .then(r => {
      
		this.postSuccess = true;
        this.form = {
          name: "",
          email: "",
          body: "",
          post: "",
        
		  }
    })
		.catch(r => {
			this.postError = true;
		})
	},

    submitForm() {
      this.postError = false;
      this.postSuccess = false;
      this.nameError = this.form.name === "";
      this.commentError = this.form.body === "";
      if (!(this.commentError || this.nameError)) {
        this.nameError = false;
        this.commentError = false;
        this.formData.append('name', this.form.name);
        this.formData.append('post', this.title.split(" ")[1],);
        this.formData.append('body', this.form.body);
        this.formData.append('email', this.form.email);

        this.postComment();       
      };
    }
    },
};
</script>

<style>

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
  
  ::placeholder {
    color: gray;
  }
}

.message {
  margin-top: 2px;
}

.error {
  color: red;
  font-size: 14px;
}

.success {
  color: green;
  font-size: 14px;
}
</style>
