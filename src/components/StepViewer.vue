<template>
  <div
    class="flex flex-row justify-center h-96 w-4/5 border shadow-xl rounded-l-xl mt-2 transition ease-in-out duration-1000 hover:scale-125"
  >
    <ul class="flex flex-col items-center w-96 h-full">
      <li
        v-for="(step, index) in job.steps"
        v-bind:key="index"
        class="flex items-center justify-between h-1/5 border-b w-full p-5"
      >
        <div class="flex items-center">
          <div
            v-if="step.status === 'success'"
            class="h-2 w-2 bg-green-500 rounded-full mr-5"
          ></div>
          <p class="text-md">{{ step.name }}</p>
        </div>
        <p class="italic flex rounded-full font-bold text-center text-xs">
          {{ step.duration === 'dynamic' ? time : step.duration }}
        </p>
      </li>
    </ul>
    <div class="h-full bg-black text-white px-5 pt-5 rounded-r-xl w-[40vw]">
      <code>
        <ul>
          <li v-for="(sj, index) in job.description" v-bind:key="index">
            <p :class="`${sj.color}`">{{ sj.line }}</p>
          </li>
        </ul>
      </code>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Job } from '@/types'

export default defineComponent({
  name: 'StepViewer',
  props: {
    job: {
      required: true,
      type: Object as PropType<Job>,
    },
    time: {
      required: true,
      type: String,
    },
  },
})
</script>
