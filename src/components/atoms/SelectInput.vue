<template>
  <div class="form-group">
    <select
      class="select-input"
      :class="{ 'select-placeholder': !modelValue }"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled value="">Selecciona el tratamiento</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    modelValue: String,
    options: Array,
  },
};
</script>
<style scoped lang="scss">
.form-group {
  width: 100%;
  max-width: 420px;
  margin-bottom: 1rem;
}
.select-input {
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: 2px solid #e1e8eb;
  padding: 0 0.75rem;
  font-size: 1rem;
  background-color: $color-neutral-100;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  color: $color-neutral-600;
  @media (max-width: 768px) {
    appearance: auto !important;
    background-image: none !important;
    background: white !important;
    position: static !important;
    transform: none !important;
    z-index: auto !important;
    font-size: 16px !important;
  }
}
.select-placeholder {
  font-style: italic;
  color: $color-secondary-light2;
  font-size: $font-size-sm;
}
</style>
