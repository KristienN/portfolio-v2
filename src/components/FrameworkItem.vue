<template>
  <div
    :class="`group/items m-2 h-56 w-72 relative shadow-md border rounded-lg flex justify-center items-center transition-all duration-300 ease-in-out ${framework.effect}`"
  >
    <div
      class="h-full w-full group-hover/items:opacity-10 hover:bg-gray-200 flex justify-center items-center transition-all duration-300 ease-in-out"
    >
      <img :alt="framework.name" :src="framework.imgSrc" class="rounded-lg object-contain" />
    </div>
    <a
      :href="framework.link"
      class="text-white transition ease-in-out duration-400 invisible group-hover/items:visible group-hover/items:opacity-100 absolute w-full h-full font-bold justify-center items-center text-xl text-center py-10 top-12"
      rel="noopener noreferrer"
      target="_blank"
    >
      {{ framework.name }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Framework } from '@/types'

export default defineComponent({
  name: 'FrameworkItem',
  props: {
    framework: {
      required: true,
      type: Object as PropType<Framework>,
    },
  },
})
</script>
