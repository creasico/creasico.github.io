<script lang="ts" setup>
const router = useRouter()
const { locale } = useI18n()

useHead({
  title: 'Creasi.CO',
  htmlAttrs: {
    lang: locale,
  },
  meta: [
    {
      name: 'description',
      content: 'End-to-End Digital Solution',
    },
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

onMounted(() => {
  if (sessionStorage.redirect) {
    const redirect = sessionStorage.redirect
    delete sessionStorage.redirect
    router.push(redirect)
  }
})
</script>

<template>
  <RouterView />
</template>
