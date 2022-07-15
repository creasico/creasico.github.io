<script lang="ts" setup>
const { title, description, date } = defineProps<{
  title: string
  description?: string
  date?: string
  image?: string
}>()
</script>

<template>
  <section id="heading" class="bg-gray-50">
    <div class="hero container mx-auto min-h-md px-4 <lg:py-12 flex gap-4 items-center <lg:flex-col relative z-10">
      <div class="flex flex-col flex-grow text-center lg:text-left">
        <span v-if="!!date">Last updated on {{ date }}</span>
        <h1 class="leading-tight font-heading font-bold text-5xl text-gray-900" v-html="title" />
        <p v-if="!!description" class="mt-3 max-w-3xl text-lg leading-7 text-gray-500" v-html="description" />
      </div>

      <div v-if="!!image" class="lg:py-8 lg:max-w-[40%]">
        <img :src="image" alt="Image">
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
  .hero {
    > * {
      @apply relative transition-all;
    }

    &::before {
      content: '';
      @apply absolute rounded-[150px] bg-primary-light-1 w-[300px] lg:w-[500px] h-[1000px] -right-[10%] -top-[100%] lg:-top-[150%] transform rotate-45;
      z-index: 0;
    }
  }
</style>
