<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const { t } = useI18n()

/**
 * @see https://icon-sets.iconify.design/icon-park-twotone/
 */
const values = {
  c: 'icon-park-twotone:enquire',
  r: 'icon-park-twotone:trace',
  e: 'icon-park-twotone:rocket-one',
  a: 'icon-park-twotone:gavel',
  s: 'icon-park-twotone:rocking-horse',
  i: 'icon-park-twotone:hold-seeds',
  co: 'icon-park-twotone:user-to-user-transmission',
}
</script>

<template>
  <section-base :title="t('sections.values.title')" centered-title class="bg-gray-100">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div v-for="[key, icon] in Object.entries(values)" :key="key" class="p-6 bg-white flex gap-4 rounded-lg shadow-md">
        <Icon :id="`icon-${key}`" :icon="icon" width="46" class="flex-none text-primary" style="stroke-width: 1px;" />

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
