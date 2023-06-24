<template>
  <section-heading title="We Craft Digital Solution<br />for Your Business">
    <template #default="{ title }">
      <h1 class="leading-tight font-heading font-bold text-6xl text-gray-800" v-html="title" />
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

<route lang="yaml">
name: home
meta:
  title: Home
  description: We Craft Digital Solution for Your Business
</route>
