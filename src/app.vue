<script lang="ts" setup>
const router = useRouter()

useHead({
  title: 'Creasi.CO',
  meta: [
    { name: 'description', content: 'End-to-End Digital Solution' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
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
