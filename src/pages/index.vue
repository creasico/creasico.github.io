<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <section-heading :title="t('title')" :description="t('description')">
    <template #default="{ description }">
      <h1 class="leading-tight font-heading font-bold text-6xl text-gray-800" v-html="description" />
    </template>
  </section-heading>

  <section-services />

  <section-values />

  <!-- <section-believes /> -->
  <!-- <section-reason /> -->
  <!-- <section-workflows /> -->
  <section-partners />

  <section-cta />
</template>

<i18n lang="yaml">
id:
  title: Beranda
  description: Kami menghadirkan Solusi Digital untuk Bisnis Anda
en:
  title: Home
  description: We Craft Digital Solution for Your Business
</i18n>
