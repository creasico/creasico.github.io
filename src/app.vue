<script lang="ts" setup>
const router = useRouter()
const { locale } = useI18n()
const menuOpened = toRef(sitePreference.value, 'menuOpened', false)
const bodyClass = computed(() => menuOpened.value ? 'overflow-hidden' : '')

onMounted(() => {
  const redirect = sessionStorage.getItem('site-redirect')

  if (redirect) {
    sessionStorage.removeItem('site-redirect')
    router.push(redirect)
  }
})

if (!sitePreference.value.locale)
  sitePreference.value.locale = locale.value

if (locale.value !== sitePreference.value.locale)
  locale.value = sitePreference.value.locale

useHead({
  titleTemplate: '%s - %site.name',
  templateParams: {
    schemaOrg: {
      host: import.meta.env.BASE_URL,
    },
    site: {
      name: 'Creasi.CO',
    },
  },
  htmlAttrs: {
    lang: locale,
  },
  bodyAttrs: {
    class: bodyClass,
  },
  meta: [
    {
      property: 'og:site_name',
      content: '%site.name',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '%schemaOrg.host/assets/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/svg+xml',
      href: '%schemaOrg.host/icon-192x192.png',
    },
    {
      rel: 'mask-icon',
      color: '#388370',
      href: '%schemaOrg.host/assets/safari-pinned-tab.svg',
    },
  ],
})
</script>

<template>
  <site-header :menu-opened="menuOpened" />

  <router-view :route="$route" />

  <site-footer />
</template>
