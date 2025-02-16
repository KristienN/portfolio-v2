<script lang="ts">
import { defineComponent } from 'vue'
import InstagramIcon from '../icons/InstagramIcon.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import EmailIcon from '../icons/EmailIcon.vue'
import GithubIcon from '../icons/GithubIcon.vue'

export default defineComponent({
  name: 'ProfileCard',
  components: { InstagramIcon, LinkedinIcon, EmailIcon, GithubIcon },
})
</script>

<template>
  <div
    class="sticky top-10 flex flex-col items-center border border-black w-1/4 h-[700px] rounded-2xl bg-black text-white px-12 shadow-lg z-10"
  >
    <div class="my-12 rounded-2xl">
      <img
        src="@/assets/img/profile-pic.jpg"
        class="rounded-2xl shadow-lg size-72"
        style="object-fit: cover"
      />
    </div>
    <p class="text-5xl pt-2 pb-32 font-bold text-center">Kristien Nyamutsaka</p>
    <p class="text-xl text-center">
      A Software Engineeer who has vast experience across multiple fields
    </p>
    <ul class="flex items-center justify-center pt-8">
      <li class="p-3">
        <InstagramIcon />
      </li>
      <li class="p-3">
        <LinkedinIcon />
      </li>
      <li class="p-3">
        <EmailIcon />
      </li>
      <li class="p-3">
        <GithubIcon />
      </li>
    </ul>
  </div>
</template>
