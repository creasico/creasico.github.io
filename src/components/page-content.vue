<script setup lang="ts">
const { frontmatter } = defineProps<{
  frontmatter: any
}>()

// console.log(frontmatter)
</script>

<template>
  <heading-section :title="frontmatter.title" :description="frontmatter.description" />

  <section-base>
    <slot />
  </section-base>
</template>
