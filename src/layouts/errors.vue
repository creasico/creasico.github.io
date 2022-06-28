<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700">
    <div class="text-4xl">
      <!-- <div i-carbon-warning inline-block /> -->
    </div>
    <RouterView />
    <div>
      <button class="text-sm m-3 mt-8" @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
