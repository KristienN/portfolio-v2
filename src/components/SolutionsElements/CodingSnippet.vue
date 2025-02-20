<template>
  <code
    ><p class="text-green-500 mb-4">{{ snippet.code }}</p>
    <p class="text-white">
      {{ snippet.desc }}
    </p>
  </code>
</template>
<script lang="ts">
import type { Snippet } from '@/types/Snippet'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'CodingSnippet',
  props: {
    snippet: {
      required: true,
      type: Object as PropType<Snippet>,
    },
  },
})
</script>
