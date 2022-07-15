<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import links from '~/assets/nav-links.json'

interface MenuLink {
  name: string
  path: string
  locations: string[]
  enable: boolean
  hasChildren: boolean
  children?: MenuLink[]
}

const emit = defineEmits(['menuToggle'])

const { t } = useI18n()
const isMenuOpen = ref(false)
const menuLinks = links.filter(l => l.locations.includes('top-menu')).map((l) => {
  return Object.assign({
    hasChildren: Array.isArray(l.children) && l.children.length > 0,
  }, l) as MenuLink
})

const openMenu = (e: Event) => {
  isMenuOpen.value = !isMenuOpen.value
  emit('menuToggle', isMenuOpen.value, e)
}
</script>

<template>
  <div class="flex flex-grow justify-end relative transition duration-300 ease-out">
    <nav class="fixed lg:static top-20 left-0 lg:flex w-full lg:w-auto gap-8 <lg:border-t-1 border-gray-300" :class="{ hidden: !isMenuOpen }" :aria-expanded="isMenuOpen">
      <!-- loop menus -->
      <template v-for="link in menuLinks" :key="link.name">
        <router-link v-if="link.enable" v-slot="{ href, isActive, navigate }" :to="link.path" custom>
          <div v-if="link.enable" class="select-none <lg:container <lg:mx-auto box-border relative border-b-1 lg:border-b-2 border-gray-300 lg:border-transparent hover:border-black" :class="{ 'lg:border-primary': isActive }">
            <a :href="href" class="relative flex items-center justify-between py-3 px-4 lg:p-0 font-semibold" :class="{ 'text-primary': isActive }" @click="(e) => { openMenu(e); navigate(e) }">
              <span>{{ t(link.name) }}</span>
              <Icon v-if="link.hasChildren" icon="fe:arrow-down" />
            </a>

            <div v-if="link.hasChildren" class="hidden">
              <template v-for="sub in link.children" :key="sub.name">
                <app-link v-if="sub.enable" :to="sub.path" class="px-4 lg:px-0 py-3 block text-black font-semibold hover:text-gray-700 transition duration-300 ease-out">
                  {{ t(sub.name) }}
                </app-link>
              </template>
            </div>
          </div>
        </router-link>
      </template>
    </nav>

    <button class="z-2 flex flex-none items-center lg:hidden text-gray-500 hover:text-gray-700" @click="openMenu">
      <Icon :icon="isMenuOpen ? 'fe:close' : 'fe:bar'" width="40" />
    </button>
  </div>
</template>
