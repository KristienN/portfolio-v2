<template>
  <div
    class="min-h-[50vh] min-w-screen flex flex-col justify-center items-center p-16 lg:pt-12 lg:mt-20 bg-transparent"
  >
    <div class="flex flex-col justify-center items-center text-center w-[100vw]">
      <p class="md:text-8xl text-6xl">Hello, I'm <i>Kristien Nyamutsaka</i></p>
      <p class="md:text-8xl text-5xl">and I'm a {{ title }} Engineer.</p>
    </div>

    <p class="lg:text-3xl text-2xl text-center lg:w-1/4 self-center my-6 md:my-12">
      I love contributing across the whole field of software engineering.
    </p>

    <div v-motion-slide-visible-bottom class="flex flex-col md:mt-4">
      <a
        class="font-bold text-xl flex flex-col space-y-5 justify-center items-center"
        href="#see-more"
        type="button"
      >
        <p class="mb-4">SEE MORE</p>
        <BouncingArrowIcon />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import BouncingArrowIcon from '@/components/icons/BouncingArrowIcon.vue'

export default defineComponent({
  name: 'HeaderSection',
  components: {
    BouncingArrowIcon,
  },
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
