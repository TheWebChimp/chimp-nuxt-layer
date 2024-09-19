<template>
	<loading
		:class="['chimp-loading', classes.root]"
		:active="props.active"
		:is-full-page="props.isFullPage"
		:color="props.color"
		:background-color="props.backgroundColor"
		:loader="props.loader"
		:z-index="props.zIndex"
	>
		<template #default>
			<slot name="default" />
		</template>

		<template #before>
			<slot name="before" />
		</template>

		<template #after>
			<slot name="after" />
		</template>
	</loading>
</template>

<script setup>

	import Loading from 'vue3-loading-overlay';
	import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

	/**
	 * Loading overlay component
	 * @component
	 * @param {Boolean} active - Whether the loading overlay is active
	 * @param {Boolean} isFullPage - Whether the overlay should cover the entire page
	 * @param {String} loader - The loader type to display
	 * @param {String} color - The color of the loader
	 * @param {String} backgroundColor - The background color of the overlay
	 * @param {Number} zIndex - The z-index of the overlay
	 */

	// receive active via props
	const props = defineProps({
		active: {
			type: Boolean,
			default: false,
		},
		isFullPage: {
			type: Boolean,
			default: false,
		},
		loader: {
			type: String,
			default: 'spinner',
		},
		color: {
			type: String,
			default: 'var(--bs-primary)',
		},
		backgroundColor: {
			type: String,
			default: 'var(--bs-body-bg)',
		},
		zIndex: {
			type: Number,
			default: 999,
		},
		classes: {
			type: Object,
			default: () => ({
				root: '',
			}),
		},
	});

</script>

<!--suppress SassScssResolvedByNameOnly -->
<style lang="sass" scoped>
	.vld-overlay
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%

		.vld-background
			opacity: 0.75

		:deep(.vld-icon)
			text-align: center

</style>