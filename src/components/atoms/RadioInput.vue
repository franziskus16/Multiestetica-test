<template>
  <div class="radio-group">
    <label
      v-for="option in options"
      :key="option.value"
      class="radio-label"
      :class="{ 'radio-label--checked': modelValue === option.value }"
    >
      <input
        type="radio"
        :name="name"
        :value="option.value"
        :checked="modelValue === option.value"
        @change="$emit('update:modelValue', $event.target.value)"
      />
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioInput",
  props: {
    modelValue: String,
    name: String,
    options: Array,
  },
};
</script>
<style scoped lang="scss">
.radio-group {
  display: flex;
  gap: 1rem;
}

.radio-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  border: 2px solid #e1e8eb;
  border-radius: 50%;
  font-weight: bold;
  color: $color-neutral-600;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  background-color: $color-neutral-100;
}

/* Estilo seleccionado */
.radio-label--checked {
  border-color: $color-primary2;
  background-color: $color-primary2;
  color: $color-neutral-100;
}

/* Ocultar el input nativo */
.radio-label input {
  display: none;
}
</style>
