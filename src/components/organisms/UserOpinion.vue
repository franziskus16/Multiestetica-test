<template>
  <article class="user-opinion">
    <div class="user-opinion__header">
      <img
        class="user-opinion__avatar"
        src="../../assets/images/vebris.jpg"
        alt="Foto de Vebris"
      />
      <div class="user-opinion__meta">
        <h3 class="user-opinion__name">Vebris</h3>
        <p class="user-opinion__date">Barcelona (Ciudad) · 8 sep 2019</p>
      </div>
    </div>
    <h2 class="user-opinion__title">Estoy muy orgullosa de mi nuevo abdomen</h2>
    <div class="user-opinion__info">
      <div class="user-opinion__worthit">
        <img src="../../assets/icons/icon-worthit.svg" alt="icono worthit" />
        <p>Vale la pena</p>
      </div>
      <div class="user-opinion__price">
        <img src="../../assets/icons/euro.svg" alt="icon euro" />
        <p>Precio aproximado: 8500€</p>
      </div>
    </div>
    <div class="user-opinion__gallery">
      <div class="user-opinion__image-wrapper">
        <img
          class="user-opinion__image"
          src="../../assets/images/foto1.png"
          alt=""
        />
      </div>
      <div class="user-opinion__image-wrapper">
        <img
          class="user-opinion__image"
          src="../../assets/images/foto2.png"
          alt=""
        />
      </div>
      <div class="user-opinion__image-wrapper">
        <img
          class="user-opinion__image"
          src="../../assets/images/foto1.png"
          alt=""
        />
      </div>
      <div class="user-opinion__image-wrapper">
        <img
          class="user-opinion__image"
          src="../../assets/images/foto2.png"
          alt=""
        />
      </div>
      <div class="user-opinion__image-wrapper">
        <img
          class="user-opinion__image"
          src="../../assets/images/foto1.png"
          alt=""
        />
      </div>
      <div class="user-opinion__image-wrapper">
        <img
          class="user-opinion__image"
          src="../../assets/images/foto2.png"
          alt=""
        />
      </div>
    </div>
    <div class="user-opinion__about-doctor">
      <h4 class="user-opinion__about-doctor-title">Sobre el doctor</h4>
      <div class="user-opinion__surgery">
        <img
          class="user-opinion__surgery-logo"
          src="../../assets/images/logo-doctor.png"
          alt=""
        />
        <div class="user-opinion__surgery-wrapper-info">
          <h5>Dorsia Clínica Estética</h5>
          <p>81 sedes en Madrid, Lleida, Tarragona...</p>
        </div>
      </div>
      <BaseButton variant="primary">Contactar al doctor</BaseButton>
      <div class="user-opinion__stars">
        <h5>Valoración:</h5>
        <img src="../../assets/icons/star.svg" alt="estrella valoracion" />
        <img src="../../assets/icons/star.svg" alt="estrella valoracion" />
        <img src="../../assets/icons/star.svg" alt="estrella valoracion" />
        <img src="../../assets/icons/star.svg" alt="estrella valoracion" />
        <img
          src="../../assets/icons/star-empty.svg"
          alt="estrella valoracion"
        />
      </div>
      <p class="user-opinion__text">
        Es un excelente cirujano que se merece con creces la buena fama tiene,
        pero para estas cosas no hay que escatimar! El post operatorio ha sido
        un poco difícil. Aún no me adapto a caminar sin sentir molestia y
        opresión, pero supongo que es cuestión de tiempo.
      </p>
    </div>
    <ExperienceForm />
  </article>
</template>

<script setup>
import BaseButton from '@/components/atoms/Button.vue';
import ExperienceForm from '@/components/organisms/ExperienceForm.vue';
</script>

<style lang="scss" scoped>
.user-opinion {
  padding: $spacing-lg $spacing-lg 6rem $spacing-lg;
  background-color: #fff;
  border-radius: $spacing-md;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  max-width: 750px;
  width: 100%;
  @media (max-width: 768px) {
    border-radius: 0;
    max-width: fit-content;
    padding: $spacing-lg;
  }
  &__header {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-md;
  }

  &__avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__meta {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-size: $font-size-sm;
    font-weight: 600;
    margin: 0;
  }

  &__date {
    font-size: $font-size-sm;
    color: #666;
    margin-top: 0;
  }

  &__title {
    font-size: 1.75rem;
    margin: $spacing-md 0 0.5rem;
    color: $color-neutral-900;
    @media (max-width: $breakpoint-md) {
      font-size: 1.25rem;
      line-height: 24px;
    }
  }

  &__text {
    line-height: 21px;
    font-size: $font-size-sm;
    color: $color-neutral-800;
  }
  &__info {
    display: inline-flex;
    gap: $spacing-lg;
    margin-bottom: $spacing-lg;
  }

  &__worthit {
    display: flex;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    align-items: center;
  }
  &__price {
    display: flex;
    font-size: $font-size-xs;
    color: $color-neutral-600;
    align-items: center;
    gap: 0.2rem;
  }
  &__gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &__image-wrapper {
    display: grid;
    place-items: center;
    width: 100%;
    aspect-ratio: 1;
    max-width: 153px;
    justify-self: center;
  }

  &__image {
    width: 100%;
    height: 100%;
    border-radius: $spacing-md;
    object-fit: cover;
    display: block;
  }
  &__about-doctor {
    border-bottom: 1px solid $color-neutral-200;
    padding-bottom: $spacing-xl;
    padding-top: $spacing-md;
    &-title {
      font-size: $font-size-lg;
      color: $color-neutral-800;
      font-weight: $font-weight-bold;
    }
  }
  &__surgery {
    display: flex;
    margin-bottom: $spacing-md;
    gap: $spacing-md;
    &-logo {
      border-radius: 5px;
      min-width: 63px;
      min-height: 48px;
    }
    &-wrapper-info {
      h5 {
        font-size: $font-size-sm;
        margin-bottom: 0;
        color: $color-neutral-800;
      }
      p {
        font-weight: $font-weight-regular;
        font-size: $font-size-xs;
        color: $color-secondary-light2;
      }
    }
  }

  &__stars {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: $spacing-lg;
    margin-bottom: $spacing-md;
    h5 {
      font-size: $font-size-sm;
      color: $color-neutral-800;
      margin-bottom: 0;
    }
  }
}
</style>
