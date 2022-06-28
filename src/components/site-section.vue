<script lang="ts" setup>
const props = defineProps<{
  is?: 'header' | 'footer' | 'section'
}>()

const is = computed(() => props.is || 'section')
</script>

<template>
  <section>
    <slot />
  </section>
</template>
