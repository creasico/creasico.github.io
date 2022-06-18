<template>
  <section
    class="max-w-7xl px-5 xl:px-0 mx-auto py-7 xl:py-44 flex items-center"
  >
    <div>
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

    <div class="relative flex items-start">
      <!-- make rounded blur color -->
      <div
        class="absolute top-0 -left-4 h-52 w-52 bg-[#FFE68C] rounded-full blur-3xl"
      ></div>
      <img
        src="/creasico.png"
        alt="creasi.co"
        class="absolute inset-0 object-cover w-full h-full"
      />
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

const name = ref("Syakirin Amin");

const age = ref(22);
</script>
