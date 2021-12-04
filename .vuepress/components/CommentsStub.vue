<template>
	<div class="commentsForm">
		<!-- wrap around if statement
		<h2>Things people say:</h2> -->

		<form>
			<div class="formElement">
				<label>What shall I call you?</label>
				<input  name="submitted-name"
						autocomplete="name"
						placeholder="Place a name (required)">
			</div>
			<div class="formElement">
				<label>What's your email? (not required, and will not be published!)</label>
				<input  name="submitted-email"
						autocomplete="email"
						placeholder="Your email">
			</div>
			<div class="formElement">
				<label>Say what you will!</label>
				<textarea></textarea>
			</div>
			<button type='submit'>Submit</button>
		</form>
	</div>
</template>

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
