<template>
  <div
    class="relative snap-center font-lovelace min-h-screen min-w-screen flex flex-col justify-center items-center text-white"
  >
    <p v-motion-slide-visible-bottom class="lg:text-7xl text-4xl w-1/2 text-center mt-20">
      Hope you have a very happy {{ currentDay }}!
    </p>
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

<style scoped>
.wave-element {
  z-index: -1;
  aspect-ratio: 1920/1080;
  background: url('@/components/waves/wave-6.svg') no-repeat;
  object-fit: cover;
  height: 1080px;
}
</style>
