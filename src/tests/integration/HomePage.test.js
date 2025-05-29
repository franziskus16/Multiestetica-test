// tests/integration/HomePage.test.js
import { mount, flushPromises } from '@vue/test-utils';
import HomePage from '@/pages/HomePage.vue';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock de fetch con dos experiencias (una válida, otra no)
beforeEach(() => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: '1',
            text: 'Experiencia visible',
            comments: 25,
            owner: {
              firstName: 'Ana',
              lastName: 'López',
              picture: 'https://randomuser.me/api/portraits/women/1.jpg',
            },
          },
          {
            id: '2',
            text: 'Experiencia oculta',
            comments: 10,
            owner: {
              firstName: 'Pedro',
              lastName: 'Gómez',
              picture: 'https://randomuser.me/api/portraits/men/2.jpg',
            },
          },
        ]),
    })
  );
});

describe('HomePage.vue', () => {
  it('renders header, user opinion, and filters SideExperiences correctly', async () => {
    const wrapper = mount(HomePage);

    // Esperar a que se resuelva fetch y se rendericen los cambios
    await flushPromises();

    // Comprobaciones básicas
    expect(wrapper.findComponent({ name: 'AppHeader' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'UserOpinion' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'SideExperiences' }).exists()).toBe(
      true
    );

    // Comprobar que se renderiza la experiencia con >20 comentarios
    expect(wrapper.text()).toContain('Experiencia visible');
    // No debe renderizarse la que tiene <=20 comentarios
    expect(wrapper.text()).not.toContain('Experiencia oculta');
  });
});
