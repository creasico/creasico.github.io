<script setup lang="ts">
import { Icon } from '@iconify/vue'
import company from '~/assets/company.json'

const address = company.address_lines.join(', <br />')
const socialLinks = computed(() => company.social_links.filter(social => social.enable))
</script>

<template>
  <widget-base>
    <template #title>
      <main-logo width="200" />
    </template>

    <strong class="block text-gray-300 my-3">{{ company.legal_name }}</strong>
    <address class="text-base" v-html="address"></address>
    <div class="mt-5 flex flex-row space-x-2">
      <a v-for="(link, i) of socialLinks" :key="i" :href="link.url" class="hover:text-gray-500">
        <Icon
          :key="i" :icon="link.icon" class="h-6 w-6"
        />
      </a>
    </div>
  </widget-base>
</template>
