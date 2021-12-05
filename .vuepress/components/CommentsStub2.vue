<template>
	<div class="commentsForm">
		<!-- wrap around if statement
		<h2>Things people say:</h2> -->

		<form>
			<div class="formElement">
				<label>What shall I call you?</label>
				<input  name="submitted-name"
						autocomplete="name"
						placeholder="Place a name (required)"
						v-model="form.name">
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
			</div>
			<button type='submit' v-on:click="submitForm">Submit</button>
		</form>
		<div>
			<br>
			(<i>write something on the boxes above to test!</i>)<br>
			<b>This is your name: {{ this.form.name }} </b><br>
			<b>This is your email: {{ this.form.email }} </b><br>
			<b>This is your comment: {{ this.form.comment }} </b>
		</div>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "comments",
		  data() {
			return {
			  form: {
				name: '',
				email: '',
				comment: ''
			  }
			}
		  },
		  methods: {
			submitForm() {
				axios.post('/contact', this.form)
					 .then((res) => {
						 // Perform Success Action
					 })
					 .catch((error) => {
						 // error.response.status Check status code
					 }).finally(() => {
						 // Perform action in always
					 });
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
</style>
