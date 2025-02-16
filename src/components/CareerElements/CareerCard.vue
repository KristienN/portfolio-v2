<template>
  <div class="flex flex-col my-4">
    <p class="text-3xl font-bold">{{ career.company }}</p>
    <p class="text-xl w-2/3 mt-3">
      {{ career.desc }}
    </p>
    <p class="font-italic text-xl my-6">{{ career.time }}</p>
  </div>
</template>

<script lang="ts">
import type { Career } from '@/types'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'CareerCard',
  props: {
    career: {
      required: true,
      type: Object as PropType<Career>,
    },
  },
})
</script>
