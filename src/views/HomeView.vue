<script lang="ts" setup>
import HeaderSection from '@/components/HeaderSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import PipelineSection from '@/components/PipelineSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import CareerSection from '@/components/CareerSection.vue'
import FloatingProfile from '@/components/FloatingProfile.vue'
</script>

<template>
  <div
    class="snap-y scroll-smooth h-screen overflow-y-scroll relative overflow-x-hidden selection:bg-orange-400 selection:text-white"
  >
    <FloatingProfile />
    <HeaderSection />
    <CareerSection />
    <SkillsSection />
    <PipelineSection />
    <ProjectsSection />
    <FooterSection />
  </div>
</template>
