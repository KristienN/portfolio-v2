<template>
  <a
    v-if="preview.svgPath === 'gradient-2'"
    :href="preview.link"
    class="preview-block-1 w-96 xl:w-72 h-52 p-3 my-5 mr-7 rounded-2xl flex justify-between hover:scale-105 duration-500 ease-in-out"
  >
    <div class="flex flex-col justify-center space-y-3 p-4">
      <div v-if="preview.icon === 'cloud'"><CloudIcon /></div>
      <div v-if="preview.icon === 'stack'"><StackIcon /></div>
      <p class="text-lg text-white">{{ preview.text }}</p>
    </div>
    <ArrowTopRightIcon
  /></a>

  <a
    v-if="preview.svgPath === 'gradient-1'"
    :href="preview.link"
    class="preview-block-2 w-72 h-52 p-3 my-5 mr-7 rounded-2xl flex justify-between hover:scale-105 duration-500 ease-in-out"
  >
    <div class="flex flex-col justify-center space-y-3 p-4">
      <div v-if="preview.icon === 'cloud'"><CloudIcon /></div>
      <div v-if="preview.icon === 'stack'"><StackIcon /></div>
      <p class="text-lg text-white">{{ preview.text }}</p>
    </div>
    <ArrowTopRightIcon
  /></a>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import ArrowTopRightIcon from '../icons/ArrowTopRightIcon.vue'
import type { Preview } from '@/types'
import StackIcon from '../icons/StackIcon.vue'
import CloudIcon from '../icons/CloudIcon.vue'

export default defineComponent({
  name: 'PreviewBlock',
  components: {
    ArrowTopRightIcon,
    StackIcon,
    CloudIcon,
  },
  props: {
    preview: {
      required: true,
      type: Object as PropType<Preview>,
    },
  },
})
</script>

<style scoped>
.preview-block-1 {
  background: url('@/assets/svg/gradient-1.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  aspect-ratio: 288/208;
  object-fit: contain;
}

.preview-block-2 {
  background: url('@/assets/svg/gradient-2.svg');
  aspect-ratio: 288/208;
  object-fit: contain;
}
</style>
