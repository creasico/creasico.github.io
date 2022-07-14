<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <h1 class="font-heading font-light text-7xl leading-relaxed">
    {{ t('errors.not-found.title') }}
  </h1>

  <p>{{ t('errors.not-found.description') }}</p>
</template>

<route lang="yaml">
name: 404
meta:
  layout: errors
</route>
