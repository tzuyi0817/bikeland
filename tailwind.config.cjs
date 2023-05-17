/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
    fontFamily: {
      sans: ['Monda', 'Noto Sans TC', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-100': '#DFE4CE',
        'primary-200': '#CBD3B0',
        'primary-300': '#A4B375',
        'primary-400': '#738047',
        'primary-500': '#474F2C',
        'primary-600': '#292E19',
        'accent-100': '#FAF0E5',
        'accent-200': '#F5DFC6',
        'accent-300': '#EABD8A',
        'accent-400': '#DE994A',
        'accent-500': '#C67A24',
        'accent-600': '#A3651E',
        'alert-100': '#F7D4DD',
        'alert-200': '#F1B2C1',
        'alert-300': '#F27594',
        'alert-400': '#E75578',
        'alert-500': '#BC3253',
        'alert-600': '#8C3046',
        'grey-100': '#FFFFFF',
        'grey-200': '#EEEEEE',
        'grey-300': '#C5C5C5',
        'grey-400': '#9A9A9A',
        'grey-500': '#767676',
        'grey-600': '#464646',
      },
      maxWidth: {
        container: '1366px',
      },
      minWidth: {
        container: '1024px',
      },
    },
  },
}