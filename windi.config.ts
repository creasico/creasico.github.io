import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
import forms from 'windicss/plugin/forms'

export default defineConfig({
  extract: {
    include: ['index.html', 'src/**/*.{vue,html,js,ts}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [
    typography(),
    forms,
  ],
  safelist: ['prose', 'prose-sm', 'max-w-none'],
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
