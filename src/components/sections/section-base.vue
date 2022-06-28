<script setup lang="ts">
const props = defineProps<{
  is?: 'header' | 'footer' | 'section'
}>()

const is = computed(() => props.is || 'section')
</script>

<template>
  <section class="px-5 xl:px-0">
    <div class="container mx-auto flex py-11">
      <slot />
    </div>
  </section>
</template>
