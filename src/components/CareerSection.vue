<template>
  <div v-motion-slide-visible-bottom class="flex justify-end mt-12">
    <div class="mt-12 px-16 xl:px-32">
      <p class="text-8xl font-bold mb-12 text-center xl:text-left">5 YEARS OF EXPERIENCE</p>
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
          desc: 'Started off as an intern working for centralised authorization dealing with PCKE flow, and role management. Currently working on a standardised deployment framework for various AWS workloads.',
          time: 'JAN 2022 - SEPT 2022, JUL 2023 - PRESENT',
        },
        {
          id: 1,
          company: 'Maynooth University',
          desc: 'Demonstrated for students in different modules for assignments that required lab work. I had the painful experience of seeing how monotonous grading students work can be.',
          time: 'SEPT 2022 - MAY 2023',
        },
        {
          id: 2,
          company: 'Middleman Africa',
          desc: 'This is a project that served to make peer to perr deliveries easier in Zimbabwe. I worked as the full stack developer, managing and maintaining everything that had to do with software. ie. The UIs, APIs and DBs.',
          time: 'DEC 2020 - DEC 2021',
        },
      ] as Career[],
    }
  },
})
</script>

<style scoped></style>
