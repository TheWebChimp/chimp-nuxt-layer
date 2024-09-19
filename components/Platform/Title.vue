<template>
	<div :class="['chimp-title-wrapper', classes.root]">
		<slot name="default">
			<component :is="tag" :class="['chimp-title', classes.title]">{{ props.title }}</component>
		</slot>
		<slot name="actions" />
	</div>
</template>

<script setup>
	/**
	 * Title component
	 * @component
	 * @param {String} title - Title text
	 * @param {String} tag - HTML tag to use for the title
	 * @param {Object} classes - Classes to apply to the root element
	 */

		// Receive title text via props
	const props = defineProps({
			title: {
				type: String,
				default: 'Title',
			},
			tag: {
				type: String,
				default: 'h5',
			},
			classes: {
				type: Object,
				default: () => ({
					root: 'border-bottom px-4 py-3 d-flex align-items-center justify-content-between',
					title: 'mb-0',
				}),
			},
		});

</script>

<!--suppress SassScssResolvedByNameOnly -->
<style lang="sass" scoped>

</style>