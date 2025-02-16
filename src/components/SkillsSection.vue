<template>
  <div class="px-32 mt-12">
    <p class="text-9xl font-bold w-1/2">PREMIUM TOOLS</p>
    <div class="grid grid-flow-row grid-cols-2 gap-4 mt-12">
      <div class="" v-for="t in tools" :key="t.id"><SkillCard :tool="t" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkillCard from './SkillsElements/SkillCard.vue'
import nuxtLogo from '@/assets/img/nuxt.png'
import fastifyLogo from '@/assets/img/fastify.png'
import goLogo from '@/assets/img/go.png'
import dockerLogo from '@/assets/img/docker.png'
import terraformLogo from '@/assets/img/terraform.png'
import springLogo from '@/assets/img/springboot.png'
import scikitLogo from '@/assets/img/scikit-py.png'

import type { Tool } from '@/types'

export default defineComponent({
  name: 'SkillsSection',
  components: { SkillCard },
  data() {
    return {
      tools: [
        {
          id: 0,
          name: 'Nuxt',
          subtitle: 'Frontend framework',
          img: nuxtLogo,
        },
        {
          id: 1,
          name: 'Fastify',
          subtitle: 'Backend framework',
          img: fastifyLogo,
        },
        {
          id: 2,
          name: 'Go',
          subtitle: 'Flexible Programming',
          img: goLogo,
        },
        {
          id: 3,
          name: 'Docker',
          subtitle: 'Containerized applications',
          img: dockerLogo,
        },
        {
          id: 4,
          name: 'Terraform',
          subtitle: 'Irastructure as Code',
          img: terraformLogo,
        },
        {
          id: 5,
          name: 'Spring',
          subtitle: 'Enterprise-level APIs',
          img: springLogo,
        },
        {
          id: 6,
          name: 'Scikit',
          subtitle: 'Opptimized ML Models',
          img: scikitLogo,
        },
      ] as Tool[],
    }
  },
})
</script>
