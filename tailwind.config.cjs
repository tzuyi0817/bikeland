/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    fontFamily: {},
    extend: {
      colors: {
        'primary-100': '#DFE4CE',
        'primary-200': '#CBD3B0',
        'primary-300': '#A4B375',
        'primary-400': '#738047',
        'primary-500': '#474F2C',
        'primary-600': '#292E19',
        'Accent-100': '#FAF0E5',
        'Accent-200': '#F5DFC6',
        'Accent-300': '#EABD8A',
        'Accent-400': '#DE994A',
        'Accent-500': '#C67A24',
        'Accent-600': '#A3651E',
        'Alert-100': '#F7D4DD',
        'Alert-200': '#F1B2C1',
        'Alert-300': '#F27594',
        'Alert-400': '#E75578',
        'Alert-500': '#BC3253',
        'Alert-600': '#8C3046',
        'Grey-100': '#FFFFFF',
        'Grey-200': '#EEEEEE',
        'Grey-300': '#C5C5C5',
        'Grey-400': '#9A9A9A',
        'Grey-500': '#767676',
        'Grey-600': '#464646',
      },
      maxWidth: {
        container: '1366px',
      },
      minWidth: {
        container: '1024px',
      },
    },
  },
  plugins: [],
}