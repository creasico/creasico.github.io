<template>
  <section class="max-w-7xl mx-auto my-7">
    <div class="flex flex-wrap items-center justify-center">
      <div class="p-5" v-for="partner in partners" :key="partner.name">
        <img
          :src="partner.image"
          :alt="partner.name"
          class="h-14 xl:h-28 object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { partners } from "~~/lib/partners";
</script>
