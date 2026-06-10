<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const { icon } = defineProps<{
  icon?: string
}>()
</script>

<template>
  <div class="card">
    <Icon v-if="!!icon" :icon="icon" width="46" class="card-icon" />

    <div class="card-body">
      <slot />
    </div>
  </div>
</template>
