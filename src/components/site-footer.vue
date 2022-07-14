<script lang="ts" setup>
import links from '~/assets/nav-links.json'

const { t, locale, availableLocales } = useI18n()
const year = new Date().getFullYear()
const widgets = ['company'].map((name) => {
  return {
    name,
    links: links.filter(l => l.locations.includes(`widget-${name}`)),
  }
})

const toggleLocale = (lang: string) => {
  sitePreference.value.locale = lang
  locale.value = lang
}
</script>

<template>
  <footer class="bg-gray-900 text-gray-400">
    <section class="container mx-auto flex flex-col lg:flex-row gap-8 py-11 px-4">
      <div class="flex-auto">
        <widget-colopon />
      </div>

      <div class="widgets flex flex-none">
        <widget-base v-for="(widget, i) in widgets" :key="i">
          <template #title>
            <h3 class="mb-5 font-semibold text-lg text-gray-500">
              {{ t(`widgets.${widget.name}`) }}
            </h3>
          </template>

          <template v-for="link in widget.links" :key="link.name">
            <app-link v-if="link.enable" :to="link.path" class="block mb-1 heading-2 hover:text-gray-500">
              {{ t(link.name) }}
            </app-link>
          </template>
        </widget-base>
      </div>
    </section>

    <section class="container mx-auto py-8 px-4 text-sm text-gray-500 flex">
      <div class="mx-4 flex-grow">
        <p v-html="t('copyright', { year })" />
      </div>

      <div class="mx-4 flex gap-3">
        <button v-for="(lang, i) in availableLocales" :key="i" :class="{ 'text-gray-400': locale === lang }" @click="toggleLocale(lang)">
          {{ lang.toUpperCase() }}
        </button>
      </div>
    </section>
  </footer>
</template>
