<template>
  <div class="bg-black rounded-xl text-green-500 flex flex-col shadow-xl">
    <div class="w-full h-10 bg-gray-400 rounded-t-xl flex items-center px-3 space-x-2">
      <div class="size-5 bg-green-500 rounded-full"></div>
      <div class="size-5 bg-yellow-500 rounded-full"></div>
      <div class="size-5 bg-red-500 rounded-full"></div>
    </div>
    <div class="p-12 space-y-12">
      <div v-for="s in snippets" :key="s.id">
        <CodingSnippet :snippet="s" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { Snippet } from '@/types/Snippet'
import CodingSnippet from './CodingSnippet.vue'

export default defineComponent({
  name: 'TerminalBlock',
  components: { CodingSnippet },
  data() {
    return {
      snippets: [
        {
          id: 0,
          code: 'PS: /tmp/kubernetes>kubectl apply -f "component.yml"',
          desc: 'I have experience creating highly-available, cost-optmised solutions using Kubernetes & Helm',
        },
        {
          id: 0,
          code: 'PS: /tmp>aws cloudformation create-stack--stack-name demo --template-body file://componet.json ',
          desc: 'I am familiar with various AWS services for cloud computing such as EMR, EKS, EC2 and S3.',
        },
        {
          id: 0,
          code: 'PS: /tmp/>cat /my-favourite-project/.github/workflows/ main.yml',
          desc: 'I can create functional CICD pipelines using Github Actions Workflows, Circle CI & Screwdriver.cd',
        },
      ] as Snippet[],
    }
  },
})
</script>
