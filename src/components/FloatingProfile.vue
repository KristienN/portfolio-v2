<template>
  <div class="absolute bottom-0 snap-center wave-element overflow-x-hidden"></div>
  <div
    v-motion-pop-visible
    class="hidden z-10 md:flex justify-center items-center pt-10 sticky top-8 mt-48"
  >
    <a
      v-show="show"
      v-motion-slide-visible-left
      class="h-24 w-24 flex justify-center rounded-full border-4 p-3 mr-8 hover:scale-75 hover:bg-yellow-50 transiton ease-in-out duration-200"
      href="https://github.com/KristienN"
      rel="noopener noreferrer"
      target="_blank"
    >
      <GithubIcon />
    </a>

    <a
      v-show="show"
      v-motion-slide-visible-left
      class="h-24 w-24 flex justify-center rounded-full border-4 p-3 mx-8 hover:scale-75 hover:bg-yellow-50 transiton ease-in-out duration-200"
      href="https://instagram.com/kristiennyamutsaka"
      rel="noopener noreferrer"
      target="_blank"
    >
      <InstagramIcon />
    </a>

    <div
      :class="`rounded-full h-32 w-32 transition ease-in-out duration-400 ${show ? 'border-4 border-green-300' : 'pulse-animation'}`"
    >
      <img
        alt="profile-picture"
        class="h-full w-full rounded-full shadow-xl hover:border-5 transition duration-200 cursor-pointer"
        src="@/assets/profile-pic.jpg"
        @click="show = !show"
      />
    </div>

    <a
      v-show="show"
      v-motion-slide-visible-right
      class="h-24 w-24 flex justify-center rounded-full border-4 p-3 mx-8 hover:scale-75 hover:bg-yellow-50 transiton ease-in-out duration-200"
      href="https://www.linkedin.com/in/kristien-nyamutsaka/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <LinkedinIcon />
    </a>

    <a
      v-show="show"
      v-motion-slide-visible-right
      class="h-24 w-24 flex justify-center rounded-full border-4 p-3 mr-8 hover:scale-75 hover:bg-yellow-50 transiton ease-in-out duration-200"
      href=""
      rel="noopener noreferrer"
      target="_blank"
    >
      <EmailIcon />
    </a>
  </div>
  <!--  Mobile Navigation-->
  <div
    v-motion-pop-visible
    class="md:hidden z-20 flex flex-col justify-center items-center pt-10 sticky top-8 mt-48"
  >
    <div
      :class="`rounded-full h-32 w-32 transition ease-in-out duration-400 ${show ? 'border-4 border-green-300' : 'pulse-animation'}`"
    >
      <img
        alt="profile-picture"
        class="h-full w-full rounded-full shadow-xl hover:border-5 transition duration-200 cursor-pointer"
        src="@/assets/profile-pic.jpg"
        @click="show = !show"
      />
    </div>

    <div class="flex mt-8">
      <a
        v-show="show"
        v-motion-pop-visible
        class="h-18 w-18 flex justify-center items-center rounded-full border-4 p-3 mx-2 hover:scale-75 hover:bg-yellow-50 transiton ease-in-out duration-200"
        href="https://github.com/KristienN"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon />
      </a>

      <a
        v-show="show"
        v-motion-pop-visible
        class="h-18 w-18 flex justify-center items-center rounded-full border-4 p-3 mx-2 hover:scale-75 hover:bg-yellow-50 transiton ease-in-out duration-200"
        href="https://instagram.com/kristiennyamutsaka"
        rel="noopener noreferrer"
        target="_blank"
      >
        <InstagramIcon />
      </a>
      <a
        v-show="show"
        v-motion-pop-visible
        class="h-18 w-18 flex justify-center items-center rounded-full border-4 p-3 mx-2 hover:scale-75 hover:bg-yellow-50 transiton ease-in-out duration-200"
        href="https://www.linkedin.com/in/kristien-nyamutsaka/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkedinIcon />
      </a>

      <a
        v-show="show"
        v-motion-pop-visible
        class="h-18 w-18 flex justify-center items-center rounded-full border-4 p-3 mx-2 hover:scale-75 hover:bg-yellow-50 transiton ease-in-out duration-200"
        href=""
        rel="noopener noreferrer"
        target="_blank"
      >
        <EmailIcon />
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import EmailIcon from '@/components/icons/EmailIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'

export default defineComponent({
  name: 'FloatingProfile',
  components: { GithubIcon, InstagramIcon, LinkedinIcon, EmailIcon },
  setup() {
    const show = ref(false)
    return { show }
  },
})
</script>

<style scoped>
.pulse-animation {
  animation: pulse 3s infinite;
}

.pulse-animation:hover {
  animation: none;
  transition: all ease-in-out 200ms;
  transform: scale(1.2);
  border: 4px solid aquamarine;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.wave-element {
  z-index: -1;
  aspect-ratio: 1920/1080;
  background: url('@/components/waves/wave-1.svg') no-repeat;
  object-fit: cover;
  height: 1080px;
}
</style>
