<script lang="ts" setup>
const { menuOpened } = defineProps<{
  menuOpened: boolean
}>()
</script>

<template>
  <header class="px-4 fixed w-full bg-white bg-opacity-70 lg:bg-opacity-50 backdrop-filter backdrop-blur z-50 transition duration-500 ease-in-out" :class="menuOpened ? 'h-screen lg:h-auto' : 'h-auto'">
    <div class="container mx-auto flex items-center h-20">
      <router-link to="/" class="leading-none" aria-label="Main Logo">
        <main-logo width="200" />
      </router-link>

      <navbar-menu />
    </div>
  </header>
</template>
