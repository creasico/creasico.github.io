<script lang="ts" setup>
const props = defineProps<{
  noHeader: boolean
}>()

const noHeader = computed(() => !!props.noHeader)
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
