# Multiestetica Test

Este repositorio contiene la implementación de la prueba técnica para Multiestetica, que consiste en recrear una sección de una web con opiniones de usuarios, un módulo lateral con publicaciones y un formulario para enviar experiencias.

---

## Tecnologías y Herramientas utilizadas

- **Vue 3**  
  Framework JavaScript moderno y reactivo, usado para toda la interfaz.

- **SASS (SCSS)**  
  Preprocesador CSS para estilos organizados y reutilizables con variables y anidamiento.

- **Metodología BEM y Atomic Design**  
  Para organizar y estructurar componentes y clases CSS siguiendo buenas prácticas.

- **ES Modules y ECMAScript moderno**  
  Código modular y sintaxis moderna (ES6+).

- **Node.js (backend simple)**  
  Backend sencillo para servir la API REST con datos dummy.

- **Fetch API**  
  Para hacer peticiones AJAX al backend y cargar dinámicamente las experiencias.

- **Vitest**  
  Framework de testing para Vue 3, usado para tests unitarios y de integración.

---

## Estructura del proyecto

/backend
• app.js # Servidor Node.js con API REST
/src
/components # Componentes Vue (átomos, moléculas, organismos)
/pages
• HomePage.vue # Página principal que compone los componentes
/App.vue # Root component
/main.js # Entry point de Vue
/tests
/components # Tests unitarios de componentes
/integration # Tests de integración (páginas completas)
/styles
• \_variables.scss # Variables SCSS (colores, tamaños, etc.)
• main.scss # Estilos globales

---

## Cómo ejecutar el proyecto

### Backend

1. Posicionarse en la carpeta `/backend`
2. Ejecutar:

```bash
node app.js
```

Esto levantará el servidor en http://localhost:3000

---

### Frontend

Abrir otra terminal en paralelo para el Frontend.

1. Instalar dependencias:

```bash
npm install
```

2. Levantar servidor de desarrollo Vue:

```bash
npm run dev
```

---

3. Abrir en el navegador la URL indicada (normalmente http://localhost:5173)

### Cómo ejecutar los tests

Ejecutar todos los tests con Vitest:

```bash
npm run test
```

• Los tests cubren:
• Validación y comportamiento del formulario (ExperienceForm.vue)
• Renderizado y carga de componentes en la página principal (HomePage.vue)

---

### Resumen de la funcionalidad implementada

• Detalle de opinión estática: Componente que muestra la opinión principal, con datos hardcodeados para cumplir con el diseño Figma.
• Módulo lateral (Más experiencias): Carga dinámica de datos desde backend con filtro para mostrar solo items con más de 20 comentarios. Toggle para mostrar todos o menos.
• Formulario “Cuéntanos tu experiencia”:
• Campos con validación en vivo y al enviar.
• Campo “¿Recomendarías el tratamiento?” condiciona la aparición de campos adicionales.
• Validación de longitud y campos obligatorios con mensajes de error.

---

### Autor

Francesc Giménez Gil
