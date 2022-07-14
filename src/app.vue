<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const { locale } = useI18n()
const redirect = sessionStorage.getItem('site-redirect')

if (!sitePreference.value.locale)
  sitePreference.value.locale = locale.value

if (locale.value !== sitePreference.value.locale)
  locale.value = sitePreference.value.locale

if (redirect) {
  sessionStorage.removeItem('site-redirect')
  router.push(redirect)
}

const title = computed(() => {
  // console.log(route.meta)
  return route.meta.title
})

useTitle(title, {
  titleTemplate: '%s - Creasi.CO',
})

useHead({
  htmlAttrs: {
    lang: locale,
  },
  meta: [
    {
      rel: 'msapplication-TileColor',
      content: '#388370',
    },
  ],
  link: [
    {
      rel: 'mask-icon',
      color: '#388370',
      href: '/safari-pinned-tab.svg',
    },
  ],
})
</script>

<template>
  <site-header />

  <router-view />

  <site-footer />
</template>
