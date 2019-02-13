<template>
	<div class="center-container">
		<h1 class="name">{{ entity.name }}</h1>
		<reload-bars v-bind:values="entity.reload.bars"/>
	</div>
</template>

<script>
	import ReloadBars from './reload-bars.vue'

	export default {
		name: 'title-screen',
		components: { ReloadBars },
		props: ['entity']
	}
</script>

<style scoped>
	.center-container {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		
		display: flex;
		flex-direction: row;	
		justify-content: center;
		align-items: center;
	}

	.name {
		margin-right: 32px;
		
		font-size: 64px;
		color: #eee;

		user-select: none;
	}
</style>
