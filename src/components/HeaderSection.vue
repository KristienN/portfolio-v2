<template>
  <div class="min-h-[1000px] min-w-screen flex flex-col p-12 mt-12">
    <div class="flex flex-col justify-center items-center mx-auto">
      <p class="text-8xl">Hello, I'm <i>Kristien Nyamutsaka</i></p>
      <p class="text-8xl">and I'm a {{ title }} Engineer.</p>
    </div>

    <div class="flex justify-center items-center py-10">
      <img
        alt="profile-picture"
        class="h-32 w-32 rounded-full shadow-xl"
        src="@/assets/profile-pic.jpg"
      />
    </div>

    <p class="text-3xl text-center w-1/4 self-center my-12">
      I love contributing across the whole field of software engineering.
    </p>

    <div class="flex flex-col mt-12">
      <button class="font-bold text-lg flex flex-col justify-center items-center" type="button">
        ABOUT ME
        <BouncingArrowIcon />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import BouncingArrowIcon from '@/components/icons/BouncingArrowIcon.vue'

export default defineComponent({
  name: 'HeaderSection',
  components: { BouncingArrowIcon },
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
