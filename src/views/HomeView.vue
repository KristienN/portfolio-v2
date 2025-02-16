<script lang="ts" setup>
import HeaderSection from '@/components/HeaderSection.vue'
import CareerSection from '@/components/CareerSection.vue'
import ProfileCard from '@/components/HeaderElements/ProfileCard.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import PipelineSection from '@/components/PipelineSection.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="px-72">
    <NavBar />
    <div class="flex justify-center">
      <ProfileCard />
      <div class="flex flex-col justify-center w-2/3">
        <HeaderSection />
        <CareerSection />
        <SkillsSection />
        <PipelineSection />
      </div>
    </div>
  </div>
</template>
