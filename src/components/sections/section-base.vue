<script lang="ts" setup>
const { title, centeredTitle = false } = defineProps<{
  title?: string
  centeredTitle?: boolean
}>()
</script>

<template>
  <section class="px-4">
    <div class="container mx-auto py-20">
      <h1 v-if="!!title" class="font-heading text-4xl font-bold leading-tight mb-11" :class="{ 'text-center': centeredTitle }" v-html="title" />

      <slot />
    </div>
  </section>
</template>
