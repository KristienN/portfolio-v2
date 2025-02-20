<template>
  <div class="px-16 xl:px-32 flex flex-col justify-center items-center my-64">
    <div class="preview-block-3 w-full h-full text-white rounded-2xl">
      <p v-motion-slide-visible-bottom class="lg:text-7xl text-4xl text-center my-20">
        Hope you have a very happy {{ currentDay }}!
      </p>
    </div>

    <p class="mt-36 text-lg">© Kristien Nyamutsaka 2024</p>
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
.preview-block-3 {
  background: url('@/assets/svg/gradient-3.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
}
</style>
