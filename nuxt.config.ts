import eslint from 'vite-plugin-eslint';

export default defineNuxtConfig({
  // ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Bike Land',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Monda&family=Noto+Sans+TC:wght@400;700&display=swap' },
        // { rel: 'shortcut icon', href: '/pwa-192x192.png' },
        // { rel: 'apple-touch-icon', href: '/pwa-192x192.png' },
        // { rel: 'mask-icon', href: '/pwa-512x512.png' },
      ],
      meta: [
        { name: 'description', content: 'Taiwan bike lane map integration network' },
        { property: 'og:imag', content: '' },
        { property: 'og:image:type', content: 'image/jpg' },
        { property: 'og:image:width', content: '600' },
        { property: 'og:image:height', content: '315' },
        { property: 'og:title', content: 'Bike Land' },
        { property: 'og:description', content: 'Taiwan bike lane map integration network' },
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
    '@fortawesome/fontawesome-svg-core/styles.css',
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
    public: {
      apiUrl: '',
      tokenUrl: '',
      clientId: '',
      clientSecret: '',
      mapToken: '',
      mapStyle: '',
    },
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
  // pwa: {
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     name: 'Bike Land',
  //     short_name: 'BikeLand',
  //     description: 'Taiwan bike lane map integration network',
  //     display: 'standalone',
  //     icons: [
  //       {
  //         src: 'pwa-192x192.png',
  //         sizes: '192x192',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'pwa-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'pwa-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //         purpose: 'any maskable',
  //       },
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: '/',
  //     globPatterns: ['**/*.{js,css,html,png,svg,ico,ts,vue}'],
  //   },
  //   client: {
  //     installPrompt: true,
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: 'module',
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

