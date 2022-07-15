<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const { t } = useI18n()
const services = {
  consultation: 'fe:check',
  development: 'fe:check',
  maintenance: 'fe:check',
}
</script>

<template>
  <section-base :title="t('sections.we-do.title')">
    <div class="flex <lg:flex-col gap-9">
      <div class="lg:w-[30%] xl:w-[40%]">
        <p class="text-xl">
          {{ t('sections.we-do.description') }}
        </p>
      </div>

      <div class="lg:w-[70%] xl:w-[60%]">
        <h4 class="font-bold font-heading text-xl leading-9 mb-4">
          {{ t('sections.service.title') }}
        </h4>

        <div class="flex <lg:flex-col lg:grid grid-cols-3 gap-6">
          <div v-for="[key, icon] in Object.entries(services)" :key="key" class="p-8 rounded flex lg:flex-col gap-4 bg-gray-100">
            <Icon :icon="icon" width="46" class="flex-none" />

            <div class="flex flex-col gap-2">
              <h4 class="font-bold font-heading leading-5 text-lg">
                {{ t(`services.${key}.title`) }}
              </h4>
              <p class="text-gray-500">
                {{ t(`services.${key}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section-base>
</template>
