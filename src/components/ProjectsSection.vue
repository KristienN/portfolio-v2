<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Project } from '@/types'
import sentenceDiagramming from '@/assets/sentence-diagramming-ui.png'
import luskEngineering from '@/assets/lusk-engineering.png'

export default defineComponent({
  name: 'ProjectsSection',
  components: {},
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
