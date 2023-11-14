<script lang="ts" setup>
const { noHeader } = defineProps<{
  noHeader?: boolean
}>()
</script>

<template>
  <div class="mx-4">
    <header v-if="!noHeader" class="mb-5 font-bold text-lg text-gray-400">
      <slot name="title" />
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
