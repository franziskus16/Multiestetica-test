<template>
  <div class="form-field">
    <label class="form-field__label">{{ label }}</label>
    <slot />
    <p class="form-field__error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "FormField",
  props: {
    label: String,
    error: String,
  },
};
</script>

<style lang="scss" scoped>
.form-field {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  &__label {
    margin-bottom: 0.5rem;
    font-weight: $font-weight-regular;
    font-size: $font-size-sm;
    color: $color-secondary-dark;
  }
  &__error {
    color: $color-error;
    font-size: $font-size-xs;
  }
}
</style>
