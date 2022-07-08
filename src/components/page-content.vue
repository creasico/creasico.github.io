<script lang="ts" setup>
const { frontmatter } = defineProps<{
  frontmatter: any
}>()

const classList = {
  'max-w-3xl': frontmatter.container === 'narrow',
}
</script>

<template>
  <section-heading :title="frontmatter.title" :description="frontmatter.description" />

  <section-base>
    <article class="mx-auto" :class="classList">
      <slot />
    </article>
  </section-base>
</template>
