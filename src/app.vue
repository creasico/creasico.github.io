<script lang="ts" setup>
const router = useRouter()
const { locale } = useI18n()

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

  <router-view :route="$route" />

  <site-footer />
</template>
