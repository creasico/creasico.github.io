<script lang="ts" setup>
const isMenuOpen = ref(false)

const menuToggle = (isOpen: boolean, e: Event) => {
  isMenuOpen.value = isOpen
  console.log(isOpen) // eslint-disable-line no-console
}
</script>

<template>
  <header class="px-4 fixed w-full bg-white bg-opacity-70 lg:bg-opacity-50 backdrop-filter backdrop-blur z-50 transition duration-500 ease-in-out" :class="isMenuOpen ? 'h-screen lg:h-auto' : 'h-auto'">
    <div class="container mx-auto flex items-center h-20">
      <router-link to="/" class="leading-none">
        <main-logo width="200" />
      </router-link>

      <navbar-menu @menu-toggle="menuToggle" />
    </div>
  </header>
</template>
