<template>
	<div class="column">
		<div class="bar-bg" v-for="(value, i) in values">
			<div class="bar"
				 v-bind:class="{ 'bar-full': value==1 }"
				 v-bind:style="styleObject[i]">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'reload-bars',
		props: ['values'],
		computed: {
			styleObject: function() {
				return this.values.map(value => ({
					width: `${value * 120}px`
				}))
			},
		}
	}
</script>

<style scoped>
	.bar-bg {
		border: 4px solid #eee;
		border-radius: 500px;
		background: #eee;

		width: 130px;

		margin: 12px;
	}

	.bar {
		position: relative;
		top: 0;
		left: 0;
		
		border: 5px solid #fc0;
		border-radius: 500px;

		width: 0;
		height: 0;
	}

	.bar-full {
		border-color: #3c3;
	}
</style>
