<script lang="ts" setup>
import HeaderSection from '@/components/HeaderSection.vue'
import CareerSection from '@/components/CareerSection.vue'
import ProfileCard from '@/components/HeaderElements/ProfileCard.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import PipelineSection from '@/components/SolutionsSection.vue'
import NavBarSection from '@/components/NavBarSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import MobileProfileCard from '@/components/HeaderElements/MobileProfileCard.vue'
</script>

<template>
  <div class="px-72">
    <NavBarSection />
    <div class="flex justify-center">
      <ProfileCard />
      <div class="flex flex-col justify-center xl:w-2/3">
        <MobileProfileCard />
        <HeaderSection />
        <CareerSection />
        <SkillsSection />
        <PipelineSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  </div>
</template>
