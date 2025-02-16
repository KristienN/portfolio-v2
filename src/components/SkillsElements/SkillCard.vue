<template>
  <div class="flex space-x-6 m-6">
    <div class="border rounded-2xl size-16 flex justify-center items-center">
      <img class="size-10" :src="tool.img" />
    </div>
    <div class="flex flex-col space-y-1 font-bold">
      <p class="text-3xl">{{ tool.name }}</p>
      <p class="text-xl">{{ tool.subtitle }}</p>
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
