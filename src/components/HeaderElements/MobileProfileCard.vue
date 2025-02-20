<script lang="ts">
import { defineComponent } from 'vue'
import InstagramIcon from '../icons/InstagramIcon.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import EmailIcon from '../icons/EmailIcon.vue'
import GithubIcon from '../icons/GithubIcon.vue'

export default defineComponent({
  name: 'MobileProfileCard',
  components: { InstagramIcon, LinkedinIcon, EmailIcon, GithubIcon },
})
</script>

<template>
  <div class="xl:hidden flex flex-col items-center justify-center md:mb-24">
    <div
      class="border border-black md:w-2/3 h-[550px] rounded-2xl bg-black text-white flex flex-col items-center shadow-lg"
    >
      <div class="md:my-12 rounded-2xl">
        <img
          src="@/assets/img/profile-pic.jpg"
          class="rounded-2xl shadow-lg size-12 md:size-56 xl:size-72"
          style="object-fit: cover"
        />
      </div>
      <p class="text-3xl pt-1 xl:pb-12 pb-4 font-bold text-center">Kristien Nyamutsaka</p>
      <p class="text-md xl:text-sm text-center w-2/3">
        A Software Engineeer who has vast experience across multiple fields
      </p>
      <ul class="flex items-center justify-center pt-8">
        <li class="p-3 hover:scale-110 duration-500 ease-in-out">
          <a href="https://www.instagram.com/kristiennyamutsaka/"><InstagramIcon /></a>
        </li>
        <li class="p-3 hover:scale-110 duration-500 ease-in-out">
          <a href="https://www.linkedin.com/in/kristien-nyamutsaka/"><LinkedinIcon /></a>
        </li>
        <li class="p-3 hover:scale-110 duration-500 ease-in-out">
          <a href="knyamutsaka@outlook.com"><EmailIcon /></a>
        </li>
        <li class="p-3 hover:scale-110 duration-500 ease-in-out">
          <a href="https://github.com/KristienN"><GithubIcon /></a>
        </li>
      </ul>
    </div>
  </div>
</template>
