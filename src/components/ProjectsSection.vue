<template>
  <div v-motion-slide-visible-bottom class="px-16 xl:px-32 mt-32">
    <p class="text-8xl font-bold mb-12 text-center xl:text-left">RECENT PROJECTS</p>
    <div class="flex flex-col">
      <div v-for="p in projects" :key="p.id"><ProjectCard :project="p" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Project } from '@/types'
import ProjectCard from './ProjectElements/ProjectCard.vue'
import middlemanLogo from '@/assets/img/middleman.png'
import luskLogo from '@/assets/img/lusk.png'
import sduiLogo from '@/assets/img/sdui.png'

export default defineComponent({
  name: 'ProjectsSection',
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Sentence Diagramming UI',
          desc: 'Learning Tool developed for my undergraduate final year project.',
          url: 'https://sentence-diagramming-ui.vercel.app/',
          img: sduiLogo,
        },
        {
          id: 2,
          name: 'Lusk Engineering',
          desc: 'Main website for Lusk Engineering',
          url: 'https://lusk-engineering.com',
          img: luskLogo,
        },
        {
          id: 3,
          name: 'Middleman Africa',
          desc: 'Static demo site for Middleman Deliveries',
          url: 'https://static.middlemanafrica.com/',
          img: middlemanLogo,
        },
      ] as Project[],
    }
  },
})
</script>
