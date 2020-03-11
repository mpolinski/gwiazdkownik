module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended', 'prettier/vue'],
  extends: ['eslint:recommended'],
  parserOptions: {
    //parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    // 'vuetify/no-deprecated-classes': 'error',
    // 'vuetify/grid-unknown-attributes': 'error',
    // 'vuetify/no-legacy-grid': 'error',
    'no-unused-vars': 'off',
    'no-console': 'off',
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
}
