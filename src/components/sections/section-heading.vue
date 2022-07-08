<script lang="ts" setup>
const { title, description } = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <section id="heading" class="py-36 px-5 xl:px-0 bg-gray-50">
    <div class="container mx-auto">
      <div class="flex flex-col">
        <span>Last updated on ...</span>
        <h1 class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          {{ title }}
        </h1>
        <!-- <p class="mt-3 max-w-3xl text-lg leading-7 text-gray-500">
          {{ description }}
        </p> -->
      </div>
    </div>
  </section>
</template>
