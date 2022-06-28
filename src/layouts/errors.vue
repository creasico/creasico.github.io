<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <site-header />

  <main class="min-h-screen">
    <site-section>
      <router-view />

      <div>
        <button class="text-sm m-3 mt-8" @click="router.back()">
          {{ t('button.back') }}
        </button>
      </div>
    </site-section>
  </main>

  <site-footer />
</template>
