<template>
  <div class="relative">
    <div class="wave-element"></div>
    <div id="see-more" class="snap-center flex flex-col mx-auto min-h-screen min-w-screen relative">
      <p v-motion-pop-visible class="lg:text-7xl text-5xl mb-10 text-center mt-64 font-bold">
        Career Highlights
      </p>
      <ul class="flex flex-col lg:flex-row justify-center items-center mt-8 w-full h-auto">
        <li v-for="highlight in highlights" :key="highlight.id" v-motion-slide-visible-left>
          <HighlightItem :highlight="highlight" />
        </li>
      </ul>
      <div class="wave-element-2 absolute bottom-0"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HighlightItem from '@/components/HighlightItem.vue'
import type { Highlight } from '@/types'
import yahooLogo from '@/assets/yahoo-inc.png'
import muLogo from '@/assets/maynooth-university.png'

export default defineComponent({
  name: 'CareerSection',
  components: { HighlightItem },
  props: {},
  data() {
    return {
      highlights: [
        {
          id: 1,
          company: 'Yahoo Inc',
          title: 'Software Developer Internship',
          description:
            'During this internship, I contributed to a centralized authorization system using AngularJS and Spring Boot, with Redis and Elastisearch optimizing performance. This strengthened my full-stack development skills and collaborative problem-solving.',
          logoSrc: yahooLogo,
          dates: 'Janaury - September 2022',
          locations: 'Dublin, IRL',
        },
        {
          id: 2,
          company: 'Maynooth University',
          title: 'Computer Science Lab Demonstrator',
          description:
            'At Maynooth University, I supervised full-stack project labs using agile methodologies and regular scrums, assisted in Java data structures and algorithms labs, evaluated student work, and provided guidance, all while completing my degree.',
          logoSrc: muLogo,
          dates: 'September 2022 - May 2023',
          locations: 'Maynooth, IRL',
        },
        {
          id: 3,
          company: 'Yahoo Inc',
          title: 'Associate Software Developer',
          description:
            ' I am contributing to maintaining a developer portal monorepo using the React-based framework, and currently assisting in standardizing cloud infrastructure, and helped implement CI/CD pipelines with AWS services (EKS, Fargate, etc) and Go CLI tooling.',
          logoSrc: yahooLogo,
          dates: 'July 2023 - Present',
          locations: 'Dublin, IRL | London, UK',
        },
      ] as Highlight[],
    }
  },
})
</script>

<style scoped>
.wave-element {
  background: url('@/components/waves/wave-2.svg');
  aspect-ratio: 1920/300;
  object-fit: cover;
  z-index: -1;
  height: 300px;
  width: 100%;
}

.wave-element-2 {
  background: url('@/components/waves/wave-3.svg');
  aspect-ratio: 1920/1080;
  object-fit: cover;
  z-index: -1;
  height: 100%;
  width: 100%;
}
</style>
