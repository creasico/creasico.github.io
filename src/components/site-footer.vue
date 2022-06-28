<script setup lang="ts">
import { menus } from '~/lib/menus'
</script>

<template>
  <footer class="px-5 xl:px-0">
    <div class="container mx-auto flex py-11">
      <section class="flex-auto">
        <Colopon />
      </section>

      <section class="widgets flex flex-none">
        <Widget>
          <template #title>
            <h3>Menu</h3>
          </template>

          <a
            v-for="menu in menus"
            :key="menu.name"
            :href="menu.link"
            class="block"
          >
            {{ menu.name }}
          </a>
        </Widget>

        <Widget>
          <template #title>
            <h3>Menu</h3>
          </template>

          <a
            v-for="menu in menus"
            :key="menu.name"
            :href="menu.link"
            class="block"
          >
            {{ menu.name }}
          </a>
        </Widget>
      </section>
    </div>

    <div class="container mx-auto py-11">
      <p class="text-center">
        Copyright &copy; 2022 Creasi.CO | All Right Reserved
      </p>
    </div>
  </footer>
</template>
