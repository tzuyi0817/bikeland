import eslint from 'vite-plugin-eslint';

export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false,
  },
  css: [
    '@/assets/styles/index.css',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'postcss-nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  alias: {},
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/devtools',
  ],
  vite: {
    plugins: [eslint()],
  },
});

