<script lang="ts" setup>
import company from '~/assets/company.json'

const address = company.address_lines.join(', <br />')
</script>

<template>
  <Widget>
    <template #title>
      <main-logo width="200" />
    </template>

    <strong class="block text-gray-300 my-3">{{ company.legal_name }}</strong>
    <address class="text-base" v-html="address"></address>
    <div v-for="(link, i) of company.social_links" :key="i">
      <a v-if="link.enable" :href="link.url">{{ link.name }}</a>
    </div>
  </Widget>
</template>
