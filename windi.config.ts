import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  content: ['index.html', './src/**/*.{vue,ts,js}'],
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#388370',
        'primary-light-1': '#B9C6C3',
        'primary-light-2': '#BFBFBF',
        'secondary': '#839F98',
      },
      fontFamily: {
        heading: ['Work Sans', 'sans-serif'],
        sans: ['Nunito', 'sans-serif'],
        // serif: [...defaultTheme.fontFamily.serif],
        // mono: [...defaultTheme.fontFamily.mono],
      },
    },
  },
})
