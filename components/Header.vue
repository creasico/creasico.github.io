<template>
  <header
    class="max-w-7xl mx-auto px-5 xl:px-0 flex items-center justify-between"
  >
    <div class="py-5">
      <img src="/creasico.png" alt="creasi.co" class="h-6" />
    </div>

    <nav class="hidden xl:flex">
      <!-- loop menus -->
      <a
        v-for="menu in menus"
        :href="menu.link"
        :key="menu.name"
        class="px-4 py-2 text-black text-sm font-semibold hover:text-gray-700 hover:bg-gray-100 hover:underline transition duration-300 ease-out"
      >
        {{ menu.name }}
      </a>
    </nav>
  </header>
</template>

<script setup>
import { menus } from "~~/lib/menus";
</script>
