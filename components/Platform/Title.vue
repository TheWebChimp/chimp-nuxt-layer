<template>
	<div class="border-bottom px-4 py-3 d-flex align-items-center justify-content-between">
		<slot name="default">
			<h5 class="mb-0">{{ props.title }}</h5>
		</slot>
		<slot name="actions" />
	</div>
</template>

<script setup>

	// Receive title text via props
	const props = defineProps({
		title: {
			type: String,
			default: 'Title',
		},
	});

</script>

<!--suppress SassScssResolvedByNameOnly -->
<style lang="sass" scoped>

</style>