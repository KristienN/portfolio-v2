<template>
  <div class="preview-block-1 w-1/2 h-64 p-5 my-5 mr-7 rounded-2xl flex">
    <p class="text-3xl">React, Vue, TypeScript & Spring</p>
    <a href="">
      <ArrowTopRightIcon />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArrowTopRightIcon from '../icons/ArrowTopRightIcon.vue'

export default defineComponent({
  name: 'PreviewBlock',
  components: {
    ArrowTopRightIcon,
  },
})
</script>

<style scoped>
.preview-block-1 {
  background: url('@/assets/svg/stacked-steps.svg');
  object-fit: cover;
}
</style>
