<template>
  <HeaderCard />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import HeaderCard from './HeaderElements/HeaderCard.vue'

export default defineComponent({
  name: 'HeaderSection',
  components: { HeaderCard },
  setup() {
    const title = ref('Frontend')
    const index = ref(0)

    const titles = ['Frontend', 'Backend', 'DevOps', 'Cloud']

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
})
</script>
