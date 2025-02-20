<template>
  <div class="flex justify-between group cursor-pointer">
    <div class="flex flex-col my-4">
      <p class="text-2xl font-bold">{{ career.company }}</p>
      <p class="text-dm text-gray-400 w-4/5 mt-3">
        {{ career.desc }}
      </p>
      <p class="font-italic text-md text-gray-500 my-6">{{ career.time }}</p>
    </div>
    <ArrowUpRightIcon class="group-hover:scale-[2.5] duration-500 ease-in-out" />
  </div>
</template>

<script lang="ts">
import type { Career } from '@/types'
import { defineComponent, type PropType } from 'vue'
import ArrowUpRightIcon from '../icons/ArrowUpRightIcon.vue'

export default defineComponent({
  name: 'CareerCard',
  components: { ArrowUpRightIcon },
  props: {
    career: {
      required: true,
      type: Object as PropType<Career>,
    },
  },
})
</script>
