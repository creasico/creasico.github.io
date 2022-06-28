<template>
  <section
    class="px-5 xl:px-0 py-28 xl:py-48 max-w-7xl mx-auto flex flex-col-reverse xl:flex-row"
  >
    <div class="w-full xl:w-1/2">
      <div class="text-3xl xl:text-5xl font-extrabold flex flex-col">
        <span>End-to-end</span>
        <span>Digital Services . . .</span>
      </div>
      <div class="mt-5">
        <p class="text-md max-w-xl">
          <strong>CREASI.CO</strong> <br />
          Merupakan sebuah perusahaan yang bergerak dalam bidang jasa
          perancangan dan pengembangan perangkat lunak.
        </p>

        <!-- cta -->
        <div class="mt-6">
          <a
            href="#"
            class="py-5 flex items-center text-primary hover:underline font-bold"
            target="_blank"
          >
            <span class="mr-2"> Jelajahi Proyek </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="hidden xl:block xl:relative w-full xl:w-1/2">
      <div
        class="absolute -top-14 -right-16 h-80 w-80 bg-[#FFE68C] rounded-full blur-3xl"
      ></div>
      <img
        src="/images/saly-1.png"
        alt="illustration"
        class="absolute -top-14 right-16"
      />
    </div>
  </section>
</template>
