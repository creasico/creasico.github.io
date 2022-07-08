<script lang="ts" setup>
const { noHeader } = defineProps<{
  noHeader?: boolean
}>()
</script>

<template>
  <div class="mx-4">
    <header v-if="!noHeader" class="text-bold">
      <slot name="title" />
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
