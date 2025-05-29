<template>
  <button :class="['btn', variant]" @click="$emit('click')"><slot /></button>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  border-radius: 23px;
  font-size: $font-size-xs;
  padding: $spacing-sm $spacing-lg;
  font-weight: 700;
  min-width: 149px;
  cursor: pointer;
  align-items: center;
  border: 0;
  display: flex;
  height: auto;
  justify-content: center;
  letter-spacing: 0.0357142857rem;
  line-height: 1;
  min-height: 2.2857142857rem;
  text-align: center;
  transition: background-color 0.5s;
  width: fit-content;
}
.primary {
  background-color: #19b5bc;
  color: #fff;
  &:hover {
    background-color: #0b6d72;
  }
}
</style>
