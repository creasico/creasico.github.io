<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router'
import { useLink } from 'vue-router'

const props: RouterLinkProps = defineProps<{
  to: string
}>()

const { href, isActive, navigate } = useLink(props)
const isExternal = computed(() => href.value.startsWith('http'))
</script>

<template>
  <a v-if="isExternal" v-bind="$attrs" :href="href" class="relative" rel="nofollow" target="_blank">
    <slot :is-active="isActive" />
  </a>
  <a v-else-if="href === '#'" v-bind="$attrs" href="#" class="relative">
    <slot :is-active="isActive" />
  </a>
  <router-link v-else v-bind="props" custom>
    <a v-bind="$attrs" :href="href" class="relative" @click="navigate">
      <slot :is-active="isActive" />
    </a>
  </router-link>
</template>
