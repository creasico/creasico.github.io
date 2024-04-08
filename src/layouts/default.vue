<script lang="ts" setup>
// const route = useRoute()
// const title = computed(() => route.meta.title)

// useHead({
//   title: () => route.meta.title,
// })

// onMounted(() => {
//   logger(route.meta)
// })
</script>

<template>
  <main class="pt-20 overflow-hidden">
    <router-view :key="$route.fullPath" :route="$route" />
  </main>
</template>
