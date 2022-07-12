<script lang="ts" setup>
import links from '~/assets/nav-links.json'

const { t } = useI18n()
const year = new Date().getFullYear()
const widgets = ['company'].map((name) => {
  return {
    name,
    links: links.filter(l => l.locations.includes(`widget-${name}`)),
  }
})
</script>

<template>
  <footer class="bg-gray-900 text-gray-400">
    <div class="container mx-auto flex flex-col lg:flex-row gap-8 py-11 px-5 xl:px-0">
      <section class="flex-auto">
        <widget-colopon />
      </section>

      <section class="widgets flex flex-none">
        <widget-base v-for="(widget, i) in widgets" :key="i">
          <template #title>
            <h3 class="mb-5 text-lg text-gray-500">
              {{ t(`widgets.${widget.name}`) }}
            </h3>
          </template>

          <template v-for="link in widget.links" :key="link.name">
            <app-link v-if="link.enable" :to="link.path" class="block mb-1 heading-2 hover:text-gray-500">
              {{ t(link.name) }}
            </app-link>
          </template>
        </widget-base>
      </section>
    </div>

    <div class="container mx-auto py-8 px-5 xl:px-0">
      <p class="text-center text-sm text-gray-500" v-html="t('copyright', { year })" />
    </div>
  </footer>
</template>
