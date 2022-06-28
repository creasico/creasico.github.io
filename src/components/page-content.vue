<script lang="ts" setup>
const { frontmatter } = defineProps<{
  frontmatter: any
}>()

// console.log(frontmatter)
</script>

<template>
  <site-section>
    <h1>{{ frontmatter.title }}</h1>
    <slot />
  </site-section>
</template>
