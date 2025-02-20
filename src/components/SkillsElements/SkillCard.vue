<template>
  <div class="flex space-x-6 m-6">
    <div
      class="border rounded-2xl size-16 flex justify-center items-center shadow-lg bg-white hover:scale-125 duration-500 ease-in-out"
    >
      <img class="size-10" :src="tool.img" />
    </div>
    <div class="flex flex-col space-y-1">
      <p class="text-2xl font-bold">{{ tool.name }}</p>
      <p class="text-sm text-gray-400">{{ tool.subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import type { Tool } from '@/types'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'SkillCard',
  props: {
    tool: {
      required: true,
      type: Object as PropType<Tool>,
    },
  },
})
</script>
