export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
};
