<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex items-center justify-center">
      <div v-if="job.link" class="w-36 h-1 rounded-xl mx-8">
        <div v-if="isSuccess" class="w-full h-full bg-green-500"></div>
        <div v-else-if="isInProgress" class="w-full h-full bg-blue-500"></div>
      </div>
      <div
        :class="`transition-all ease-in-out hover:scale-110 duration-300 group cursor-pointer w-72 h-auto rounded-lg border p-5 ${isSuccess ? 'hover:border-green-500 ' : 'hover:border-blue-500 '} ${isSelected ? 'scale-105 border-yellow-300 shadow-sm' : 'shadow-lg'}`"
      >
        <div class="flex justify-between items-center mb-2 w-full">
          <div class="flex items-center">
            <img
              v-if="isSuccess"
              alt=""
              class="w-6 h-6 rounded-full border mr-1"
              src="@/assets/success.png"
            />
            <img
              v-if="isInProgress"
              alt=""
              class="w-6 h-6 rounded-full border mr-5"
              src="@/assets/in-progress.gif"
            />
            <p class="text-lg font-bold">{{ job.name }}</p>
          </div>
          <div
            class="flex transition-all ease-in-out duration-300 p-3 font-bold justify-center items-center text-center text-blue-600 group-hover:text-lg text-md"
          >
            {{ job.duration === 'dynamic' ? time : job.duration }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Job } from '@/types'

export default defineComponent({
  name: 'JobItem',
  props: {
    job: {
      required: true,
      type: Object as PropType<Job>,
    },
    time: {
      required: true,
      type: String,
    },
    isSelected: {
      required: true,
      type: Boolean,
    },
  },
  setup(props) {
    const isSuccess = props.job.status === 'success'
    const isInProgress = props.job.status === 'in-progress'

    return {
      isInProgress,
      isSuccess,
    }
  },
})
</script>
