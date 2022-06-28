<script lang="ts" setup>
const { frontmatter } = defineProps<{
  frontmatter: any
}>()

// console.log(frontmatter)
</script>

<template>
  <site-section>
    <heading-section :title="frontmatter.title" :description="frontmatter.description" />

    <div class="max-w-7xl mx-auto px-5 xl:px-0 my-12">
      <slot />
    </div>
  </site-section>
</template>
