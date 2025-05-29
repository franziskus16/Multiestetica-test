<template>
  <aside class="side-experiences">
    <div class="side-experiences__header">
      <h2 class="side-experiences__title">Más experiencias</h2>
      <a
        v-if="hiddenExperiences.length"
        href="#"
        class="side-experiences__toggle"
        @click.prevent="showAll = !showAll"
      >
        {{ showAll ? "ver menos" : "ver todas" }}
      </a>
    </div>
    <ul class="side-experiences__list">
      <ExperienceCard
        v-for="experience in displayedExperiences"
        :key="experience.id"
        :experience="experience"
      />
    </ul>
  </aside>
</template>

<script>
import ExperienceCard from "@/components/molecules/ExperienceCard.vue";

export default {
  name: "SideExperiences",
  components: { ExperienceCard },
  data() {
    return {
      experiences: [],
      showAll: false,
    };
  },
  computed: {
    displayedExperiences() {
      return this.showAll
        ? this.experiences
        : this.experiences.filter((exp) => exp.comments > 20);
    },
    hiddenExperiences() {
      return this.experiences.filter((exp) => exp.comments <= 20);
    },
  },
  mounted() {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => {
        this.experiences = data;
      })
      .catch((err) => {
        console.error("Error al cargar datos:", err);
      });
  },
};
</script>

<style scoped lang="scss">
.side-experiences {
  width: 100%;
  padding: 0 $spacing-md;

  @media (min-width: 1024px) {
    width: 362px;
  }
  @media (max-width: $breakpoint-md) {
    background-color: $color-neutral-100;
    width: fit-content;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 1.25rem;
    margin-bottom: $spacing-md;
    margin-top: 0;
  }

  &__toggle {
    font-size: 0.875rem;
    color: $color-neutral-600;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>
