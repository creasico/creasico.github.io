<template>
  <section class="max-w-7xl px-5 xl:px-0 mx-auto py-7 xl:py-48 flex">
    <div class="w-1/2">
      <div class="text-5xl font-extrabold flex flex-col">
        <span>End-to-end</span>
        <span>Digital Services . . .</span>
      </div>
      <div class="mt-5">
        <p class="text-lg max-w-xl">
          <strong>CREASI.CO</strong> <br />
          Merupakan sebuah perusahaan yang bergerak dalam bidang jasa
          perancangan dan pengembangan perangkat lunak.
        </p>
      </div>
    </div>

    <div class="relative w-1/2">
      <div
        class="absolute -top-14 -right-16 h-80 w-80 bg-[#FFE68C] rounded-full blur-3xl"
      ></div>
      <img
        src="../assets/images/saly-1.png"
        alt="illustration"
        class="absolute -top-14 right-16"
      />
    </div>
  </section>

  <WeBelieves />
  <WhyChooseUs />
  <OurWorkflows />
</template>

<script setup>
definePageMeta({
  layout: "app",
});
useHead({
  title: "CREASI.CO | End-to-end Digital Services",
  description: "CREASI.CO",
  url: "https://creasi.co/",
});
</script>
