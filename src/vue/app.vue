<template>
	<div class='overlay'>
		<transition>
			<title-screen v-if="showTitle"></title-screen>
		</transition>
		<hud v-bind:entity="entity" v-if="showHud"></hud>
	</div>
</template>

<script>
	import TitleScreen from './title-screen.vue'
	import Hud from './hud.vue'

	export default {
		components: { TitleScreen, Hud },
		data: () => ({
			state: 'outside',
			entity: null,
		}),
		computed: {
			showTitle: function() {
				return this.state == 'outside'
			},
			showHud: function() {
				return this.entity != null
			}
		}
	}
</script>

<style>
	.unselectable {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
