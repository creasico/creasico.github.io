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
onMounted(() => {
  useTitle(frontmatter.title, {
    titleTemplate: '%s - Creasi.CO',
  })
})
</script>

<template>
  <section-heading :title="frontmatter.title" :description="frontmatter.description" :image="frontmatter.image" />

  <section class="px-4 py-24">
    <article class="container mx-auto relative z-10" :class="classList">
      <slot />
    </article>
  </section>

  <section-cta v-if="showCTA" />
</template>

<style lang="postcss">
.prose {
  z-index: inherit;

  .header-anchor {
    @apply text-gray-400 inline-block;
    text-decoration: none;
    left: -2rem;
    line-height: inherit;
    visibility: hidden;
  }

  h1, h2, h3, h4 {
    scroll-margin-top: 80px;
    position: relative;

    &:hover .header-anchor {
      /* display: block; */
      visibility: visible;
    }
  }
}
</style>
