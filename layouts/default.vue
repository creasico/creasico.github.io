<template>
  <Header />

  <main class="min-h-screen">
    <router-view :key="$route.path" />
  </main>

  <Footer />
</template>
