module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': 0,
    'vue/no-mutating-props': 0,
    '@typescript-eslint/no-unused-vars': 0, // for vue3
    'vue/script-setup-uses-vars': 'error',
    'array-callback-return': 0,
    indent: ['error', 2, { "SwitchCase": 1 }],
    'max-len': ["error", { "code": 120 }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', 'never'],
    curly: ['error', 'multi-or-nest'],
  },
  overrides: [
    {
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}'
      ],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
