<script setup lang="ts">
import { menus } from '~/lib/menus'
</script>

<template>
  <footer class="bg-gray-900 text-gray-400">
    <div class="max-w-7xl mx-auto px-5 xl:px-0">
      <div class="container mx-auto flex py-11">
        <section class="flex-auto">
          <Colopon />
        </section>

        <section class="widgets flex flex-none space-x-14">
          <Widget>
            <template #title>
              <h3 class="mb-5 text-lg text-gray-500">
                About Us
              </h3>
            </template>

            <a
              v-for="menu in menus"
              :key="menu.name"
              :href="menu.link"
              class="block mb-1"
            >
              {{ menu.name }}
            </a>
          </Widget>

          <Widget>
            <template #title>
              <h3 class="mb-5 text-lg text-gray-500">
                Our Products
              </h3>
            </template>

            <a
              v-for="menu in menus"
              :key="menu.name"
              :href="menu.link"
              class="block mb-1"
            >
              {{ menu.name }}
            </a>
          </Widget>
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
