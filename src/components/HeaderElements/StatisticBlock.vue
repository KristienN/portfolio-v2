<template>
  <div class="flex flex-col p-6">
    <p class="text-8xl font-bold">+{{ statistic.num }}</p>
    <p class="w-36 text-xl">{{ statistic.subtitle }}</p>
  </div>
</template>
<script lang="ts">
import type { Statistic } from '@/types'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'StatisticBlock',
  props: {
    statistic: {
      required: true,
      type: Object as PropType<Statistic>,
    },
  },
})
</script>
