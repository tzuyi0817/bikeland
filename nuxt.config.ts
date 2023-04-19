export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false,
  },
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
});

