<template>
  <div class="text-input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :class="['text-input', { 'text-input--error': error }]"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span
      class="text-input__counter"
      :class="{
        'text-input__counter--invalid': modelValue.length < min,
        'text-input__counter--valid': modelValue.length >= min,
      }"
    >
      {{ modelValue.length }} / {{ max }} (mín. {{ min }})
    </span>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: String,
    placeholder: String,
    type: {
      type: String,
      default: "text",
    },
    error: Boolean,
    max: {
      type: Number,
      default: 90,
    },
    min: {
      type: Number,
      default: 20,
    },
  },
};
</script>

<style scoped lang="scss">
.text-input-wrapper {
  position: relative;
  max-width: 420px;
  width: 100%;
}
.text-input {
  width: 95%;
  padding: 0.5rem;
  border: 2px solid #e1e8eb;
  border-radius: 3px;
  font-family: inherit;
  font-size: 1rem;
  &::placeholder {
    font-style: italic;
    color: $color-secondary-light2;
    font-size: $font-size-sm;
  }
}
.text-input--error {
  border-color: red;
}
.text-input--error {
  border-color: red;
}

.text-input__counter {
  bottom: 6px;
  right: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  justify-content: end;
}

.text-input__counter--invalid {
  color: red;
}

.text-input__counter--valid {
  color: green;
}
</style>
