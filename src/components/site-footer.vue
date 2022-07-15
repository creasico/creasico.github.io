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
  <footer class="bg-dark-800 text-gray-500">
    <section class="container mx-auto flex flex-col lg:flex-row gap-8 py-11">
      <div class="flex-auto">
        <widget-colopon />
      </div>

      <div class="widgets flex flex-none">
        <widget-base v-for="(widget, i) in widgets" :key="i" class="lg:min-w-48">
          <template #title>
            {{ t(`widgets.${widget.name}`) }}
          </template>

          <template v-for="link in widget.links" :key="link.name">
            <app-link v-if="link.enable" :to="link.path" class="block mb-1 heading-2 leading-7 hover:text-gray-400">
              {{ t(link.name) }}
            </app-link>
          </template>
        </widget-base>
      </div>
    </section>

    <section class="container mx-auto py-8 <lg:pb-3 px-0 lg:px-4 text-sm text-gray-400 flex <lg:flex-col font-bold">
      <div class="flex-grow <lg:text-center">
        <p v-html="t('copyright', { year })" />
      </div>

      <div class="flex lg:gap-3 justify-center">
        <button
          v-for="(lang, i) in availableLocales" :key="i"
          class="font-bold <lg:h-11 <lg:w-11 leading-none" :class="{ 'text-gray-300': locale === lang }"
          :aria-label="t('button.choose-locale', { lang })"
          @click="toggleLocale(lang)"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>
    </section>
  </footer>
</template>
