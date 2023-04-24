/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
   root: true,
   extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/eslint-config-typescript',
      '@vue/eslint-config-prettier',
      'plugin:unicorn/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:vue/recommended',
      '@vue/prettier'
   ],
   parser: 'vue-eslint-parser',
   parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser'
   },
   plugins: ['vue', '@typescript-eslint', 'unicorn'],
   rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'unicorn/filename-case': 'off',
      'vue/no-multiple-template-root': 'off',
      'prettier/prettier': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/no-reserved-component-names': 'off',
      'unicorn/prevent-abbreviations': [
         'error',
         {
            replacements: {
               props: false,
               env: false
            }
         }
      ],
      'unicorn/template-indent': 'off'
   }
}
