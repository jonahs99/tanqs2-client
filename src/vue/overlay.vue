<template>
	<transition name="fade">
		<div class="overlay" v-show="client && client.state == 'outside'">
			<h1 class="title"> tanqs </h1>
			<form v-on:submit.prevent>
				<input type="text" placeholder="enter nickname"></input>
				<button id="join" v-on:click="join">join!</button>
			</form>
			<div class="spacer"></div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'overlay',
		data: () => ({client: null}),
		methods: {
			join: function (evt) {
				this.$emit('join')	
			}
		}
	}
</script>

<style scoped>
	.overlay {
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
	.fade-enter-active {
		transition: opacity 0.5s;
	}
	.fade-leave-active {
		transition: opactity 0.2s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
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
	}

	form {
		padding-left: 5%;
	}

	input[type="text"] {
		width: 600px;

		background: rgba(255, 255, 255, 0.05);
		border: none;
		border-radius: 500px;
		color: #eee;

		font-size: 62px;
		font-family: inherit;

		padding: 8px;

		text-align: center;
	}

	::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	button {
		position: relative;
		top: -5px;
		left: -10%;

		padding: 8px;
		padding-left: 32px;
		padding-right: 32px;

		background: #3cf1ab;
		box-shadow: 0 7px 0 #009058;
		text-shadow: 0 3px 0 #009058;
		border: none;
		border-radius: 500px;
		color: #eee;

		font-size: 62px;
		font-family: inherit;
	}

	@media (min-width: 1024px) {
		.title {
			font-size: 248px;
		}
	}
</style>
