<template>
  <div class="flex flex-col items-center w-[36rem]">
    <div>
      <div
        class="group border-2 bg-white shadow-2xl rounded w-96 p-6 hover:scale-110 hover:border-yellow-200 ease-in-out duration-300 h-[30vh]"
      >
        <div class="flex justify-between items-center">
          <p class="font-bold text-2xl">{{ highlight.company }}</p>
          <img :alt="highlight.company" :src="highlight.logoSrc" class="h-10 w-10" />
        </div>
        <p class="font-italic text-md mb-10">{{ highlight.title }}</p>
        <p class="text-md text-pretty font-bold">{{ highlight.description }}</p>
      </div>
    </div>

    <div class="w-full h-auto relative my-10">
      <div class="h-1 w-full bg-white z-0"></div>
      <div
        class="absolute border-2 bg-orange-300 rounded-full h-5 w-5 z-5 mx-auto inset-x-5 -top-2"
      ></div>
    </div>

    <div
      class="flex flex-col w-64 bg-orange-600 text-white p-4 items-center self-center rounded-lg shadow-sm mb-20 lg:mb-0"
    >
      <p class="font-bold text-md">{{ highlight.dates }}</p>
      <p class="font-italic text-md">{{ highlight.locations }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { Highlight } from '@/types'

export default defineComponent({
  name: 'HighlightItem',
  props: {
    highlight: {
      required: true,
      type: Object as PropType<Highlight>,
    },
  },
})
</script>
