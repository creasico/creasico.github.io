<script lang="ts" setup>
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
  <section-base :title="$t('sections.we-do.title')">
    <div class="flex max-lg:flex-col gap-9">
      <div class="lg:w-[30%] flex-none">
        <p class="text-xl">
          {{ $t('sections.we-do.description') }}
        </p>
      </div>

      <div class="flex-initial transition-all ease-in-out">
        <h3 class="font-bold text-2xl mb-4">
          {{ $t('sections.service.title') }}
        </h3>

        <div class="flex flex-col xl:grid grid-cols-3 gap-6">
          <card v-for="[key, icon] in Object.entries(services)" :key="key" :icon="icon" class="bg-gray-100">
            <h4 class="font-bold leading-5 text-lg">
              {{ $t(`services.${key}.title`) }}
            </h4>
            <p class="text-gray-600">
              {{ $t(`services.${key}.description`) }}
            </p>
          </card>
        </div>
      </div>
    </div>
  </section-base>
</template>
