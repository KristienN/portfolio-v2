<template>
  <div class="wave-element"></div>
  <div class="min-h-screen min-w-screen p-12 flex flex-col items-center snap-center pt-56">
    <p v-motion-pop-visible class="lg:text-7xl text-5xl text-center mt-6">
      I'm Not Afraid of Frameworks
    </p>
    <p class="lg:text-2xl text-xl text-center lg:w-1/3 m-10">
      Versatile in code and fearless with new languages & frameworks—if there’s syntax, I’ll master
      it!
    </p>
    <div class="h-auto w-auto flex flex-col">
      <ul class="flex justify-center items center">
        <li v-for="framework in fullstack" :key="framework.id">
          <FrameworkItem :framework="framework" />
        </li>
      </ul>
      <ul class="flex justify-center items center mt-4">
        <li v-for="framework in frontend" :key="framework.id">
          <FrameworkItem :framework="framework" />
        </li>
      </ul>
      <ul class="flex justify-center items center mt-4">
        <li v-for="framework in backend" :key="framework.id">
          <FrameworkItem :framework="framework" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import FrameworkItem from '@/components/FrameworkItem.vue'
import type { Framework } from '@/types'
import { defineComponent } from 'vue'

import vueLogo from '@/assets/vue.png'
import reactLogo from '@/assets/react.png'
import emberLogo from '@/assets/emberjs.png'
import angularLogo from '@/assets/angularjs.png'

import nuxtLogo from '@/assets/nuxt.png'
import fastifyLogo from '@/assets/fastify.png'
import springLogo from '@/assets/springboot.png'
import expressLogo from '@/assets/express.png'

export default defineComponent({
  name: 'SkillsSection',
  components: {
    FrameworkItem,
  },
  data() {
    return {
      frontend: [
        {
          id: 1,
          name: 'Vue',
          imgSrc: vueLogo,
          link: 'https://vuejs.org',
          effect: 'hover:-translate-x-8 hover:-translate-y-8 hover:bg-green-300',
        },
        {
          id: 2,
          name: 'React',
          imgSrc: reactLogo,
          link: 'https://react.dev',
          effect: ' hover:scale-105 hover:bg-blue-300',
        },
        {
          id: 3,
          name: 'EmberJS',
          imgSrc: emberLogo,
          link: 'https://emberjs.com/',
          effect: 'hover:scale-105 hover:bg-orange-300',
        },
        {
          id: 4,
          name: 'AngularJS',
          imgSrc: angularLogo,
          link: 'https://angularjs.org/',
          effect: 'hover:translate-x-8 hover:-translate-y-8 hover:bg-red-500',
        },
      ] as Framework[],
      backend: [
        {
          id: 1,
          name: 'Express',
          imgSrc: expressLogo,
          link: 'https://expressjs.com/',
          effect: 'hover:-translate-x-8 hover:translate-y-8  hover:bg-gray-500',
        },
        {
          id: 2,
          name: 'Spring',
          imgSrc: springLogo,
          link: 'https://spring.io/',
          effect: 'hover:translate-y-8 hover:bg-green-400',
        },
        {
          id: 3,
          name: 'Fastify',
          imgSrc: fastifyLogo,
          link: 'https://fastify.dev/',
          effect: 'hover:translate-x-8 hover:translate-y-8 hover:bg-gray-500',
        },
      ] as Framework[],
      fullstack: [
        {
          id: 1,
          name: 'Nuxt',
          imgSrc: nuxtLogo,
          link: 'https://nuxt.com',
          effect: 'hover:-translate-y-8 hover:bg-green-800',
        },
      ] as Framework[],
    }
  },
})
</script>

<style scoped>
.wave-element {
  background: url('@/components/waves/wave-4.svg');
  aspect-ratio: 1920/300;
  object-fit: cover;
  z-index: -1;
  height: 300px;
  width: 100%;
}
</style>
