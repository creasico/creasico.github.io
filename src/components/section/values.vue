<script lang="ts" setup>
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
  <section-base :title="$t('sections.values.title')" centered-title class="bg-gray-100">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <card v-for="[key, icon] in Object.entries(values)" :key="key" :icon="icon" class="bg-white">
        <h4 class="font-bold leading-5 text-lg">
          {{ $t(`values.${key}.title`) }}
        </h4>
        <p class="text-gray-600">
          {{ $t(`values.${key}.description`) }}
        </p>
      </card>
    </div>
  </section-base>
</template>
