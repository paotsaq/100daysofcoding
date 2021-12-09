<template>
	<div class="commentsForm">
		<h3>Some words from the readers 🌏</h3>
		<div class="postedComments">
			<div class="commentInfo">
				<div class="author">John Doe</div>
				<div class="date">at 10/10/2021</div>
			</div>
			<p class="commentContent">What a great blog post! It is very near to being a literary masterpiece. Why would one need Proust, when we have this? 🙇‍♂️</p>
			<div class="commentInfo">
				<div class="author">Jane Doe</div>
				<div class="date">at 11/10/2021</div>
			</div>
			<p class="commentContent">For a basic commenting system, this is not so bad. Authentication is non-existing, of course, and there won't be, for now, any possibility of direct reply. But it seems great fun to be able to contribute to these posts! 👩‍🚀</p>
		</div>
		<h3>Let me know what you think! ✍️</h3>
		<form>
			<div class="formElement">
				<label>What shall I call you?</label>
				<input  name="submitted-name"
						autocomplete="name"
						placeholder="Place a name (required)"
						v-model="form.name">
				<div class="message error" v-if="nameError">This field cannot be empty!</div>
			</div>
			<div class="formElement">
				<label>What's your email? (not required, and will not be published!)</label>
				<input  name="submitted-email"
						autocomplete="email"
						placeholder="Your email"
						v-model="form.email">
			</div>
			<div class="formElement">
				<label>Say what you will!</label>
				<textarea v-model="form.comment"></textarea>
				<div class="message error" v-if="commentError">This field cannot be empty!</div>
			</div>
			<button type='submit' @click.prevent.stop="submitForm" >Submit</button>
			<div class="message success" v-if="postSuccess">Your comment was sent, and is pending approval! 🥳</div>
		</form>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		props: ['title'],
		name: "comments",
		data() {
			return {
			  form: {
				name: '',
				email: '',
				comment: '',
				day: this.title.split(' ')[1],
			 	},
			  nameError: false,
			  commentError: false,
			  postSuccess: false,
			  postError: false,
			}
		},

		methods: {
			submitForm() {
				this.postSuccess = false;
				this.nameError = this.form.name === ''
				this.commentError = this.form.comment === ''
				if (!(this.commentError || this.nameError)) {
					this.nameError = false;
					this.commentError = false;

				axios.get('https://httpbin.org/get?test=test');

				this.postSuccess = true;
				this.form = {
					name: '',
					email: '',
					comment: ''
					}
				 }
			},

			getComments() {
				axios.get('http://localhost:8000/get_comments', { params: { day: this.form.day }});
			}
		},

		mounted() {
			axios.interceptors.response.use(res => {
			  console.log(res);
			  // Important: response interceptors **must** return the response.
			  return res;
			}),

			axios.interceptors.request.use(req => {
			  console.log(`${req.method} ${req.url}`);
			  // Important: request interceptors **must** return the request.
			  return req;
			});
			
			this.getComments();
		},
};
</script>

<style scope>
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

	.commentInfo > div { margin-right: 5px;}

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
		textarea, input {
			background-color: #3695634f;
			color: white;
		},
		::placeholder {
			color: gray;
		}
	}

	.message {margin-top: 2px;}

	.error {
		color: red;
		font-size: 11px;
	}

	.success {
		color: green;
		font-size: 14px;
	}
</style>
