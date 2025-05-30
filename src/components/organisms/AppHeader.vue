<template>
  <header class="main-header">
    <div class="top-bar">
      <div class="left-group">
        <button class="burger" @click="isMenuOpen = !isMenuOpen">☰</button>
        <div class="logo">
          <img
            src="https://static.multiestetica.com/img/img_et/logo/ES/logo.svg"
            alt="Multiestetica Logo"
          />
        </div>
      </div>
      <div class="top-actions">
        <button class="top-button__registration">Regístrate</button>
        <button class="top-button__enter">Entra</button>
        <button class="top-button__access">Acceso Doctores</button>
      </div>
    </div>

    <nav class="main-nav" :class="{ open: isMenuOpen }">
      <ul class="nav-links">
        <li class="nav-item">Tratamientos</li>
        <li class="nav-item">Doctores</li>
        <li class="nav-item">Centros</li>
        <li class="nav-item">Experiencias</li>
        <li class="nav-item">Fotos</li>
        <li class="nav-item">Vídeos</li>
        <li class="nav-item">Foro</li>
      </ul>
      <BaseButton class="opinion-button" variant="primary">
        ESCRIBIR MI OPINIÓN
      </BaseButton>
    </nav>
  </header>
</template>
<script>
import BaseButton from '@/components/atoms/Button.vue';
export default {
  name: 'AppHeader',
  components: {
    BaseButton,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
<style scoped lang="scss">
.main-header {
  font-family: $font-family-header;
  background-color: $color-neutral-100;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #e1e8eb;
  @media (max-width: $breakpoint-md) {
    margin-bottom: 0;
  }
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
  width: calc(100% - 32px);
  padding: $spacing-xxs $spacing-md 0 $spacing-md;
  @media (max-width: $breakpoint-md) {
    padding: $spacing-md;
  }
}

.logo {
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: #2c3e50;
  img {
    height: 20px;
    width: 166px;
  }
}
.left-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.burger {
  display: none;
  background: none;
  border: none;
  font-size: $font-size-xl;
  cursor: pointer;
}
.top-actions {
  display: flex;
  gap: 0.75rem;
}

.top-button {
  background: none;
  border: none;
  color: #007b8f;
  font-weight: $font-weight-medium;
  cursor: pointer;
  padding: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
  &__registration {
    background-color: #ff838a;
    border-radius: 1.7857142857rem;
    color: $color-neutral-100;
    font-size: $font-size-xs;
    height: 1.5714285714rem 25.1429px;
    padding: 0 0.5714285714rem;
    width: fit-content;
    border-color: #ff838a;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    cursor: pointer;
    border: none;
    line-height: 0;
    &:hover {
      opacity: 0.7 !important;
      transition: opacity 0.2s ease-in-out;
    }
  }
  &__enter {
    font-size: $font-size-xs;
    background-color: $color-neutral-100;
    border: none;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  &__access {
    font-size: $font-size-xs;
    color: $color-primary2;
    background-color: $color-neutral-100;
    border: none;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    padding-left: $spacing-md;
    border-inline-start: 1px solid #919ba2;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
}
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $color-neutral-100;
  padding: $spacing-sm $spacing-md;
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
  width: calc(100% - 32px);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: $spacing-md;
  padding: 0;
  margin: 0;
}

.nav-item {
  cursor: pointer;
  color: #333;
  padding: 0.25rem 0.5rem;
  transition: color 0.3s;
  text-transform: uppercase;
  font-size: $font-size-xs;
}

.nav-item:hover {
  color: #007b8f;
}

.opinion-button {
  border: none;
  border-radius: 3px;
  padding: $spacing-xs $spacing-md;
  font-weight: $font-weight-bold;
  cursor: pointer;
}

.opinion-button:hover {
  background-color: #005f6b;
}

// Responsive
@media (max-width: $breakpoint-md) {
  .burger {
    display: block;
  }

  .top-actions {
    display: none;
  }

  .main-nav {
    display: none;

    &.open {
      display: flex;
      flex-direction: column;
      gap: $spacing-md;
    }

    .nav-links {
      flex-direction: column;
      width: 100%;
    }

    .opinion-button {
      align-self: stretch;
      text-align: center;
    }
  }
}
</style>
