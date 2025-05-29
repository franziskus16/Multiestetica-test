<template>
  <div class="textarea-input">
    <label v-if="label" :for="id" class="textarea-input__label">{{
      label
    }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
      :class="{ 'textarea-input--error': error }"
      :rows="rows"
    ></textarea>
    <span
      class="text-area__counter"
      :class="{
        'text-area__counter--invalid': hasTyped && modelValue.length < min,
        'text-area__counter--valid': hasTyped && modelValue.length >= min,
      }"
    >
      {{ modelValue.length }} / {{ max }} (mín. {{ min }})
    </span>
  </div>
</template>

<script>
export default {
  name: 'TextAreaInput',
  props: {
    modelValue: String,
    label: String,
    placeholder: String,
    error: String,
    max: {
      type: Number,
      default: 18000,
    },
    min: {
      type: Number,
      default: 300,
    },
    id: {
      type: String,
      required: true,
    },
    rows: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      hasTyped: false,
    };
  },
  methods: {
    onInput(event) {
      if (!this.hasTyped) this.hasTyped = true;
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.textarea-input {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  &__label {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  textarea {
    min-height: 150px;
    padding: 0.75rem;
    padding-bottom: 2rem;
    border: 2px solid #e1e8eb;
    border-radius: 3px;
    font-family: inherit;
    resize: vertical;
    font-size: 1rem;
    line-height: 1.4;
    &::placeholder {
      font-style: italic;
      color: $color-secondary-light2;
      font-size: $font-size-sm;
    }
  }
  &--error textarea {
    border-color: red;
  }
}

.text-area__counter {
  display: flex;
  justify-content: end;
  bottom: 8px;
  right: 12px;
  font-size: 0.75rem;
  color: $color-neutral-500;
  &--invalid {
    color: red;
  }
  &--valid {
    color: green;
  }
}
</style>
