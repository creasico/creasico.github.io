<script lang="ts" setup>
const { title, description, postedAt } = defineProps<{
  title: string
  description?: string
  postedAt?: string
}>()
</script>

<template>
  <section id="heading" class="py-36 px-5 xl:px-0 bg-gray-50">
    <div class="container mx-auto">
      <div class="flex flex-col">
        <span v-if="!!postedAt">Last updated on {{ postedAt }}</span>
        <h1 class="leading-9 font-heading font-bold text-5xl text-gray-900" v-html="title" />
        <p v-if="!!description" class="mt-3 max-w-3xl text-lg leading-7 text-gray-500" v-html="description" />
      </div>
    </div>
  </section>
</template>
