<template>
  <main class="min-h-screen">
    <router-view :key="$route.fullPath" />
  </main>
</template>
