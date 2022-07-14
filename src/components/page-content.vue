<script lang="ts" setup>
import type { UserFrontmatter } from '~/types'

const { frontmatter } = defineProps<{
  frontmatter: UserFrontmatter
}>()

const classList = {
  'max-w-3xl': frontmatter.container === 'narrow',
}
</script>

<template>
  <section-heading :title="frontmatter.title" :description="frontmatter.description" />

  <section class="px-5 lg:px-0 py-24">
    <article class="container mx-auto" :class="classList">
      <slot />
    </article>
  </section>
</template>
