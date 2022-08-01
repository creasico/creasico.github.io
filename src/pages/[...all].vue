<script lang="ts" setup>
import { useGtm } from '@gtm-support/vue-gtm'

const { all } = defineProps<{
  all: string[]
}>()

useGtm()?.trackEvent({
  event: 'Page not found',
  category: 'error',
  action: `/${all.join('/')}`,
})

const { t } = useI18n()
</script>

<template>
  <div>
    <h1 class="font-heading font-light text-7xl leading-relaxed">
      {{ t('errors.not-found.title') }}
    </h1>

    <p>{{ t('errors.not-found.description') }}</p>
  </div>
</template>

<route lang="yaml">
name: 404
meta:
  layout: errors
</route>
