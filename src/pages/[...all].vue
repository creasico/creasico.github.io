<script lang="ts" setup>
import { useGtm } from '@gtm-support/vue-gtm'

// const { t } = useI18n()
const route = useRoute()

useGtm()?.trackEvent({
  event: 'Page not found',
  category: 'error',
  action: route.path,
})
</script>

<template>
  <div>
    <h1 class="font-heading font-light text-7xl leading-relaxed">
      {{ $t('errors.not-found.title') }}
    </h1>

    <p>{{ $t('errors.not-found.description') }}</p>
  </div>
</template>

<route lang="yaml">
name: 404
meta:
  layout: errors
</route>
