<script lang="ts" setup>
const route = useRoute()
useTitle(route.meta.title as string, {
  titleTemplate: '%s - Creasi.CO',
})

// useHead({ title })
</script>

<template>
  <site-header />

  <main class="min-h-screen">
    <router-view :key="$route.fullPath" />
  </main>

  <site-footer />
</template>
