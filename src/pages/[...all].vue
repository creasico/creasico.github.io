<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    {{ t('errors.not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: errors
</route>
