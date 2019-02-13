<template>
	<div class="center-container">
		<h1 class="title"> tanqs </h1>
		<form v-on:submit.prevent="submitJoin">
			<input type="text" class="Text" placeholder="enter a nickname" v-model="nickname">
			<input type="submit" class="Button" id="join" value="join!">
		</form>
		<div class="spacer"></div>
	</div>
</template>

<script>
	export default {
		name: 'title-screen',
		data: () => ({
			nickname: '',
		}),
		methods: {
			submitJoin: function() {
				this.$root.$emit('join', {
					name: this.nickname, 
				})
			}
		}
	}
</script>

<style scoped>
	.center-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		
		display: flex;
		flex-direction: column;	
		justify-content: center;
		align-items: center;
	}

	.spacer {
		height: 300px;
	}

	.title {
		z-index: 1;

		font-size: 24vw;
		line-height: 0;

		color: #eee;
		text-shadow: rgba(0, 0, 0, 0.5) 0px 4px;

		user-select: none;
	}

	form {
		padding-left: 5%;
	}

	.Text {
		width: 600px;

		background: rgba(255, 255, 255, 0.1);
		border: none;
		border-radius: 500px;
		color: #eee;

		font-size: 42px;
		font-family: inherit;

		padding: 8px;

		text-align: center;
	}

	::placeholder {
		color: #aaa;
	}

	.Button {
		position: relative;
		top: -5px;
		left: -10%;

		padding: 8px;
		padding-left: 64px;
		padding-right: 64px;

		background: #3cf1ab;
		box-shadow: 0 7px 0 #009058;
		text-shadow: 0 3px 0 #009058;
		border: none;
		border-radius: 500px;
		color: #eee;

		font-size: 42px;
		font-family: inherit;
	}
	
	.Button:hover {
		background: #3dffb7;
		box-shadow: 0 0 10px #a4ffb5, 0 7px 0 #009058;
		text-shadow: 0 3px 0 #00a269, 0 0 10px #ffffff;
	}
	
	@media (min-width: 1024px) {
		.title {
			font-size: 248px;
		}
	}
</style>
