<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import company from '~/assets/company.json'

const address = company.address_lines.join(', <br />')
const socialLinks = company.social_links.filter(social => social.enable)
</script>

<template>
  <widget-base>
    <template #title>
      <main-logo width="150" theme="secondary" />
    </template>

    <p class="block font-bold leading-none text-gray-300 my-3">
      {{ company.legal_name }}
    </p>
    <address class="text-sm not-italic" v-html="address" />
    <div class="mt-5 flex flex-row space-x-4">
      <a v-for="(link, i) of socialLinks" :key="i" :href="link.url" target="_blank" class="hover:text-gray-500">
        <Icon :icon="link.icon" class="h-6 w-6" />
      </a>
    </div>
  </widget-base>
</template>
