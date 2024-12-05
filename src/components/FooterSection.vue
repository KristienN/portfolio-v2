<template>
  <div class="font-lovelace min-h-screen min-w-screen flex flex-col justify-center items-center">
    <p class="text-7xl w-1/2 text-center">Hope you have a very happy {{ currentDay }}!</p>
    <p class="mt-36">© Kristien Nyamutsaka 2024</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FooterSection',
  setup() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDay = ref(days[new Date().getDay()] as string)

    return {
      currentDay,
    }
  },
})
</script>
