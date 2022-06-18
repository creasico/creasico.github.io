import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  /*
   ** Nuxt modules
   */
  modules: [
    // https://tailwindcsss.nuxtjs.org
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },
});
