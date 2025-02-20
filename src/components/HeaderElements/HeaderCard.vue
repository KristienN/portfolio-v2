<template>
  <div class="xl:px-36 flex flex-col justify-center items-center">
    <p class="text-8xl xl:text-9xl font-bold text-center xl:text-left">{{ title }} ENGINEER</p>
    <p class="text-2xl xl:text-xl py-5 text-gray-500 text-center xl:text-left">
      Passionate about creating intuitive and engaging user experiences. Specialize in transforming
      ideas into beautifully crafted products.
    </p>
    <div class="flex">
      <div v-for="s in stats" :key="s.id">
        <StatisticBlock :statistic="s" />
      </div>
    </div>
    <div class="flex">
      <div v-for="p in previews" :key="p.id"><PreviewBlock :preview="p" /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import StatisticBlock from './StatisticBlock.vue'
import PreviewBlock from './PreviewBlock.vue'
import type { Preview, Statistic } from '@/types'

export default defineComponent({
  name: 'HeaderCard',
  components: { StatisticBlock, PreviewBlock },
  setup() {
    const title = ref('FRONTEND')
    const index = ref(0)

    const titles = ['FRONTEND', 'BACKEND', 'DEVOPS', 'CLOUD']

    const changeJobTitle = () => {
      index.value = (index.value + 1) % titles.length
      title.value = titles[index.value] as string
    }

    onMounted(() => {
      setInterval(() => {
        changeJobTitle()
      }, 2000)
    })

    return { title }
  },

  data() {
    return {
      stats: [
        {
          id: 0,
          num: 5,
          subtitle: 'YEARS OF EXPERIENCE',
        },
        {
          id: 1,
          num: 8,
          subtitle: 'FRAMEWORKS UTILIZED',
        },
        {
          id: 2,
          num: 3,
          subtitle: 'PROJECTS COMPLETED',
        },
      ] as Statistic[],
      previews: [
        {
          id: 3,
          icon: 'cloud',
          text: 'Building cloud-driven app architectures',
          svgPath: 'gradient-1',
          link: '#solutions',
        },
        {
          id: 3,
          icon: 'stack',
          text: 'Versatility with frameworks and tools',
          svgPath: 'gradient-2',
          link: '#skills',
        },
      ] as Preview[],
    }
  },
})
</script>
