<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { address_lines, email, social_links, whatsapp } from '~/assets/company.json'

const { t } = useI18n()
const address = address_lines.join(', <br />')
const socialLinks = social_links.filter(social => social.enable)
</script>

<template>
  <section-heading :title="t('title')" :description="t('description')" />

  <section-base>
    <div class="flex <lg:flex-col gap-9 relative z-10">
      <div class="flex-initial transition-all ease-in-out w-full lg:w-[70%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.516296447946!2d109.72345205!3d-6.934859049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0a5a5356e861d8f!2sPT.%20Creasi%20Tekno%20Solusi!5e0!3m2!1sen!2sid!4v1657915051047!5m2!1sen!2sid"
          class="w-full h-[500px]"
          allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="flex flex-grow flex-col gap-2 text-lg">
        <div class="flex gap-5">
          <Icon icon="ic:baseline-maps-home-work" width="1.4rem" />

          <div>
            <address class="text-sm not-italic" v-html="address" />
          </div>
        </div>

        <div class="flex gap-5">
          <Icon icon="ic:baseline-alternate-email" width="1.4rem" />
          <a :href="`mailto:${email}`">{{ email }}</a>
        </div>

        <div class="flex gap-5">
          <Icon icon="ic:baseline-whatsapp" width="1.4rem" />
          <a :href="`https://wa.me/${whatsapp.replace(/[\s\-\+]/g, '')}`">{{ whatsapp }}</a>
        </div>
      </div>
    </div>
  </section-base>
</template>

<route lang="yaml">
meta:
  title: Contact Us
</route>

<i18n lang="yaml">
id:
  title: Hubungi Kami
  description: >-
    Jangan sungkan untuk menghubungi kami jika memerlukan informasi lebih lanjut
    terkait produk dan layanan.
en:
  title: Contact Us
  description: >-
    Please do not hesitate to contact us with any request for further information
    about our products and services.
</i18n>
