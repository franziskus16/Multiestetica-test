<template>
  <h2 class="title-2">Cuéntanos tu experiencia</h2>
  <form @submit.prevent="handleSubmit" class="experience-form">
    <FormField
      label="¿Qué tratamiento te has realizado?"
      :error="errors.treatment"
    >
      <SelectInput
        v-model="form.treatment"
        :options="treatmentOptions"
        :error="!!errors.treatment"
      />
    </FormField>

    <FormField label="¿Recomendarías el tratamiento?" :error="errors.recommend">
      <RadioInput
        name="recommend"
        v-model="form.recommend"
        :options="recommendOptions"
      />
    </FormField>

    <section v-if="form.recommend === 'si'" data-testid="experience-fields">
      <FormField label="Título de la experiencia" :error="errors.title">
        <TextInput
          v-model="form.title"
          :error="hasError('title')"
          placeholder="Título resumen de tu experiencia"
          @input="validateTitle"
        />
      </FormField>

      <FormField label="Descripción" :error="errors.description">
        <TextAreaInput
          v-model="form.description"
          :min="300"
          :max="18000"
          :error="hasError('description')"
          placeholder="Cuéntanos todos los detalles, porqué decidiste hacerlo, cómo te sentiste antes y después del tratamiento, qué consejos darías a los que lo quieren realizar..."
          @input="validateDescription"
        />
      </FormField>
    </section>
    <BaseButton variant="primary" type="submit"
      >¡Compartir Experiencia!</BaseButton
    >
  </form>
</template>

<script>
import FormField from '@/components/molecules/FormField.vue';
import SelectInput from '@/components/atoms/SelectInput.vue';
import RadioInput from '@/components/atoms/RadioInput.vue';
import TextInput from '@/components/atoms/TextInput.vue';
import TextAreaInput from '@/components/atoms/TextAreaInput.vue';
import BaseButton from '@/components/atoms/Button.vue';

export default {
  name: 'ExperienceForm',
  components: {
    FormField,
    SelectInput,
    RadioInput,
    TextInput,
    TextAreaInput,
    BaseButton,
  },
  data() {
    return {
      form: {
        treatment: '',
        recommend: '',
        title: '',
        description: '',
      },
      errors: {},
      validationActive: false,
      treatmentOptions: [
        { value: 'aumento-pecho', label: 'Aumento de pecho' },
        { value: 'abdominoplastia', label: 'Abdominoplastia' },
        { value: 'rinoplastia', label: 'Rinoplastia' },
      ],
      recommendOptions: [
        { value: 'si', label: 'Sí' },
        { value: 'no', label: 'No' },
      ],
    };
  },
  watch: {
    'form.recommend'(val) {
      if (val === 'no') {
        this.errors.title = null;
        this.errors.description = null;
        this.form.title = '';
        this.form.description = '';
      }
    },
  },
  methods: {
    hasError(field) {
      return this.validationActive && this.errors[field];
    },
    validateTitle() {
      if (!this.validationActive) return;
      const len = this.form.title.trim().length;
      if (len === 0) {
        this.errors.title = 'Este campo es obligatorio';
      } else if (len < 10 || len > 100) {
        this.errors.title = 'Debe tener entre 10 y 100 caracteres';
      } else {
        this.errors.title = null;
      }
    },
    validateDescription() {
      if (!this.validationActive) return;
      const len = this.form.description.trim().length;
      if (len === 0) {
        this.errors.description = 'Este campo es obligatorio';
      } else if (len < 20 || len > 500) {
        this.errors.description = 'Debe tener entre 20 y 500 caracteres';
      } else {
        this.errors.description = null;
      }
    },
    validate() {
      const errors = {};

      if (!this.form.treatment) {
        errors.treatment = 'Este campo es obligatorio';
      }
      if (!this.form.recommend) {
        errors.recommend = 'Este campo es obligatorio';
      }

      if (this.form.recommend === 'si') {
        const titleLen = this.form.title.trim().length;
        if (titleLen === 0) errors.title = 'Este campo es obligatorio';
        else if (titleLen < 10 || titleLen > 100)
          errors.title = 'Debe tener entre 10 y 100 caracteres';

        const descLen = this.form.description.trim().length;
        if (descLen === 0) errors.description = 'Este campo es obligatorio';
        else if (descLen < 20 || descLen > 500)
          errors.description = 'Debe tener entre 20 y 500 caracteres';
      }

      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    handleSubmit() {
      this.validationActive = true;

      if (!this.validate()) return;
      alert('Formulario enviado correctamente!');
      // Limpieza
      this.validationActive = false;
      this.form = {
        treatment: '',
        recommend: '',
        title: '',
        description: '',
      };
      this.errors = {};
    },
  },
};
</script>
<style lang="scss" scoped>
.title-2 {
  margin-top: $spacing-xl;
  font-size: $font-size-lg;
  color: $color-neutral-800;
  font-weight: $font-weight-bold;
  margin-bottom: $spacing-lg;
}
.experience-form {
  margin-top: 1rem;
  button {
    text-transform: uppercase;
    min-width: 225px;
    height: 46px;
    border-radius: 23px;
    padding: 25px 25px;
    font-size: 13px;
    font-weight: 700;
    margin-top: $spacing-xxl;
  }
}
</style>
