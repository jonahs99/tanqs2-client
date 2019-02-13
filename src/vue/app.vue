<template>
	<div class='overlay'>
		<title-screen v-if="showTitle"></title-screen>
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


