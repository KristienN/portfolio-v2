<template>
  <a :href="project.url" class="flex justify-between group">
    <div class="flex space-x-6 m-6">
      <div class="border rounded-2xl flex justify-center items-center shadow-md">
        <img class="size-36 rounded-2xl" :src="project.img" />
      </div>
      <div class="flex flex-col justify-center space-y-1">
        <p class="text-3xl ont-boldf">{{ project.name }}</p>
        <p class="text-md text-gray-400">{{ project.desc }}</p>
      </div>
    </div>
    <ArrowUpRightIcon class="group-hover:scale-150 duration-500 ease-in-out" />
  </a>
</template>
<script lang="ts">
import type { Project } from '@/types'
import { defineComponent, type PropType } from 'vue'
import ArrowUpRightIcon from '../icons/ArrowUpRightIcon.vue'

export default defineComponent({
  name: 'ProjectCard',
  components: { ArrowUpRightIcon },
  props: {
    project: {
      required: true,
      type: Object as PropType<Project>,
    },
  },
})
</script>
