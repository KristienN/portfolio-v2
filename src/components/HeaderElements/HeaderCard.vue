<template>
  <div class="px-36">
    <p class="text-9xl font-bold">{{ title }} ENGINEER</p>
    <p class="text-2xl w-3/4 py-5">
      Passionate about creating intuitive and engaging user experiences. Specialize in transforming
      ideas into beautifully crafted products.
    </p>
    <div class="flex">
      <div v-for="s in stats" :key="s.id">
        <StatisticBlock :statistic="s" />
      </div>
    </div>
    <div class="flex">
      <PreviewBlock />
      <PreviewBlock />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import StatisticBlock from './StatisticBlock.vue'
import PreviewBlock from './PreviewBlock.vue'
import type { Statistic } from '@/types'

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
          num: 9,
          subtitle: 'FRAMEWORKS UTILIZED',
        },
        {
          id: 2,
          num: 3,
          subtitle: 'PROJECTS COMPLETED',
        },
      ] as Statistic[],
    }
  },
})
</script>
