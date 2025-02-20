<template>
  <div v-motion-slide-visible-bottomS class="px-16 xl:px-32 mt-32">
    <p class="text-8xl font-bold mb-16 text-center xl:text-left">CLOUD SOLUTIONS</p>
    <TerminalBlock />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TerminalBlock from './SolutionsElements/TerminalBlock.vue'

export default defineComponent({
  name: 'SolutionsSection',
  components: { TerminalBlock },
})
</script>
