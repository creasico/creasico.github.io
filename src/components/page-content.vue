<script setup lang="ts">
const { frontmatter } = defineProps<{
  frontmatter: any
}>()

// console.log(frontmatter)
</script>

<template>
  <section-base>
    <h1>{{ frontmatter.title }}</h1>
    <slot />
  </section-base>
</template>
