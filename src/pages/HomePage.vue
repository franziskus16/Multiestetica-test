<template>
  <main>
    <Header />
    <div class="home-page">
      <UserOpinion />
      <SideExperiences />
    </div>
  </main>
</template>

<script setup>
import UserOpinion from "@/components/organisms/UserOpinion.vue";
import SideExperiences from "../components/organisms/SideExperiences.vue";
import Header from "../components/organisms/Header.vue";
import ExperienceForm from "@/components/organisms/ExperienceForm.vue";
</script>

<style scoped lang="scss">
.home-page {
  flex-direction: column;
  gap: $spacing-xl;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
  @media (max-width: $breakpoint-md) {
    gap: 0;
    margin-bottom: 0;
  }
}
</style>
