import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import ExperienceForm from '@/components/organisms/ExperienceForm.vue';

describe('ExperienceForm.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ExperienceForm);
  });

  it('renderiza el formulario con los campos iniciales', () => {
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('select').exists()).toBe(true);
    expect(wrapper.find('input[type="radio"][value="si"]').exists()).toBe(true);
    expect(wrapper.find('input[type="radio"][value="no"]').exists()).toBe(true);
  });

  it('oculta los campos de experiencia cuando se elige "no"', async () => {
    await wrapper.find('input[type="radio"][value="no"]').setValue();
    expect(wrapper.find('[data-testid="experience-fields"]').exists()).toBe(
      false
    );
  });

  it('muestra los campos de experiencia cuando se elige "si"', async () => {
    await wrapper.find('input[type="radio"][value="si"]').setValue();
    expect(wrapper.find('[data-testid="experience-fields"]').exists()).toBe(
      true
    );
  });

  it('muestra errores si se envía vacío', async () => {
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.text()).toContain('Este campo es obligatorio');
  });

  it('valida correctamente cuando los campos están bien', async () => {
    await wrapper.find('select').setValue('aumento-pecho');
    await wrapper.find('input[type="radio"][value="si"]').setValue();

    const titleInput = wrapper
      .findComponent({ name: 'TextInput' })
      .find('input');
    await titleInput.setValue('Mi experiencia positiva');

    const descInput = wrapper
      .findComponent({ name: 'TextAreaInput' })
      .find('textarea');
    await descInput.setValue(
      'Fue una experiencia maravillosa con resultados increíbles.'
    );

    await wrapper.find('form').trigger('submit.prevent');

    // No deben quedar errores en pantalla
    expect(wrapper.text()).not.toContain('Este campo es obligatorio');
    expect(wrapper.emitted()).toBeDefined();
  });
});
