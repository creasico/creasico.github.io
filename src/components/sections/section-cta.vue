<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <section-base :title="t('sections.cta.title')" class="bg-primary-light-1 text-center">
    <div class="prose mx-auto mb-9">
      <p>{{ t('sections.cta.description') }}</p>
    </div>

    <router-link to="/contact" class="px-6 py-1 bg-gray-800 text-white hover:opacity-90 ">
      {{ t('nav-link.contact') }}
    </router-link>
  </section-base>
</template>
