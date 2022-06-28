<script setup lang="ts">
import links from '~/assets/nav-links.json'

const { t } = useI18n()
const companyLinks = links.filter(l => l.locations.includes('widget-company'))
const productLinks = links.filter(l => l.locations.includes('widget-products'))
</script>

<template>
  <footer class="bg-gray-900 text-gray-400">
    <div class="max-w-7xl mx-auto px-5 xl:px-0">
      <div class="container mx-auto flex py-11">
        <section class="flex-auto">
          <widget-colopon />
        </section>

        <section class="widgets flex flex-none space-x-14">
          <widget-base>
            <template #title>
              <h3 class="mb-5 text-lg text-gray-500">
                {{ t('widgets.company') }}
              </h3>
            </template>

            <a
              v-for="link in companyLinks"
              :key="link.name"
              :href="link.path"
              class="block mb-1 hover:text-gray-500"
            >
              {{ t(link.name) }}
            </a>
          </widget-base>

          <widget-base>
            <template #title>
              <h3 class="mb-5 text-lg text-gray-500">
                {{ t('widgets.products') }}
              </h3>
            </template>

            <a
              v-for="link in productLinks"
              :key="link.name"
              :href="link.path"
              class="block mb-1 hover:text-gray-500"
            >
              {{ t(link.name) }}
            </a>
          </widget-base>
        </section>
      </div>

      <div class="container mx-auto py-11">
        <p class="text-center">
          Copyright &copy; 2022 - PT. Creasi Tekno Solusi. All Right Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
