<script lang="ts" setup>
import type { PageFrontmatter } from '~/types'

const { frontmatter } = defineProps<{
  frontmatter: PageFrontmatter
  excerpt: string
}>()

const showCTA = computed(() => typeof frontmatter.showCTA === 'boolean' ? frontmatter.showCTA : true)

const classList = {
  'lg:max-w-3xl': frontmatter.container === 'narrow',
}
</script>

<template>
  <section-heading
    v-if="frontmatter.title"
    :title="frontmatter.title"
    :description="frontmatter.description"
    :image="frontmatter.image"
  />

  <section class="px-4 py-24">
    <article class="container mx-auto relative z-10" :class="classList">
      <slot />
    </article>
  </section>

  <section-cta v-if="showCTA" />
</template>
