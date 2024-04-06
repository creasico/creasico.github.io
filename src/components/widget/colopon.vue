<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import company from '~/assets/company.json'

const { t } = useI18n()
const address = company.address_lines.join(', <br />')
const socialLinks = company.social_links.filter(social => social.enable)
</script>

<template>
  <widget-base>
    <template #title>
      <site-logo width="150" theme="secondary" />
    </template>

    <p class="block font-bold leading-snug text-gray-300 my-3">
      {{ company.legal_name }}
    </p>

    <address class="text-sm not-italic" v-html="address" />

    <div class="mt-5 flex flex-row space-x-4">
      <a v-for="(link, i) of socialLinks" :key="i" :href="link.url" target="_blank" :aria-label="t('button.socmed', { name: link.name })" class="hover:text-gray-400">
        <icon :icon="link.icon" class="h-6 w-6" />
      </a>
    </div>
  </widget-base>
</template>
