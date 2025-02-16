<template>
  <div class="flex justify-end mt-12">
    <div class="mt-12 px-32">
      <p class="text-9xl font-bold mb-12">5 YEARS OF EXPERIENCE</p>
      <div class="flex flex-col">
        <div v-for="c in career" :key="c.id"><CareerCard :career="c" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CareerCard from '@/components/CareerElements/CareerCard.vue'
import type { Career } from '@/types'

export default defineComponent({
  name: 'CareerSection',
  components: { CareerCard },
  data() {
    return {
      career: [
        {
          id: 0,
          company: 'Yahoo Inc',
          desc: 'Team that seeked to standardise deployments across organisations within AdTech into AWS.',
          time: 'JAN 2022 - SEPT 2022, JUL 2023 - PRESENT',
        },
        {
          id: 1,
          company: 'Maynooth University',
          desc: 'Team that seeked to standardise deployments across organisations within AdTech into AWS.',
          time: 'SEPT 2022 - MAY 2023',
        },
        {
          id: 2,
          company: 'Middleman Africa',
          desc: 'Team that seeked to standardise deployments across organisations within AdTech into AWS.',
          time: 'DEC 2020 - DEC 2021',
        },
      ] as Career[],
    }
  },
})
</script>

<style scoped></style>
