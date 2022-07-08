<script lang="ts" setup>
const { frontmatter } = defineProps<{
  frontmatter: any
}>()

// console.log(frontmatter)
</script>

<template>
  <section-heading :title="frontmatter.title" :description="frontmatter.description" />

  <section-base>
    <slot />
  </section-base>
</template>
