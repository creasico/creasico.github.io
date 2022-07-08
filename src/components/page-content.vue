<script lang="ts" setup>
const { frontmatter } = defineProps<{
  frontmatter: any
}>()

// console.log(frontmatter)
</script>

<template>
  <section-heading :title="frontmatter.title" :description="frontmatter.description" />

  <section-base>
    <div class="max-w-3xl mx-auto prose">
      <slot />
    </div>
  </section-base>
</template>
