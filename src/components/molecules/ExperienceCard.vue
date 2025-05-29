<template>
  <li v-if="experience && experience.owner" class="experience-card">
    <img
      :src="experience.owner.picture"
      :alt="`${experience.owner.firstName} ${experience.owner.lastName}`"
      class="experience-card__avatar"
    />
    <div class="experience-card__content">
      <p class="experience-card__text">{{ experience.text }}</p>
      <p class="experience-card__name">
        {{ experience.owner.firstName }} {{ experience.owner.lastName }}
      </p>
    </div>
    <div class="experience-card__footer">
      <p class="experience-card__comments">
        {{ experience.comments }} comentarios
      </p>
      <a
        class="experience-card__link"
        :href="experience.link"
        target="_blank"
        rel="noopener noreferrer"
        >Leer más ></a
      >
    </div>
  </li>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.experience-card {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  gap: 0.5rem 1rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: $color-neutral-100;
  border: 1px solid $color-neutral-300;
  border-radius: 5px;

  &__avatar {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__content {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  &__text {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  &__name {
    font-size: $font-size-xs;
    margin-top: 0;
    color: $color-neutral-700;
  }

  &__footer {
    grid-column: 1 / 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $font-size-xs;
    color: $color-secondary;
  }

  &__comments,
  &__link {
    font-size: $font-size-xs;
    color: $color-secondary;
    text-decoration: none;
  }
}
</style>
