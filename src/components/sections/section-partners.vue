<script lang="ts" setup>
import partners from '~/assets/partners.json'
</script>

<template>
  <section-base title="Our Partners" centered-title>
    <div class="flex items-center justify-center">
      <div v-for="partner in partners" :key="partner.name" class="p-5">
        <img :src="partner.image" :alt="partner.name" class="h-14 xl:h-28 object-cover" />
      </div>
    </div>
  </section-base>
</template>
