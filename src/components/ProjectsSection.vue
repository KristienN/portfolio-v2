<template>
  <div class="wave-element-2"></div>
  <div
    class="relative min-h-screen min-w-screen flex flex-col justify-center items-center lg:snap-center"
  >
    <p v-motion-pop-visible class="text-5xl mb-12 text-white">Projects</p>
    <div class="flex flex-col lg:flex-row justify-center items-center w-full h-full">
      <div class="w-[90vw] mb-5 lg:w-1/3 h-96 flex flex-col justify-center items-center">
        <div
          class="flex justify-center items-center w-32 h-10 mb-6 hover:scale-90 hover:border-2 hover:bg-red-300 cursor-pointer bg-orange-300 text-white transition ease-in-out duration-300 rounded-xl shadow-sm text-center"
          @click="nextProject"
        >
          Next Project
        </div>
        <div class="mockup-browser bg-base-300 border shadow-xl">
          <div class="mockup-browser-toolbar">
            <div class="input">{{ selectedProject.url }}</div>
          </div>
          <div class="bg-base-200 flex justify-center h-72">
            <img :src="selectedProject.img" alt="" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div class="h-1 w-[80vw] lg:h-96 lg:w-1 bg-black mx-4"></div>
      <div class="lg:w-1/3 lg:h-96 flex flex-col justify-center items-center">
        <div class="flex flex-row justify-start space-x-12 items-center my-6 w-96">
          <ProjectTitleIcon />
          <p>{{ selectedProject.name }}</p>
        </div>
        <div class="flex flex-row justify-start space-x-11 items-center my-6 w-96">
          <DescriptionIcon />
          <p>{{ selectedProject.description }}</p>
        </div>
        <div class="flex flex-row justify-start space-x-11 items-center my-6 w-96">
          <ToolsIcon />
          <p>Typescript, React, NodeJS, Express, Redis</p>
        </div>
        <div class="flex flex-row justify-start space-x-11 items-center my-6 w-96">
          <LinkIcon />
          <a>{{ selectedProject.url }}</a>
        </div>
      </div>
    </div>
    <div class="wave-element absolute top-0"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ProjectTitleIcon from '@/components/icons/ProjectTitleIcon.vue'
import DescriptionIcon from '@/components/icons/DescriptionIcon.vue'
import ToolsIcon from './icons/ToolsIcon.vue'
import LinkIcon from './icons/LinkIcon.vue'
import type { Project } from '@/types'
import sentenceDiagramming from '@/assets/sentence-diagramming-ui.png'
import luskEngineering from '@/assets/lusk-engineering.png'

export default defineComponent({
  name: 'ProjectsSection',
  components: { DescriptionIcon, ProjectTitleIcon, ToolsIcon, LinkIcon },
  setup() {
    const projects = [
      {
        id: 1,
        name: 'Sentence Diagramming UI',
        description: 'This is a tool that I developed for my undergraduate final year project.',
        tools: ['Typescript', 'React', 'NodeJS', 'Express'],
        url: 'https://sentence-diagramming-ui.vercel.app/',
        img: sentenceDiagramming,
      },
      {
        id: 2,
        name: 'Lusk Engineering',
        description: 'This is a tool that I developed for my undergraduate final year project,',
        tools: ['Typescript', 'React', 'NodeJS', 'Express'],
        url: 'https://lusk-engineering.com',
        img: luskEngineering,
      },
    ] as Project[]
    const selectedProject = ref<Project>(projects[0])
    const index = ref<number>(0)

    const nextProject = (): void => {
      index.value = index.value > 0 ? 0 : 1
      selectedProject.value = projects[index.value]
    }

    return { selectedProject, nextProject }
  },
})
</script>

<style scoped>
.wave-element {
  background: url('@/components/waves/wave-7.svg');
  aspect-ratio: 1920/1080;
  object-fit: cover;
  z-index: -1;
  height: 100%;
  width: 100%;
}

.wave-element-2 {
  background: url('@/components/waves/wave-8.svg');
  aspect-ratio: 1920/300;
  object-fit: cover;
  z-index: -1;
  height: 200px;
  width: 100%;
}
</style>
