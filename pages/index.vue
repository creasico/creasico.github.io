<template>
  <HeroSection />
  <WeBelieves />
  <WhyChooseUs />
  <OurWorkflows />
  <Partners />
</template>

<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "CREASI.CO | End-to-end Digital Services",
  url: "https://creasi.co/",

  meta: [
    {
      name: "description",
      content:
        "Merupakan sebuah perusahaan yang bergerak dalam bidang jasa perancangan dan pengembangan perangkat lunak.",
    },
  ],

  link: [{ rel: "icon", type: "image/png", href: "/creasico-mini.png" }],
});
</script>
