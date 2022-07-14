<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <section-heading title="Contact Us" />

  <section-base>
    {{ t('errors.not-found') }}
  </section-base>
</template>

<route lang="yaml">
meta:
  title: Contact Us
</route>
