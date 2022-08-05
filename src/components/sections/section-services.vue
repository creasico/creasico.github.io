<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const { t } = useI18n()

/**
 * @see https://icon-sets.iconify.design/icon-park-twotone/
 */
const services = {
  consultation: 'icon-park-twotone:guide-board',
  development: 'icon-park-twotone:brain',
  maintenance: 'icon-park-twotone:swimming-ring',
}
</script>

<template>
  <section-base :title="t('sections.we-do.title')">
    <div class="flex <lg:flex-col gap-9">
      <div class="lg:w-[30%] flex-none">
        <p class="text-xl">
          {{ t('sections.we-do.description') }}
        </p>
      </div>

      <div class="flex-initial transition-all ease-in-out">
        <h3 class="font-bold font-heading text-2xl mb-4">
          {{ t('sections.service.title') }}
        </h3>

        <div class="flex flex-col xl:grid grid-cols-3 gap-6">
          <div v-for="[key, icon] in Object.entries(services)" :key="key" class="p-6 lg:pt-4 xl:p-8 xl:pt-6 flex xl:flex-col gap-4 bg-gray-100 rounded-lg shadow-md">
            <icon :id="`icon-${key}`" :icon="icon" width="46" class="flex-none text-primary" />

            <div class="flex flex-col gap-2">
              <h4 class="font-bold leading-5 text-lg">
                {{ t(`services.${key}.title`) }}
              </h4>
              <p class="text-gray-600">
                {{ t(`services.${key}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section-base>
</template>
