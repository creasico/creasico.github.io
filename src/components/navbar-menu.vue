<script lang="ts" setup>
import links from '~/assets/nav-links.json'

const { t } = useI18n()
const menuLinks = links.filter(l => l.locations.includes('top-menu'))
const isMenuOpen = ref(false)
</script>

<template>
  <div class="container mx-auto flex">
    <div class="flex flex-grow items-center justify-between">
      <router-link to="/" class="py-4 leading-none">
        <main-logo width="200" />
      </router-link>

      <nav class="hidden lg:flex gap-8">
        <!-- loop menus -->
        <template v-for="link in menuLinks" :key="link.name">
          <div v-if="link.enable" role="navigation" class="box-border relative border-b-2 border-transparent hover:border-black transition duration-300 ease-out">
            <app-link :to="link.path" class="px-4 lg:px-0 py-3 block text-black font-bold hover:text-gray-700">
              {{ t(link.name) }}
            </app-link>

            <div v-if="Array.isArray(link.children) && link.children.length > 0" class="hidden">
              <template v-for="sub in link.children" :key="sub.name">
                <app-link v-if="sub.enable" :to="sub.path" class="px-4 lg:px-0 py-3 block text-black font-semibold hover:text-gray-700 transition duration-300 ease-out">
                  {{ t(sub.name) }}
                </app-link>
              </template>
            </div>
          </div>
        </template>
      </nav>

      <!-- cta -->
      <a href="#" class="px-6 py-2 bg-gray-800 text-white hover:opacity-90 ">Button Text</a>
    </div>

    <button class="flex flex-none items-center lg:hidden text-gray-500 hover:text-gray-700" @click="isMenuOpen = !isMenuOpen">
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
  </div>

  <nav class="fixed inset-0 backdrop-filter backdrop-blur-md bg-slate-200 bg-opacity-50 transition duration-700 ease-in-out" :class="{ hidden: !isMenuOpen }">
    <div class="py-20 px-5 flex flex-col items-start">
      <app-link v-for="link in menuLinks" :key="link.name" :to="link.path" class="px-4 py-2 text-black text-xl font-semibold hover:text-gray-700 hover:bg-gray-100 hover:underline transition duration-300 ease-out">
        {{ t(link.name) }}
      </app-link>

      <button class="mt-12 py-3 text-center border border-primary rounded-md font-semibold w-full" @click="isMenuOpen = !isMenuOpen">
        close
      </button>
    </div>
  </nav>
</template>
