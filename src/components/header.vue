<script setup lang="ts">
import { menus } from '~/lib/menus.js'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="max-w-7xl mx-auto px-5 xl:px-0 flex items-center justify-between">
    <div class="py-5">
      <main-logo width="200" />
    </div>

    <button
      class="flex items-center xl:hidden text-gray-500 hover:text-gray-700"
      @click="isMenuOpen = !isMenuOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-align-right"
      >
        <line x1="21" y1="10" x2="7" y2="10"></line>
        <line x1="21" y1="6" x2="3" y2="6"></line>
        <line x1="21" y1="14" x2="3" y2="14"></line>
        <line x1="21" y1="18" x2="7" y2="18"></line>
      </svg>
    </button>
    <nav
      class="fixed inset-0 backdrop-filter backdrop-blur-md bg-slate-200 bg-opacity-50 transition duration-700 ease-in-out"
      :class="{
        hidden: !isMenuOpen,
      }"
    >
      <div class="py-20 px-5 flex flex-col items-start">
        <a
          v-for="menu in menus"
          :key="menu.name"
          :href="menu.link"
          class="px-4 py-2 text-black text-xl font-semibold hover:text-gray-700 hover:bg-gray-100 hover:underline transition duration-300 ease-out"
        >
          {{ menu.name }}
        </a>

        <button
          class="mt-12 py-3 text-center border border-primary rounded-md font-semibold w-full"
          @click="isMenuOpen = !isMenuOpen"
        >
          close
        </button>
      </div>
    </nav>

    <nav class="hidden xl:flex">
      <!-- loop menus -->
      <a
        v-for="menu in menus"
        :key="menu.name"
        :href="menu.link"
        class="px-4 py-2 text-black text-sm font-semibold hover:text-gray-700 hover:bg-gray-100 hover:underline transition duration-300 ease-out"
      >
        {{ menu.name }}
      </a>
    </nav>
  </header>
</template>
