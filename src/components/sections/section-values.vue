<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const values = {
  c: 'fe:check',
  r: 'fe:check',
  e: 'fe:check',
  a: 'fe:check',
  s: 'fe:check',
  i: 'fe:check',
  co: 'fe:check',
}
const { t } = useI18n()
</script>

<template>
  <section-base title="Our Value" class="bg-light-400">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div v-for="[key, icon] in Object.entries(values)" :key="key" class="p-6 bg-white rounded flex gap-4">
        <Icon :icon="icon" width="46" class="flex-none" />

        <div class="flex flex-col gap-2">
          <h4 class="font-bold font-heading leading-5 text-lg">
            {{ t(`values.${key}.title`) }}
          </h4>
          <p class="text-gray-500">
            {{ t(`values.${key}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section-base>
</template>
