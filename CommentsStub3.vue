<template>
	<div class="commentsForm">
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
			<button type='submit' @click.prevent="submitForm" >Submit</button>
			<div class="message success" v-if="postSuccess">Your comment was sent, and is pending approval! 🥳</div>
		</form>
		<div>
			<br>
			(<i>write something on the boxes above to test!</i>)<br>
			<b>This is your name:</b> {{ this.form.name }} <br>
			<b>This is your email:</b> {{ this.form.email }} <br>
			<b>This is your comment:</b> {{ this.form.comment }}
		</div>
	</div>
</template>

<script>
	export default {
		name: "comments",
		  data() {
			return {
			  form: {
				name: '',
				email: '',
				comment: ''
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
					this.postSuccess = true;
					 this.form = {
						name: '',
						email: '',
						comment: ''
						}
				 }
			},
		  }
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
