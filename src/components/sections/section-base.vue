<script lang="ts" setup>
const { title, centeredTitle = false } = defineProps<{
  title?: string
  centeredTitle?: boolean
}>()
</script>

<template>
  <section class="px-5 xl:px-0">
    <div class="container mx-auto py-16">
      <h3 v-if="!!title" class="font-heading text-4xl font-extrabold leading-tight mb-11" :class="{ 'text-center': centeredTitle }" v-html="title" />

      <slot />
    </div>
  </section>
</template>
