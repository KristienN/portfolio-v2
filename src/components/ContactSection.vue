<template>
  <div class="px-16 xl:px-32 mt-32">
    <p class="text-8xl font-bold mb-12 text-center xl:text-left">LETS WORK TOGETHER</p>
    <form action="post" class="">
      <div class="flex w-full justify-between">
        <input type="text" class="p-2 mr-5" placeholder="Name" />
        <input type="email" class="p-2 w-2/3" placeholder="Email" />
      </div>
      <textarea
        class="mt-5 h-64 w-full p-5"
        name=""
        id=""
        placeholder="Type Message Here..."
      ></textarea>
      <button
        class="mt-5 border p-5 w-full hover:bg-white hover:text-black text-white bg-black duration-500 ease-in-out rounded-lg"
      >
        SEND MESSAGE
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactSection',
})
</script>
