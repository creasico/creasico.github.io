<template>
  <section-base class="flex-row justify-center">
    <h1 class="text-3xl text-center block font-extrabold">
      Why Choose Us
    </h1>

    <div class="mt-16 grid grid-cols-12 gap-1 lg:gap-6 font-bold text-lg text-center">
      <div class="why-list delay-75">
        Quality over everything
      </div>
      <div class="why-list delay-100">
        Innovative Mindset
      </div>
      <div class="why-list delay-150">
        Full of Experts
      </div>
      <div class="why-list delay-200">
        Affordable pricing
      </div>
      <div class="why-list delay-300">
        Customer Oriented
      </div>
      <div class="why-list delay-500">
        Fast and Flexible
      </div>
    </div>
  </section-base>
</template>

<style lang="postcss" scoped>
.why-list {
  @apply px-5 lg:p-5 col-span-12 xl:col-span-4 mb-5 xl:mb-16  hover:text-primary hover:scale-110 cursor-pointer hover:animate-bounce transition duration-700 ease-in-out;
}
</style>
