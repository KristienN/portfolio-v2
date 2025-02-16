<template>
  <div></div>
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
