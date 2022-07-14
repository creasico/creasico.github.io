<template>
  <main class="min-h-screen pt-20">
    <router-view :key="$route.fullPath" />
  </main>
</template>
