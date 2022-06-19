<template>
  <footer class="px-5 xl:px-0 mt-36 mb-16 max-w-7xl mx-auto">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xl:col-span-4">
        <div class="py-5">
          <img src="/creasico.png" alt="creasi.co" class="h-8" />
          <p class="text-[#676767] mt-5 flex flex-col">
            <strong class="font-bold text-lg text-black"
              >PT. CREASI TEKNO SOLUSI</strong
            >
            Perum Saputra Raya 2 Blok M No.1, <br />
            Desa/Kelurahan Lebo, Kec. Warungasem, <br />
            Kab. Batang, Jawa Tengah, 51252
          </p>
        </div>
      </div>

      <div class="col-span-12 xl:col-span-4">
        <div class="py-5">
          <h3 class="text-lg text-black font-bold">Marketing</h3>
          <div class="flex flex-col mt-5">
            <span class="text-[#676767]">{{ telephone }}</span>
            <span class="text-[#676767]">{{ email }}</span>
          </div>
        </div>
      </div>
      <div class="col-span-12 xl:col-span-4">
        <div class="flex flex-col">
          <a
            v-for="menu in menus"
            :href="menu.link"
            :key="menu.name"
            class="text-black font-semibold hover:text-gray-700 hover:underline transition duration-300 ease-out mb-2"
          >
            {{ menu.name }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { menus } from "~~/lib/menus";
const copy = ref("Creasi.co");

const telephone = ref("085325401177");
const email = ref("creasico@gmail.com");
</script>
