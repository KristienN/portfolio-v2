<template>
  <div class="flex w-full justify-center py-6 mb-12 mt-4">
    <ul class="flex">
      <li class="p-5">
        <HomeIcon />
      </li>
      <li class="p-5">
        <WorkIcon />
      </li>
      <li class="p-5">
        <ToolsIcon />
      </li>
      <li class="p-5">
        <ProjectsIcon />
      </li>
      <li class="p-5">
        <ChatIcon />
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
  name: 'NavBar',
  components: { HomeIcon, WorkIcon, ToolsIcon, ProjectsIcon, ChatIcon },
})
</script>
