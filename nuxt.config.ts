import eslint from 'vite-plugin-eslint';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: '',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
        // { rel: 'shortcut icon', href: '/pwa-192x192.png' },
        // { rel: 'apple-touch-icon', href: '/pwa-192x192.png' },
        // { rel: 'mask-icon', href: '/pwa-512x512.png' },
      ],
      meta: [
        { name: 'description', content: 'Taiwan bike lane map integration network.' },
        { property: 'og:imag', content: '' },
        { property: 'og:image:type', content: 'image/jpg' },
        { property: 'og:image:width', content: '600' },
        { property: 'og:image:height', content: '315' },
        { property: 'og:description', content: '' },
        { property: 'theme-color', content: '#ffffff' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
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
  runtimeConfig: {
    public: {},
  },
  // nitro: {
  //   devProxy: {
  //     '/api': {
  //       target: 'http://api.liongamedev.com',
  //       prependPath: true,
  //       changeOrigin: true,
  //     },
  //   },
  // },
  // i18n: {
  //   vueI18n: {
  //     legacy: false,
  //   },
  //   defaultLocale: 'en',
  //   langDir: 'locales',
  //   strategy: 'no_prefix',
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: 'i18n_redirected',
  //   },
  //   locales: [
  //     { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
  //     { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '简体中文' },
  //   ],
  // },
});

