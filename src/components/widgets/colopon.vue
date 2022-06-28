<script lang="ts" setup>
import company from '~/assets/company.json'

const address = company.address_lines.join(', <br />')
</script>

<template>
  <Widget>
    <template #title>
      <main-logo width="200" />
    </template>

    <strong class="block">{{ company.legal_name }}</strong>
    <address v-html="address"></address>
    <div v-for="(link, i) of company.social_links" :key="i">
      <a v-if="link.enable" :href="link.url">{{ link.name }}</a>
    </div>
  </Widget>
</template>
