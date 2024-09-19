<template>
	<label :class="['chimp-form-label', classes.root]">
		<slot>{{ props.label }}</slot>&nbsp;
		<span v-if="!!props.required" :class="['chimp-form-label-required', classes.required]">
			<slot name="required-symbol">*</slot>
		</span>
	</label>
</template>

<script setup>
	/**
	 * Form label component
	 * @component
	 * @param {String} label - Label text
	 * @param {Boolean} required - Whether the field is required
	 * @param {Object} classes - Classes to apply to the root element
	 */

	const props = defineProps({
		label: {
			type: String,
			default: '',
		},
		required: {
			type: Boolean,
			default: false,
		},
		classes: {
			type: Object,
			default: () => ({
				root: 'form-label',
				required: 'text-danger',
			}),
		},
	});
</script>

<!--suppress SassScssResolvedByNameOnly -->
<style lang="sass" scoped>

</style>