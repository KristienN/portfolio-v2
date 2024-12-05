<template>
  <div class="flex flex-col mx-auto min-h-screen min-w-scren font-lovelace">
    <p class="text-7xl mb-10 text-center">Career Highlights</p>
    <ul class="flex justify-center mt-8 w-full h-auto">
      <li v-for="highlight in highlights" :key="highlight.id">
        <HighlightItem :highlight="highlight" />
      </li>
    </ul>
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
