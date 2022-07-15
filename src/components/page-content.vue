<script lang="ts" setup>
import type { UserFrontmatter } from '~/types'

const { frontmatter } = defineProps<{
  frontmatter: UserFrontmatter
}>()

const showCTA = computed(() => typeof frontmatter.showCTA === 'boolean' ? frontmatter.showCTA : true)

const classList = {
  'lg:max-w-3xl': frontmatter.container === 'narrow',
}
</script>

<template>
  <section-heading :title="frontmatter.title" :description="frontmatter.description" :image="frontmatter.image" />

  <section class="px-4 py-24">
    <article class="container mx-auto" :class="classList">
      <slot />
    </article>
  </section>

  <section-cta v-if="showCTA" />
</template>
