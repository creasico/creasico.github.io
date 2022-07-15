<script lang="ts" setup>
const route = useRoute()

const title = computed(() => {
  console.log(route.meta) // eslint-disable-line no-console
  return route.meta.title
})

useTitle(title, {
  titleTemplate: '%s - Creasi.CO',
})
</script>

<template>
  <main class="min-h-screen pt-20 overflow-hidden">
    <router-view :key="$route.fullPath" :route="$route" />
  </main>
</template>
