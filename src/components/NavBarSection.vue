<template>
  <div class="flex w-full justify-center py-6 mb-2 mt-2">
    <ul class="flex">
      <li class="p-5">
        <a href="#"><HomeIcon /></a>
      </li>
      <li class="p-5">
        <a href="#career"><WorkIcon /></a>
      </li>
      <li class="p-5">
        <a href="#skills"><ToolsIcon /></a>
      </li>
      <li class="p-5">
        <a href="#projects"><ProjectsIcon /></a>
      </li>
      <li class="p-5">
        <a href=""><ChatIcon /></a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HomeIcon from './icons/HomeIcon.vue'
import WorkIcon from './icons/WorkIcon.vue'
import ToolsIcon from './icons/ToolsIcon.vue'
import ProjectsIcon from './icons/ProjectsIcon.vue'
import ChatIcon from './icons/ChatIcon.vue'

export default defineComponent({
  name: 'NavBarSection',
  components: { HomeIcon, WorkIcon, ToolsIcon, ProjectsIcon, ChatIcon },
})
</script>
