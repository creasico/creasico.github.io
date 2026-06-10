<script lang="ts" setup>
import partners from '~/assets/partners.json'
</script>

<template>
  <section-base :title="$t('sections.partners.title')" centered-title>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8">
      <div v-for="partner in partners" :key="partner.name" class="flex items-center justify-center">
        <img :src="partner.image" :alt="partner.name" class="h-20 object-contain inline-block">
      </div>
    </div>
  </section-base>
</template>
